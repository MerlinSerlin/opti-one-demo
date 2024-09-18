import { cookies } from 'next/headers'

export async function GET(request: Request) {
  const cookieStore = cookies()
  
  // Set the cookie
  cookieStore.set('visited-japan-page', 'true', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: '/',
  })

  const setCookie = cookieStore.get('visited-japan-page')

  return new Response(JSON.stringify({
    message: 'Japan Cookie Set!',
    cookieSet: setCookie ? setCookie.value : 'Cookie not set',
    allCookies: cookieStore.getAll().map(c => `${c.name}=${c.value}`),
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Set-Cookie': setCookie ? setCookie.toString() : '',
    },
  })
}