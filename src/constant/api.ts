const DEFAULT_API_URL = 'https://api.triskcraft.com'

export const API_URL = (
    process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_URL
).replace(/\/$/, '')

export const MODPACK_DOWNLOAD_URL = `${API_URL}/files/web/pack-mods-triskcraftsmp.rar`
