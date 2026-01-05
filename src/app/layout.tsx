import '@/styles/globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: process.env.NEXT_PUBLIC_SITE_URL,
    title: 'Triskcraft SMP',
    description: 'SMP dedicado a Minecraft Tecnico, Redstone y Decoracion.',
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
}

export default function RootLayout({ children }: LayoutProps<'/'>) {
    return (
        <html lang='es'>
            <body className='min-h-screen bg-gradient-to-b from-triskgreen via-[#0b261e] to-black text-white'>
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
