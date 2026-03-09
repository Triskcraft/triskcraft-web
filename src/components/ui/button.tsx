import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkButtonProps {
    href: string
    children: ReactNode
}

export function LinkButton({ href, children }: LinkButtonProps) {
    return (
        <Link
            href={href}
            className='inline-flex items-center gap-2 rounded-full border border-triskgold/60 px-4 py-2 text-sm font-semibold text-triskgold transition hover:-translate-y-0.5 hover:bg-triskgold/10'
        >
            {children}
        </Link>
    )
}
