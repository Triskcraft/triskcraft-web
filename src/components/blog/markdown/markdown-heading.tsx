import type { ComponentPropsWithoutRef } from 'react'

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6

type MarkdownHeadingProps = ComponentPropsWithoutRef<'h1'> & {
    node?: unknown
    level: HeadingLevel
}

const STYLES: Record<HeadingLevel, string> = {
    1: 'mt-10 mb-4 text-3xl font-bold text-white sm:text-4xl',
    2: 'mt-9 mb-4 text-2xl font-bold text-white sm:text-3xl',
    3: 'mt-8 mb-3 text-xl font-semibold text-white sm:text-2xl',
    4: 'mt-7 mb-3 text-lg font-semibold text-triskgold',
    5: 'mt-6 mb-2 text-base font-semibold uppercase tracking-wide text-triskgold/90',
    6: 'mt-6 mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-white/60',
}

export function MarkdownHeading({
    node,
    level,
    ...props
}: MarkdownHeadingProps) {
    const Tag = `h${level}` as const
    return <Tag className={STYLES[level]} {...props} />
}
