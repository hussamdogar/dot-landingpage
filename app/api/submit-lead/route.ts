import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import biginClient from '@/lib/bigin'

// Function to generate customer reference number
function generateCustomerReference(): string {
  const timestamp = Date.now().toString().slice(-8)
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `TRC${timestamp}${random}`
}

// Function to split full name into first and last name
function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const parts = fullName.trim().split(' ')
  const firstName = parts[0] || ''
  const lastName = parts.slice(1).join(' ') || parts[0] || 'N/A'
  return { firstName, lastName }
}

// Function to get location from IP
async function getLocationFromIP(request: NextRequest): Promise<{ city: string | null; state: string | null }> {
  try {
    // First try Vercel headers
    const city = request.headers.get('x-vercel-ip-city')
    const region = request.headers.get('x-vercel-ip-region')
    
    if (city && region) {
      return { city: decodeURIComponent(city), state: decodeURIComponent(region) }
    }
    
    // Fallback to IP geolocation API
    // Get client IP
    const forwardedFor = request.headers.get('x-forwarded-for')
    const realIP = request.headers.get('x-real-ip')
    const ip = forwardedFor?.split(',')[0] || realIP || 'unknown'
    
    // Skip for localhost
    if (ip === 'unknown' || ip.includes('127.0.0.1') || ip.includes('::1')) {
      return { city: null, state: null }
    }
    
    // Use ip-api.com (free, no key required)
    const geoResponse = await fetch(`http://ip-api.com/json/${ip}`)
    if (geoResponse.ok) {
      const geoData = await geoResponse.json()
      if (geoData.status === 'success') {
        return { 
          city: geoData.city || null, 
          state: geoData.regionName || null 
        }
      }
    }
  } catch (error) {
    console.error('Error getting location:', error)
  }
  
  return { city: null, state: null }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, consent } = body

    if (!fullName || !email || !phone || !consent) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Get location data
    const { city, state } = await getLocationFromIP(request)
    
    // Generate a unique customer reference
    const customerReference = generateCustomerReference()

    // Save to Supabase
    const { data, error } = await supabaseAdmin
      .from('registrations')
      .insert({
        full_name: fullName,
        email: email,
        phone: phone,
        customer_reference: customerReference,
        lead_started_at: new Date().toISOString(),
        stripe_payment_status: 'pending',
        principal_city: city,
        principal_state: state
      })
      .select()
      .single()

    if (error) {
      console.error('Supabase error:', error)
      
      // If it's a unique constraint violation, try again with a new reference
      if (error.code === '23505' && error.message.includes('unique_customer_reference')) {
        const newCustomerReference = generateCustomerReference() + Math.random().toString(36).substring(2, 3).toUpperCase()
        
        const { data: retryData, error: retryError } = await supabaseAdmin
          .from('registrations')
          .insert({
            full_name: fullName,
            email: email,
            phone: phone,
            customer_reference: newCustomerReference,
            lead_started_at: new Date().toISOString(),
            stripe_payment_status: 'pending',
            principal_city: city,
            principal_state: state
          })
          .select()
          .single()
          
        if (retryError) {
          console.error('Retry failed:', retryError)
          return NextResponse.json(
            { error: 'Failed to save lead' },
            { status: 500 }
          )
        }
        
        console.log('Lead saved successfully (retry) to Supabase:', retryData)
        
        // Create contact in Bigin CRM for retry case
        try {
          const { firstName, lastName } = splitFullName(fullName)
          
          const biginContact = await biginClient.createContact({
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
            Phone: phone,
            Lead_Source: 'Website - Landing Page',
            'Reference id': retryData.customer_reference,
            Mailing_City: city || '',
            Mailing_State: state || '',
            Description: `New lead from landing page`
          })

          console.log('Contact created in Bigin (retry):', biginContact)

          if (biginContact && biginContact.id) {
            await supabaseAdmin
              .from('registrations')
              .update({ bigin_lead_id: biginContact.id })
              .eq('id', retryData.id)
            
            console.log('Updated Supabase record with Bigin contact ID (retry)')
          }
        } catch (biginError) {
          console.error('Failed to create Bigin contact in retry (non-fatal):', biginError)
        }
        
        return NextResponse.json(
          { 
            message: 'Lead submitted successfully',
            id: retryData.id,
            customerReference: retryData.customer_reference
          },
          { status: 200 }
        )
      }
      
      return NextResponse.json(
        { error: 'Failed to save lead' },
        { status: 500 }
      )
    }

    console.log('Lead saved successfully to Supabase:', data)

    // Now create contact in Bigin CRM
    try {
      const { firstName, lastName } = splitFullName(fullName)
      
      const biginContact = await biginClient.createContact({
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Phone: phone,
        Lead_Source: 'Website - Landing Page',
        'Reference id': data.customer_reference,
        Mailing_City: city || '',
        Mailing_State: state || '',
        Description: `Contact from Tech Rig Compliance landing page`
      })

      console.log('Contact created in Bigin:', biginContact)

      // Update Supabase record with Bigin contact ID
      if (biginContact && biginContact.id) {
        await supabaseAdmin
          .from('registrations')
          .update({ bigin_lead_id: biginContact.id })
          .eq('id', data.id)
        
        console.log('Updated Supabase record with Bigin contact ID')
      }
    } catch (biginError) {
      // Don't fail the whole request if Bigin fails
      console.error('Failed to create Bigin contact (non-fatal):', biginError)
    }

    return NextResponse.json(
      { 
        message: 'Lead submitted successfully',
        id: data.id,
        customerReference: data.customer_reference
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing lead:', error)
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    )
  }
}