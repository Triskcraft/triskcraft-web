import type { BlogMedia } from '@/types'
import { formatBytes } from './utils'

type BlogAudioProps = {
    media: BlogMedia
}

export function BlogAudio({ media }: BlogAudioProps) {
    return (
        <div className='my-5 rounded-xl border border-white/10 bg-white/[0.03] p-4'>
            <div className='mb-3 flex items-center justify-between gap-3'>
                <p className='truncate text-sm font-medium text-white/85'>
                    {media.description ?? media.filename}
                </p>
                <span className='shrink-0 text-xs text-white/40'>
                    {formatBytes(media.size)}
                </span>
            </div>
            <audio
                controls
                preload='metadata'
                className='w-full'
                src={media.url}
            >
                {media.filename}
            </audio>
        </div>
    )
}
