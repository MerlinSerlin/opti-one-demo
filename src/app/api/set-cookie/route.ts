import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Parse the JSON body of the request
    const body = await request.json();
    const { key, value } = body;

    // Validate the input
    if (!key || !value) {
      return NextResponse.json({ error: 'Key and value are required' }, { status: 400 });
    }

    // Create a new response
    const response = NextResponse.json({ success: true }, { status: 200 });

    // Set the cookie
    // You can adjust the maxAge and other options as needed
    response.cookies.set(key, value, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
      sameSite: 'strict'
    });

    return response;
  } catch (error) {
    console.error('Error setting cookie:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}