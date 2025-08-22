import { NextRequest, NextResponse } from 'next/server'

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

    console.log('New lead submission:', {
      fullName,
      email,
      phone,
      consent,
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      { message: 'Lead submitted successfully' },
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