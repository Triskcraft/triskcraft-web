import Link from 'next/link'
import type { BlogPost } from '@/types'
import { formatPostDate, toMilliseconds } from '@/components/blog/utils'

type BlogPostCardProps = {
    post: BlogPost
}

function authorName(post: BlogPost) {
    return post.player?.nickname ?? post.user.username
}

// Build a short plain-text excerpt from the first block that has content.
function buildExcerpt(post: BlogPost, maxLength = 180) {
    const raw = post.post_blocks.find(block => block.content)?.content ?? ''
    const text = raw
        .replace(/```[\s\S]*?```/g, ' ') // code fences
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1') // images / links
        .replace(/[#>*_`~-]/g, '') // markdown symbols
        .replace(/\s+/g, ' ')
        .trim()
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength).trimEnd()}…`
}

export function BlogPostCard({ post }: BlogPostCardProps) {
    const excerpt = buildExcerpt(post)

    return (
        <article className='group border-triskgold/20 flex h-full flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-white/[0.06] to-white/[0.02] shadow-lg shadow-black/25 backdrop-blur'>
            {post.cover_image ?
                <Link
                    href={`/blog/${post.id}`}
                    className='block aspect-video overflow-hidden bg-black/30'
                >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={post.cover_image.url}
                        alt={post.cover_image.description ?? post.title}
                        loading='lazy'
                        className='h-full w-full object-cover transition duration-300 group-hover:scale-105'
                    />
                </Link>
            :   null}

            <div className='flex grow flex-col justify-between p-6'>
                <header className='space-y-3'>
                    <p className='text-triskgold/90 text-xs font-semibold tracking-[0.2em] uppercase'>
                        Blog
                    </p>
                    <Link href={`/blog/${post.id}`}>
                        <h2 className='group-hover:text-triskgold text-2xl leading-tight font-semibold text-white transition'>
                            {post.title}
                        </h2>
                    </Link>

                    <p className='text-sm text-white/65'>
                        <span className='font-medium text-white/85'>
                            {authorName(post)}
                        </span>{' '}
                        ·{' '}
                        <time
                            dateTime={new Date(
                                toMilliseconds(post.created_at),
                            ).toISOString()}
                        >
                            {formatPostDate(post.created_at)}
                        </time>
                    </p>
                </header>

                {excerpt ?
                    <p className='mt-5 text-base leading-relaxed text-white/80'>
                        {excerpt}
                    </p>
                :   null}

                <footer className='mt-6'>
                    <Link
                        href={`/blog/${post.id}`}
                        className='border-triskgold/60 text-triskgold hover:bg-triskgold/15 inline-flex items-center rounded-full border px-4 py-2 text-sm font-semibold transition hover:-translate-y-0.5'
                    >
                        Leer más
                    </Link>
                </footer>
            </div>
        </article>
    )
}
