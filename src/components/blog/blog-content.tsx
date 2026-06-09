import type { BlogPostBlock } from '@/types'
import { Markdown } from './markdown'
import { BlogGallery } from './blog-gallery'
import { BlogAudio } from './blog-audio'
import { BlogFile } from './blog-file'

type BlogContentProps = {
    blocks: BlogPostBlock[]
}

export function BlogContent({ blocks }: BlogContentProps) {
    return (
        <div className='flex flex-col'>
            {blocks.map((block, index) => {
                const visual = block.media.filter(
                    media =>
                        media.media_type === 'IMAGE' ||
                        media.media_type === 'VIDEO',
                )
                const audios = block.media.filter(
                    media => media.media_type === 'AUDIO',
                )
                const files = block.media.filter(
                    media => media.media_type === 'FILE',
                )

                return (
                    <article key={`${block.timestamp}-${index}`}>
                        {block.content ?
                            <Markdown>{block.content}</Markdown>
                        :   null}

                        {visual.length > 0 ?
                            <BlogGallery media={visual} />
                        :   null}

                        {audios.map(media => (
                            <BlogAudio key={media.id} media={media} />
                        ))}

                        {files.map(media => (
                            <BlogFile key={media.id} media={media} />
                        ))}
                    </article>
                )
            })}
        </div>
    )
}
