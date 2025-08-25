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
        stripe_payment_status: 'pending'
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
            stripe_payment_status: 'pending'
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
        
        // Create lead in Bigin CRM for retry case
        try {
          const { firstName, lastName } = splitFullName(fullName)
          
          const biginLead = await biginClient.createLead({
            First_Name: firstName,
            Last_Name: lastName,
            Email: email,
            Phone: phone,
            Lead_Source: 'Website - Landing Page',
            Description: `Lead from Tech Rig Compliance landing page. Customer Reference: ${retryData.customer_reference}`
          })

          console.log('Lead created in Bigin (retry):', biginLead)

          if (biginLead && biginLead.id) {
            await supabaseAdmin
              .from('registrations')
              .update({ bigin_lead_id: biginLead.id })
              .eq('id', retryData.id)
            
            console.log('Updated Supabase record with Bigin lead ID (retry)')
          }
        } catch (biginError) {
          console.error('Failed to create Bigin lead in retry (non-fatal):', biginError)
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

    // Now create lead in Bigin CRM
    try {
      const { firstName, lastName } = splitFullName(fullName)
      
      const biginLead = await biginClient.createLead({
        First_Name: firstName,
        Last_Name: lastName,
        Email: email,
        Phone: phone,
        Lead_Source: 'Website - Landing Page',
        Description: `Lead from Tech Rig Compliance landing page. Customer Reference: ${data.customer_reference}`
      })

      console.log('Lead created in Bigin:', biginLead)

      // Update Supabase record with Bigin lead ID
      if (biginLead && biginLead.id) {
        await supabaseAdmin
          .from('registrations')
          .update({ bigin_lead_id: biginLead.id })
          .eq('id', data.id)
        
        console.log('Updated Supabase record with Bigin lead ID')
      }
    } catch (biginError) {
      // Don't fail the whole request if Bigin fails
      console.error('Failed to create Bigin lead (non-fatal):', biginError)
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