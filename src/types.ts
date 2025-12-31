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
