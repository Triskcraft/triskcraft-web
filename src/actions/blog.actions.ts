'use server'
import type { BlogPost } from '@/types'
import { MOCK_POSTS } from './blog.mock'

const API_BASE = 'https://api.triskcraft.com/v1'

// In development, fall back to sample data when the real API has nothing to
// show, so the blog can be previewed full. Never happens in production.
const USE_MOCK = process.env.NODE_ENV !== 'production'

export async function getBlogPostsAction(): Promise<BlogPost[]> {
    let posts: BlogPost[] = []
    try {
        const req = await fetch(`${API_BASE}/posts/`)
        if (req.status === 200) posts = (await req.json()) as BlogPost[]
    } catch {
        // ignore and fall through to the mock fallback below
    }
    if (!USE_MOCK) return posts
    // In development, append the sample posts so the grid can be previewed
    // full even when the API only has a few (or zero) real posts.
    const realIds = new Set(posts.map(post => post.id))
    return [...posts, ...MOCK_POSTS.filter(post => !realIds.has(post.id))]
}

export async function getBlogPostAction(
    slug: string,
): Promise<BlogPost | null> {
    try {
        const req = await fetch(`${API_BASE}/posts/${slug}`)
        if (req.status === 200) return (await req.json()) as BlogPost
    } catch {
        // ignore and fall through to the mock/null fallback
    }
    return USE_MOCK ? (MOCK_POSTS.find(post => post.id === slug) ?? null) : null
}
