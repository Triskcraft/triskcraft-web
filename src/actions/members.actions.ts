'use server'
import { API_URL } from '@/constant/api'
import type { Member } from '@/types'

export async function getActiveMembersAction() {
    const req = await fetch(`${API_URL}/v1/members`)
    if (req.status !== 200) return []
    const members = (await req.json()) as Member[]

    return members
}
