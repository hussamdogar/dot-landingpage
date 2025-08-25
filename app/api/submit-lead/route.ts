import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

// Function to generate customer reference number
function generateCustomerReference(): string {
  const timestamp = Date.now().toString().slice(-8)
  const random = Math.random().toString(36).substring(2, 5).toUpperCase()
  return `TRC${timestamp}${random}`
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
        
        console.log('Lead saved successfully (retry):', retryData)
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

    console.log('Lead saved successfully:', data)

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