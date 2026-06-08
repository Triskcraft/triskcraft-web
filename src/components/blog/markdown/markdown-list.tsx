import type { ComponentPropsWithoutRef } from 'react'

type MarkdownListProps = (
    | ComponentPropsWithoutRef<'ul'>
    | ComponentPropsWithoutRef<'ol'>
) & {
    node?: unknown
    ordered?: boolean
}

export function MarkdownList({ node, ordered, ...props }: MarkdownListProps) {
    const baseClassName =
        'my-4 ml-6 space-y-2 text-base leading-relaxed text-white/80 marker:text-triskgold'

    if (ordered) {
        return (
            <ol
                className={`list-decimal ${baseClassName}`}
                {...(props as ComponentPropsWithoutRef<'ol'>)}
            />
        )
    }

    return (
        <ul
            className={`list-disc ${baseClassName}`}
            {...(props as ComponentPropsWithoutRef<'ul'>)}
        />
    )
}
