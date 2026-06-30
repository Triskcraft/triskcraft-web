import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { FiArrowLeft } from 'react-icons/fi'
import { getBlogPostAction, getBlogPostsAction } from '@/actions/blog.actions'
import { BlogContent } from '@/components/blog/blog-content'
import { formatPostDate, toMilliseconds } from '@/components/blog/utils'
import type { BlogPost } from '@/types'

export const revalidate = 43200

type PostPageProps = {
    params: Promise<{ slug: string }>
}

function authorName(post: BlogPost) {
    return post.player?.nickname ?? post.user.username
}

// Plain-text summary for SEO/meta, built from the first block with content.
function buildDescription(post: BlogPost, maxLength = 200) {
    const raw = post.post_blocks.find(block => block.content)?.content ?? ''
    const text = raw
        .replace(/```[\s\S]*?```/g, ' ')
        .replace(/!?\[([^\]]*)\]\([^)]*\)/g, '$1')
        .replace(/[#>*_`~-]/g, '')
        .replace(/\s+/g, ' ')
        .trim()
    if (text.length <= maxLength) return text
    return `${text.slice(0, maxLength).trimEnd()}…`
}

export async function generateStaticParams() {
    const posts = await getBlogPostsAction()
    return posts.map(post => ({ slug: post.id }))
}

export async function generateMetadata({
    params,
}: PostPageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await getBlogPostAction(slug)
    if (!post) return { title: 'Artículo no encontrado · Blog Triskcraft' }

    const description = buildDescription(post)

    return {
        title: `${post.title} · Blog Triskcraft`,
        description,
        openGraph: {
            type: 'article',
            title: post.title,
            description,
            publishedTime: new Date(
                toMilliseconds(post.created_at),
            ).toISOString(),
            authors: [authorName(post)],
            images:
                post.cover_image ? [{ url: post.cover_image.url }] : undefined,
        },
    }
}

export default async function PostPage({ params }: PostPageProps) {
    const { slug } = await params
    const post = await getBlogPostAction(slug)
    if (!post) notFound()

    const tags = post.player?.roles ?? []

    return (
        <article className='relative mx-auto w-full max-w-3xl px-4 py-10'>
            <Link
                href='/blog'
                className='hover:text-triskgold mb-8 inline-flex items-center gap-2 text-sm font-semibold text-white/60 transition'
            >
                <FiArrowLeft className='h-4 w-4' />
                Volver al blog
            </Link>

            {post.cover_image ?
                <div className='mb-8 overflow-hidden rounded-3xl border border-white/10 bg-black/30'>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={post.cover_image.url}
                        alt={post.cover_image.description ?? post.title}
                        className='max-h-[55vh] w-full object-cover'
                    />
                </div>
            :   null}

            <header className='mb-8 space-y-5'>
                <h1 className='text-4xl leading-tight font-bold text-white sm:text-5xl'>
                    {post.title}
                </h1>

                <div className='flex items-center gap-3'>
                    {post.player ?
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={`https://mc-heads.net/avatar/${post.player.uuid}/64`}
                            alt={`Avatar de ${authorName(post)}`}
                            width={48}
                            height={48}
                            className='h-12 w-12 rounded-lg'
                        />
                    :   null}
                    <div className='text-sm'>
                        <p className='font-semibold text-white'>
                            {authorName(post)}
                        </p>
                        <p className='text-white/55'>
                            {post.player?.rank ?
                                <span className='text-triskgold/90'>
                                    {post.player.rank} ·{' '}
                                </span>
                            :   null}
                            <time
                                dateTime={new Date(
                                    toMilliseconds(post.created_at),
                                ).toISOString()}
                            >
                                {formatPostDate(post.created_at)}
                            </time>
                        </p>
                    </div>
                </div>

                {tags.length > 0 ?
                    <ul className='flex flex-wrap gap-2'>
                        {tags.map(tag => (
                            <li
                                key={tag}
                                className='border-triskgold/30 bg-triskgold/10 text-triskgold rounded-full border px-3 py-1 text-xs font-semibold tracking-wide uppercase'
                            >
                                {tag}
                            </li>
                        ))}
                    </ul>
                :   null}
            </header>

            <BlogContent blocks={post.post_blocks} />
        </article>
    )
}
