import Image from 'next/image'
import Link from 'next/link'

interface VideoCardProps {
    id: string
    name: string
}
export function VideoCard({ id, name }: VideoCardProps) {
    const videoUrl = `https://www.youtube.com/watch?v=${id}`

    return (
        <Link
            href={videoUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='group border-triskgold/25 relative flex h-full flex-col overflow-hidden rounded-2xl border bg-white/5 p-8 shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-xl'
        >
            <div className='to-triskgold/10 absolute inset-0 bg-gradient-to-br from-white/5 via-transparent opacity-0 transition duration-300 group-hover:opacity-100' />
            <div className='relative aspect-video overflow-hidden rounded-xl border border-white/10'>
                <Image
                    src={`https://img.youtube.com/vi/${id}/sddefault.jpg`}
                    alt={`${name}`}
                    fill={true}
                    className='aspect-video object-cover transition duration-300 group-hover:scale-105'
                />
            </div>
            <div className='relative mt-6 flex items-start justify-between gap-3'>
                <div className='flex flex-col'>
                    <span className='text-triskgold text-xs font-semibold tracking-wide uppercase'>
                        TriskCraft
                    </span>
                    <h3 className='text-lg leading-tight font-semibold text-white'>
                        {name}
                    </h3>
                </div>
            </div>
        </Link>
    )
}
