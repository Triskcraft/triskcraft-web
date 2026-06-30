import { API_URL, AUTH_CALLBACK_URL } from '@/constant/api'
import { NextRequest, NextResponse } from 'next/server'

const CLIENT_ID = 'triskcraft-web'
const SESSION_MAX_AGE = 7 * 24 * 60 * 60

async function getSessionUser(accessToken: string) {
    const response = await fetch(`${API_URL}/oauth/me`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${accessToken}`,
        },
        cache: 'no-store',
    })

    if (!response.ok) return null

    return response.json()
}

export async function GET(request: NextRequest) {
    const accessToken = request.cookies.get('triskcraft-access-token')?.value
    const refreshToken = request.cookies.get('triskcraft-refresh-token')?.value

    if (!accessToken && !refreshToken) {
        return NextResponse.json({ authenticated: false })
    }

    if (accessToken) {
        const user = await getSessionUser(accessToken)

        if (user) {
            return NextResponse.json({ authenticated: true, user })
        }
    }

    if (refreshToken) {
        const refreshResponse = await fetch(`${API_URL}/oauth/refresh`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                redirect_uri: AUTH_CALLBACK_URL,
                client_id: CLIENT_ID,
                refresh_token: refreshToken,
            }),
            cache: 'no-store',
        })

        if (refreshResponse.ok) {
            const token = (await refreshResponse.json()) as {
                access_token: string
                expires_in: number
                refresh_token: string
            }
            const user = await getSessionUser(token.access_token)

            if (!user) {
                return clearSessionResponse()
            }

            const response = NextResponse.json({
                authenticated: true,
                user,
            })
            const cookieOptions = {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax' as const,
                path: '/',
            }

            response.cookies.set(
                'triskcraft-access-token',
                token.access_token,
                {
                    ...cookieOptions,
                    maxAge: token.expires_in,
                },
            )
            response.cookies.set(
                'triskcraft-refresh-token',
                token.refresh_token,
                {
                    ...cookieOptions,
                    maxAge: SESSION_MAX_AGE,
                },
            )
            return response
        }
    }

    return clearSessionResponse()
}

function clearSessionResponse() {
    const response = NextResponse.json({ authenticated: false })
    response.cookies.set('triskcraft-access-token', '', {
        path: '/',
        maxAge: 0,
    })
    response.cookies.set('triskcraft-refresh-token', '', {
        path: '/',
        maxAge: 0,
    })
    return response
}
