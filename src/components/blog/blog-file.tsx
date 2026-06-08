import { FiDownload, FiFile } from 'react-icons/fi'
import type { BlogMedia } from '@/types'
import { formatBytes } from './utils'

type BlogFileProps = {
    media: BlogMedia
}

function fileExtension(filename: string) {
    const parts = filename.split('.')
    return parts.length > 1 ? parts.at(-1)!.toUpperCase() : 'FILE'
}

export function BlogFile({ media }: BlogFileProps) {
    return (
        <a
            href={media.url}
            target='_blank'
            rel='noopener noreferrer'
            download={media.filename}
            className='my-4 flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition hover:border-triskgold/40 hover:bg-white/[0.06]'
        >
            <span className='flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-triskgold/15 text-triskgold'>
                <FiFile className='h-6 w-6' />
            </span>
            <span className='min-w-0 flex-grow'>
                <span className='block truncate text-sm font-medium text-white/90'>
                    {media.description ?? media.filename}
                </span>
                <span className='block text-xs text-white/45'>
                    {fileExtension(media.filename)} · {formatBytes(media.size)}
                </span>
            </span>
            <FiDownload className='h-5 w-5 shrink-0 text-white/50' />
        </a>
    )
}
