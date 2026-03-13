import { BlogPostCard } from '@/components/blog-post-card'

type BlogPost = {
    id: string
    title: string
    author: string
    created_at: string
    excerpt: string
    slug: string
}

const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Cómo optimizamos la granja de hierro para el servidor',
        author: 'Vugx',
        created_at: '2025-01-18',
        excerpt:
            'Durante esta semana rediseñamos la granja principal con una lógica más estable y eficiente. El objetivo fue mantener producción constante sin afectar el rendimiento general del mundo.',
        slug: 'optimizacion-granja-hierro',
    },
    {
        id: '2',
        title: 'Tour técnico: red de almacenamiento centralizada',
        author: 'Nara',
        created_at: '2025-02-07',
        excerpt:
            'En este post compartimos el planteamiento de nuestra red de cofres y clasificadores automáticos. Explicamos qué decisiones tomamos para facilitar mantenimiento y escalabilidad.',
        slug: 'tour-tecnico-almacenamiento-centralizado',
    },
    {
        id: '3',
        title: 'Decoración funcional: estética sin perder eficiencia',
        author: 'Aitor',
        created_at: '2025-03-02',
        excerpt:
            'Un repaso a técnicas de construcción que combinan acabados limpios con estructuras técnicas ocultas. La idea es conseguir espacios agradables sin comprometer automatizaciones.',
        slug: 'decoracion-funcional-estetica-y-eficiencia',
    },
    {
        id: '4',
        title: 'Checklist para iniciar una base técnica desde cero',
        author: 'Sarai',
        created_at: '2025-03-26',
        excerpt:
            'Recogimos las prioridades de early game que mejor resultado nos han dado en temporadas anteriores. Incluye recursos clave, rutas de progreso y orden recomendado de granjas.',
        slug: 'checklist-base-tecnica-desde-cero',
    },
    {
        id: '5',
        title: 'Mantenimiento del servidor: buenas prácticas semanales',
        author: 'Triskcraft Team',
        created_at: '2025-04-11',
        excerpt:
            'Documentamos el flujo de revisión que seguimos para mantener estabilidad: backups, limpieza de entidades y monitorización de zonas con mayor carga de redstone.',
        slug: 'mantenimiento-servidor-buenas-practicas',
    },
    {
        id: '6',
        title: 'Ideas para eventos comunitarios en SMP técnico',
        author: 'Lia',
        created_at: '2025-04-30',
        excerpt:
            'Compartimos formatos de eventos que fortalecen colaboración entre jugadores. Desde retos de ingeniería hasta recorridos guiados para mostrar avances de temporada.',
        slug: 'ideas-eventos-comunitarios-smp-tecnico',
    },
]

export default async function BlogPage() {
    return (
        <section className='relative mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='pointer-events-none absolute inset-0 -z-10 opacity-45 blur-3xl'>
                <div className='absolute left-8 top-8 h-40 w-40 rounded-full bg-triskgold/20' />
                <div className='absolute bottom-0 right-8 h-52 w-52 rounded-full bg-triskmint/25' />
            </div>

            <header className='space-y-4 text-center md:text-left'>
                <p className='inline-flex rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
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

            <div className='grid gap-6 sm:grid-cols-2 xl:grid-cols-3'>
                {blogPosts.map(post => (
                    <BlogPostCard key={post.id} post={post} />
                ))}
            </div>
        </section>
    )
}
