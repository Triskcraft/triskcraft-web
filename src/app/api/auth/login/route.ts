import { API_URL, AUTH_CALLBACK_URL } from '@/constant/api'
import { createHash, randomBytes } from 'node:crypto'
import { NextResponse } from 'next/server'

const CLIENT_ID = 'triskcraft-web'
const COOKIE_MAX_AGE = 10 * 60

export function GET() {
    const codeVerifier = randomBytes(32).toString('base64url')
    const codeChallenge = createHash('sha256')
        .update(codeVerifier)
        .digest('base64url')
    const state = randomBytes(32).toString('base64url')
    const authorizeUrl = new URL('/oauth/authorize', API_URL)

    authorizeUrl.search = new URLSearchParams({
        response_type: 'code',
        client_id: CLIENT_ID,
        redirect_uri: AUTH_CALLBACK_URL,
        code_challenge: codeChallenge,
        code_challenge_method: 'S256',
        scope: 'openid identify',
        state,
    }).toString()

    const response = NextResponse.redirect(authorizeUrl)
    const cookieOptions = {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax' as const,
        path: '/api/auth',
        maxAge: COOKIE_MAX_AGE,
    }

    response.cookies.set('oauth-code-verifier', codeVerifier, cookieOptions)
    response.cookies.set('oauth-state', state, cookieOptions)

    return response
}
