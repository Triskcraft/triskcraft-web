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

export interface BlogPost {
    id: string
    title: string
    author: string
    created_at: string
    excerpt: string
    slug: string
}
