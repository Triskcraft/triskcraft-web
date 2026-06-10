'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import app from '@eliyya/type-routes'
import { DISCORD_GUILD_URL, MODPACK_DOWNLOAD_URL } from '@/constant/api'
import { useSessionStore } from '@/stores/session'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const isAuthenticated = useSessionStore(state => state.isAuthenticated)
    const loadSession = useSessionStore(state => state.loadSession)

    useEffect(() => {
        void loadSession()
    }, [loadSession])

    return (
        <header className='border-triskgold/30 from-triskgreen via-triskmint to-triskgreen text-triskgold sticky top-0 z-50 border-b bg-linear-to-r shadow-xl backdrop-blur-md'>
            <div className='mx-auto flex max-w-6xl items-center justify-between px-4 py-3'>
                <div className='flex items-center gap-3'>
                    <Link
                        href={app()}
                        className='rounded-full bg-white/5 p-2 transition hover:scale-105 hover:bg-white/10'
                    >
                        <Image
                            src='/triskcraft_logo.webp'
                            alt='Logo'
                            width={80}
                            height={80}
                            className='mx-auto drop-shadow-lg'
                        />
                    </Link>
                    <div className='text-triskgold hidden flex-col text-sm leading-tight sm:flex'>
                        <span className='text-lg font-bold tracking-[0.4em] uppercase'>
                            Triskcraft
                        </span>
                        <span className='text-white'>
                            SMP TECNICO Y DECORATIVO
                        </span>
                    </div>
                </div>

                <button
                    className='text-triskgold block rounded-lg p-2 transition hover:bg-white/5 md:hidden'
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {isOpen ?
                        <AiOutlineClose size={28} />
                    :   <AiOutlineMenu size={28} />}
                </button>

                <nav
                    className={`absolute top-full left-0 w-full bg-transparent shadow-none transition-all duration-300 md:static md:w-auto md:overflow-visible md:bg-transparent md:shadow-none ${
                        isOpen ?
                            'from-triskgreen/50 via-triskmint/50 to-triskgreen/50 max-h-96 bg-linear-to-r'
                        :   'max-h-0 overflow-hidden opacity-0 md:max-h-none md:opacity-100'
                    }`}
                >
                    <ul className='flex flex-col items-start gap-4 px-6 py-4 text-lg font-semibold md:flex-row md:items-center md:gap-10 md:px-0 md:py-0'>
                        <li className='hover:text-triskgold transition hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app()}>Inicio</Link>
                        </li>
                        <li className='hover:text-triskgold transition hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.us()}>Nosotros</Link>
                        </li>
                        <li className='hover:text-triskgold transition hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.projects()}>Proyectos</Link>
                        </li>
                        <li className='hover:text-triskgold transition hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.members()}>Miembros</Link>
                        </li>
                        <li className='hover:text-triskgold transition hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.blog()}>Blog</Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    isAuthenticated ? DISCORD_GUILD_URL : (
                                        '/api/auth/login'
                                    )
                                }
                                target={isAuthenticated ? '_blank' : undefined}
                                rel={
                                    isAuthenticated ?
                                        'noopener noreferrer'
                                    :   undefined
                                }
                                prefetch={false}
                                className='bg-triskgold text-triskgreen shadow-triskgold/30 mr-0.5 inline-flex items-center gap-2 rounded-l-full px-4 py-2 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl'
                            >
                                {isAuthenticated ?
                                    'Ir al gremio'
                                :   'Únete con Discord'}
                            </Link>

                            <Link
                                href={MODPACK_DOWNLOAD_URL}
                                download
                                prefetch={false}
                                className='bg-triskgold text-triskgreen shadow-triskgold/30 ml-0.5 inline-flex items-center gap-2 rounded-r-full px-4 py-2 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl'
                            >
                                Mods
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
