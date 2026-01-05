'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import app from '@eliyya/type-routes'

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className='sticky top-0 z-50 border-b border-triskgold/30 bg-gradient-to-r from-triskgreen via-triskmint to-triskgreen text-triskgold shadow-xl backdrop-blur-md'>
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
                    <div className='hidden flex-col text-sm leading-tight text-triskgold sm:flex'>
                        <span className='text-lg font-bold uppercase tracking-[0.4em]'>
                            Triskcraft
                        </span>
                        <span className='text-white'>
                            SMP TECNICO Y DECORATIVO
                        </span>
                    </div>
                </div>

                <button
                    className='block rounded-lg p-2 text-triskgold transition hover:bg-white/5 md:hidden'
                    onClick={() => setIsOpen(isOpen => !isOpen)}
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    {isOpen ?
                        <AiOutlineClose size={28} />
                    :   <AiOutlineMenu size={28} />}
                </button>

                <nav
                    className={`absolute left-0 top-full w-full bg-transparent shadow-none transition-all duration-300 md:static md:w-auto md:overflow-visible md:bg-transparent md:shadow-none ${
                        isOpen ?
                            'max-h-96 bg-gradient-to-r from-triskgreen/50 via-triskmint/50 to-triskgreen/50'
                        :   'max-h-0 overflow-hidden opacity-0 md:max-h-none md:opacity-100'
                    }`}
                >
                    <ul className='flex flex-col items-start gap-4 px-6 py-4 text-lg font-semibold md:flex-row md:items-center md:gap-10 md:px-0 md:py-0'>
                        <li className='transition hover:text-triskgold/100 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app()}>Inicio</Link>
                        </li>
                        <li className='transition hover:text-triskgold/100 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.us()}>Nosotros</Link>
                        </li>
                        <li className='transition hover:text-triskgold/100 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.projects()}>Proyectos</Link>
                        </li>
                        <li className='transition hover:text-triskgold/100 hover:drop-shadow-[0_0_10px_rgba(214,175,63,0.55)]'>
                            <Link href={app.members()}>Miembros</Link>
                        </li>
                        <li>
                            <Link
                                href='https://discord.com/invite/VJQJRZehTG'
                                target='_blank'
                                rel='noopener noreferrer'
                                prefetch={false}
                                className='inline-flex items-center gap-2 rounded-full bg-triskgold px-4 py-2 text-triskgreen shadow-lg shadow-triskgold/30 transition hover:-translate-y-0.5 hover:shadow-xl'
                            >
                                Únete al Discord
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
