'use server'
import type { Member } from '@/types'

export async function getActiveMembersAction() {
    const req = await fetch('https://api.triskcraft.com/v1/members')
    if (req.status !== 200) return []
    const members = (await req.json()) as Member[]

    return members
}
