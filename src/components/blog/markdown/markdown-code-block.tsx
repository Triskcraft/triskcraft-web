import type { ComponentPropsWithoutRef } from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

type MarkdownCodeBlockProps = ComponentPropsWithoutRef<'code'> & {
    node?: unknown
}

export function MarkdownCodeBlock({
    node,
    className,
    children,
    ...props
}: MarkdownCodeBlockProps) {
    const match = /language-(\w+)/.exec(className ?? '')

    // Inline code (no language fence) -> styled inline span.
    if (!match) {
        return (
            <code
                className='rounded bg-white/10 px-1.5 py-0.5 font-mono text-sm text-triskgold'
                {...props}
            >
                {children}
            </code>
        )
    }

    const code = String(children).replace(/\n$/, '')

    return (
        <div className='my-5 overflow-hidden rounded-xl border border-triskgold/20 bg-black/40'>
            {match[1] ?
                <div className='flex items-center justify-between border-b border-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40'>
                    {match[1]}
                </div>
            :   null}
            <SyntaxHighlighter
                language={match[1]}
                style={oneDark}
                customStyle={{
                    margin: 0,
                    background: 'transparent',
                    padding: '1rem',
                    fontSize: '0.875rem',
                }}
                codeTagProps={{ className: 'font-mono' }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}
