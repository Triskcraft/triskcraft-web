'use client'

import { useState } from 'react'
import type { BlogMedia } from '@/types'

type BlogGalleryProps = {
    media: BlogMedia[]
}

function MediaItem({ item, className }: { item: BlogMedia; className?: string }) {
    if (item.media_type === 'VIDEO') {
        return (
            <video
                controls
                preload='metadata'
                className={className}
                src={item.url}
            >
                {item.description ?? item.filename}
            </video>
        )
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={item.url}
            alt={item.description ?? item.filename}
            loading='lazy'
            className={className}
        />
    )
}

export function BlogGallery({ media }: BlogGalleryProps) {
    const visual = media.filter(
        item => item.media_type === 'IMAGE' || item.media_type === 'VIDEO',
    )
    const [activeIndex, setActiveIndex] = useState(0)

    if (visual.length === 0) return null

    const active = visual[Math.min(activeIndex, visual.length - 1)]

    // Single media -> render it large with no thumbnails.
    if (visual.length === 1) {
        return (
            <figure className='my-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30'>
                <MediaItem
                    item={visual[0]}
                    className='max-h-[70vh] w-full object-contain'
                />
                {visual[0].description ?
                    <figcaption className='px-4 py-2 text-center text-sm text-white/50'>
                        {visual[0].description}
                    </figcaption>
                :   null}
            </figure>
        )
    }

    return (
        <div className='my-6 space-y-3'>
            <figure className='overflow-hidden rounded-2xl border border-white/10 bg-black/30'>
                <MediaItem
                    item={active}
                    className='max-h-[70vh] w-full object-contain'
                />
                {active.description ?
                    <figcaption className='px-4 py-2 text-center text-sm text-white/50'>
                        {active.description}
                    </figcaption>
                :   null}
            </figure>

            <div className='flex flex-wrap gap-2'>
                {visual.map((item, index) => (
                    <button
                        key={item.id}
                        type='button'
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Ver ${item.filename}`}
                        className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border transition ${
                            index === activeIndex ?
                                'border-triskgold ring-2 ring-triskgold/40'
                            :   'border-white/10 opacity-70 hover:opacity-100'
                        }`}
                    >
                        <MediaItem
                            item={item}
                            className='h-full w-full object-cover'
                        />
                        {item.media_type === 'VIDEO' ?
                            <span className='absolute inset-0 flex items-center justify-center bg-black/40 text-white'>
                                ▶
                            </span>
                        :   null}
                    </button>
                ))}
            </div>
        </div>
    )
}
