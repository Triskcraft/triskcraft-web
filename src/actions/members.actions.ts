'use server'

import { ROUTES } from '@/constant/routes'
import { readFile } from 'node:fs/promises'

export async function getActiveMembersAction() {
    const whitelist: { uuid: string; name: string }[] = JSON.parse(
        await readFile(ROUTES.WHITELIST, {
            encoding: 'utf-8',
        }),
    )
    const players_log = await readFile(ROUTES.PLAYER_LIST, {
        encoding: 'utf-8',
    })
    const players = players_log.split('\n').filter(Boolean)

    return whitelist.filter(({ name }) => players.includes(name))
}
