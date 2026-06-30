import { create } from 'zustand'

export interface SessionUser {
    sub: string
    iss: string
    aud: string
    exp: number
    id: string
    rank: string
    created_at: number
    discord_user: {
        id: string
        username: string
    }
}

interface SessionResponse {
    authenticated: boolean
    user?: SessionUser
}

interface SessionStore {
    session: SessionUser | null
    isAuthenticated: boolean
    isLoading: boolean
    loadSession: () => Promise<void>
    clearSession: () => void
}

export const useSessionStore = create<SessionStore>((set, get) => ({
    session: null,
    isAuthenticated: false,
    isLoading: false,
    loadSession: async () => {
        if (get().isLoading) return

        set({ isLoading: true })

        try {
            const response = await fetch('/api/auth/status', {
                cache: 'no-store',
            })
            const { authenticated, user } =
                (await response.json()) as SessionResponse

            set({
                session: authenticated ? (user ?? null) : null,
                isAuthenticated: authenticated,
                isLoading: false,
            })
        } catch {
            set({
                session: null,
                isAuthenticated: false,
                isLoading: false,
            })
        }
    },
    clearSession: () =>
        set({
            session: null,
            isAuthenticated: false,
            isLoading: false,
        }),
}))
