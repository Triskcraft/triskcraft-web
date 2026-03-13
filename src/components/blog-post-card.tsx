import Link from 'next/link'

type BlogPost = {
    id: string
    title: string
    author: string
    created_at: string
    excerpt: string
    slug: string
}

type BlogPostCardProps = {
    post: BlogPost
}

function formatPostDate(dateString: string) {
    return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(dateString))
}

export function BlogPostCard({ post }: BlogPostCardProps) {
    return (
        <article className='group flex h-full flex-col justify-between rounded-2xl border border-triskgold/20 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-lg shadow-black/25 backdrop-blur'>
            <header className='space-y-3'>
                <p className='text-xs font-semibold uppercase tracking-[0.2em] text-triskgold/90'>
                    Blog
                </p>
                <h2 className='text-2xl font-semibold leading-tight text-white transition group-hover:text-triskgold'>
                    {post.title}
                </h2>
                <p className='text-sm text-white/65'>
                    <span className='font-medium text-white/85'>
                        {post.author}
                    </span>{' '}
                    · <time dateTime={post.created_at}>{formatPostDate(post.created_at)}</time>
                </p>
            </header>

            <p className='mt-5 text-base leading-relaxed text-white/80'>
                {post.excerpt}
            </p>

            <footer className='mt-6'>
                <Link
                    href={`/blog/${post.slug}`}
                    className='inline-flex items-center rounded-full border border-triskgold/60 px-4 py-2 text-sm font-semibold text-triskgold transition hover:-translate-y-0.5 hover:bg-triskgold/15'
                >
                    Leer más
                </Link>
            </footer>
        </article>
    )
}
