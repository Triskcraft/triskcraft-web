interface App {
    (): `/`
    blog: {
        (): `/blog`
        $slug: {
            <$slug extends string>($slug: $slug): `/blog/${$slug}`
        }
    }
    members: {
        (): `/members`
    }
    privacystatement: {
        (): `/privacystatement`
    }
    projects: {
        (): `/projects`
    }
    termsofservice: {
        (): `/termsofservice`
    }
    us: {
        (): `/us`
    }
    api: {
        auth: {
            callback: {
                (): `/api/auth/callback`
            }
            login: {
                (): `/api/auth/login`
            }
            status: {
                (): `/api/auth/status`
            }
        }
    }
}

export const app = Object.assign(() => `/`, {
    blog: Object.assign(() => `/blog`, {
        $slug: ($slug: string) => `/blog/${$slug}`,
    }),
    members: () => `/members`,
    privacystatement: () => `/privacystatement`,
    projects: () => `/projects`,
    termsofservice: () => `/termsofservice`,
    us: () => `/us`,
    api: {
        auth: {
            callback: () => `/api/auth/callback`,
            login: () => `/api/auth/login`,
            status: () => `/api/auth/status`,
        },
    },
}) as App
