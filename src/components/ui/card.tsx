import { ReactNode } from 'react'

interface CardProps {
    children: ReactNode
    className?: string
}

export function Card({ children, className = '' }: CardProps) {
    return (
        <article
            className={`rounded-2xl border border-triskgold/20 bg-black/35 p-6 shadow-lg shadow-black/20 backdrop-blur-sm ${className}`}
        >
            {children}
        </article>
    )
}

export function CardHeader({ children, className = '' }: CardProps) {
    return <header className={`space-y-2 ${className}`}>{children}</header>
}

export function CardContent({ children, className = '' }: CardProps) {
    return <div className={`space-y-4 ${className}`}>{children}</div>
}

export function CardFooter({ children, className = '' }: CardProps) {
    return <footer className={`pt-2 ${className}`}>{children}</footer>
}
