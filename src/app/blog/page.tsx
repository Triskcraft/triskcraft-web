import { PostCard } from '@/components/blog/PostCard'
import { BlogPost } from '@/types'

const posts: BlogPost[] = [
    {
        id: '1',
        title: 'Cómo optimizamos granjas para rendimiento constante',
        author: 'Triskcraft Team',
        created_at: '2026-01-12T10:00:00.000Z',
        excerpt:
            'En esta guía revisamos el proceso completo para mejorar rendimiento en granjas técnicas sin perder eficiencia por chunks o sincronización.',
        slug: 'optimizamos-granjas-rendimiento',
    },
    {
        id: '2',
        title: 'Diseño decorativo funcional para bases técnicas',
        author: 'Vugx',
        created_at: '2026-01-29T10:00:00.000Z',
        excerpt:
            'Combinamos estética y utilidad para que tus salas de máquinas luzcan limpias, claras y preparadas para futuras ampliaciones.',
        slug: 'diseno-decorativo-funcional-bases-tecnicas',
    },
    {
        id: '3',
        title: 'Guía rápida para empezar en Triskcraft',
        author: 'Staff Triskcraft',
        created_at: '2026-02-18T10:00:00.000Z',
        excerpt:
            'Todo lo que necesitas para dar tus primeros pasos: reglas de convivencia, enfoque técnico y recursos recomendados para progresar.',
        slug: 'guia-rapida-empezar-triskcraft',
    },
    {
        id: '4',
        title: 'Tour técnico: aprendizajes de nuestro último proyecto',
        author: 'Severalplot4310',
        created_at: '2026-03-03T10:00:00.000Z',
        excerpt:
            'Compartimos aciertos y errores durante la construcción de uno de nuestros proyectos más ambiciosos con redstone avanzada.',
        slug: 'tour-tecnico-ultimo-proyecto',
    },
]

export default function BlogPage() {
    return (
        <section className='relative mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-10'>
            <header className='rounded-3xl border border-triskgold/20 bg-black/30 p-8 text-center shadow-xl shadow-black/25'>
                <p className='mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
                    Blog
                </p>
                <h1 className='text-4xl font-bold text-triskgold drop-shadow-lg'>
                    Novedades de la comunidad
                </h1>
                <p className='mx-auto mt-4 max-w-3xl text-base leading-relaxed text-white/75 md:text-lg'>
                    Artículos sobre Minecraft técnico, redstone y diseño
                    decorativo. Un espacio para compartir avances, ideas y
                    aprendizajes del servidor.
                </p>
            </header>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3'>
                {posts.map(post => (
                    <PostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}
