import React from 'react'
import Image from 'next/image'

const Comounirse = () => {
    return (
        <div className='relative overflow-hidden rounded-3xl border border-triskgold/25 bg-gradient-to-r from-[#0a1b15] via-triskgreen to-[#0f3229] p-8 shadow-2xl md:p-12'>
            <p className='inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
                Únete
            </p>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(214,175,63,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(255,255,255,0.08),transparent_30%)]' />
            <div className='relative grid items-center gap-8 md:grid-cols-2'>
                <div className='order-1 flex flex-col gap-4 md:order-1'>
                    <h2 className='text-3xl font-bold text-white drop-shadow-lg md:text-4xl'>
                        ¿Cómo entrar al SMP?
                    </h2>
                    <p className='text-lg text-white/80'>
                        Si te interesa jugar con nosotros, únete al Discord,
                        dirígete al canal <strong>#data</strong>, abre un ticket
                        y completa el formulario. El equipo revisará tu
                        solicitud y te acompañará durante el ingreso.
                    </p>

                    <div className='grid gap-3 sm:grid-cols-2'>
                        {[
                            {
                                step: '1',
                                label: 'Únete al Discord',
                                detail: 'Ingresa al servidor oficial',
                            },
                            {
                                step: '2',
                                label: 'Ticket en #data',
                                detail: 'Abre el ticket y sigue los pasos',
                            },
                            {
                                step: '3',
                                label: 'Formulario',
                                detail: 'Comparte tu experiencia y estilo',
                            },
                            {
                                step: '4',
                                label: 'Tour de bienvenida',
                                detail: 'Conoce las bases y reglas',
                            },
                        ].map(item => (
                            <div
                                key={item.step}
                                className='flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur'
                            >
                                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-triskgold text-base font-bold text-triskgreen shadow-lg shadow-triskgold/30'>
                                    {item.step}
                                </span>
                                <div>
                                    <p className='font-semibold text-white'>
                                        {item.label}
                                    </p>
                                    <p className='text-sm text-white/70'>
                                        {item.detail}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className='flex flex-wrap items-center gap-4'>
                        <a
                            href='https://discord.com/invite/VJQJRZehTG'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='inline-flex items-center justify-center gap-2 rounded-full bg-triskgold px-6 py-3 text-lg font-semibold text-triskgreen shadow-lg shadow-triskgold/30 transition hover:-translate-y-0.5 hover:shadow-xl'
                        >
                            Link de Discord
                        </a>
                        <span className='text-sm text-white/60'>
                            Respuesta rápida de la comunidad
                        </span>
                    </div>
                </div>

                <div className='order-2 flex items-center justify-center md:order-2'>
                    <a
                        href='https://discord.com/invite/VJQJRZehTG'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='group relative inline-block overflow-hidden rounded-3xl border border-triskgold/30 bg-white/5 p-6 shadow-lg shadow-black/30 transition hover:-translate-y-1 hover:shadow-2xl'
                    >
                        <div className='absolute inset-0 bg-gradient-to-br from-triskgold/10 via-transparent to-white/10 opacity-0 transition duration-300 group-hover:opacity-100' />
                        <Image
                            src='https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a69f118df70ad7828d4_icon_clyde_blurple_RGB.svg'
                            alt='Discord'
                            width={320}
                            height={320}
                            className='mx-auto drop-shadow-xl'
                        />
                        <p className='mt-4 text-center text-sm font-semibold uppercase tracking-wide text-triskgold'>
                            Comunícate con el Staff
                        </p>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Comounirse
