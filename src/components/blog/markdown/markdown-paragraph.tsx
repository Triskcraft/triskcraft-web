import type { ComponentPropsWithoutRef } from 'react'

type MarkdownParagraphProps = ComponentPropsWithoutRef<'p'> & {
    node?: unknown
}

export function MarkdownParagraph({ node, ...props }: MarkdownParagraphProps) {
    return (
        <p
            className='my-4 text-base leading-relaxed text-white/80'
            {...props}
        />
    )
}
