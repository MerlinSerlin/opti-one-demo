import { NextResponse, NextRequest } from 'next/server';

export const config = { matcher: '/blog/:path((?!$).*)'};

const COOKIE_NAME = 'visited-japan-page';

export function middleware(req: NextRequest) {
  console.log('middleware triggered!');

  const response = NextResponse.next();

  // Check if the cookie already exists
  if (!req.cookies.has(COOKIE_NAME)) {
    console.log('Setting Japan visit cookie...');
    response.cookies.set(COOKIE_NAME, 'true');
  }

  // Return the response with the cookie added
  return response;
}
