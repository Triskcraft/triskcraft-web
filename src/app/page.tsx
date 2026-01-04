//src/app/components/page.jsx
import { Carrusel } from '@/components/Carrusel'
import { HowToJoin } from '@/components/ComoUnirse'
import { VideoCard } from '@/components/video-card'
import DigTotal from '@/components/DigsTotal'
import Link from 'next/link'

export default function HomePage() {
    const images = [
        '/img5.webp',
        '/img1.webp',
        '/img3.webp',
        '/img2.webp',
        '/img4.webp',
    ]

    return (
        <div className='relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='pointer-events-none absolute inset-0 -z-10 opacity-50 blur-3xl'>
                <div className='absolute left-10 top-10 h-48 w-48 rounded-full bg-triskgold/20' />
                <div className='absolute right-6 top-1/3 h-56 w-56 rounded-full bg-triskmint/30' />
                <div className='absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-triskgold/10' />
            </div>

            <div className='relative overflow-hidden rounded-3xl border border-triskgold/25 bg-gradient-to-r from-triskgreen via-[#12392f] to-triskmint shadow-2xl'>
                <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(214,175,63,0.25),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.05),transparent_30%)]' />
                <div className='relative flex flex-col gap-10 p-8 md:flex-row md:items-center md:justify-between md:p-12'>
                    <div className='space-y-6 text-white md:w-1/2'>
                        <div className='inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
                            Comunidad Técnica
                        </div>
                        <h1 className='text-4xl font-bold leading-tight text-white drop-shadow-lg sm:text-5xl'>
                            Triskcraft Network
                        </h1>
                        <p className='max-w-2xl text-lg text-white/80'>
                            Triskcraft es un Survival MultiPlayer con una
                            comunidad sana y dedicada a crear e innovar en todo
                            lo que tiene que ver con Minecraft Técnico, Redstone
                            y decoración. Nuestra meta es crecer y construir
                            proyectos cada vez más grandes con diseño propio e
                            innovador.
                        </p>
                        <div className='flex flex-wrap items-center gap-4'>
                            <a
                                href='https://discord.com/invite/VJQJRZehTG'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center justify-center gap-2 rounded-full bg-triskgold px-6 py-3 text-lg font-semibold text-triskgreen shadow-lg shadow-triskgold/30 transition hover:-translate-y-0.5 hover:shadow-xl'
                            >
                                Unirme al servidor
                            </a>
                            <a
                                href='/Proyectos'
                                className='inline-flex items-center justify-center gap-2 rounded-full border border-triskgold/60 px-6 py-3 text-lg font-semibold text-triskgold transition hover:-translate-y-0.5 hover:bg-triskgold/10'
                            >
                                Ver proyectos
                            </a>
                        </div>

                        <div className='grid grid-cols-1 gap-4 pt-4 sm:grid-cols-3'>
                            {[
                                {
                                    title: 'Experiencia Técnica',
                                    text: 'Automatización y builds optimizadas',
                                    accent: 'Builds',
                                },
                                {
                                    title: 'Eventos Comunidad',
                                    text: 'Retos, tours y showcases en vivo',
                                    accent: 'Eventos',
                                },
                                {
                                    title: 'Creatividad Libre',
                                    text: 'Estilo decorativo con identidad propia',
                                    accent: 'Estilo',
                                },
                            ].map(item => (
                                <div
                                    key={item.title}
                                    className='relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-4 shadow-md shadow-black/30'
                                >
                                    <div className='absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-triskgold/5' />
                                    <div className='relative flex flex-col gap-1'>
                                        <span className='text-xs font-semibold uppercase tracking-wide text-triskgold'>
                                            {item.accent}
                                        </span>
                                        <h3 className='text-lg font-semibold text-white'>
                                            {item.title}
                                        </h3>
                                        <p className='text-sm text-white/70'>
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='relative w-full md:w-1/2'>
                        <div className='absolute inset-0 translate-x-4 translate-y-4 rounded-3xl bg-triskgold/15 blur-2xl' />
                        <div className='relative overflow-hidden rounded-3xl border border-triskgold/30 bg-black/40 shadow-xl backdrop-blur'>
                            <Carrusel images={images} />
                        </div>
                    </div>
                </div>
            </div>

            <HowToJoin />

            <div className='w-full overflow-hidden rounded-3xl border border-triskgold/20 bg-gradient-to-r from-[#0a1b15] via-triskgreen to-[#0f2f23] p-8 shadow-2xl md:p-12'>
                <div className='flex flex-col gap-6 md:flex-row md:items-start md:justify-between'>
                    <div className='space-y-3 md:w-2/3'>
                        <p className='inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
                            Explora
                        </p>
                        <h2 className='text-3xl font-bold text-white drop-shadow-lg md:text-4xl'>
                            Tours dentro del Servidor
                        </h2>
                        <p className='max-w-2xl text-lg text-white/80'>
                            Descubre las bases, granjas y proyectos técnicos a
                            través de recorridos guiados por la comunidad. Cada
                            tour revela el cuidado por el detalle y el uso
                            avanzado de redstone y decoración.
                        </p>
                    </div>
                    <Link
                        href='https://www.youtube.com/@Triskcraft'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 rounded-full border border-triskgold/60 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-triskgold transition hover:bg-triskgold/15'
                    >
                        Más videos en YouTube
                    </Link>
                </div>

                <div className='mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
                    <VideoCard id='0-E_lBWVs9c' name='Tour 2 meses | Vugx' />
                    <VideoCard id='8ivEA_wTQzU' name='Tour 1 año | Vugx' />
                    <VideoCard
                        id='0-E_lBWVs9c'
                        name='Recorrido técnico y decoración'
                    />
                </div>
            </div>

            <DigTotal cantidad={8} />
        </div>
    )
}
