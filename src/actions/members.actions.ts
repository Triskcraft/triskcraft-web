'use server'
import type { Member } from '@/types'

export async function getActiveMembersAction() {
    const req = await fetch('https://api.triskcraft.com/members/v1')
    if (req.status !== 200) return []
    const members = (await req.json()) as Member[]

    return members
}
