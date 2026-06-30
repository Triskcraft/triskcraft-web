import {
    API_URL,
    AUTH_CALLBACK_URL,
    NEXT_PUBLIC_SITE_URL,
} from '@/constant/api'
import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = 'triskcraft-web'
const SESSION_MAX_AGE = 7 * 24 * 60 * 60

export async function GET(request: NextRequest) {
    const code = request.nextUrl.searchParams.get('code')
    const state = request.nextUrl.searchParams.get('state')
    const codeVerifier = request.cookies.get('oauth-code-verifier')?.value
    const expectedState = request.cookies.get('oauth-state')?.value
    const homeUrl = new URL('/', NEXT_PUBLIC_SITE_URL)

    if (!code || !state || state !== expectedState || !codeVerifier) {
        homeUrl.searchParams.set('auth_error', 'invalid_callback')
        return NextResponse.redirect(homeUrl)
    }

    const tokenResponse = await fetch(`${API_URL}/oauth/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            grant_type: 'authorization_code',
            code,
            redirect_uri: AUTH_CALLBACK_URL,
            client_id: CLIENT_ID,
            code_verifier: codeVerifier,
        }),
        cache: 'no-store',
    })

    if (!tokenResponse.ok) {
        homeUrl.searchParams.set('auth_error', 'token_exchange_failed')
        return NextResponse.redirect(homeUrl)
    }

    const token = (await tokenResponse.json()) as {
        access_token: string
        expires_in: number
        refresh_token?: string
    }
    const response = NextResponse.redirect(homeUrl)
    const sessionCookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/',
    }

    response.cookies.set('triskcraft-access-token', token.access_token, {
        ...sessionCookieOptions,
        maxAge: token.expires_in,
    })
    if (token.refresh_token) {
        response.cookies.set('triskcraft-refresh-token', token.refresh_token, {
            ...sessionCookieOptions,
            maxAge: SESSION_MAX_AGE,
        })
    }
    response.cookies.set('oauth-code-verifier', '', {
        path: '/api/auth',
        maxAge: 0,
    })
    response.cookies.set('oauth-state', '', {
        path: '/api/auth',
        maxAge: 0,
    })

    return response
}
