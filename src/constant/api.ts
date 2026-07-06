const DEFAULT_API_URL = 'https://api.triskcraft.com'

export const API_URL = (
    process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
).replace(/\/$/, '')

export const MODPACK_DOWNLOAD_URL = `${API_URL}/files/web/pack-mods-triskcraftsmp.rar`

export const DISCORD_GUILD_URL =
    'https://discord.com/channels/1202732116102877246'

export const NEXT_PUBLIC_SITE_URL =
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://triskcraft.com'

export const AUTH_CALLBACK_URL = new URL(
    '/api/auth/callback',
    NEXT_PUBLIC_SITE_URL,
).toString()
