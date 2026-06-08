export interface Member {
    mc_uuid: string
    mc_name: string
    rank: string
    description: string
    digs: number
    roles: string[]
    medias: Array<{
        type: string
        url: string
    }>
}

export type MediaType = 'IMAGE' | 'VIDEO' | 'AUDIO' | 'FILE'

export interface BlogMedia {
    id: string
    filename: string
    url: string
    content_type: string | null
    media_type: MediaType
    size: number
    width: number | null
    height: number | null
    description: string | null
    hash: string | null
}

export interface BlogUser {
    id: string
    username: string
}

export interface BlogPlayer {
    uuid: string
    nickname: string
    digs: number
    rank: string
    linked_roles: {
        role: {
            name: string
        }
    }[]
    roles: string[]
}

export interface BlogPostBlock {
    timestamp: number
    content: string | null
    components: unknown[]
    embeds: unknown[]
    media: BlogMedia[]
}

export interface BlogPost {
    id: string
    title: string
    cover_image: BlogMedia | null
    user: BlogUser
    created_at: number
    updated_at: number
    player: BlogPlayer | null
    post_blocks: BlogPostBlock[]
}
