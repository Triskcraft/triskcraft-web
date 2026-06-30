import { BlogPostCard } from '@/components/blog-post-card'
import { getBlogPostsAction } from '@/actions/blog.actions'

export const revalidate = 43200

export default async function BlogPage() {
    const posts = await getBlogPostsAction()

    return (
        <section className='relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='pointer-events-none absolute inset-0 -z-10 opacity-45 blur-3xl'>
                <div className='bg-triskgold/20 absolute top-8 left-8 h-40 w-40 rounded-full' />
                <div className='bg-triskmint/25 absolute right-8 bottom-0 h-52 w-52 rounded-full' />
            </div>

            <header className='space-y-4 text-center md:text-left'>
                <p className='text-triskgold inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.25em] uppercase'>
                    Blog Triskcraft
                </p>
                <h1 className='text-4xl font-bold text-white sm:text-5xl'>
                    Últimos artículos
                </h1>
                <p className='max-w-2xl text-base leading-relaxed text-white/75'>
                    Novedades, guías y avances de nuestra comunidad técnica.
                    Explora los últimos posts y descubre ideas para tus propios
                    proyectos dentro del servidor.
                </p>
            </header>

            {posts.length === 0 ?
                <p className='rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-white/60'>
                    Todavía no hay artículos publicados. ¡Vuelve pronto!
                </p>
            :   <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                    {posts.map(post => (
                        <BlogPostCard key={post.id} post={post} />
                    ))}
                </div>
            }
        </section>
    )
}
