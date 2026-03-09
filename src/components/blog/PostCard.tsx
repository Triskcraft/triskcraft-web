import { BlogPost } from '@/types'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { LinkButton } from '@/components/ui/button'

interface PostCardProps {
    post: BlogPost
}

function formatPublishedDate(value: string) {
    const date = new Date(value)

    return new Intl.DateTimeFormat('es-CL', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
    }).format(date)
}

export function PostCard({ post }: PostCardProps) {
    return (
        <Card className='h-full'>
            <CardHeader>
                <p className='text-sm font-medium text-white/60'>
                    {post.author} · {formatPublishedDate(post.created_at)}
                </p>
                <h2 className='text-2xl font-bold leading-tight text-white'>
                    {post.title}
                </h2>
            </CardHeader>

            <CardContent className='mt-4'>
                <p className='text-base leading-relaxed text-white/80'>
                    {post.excerpt}
                </p>
            </CardContent>

            <CardFooter className='mt-4'>
                <LinkButton href={`/blog/${post.slug}`}>Leer más</LinkButton>
            </CardFooter>
        </Card>
    )
}
