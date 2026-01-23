'use client'
import { useEffect, useState } from 'react'
import { getActiveMembersAction } from '@/actions/members.actions'
import type { Member } from '@/types'

const MAX_PLAYERS = 10

function DigsTable() {
    const [data, setData] = useState<Member[]>([])
    const total = data.reduce((a, b) => a + b.digs, 0)

    useEffect(() => {
        const fetchData = () =>
            getActiveMembersAction().then(data => {
                setData(
                    data.sort((a, b) => b.digs - a.digs).slice(0, MAX_PLAYERS),
                )
            })
        fetchData()
        const interval = setInterval(() => {
            fetchData()
        }, 10_000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className='relative overflow-hidden rounded-3xl border border-triskgold/25 bg-gradient-to-r from-[#0c1f19] via-triskgreen to-[#103429] p-8 shadow-2xl'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(214,175,63,0.22),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_30%)]' />

            <div className='relative flex flex-col gap-6'>
                <div className='flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
                    <div>
                        <p className='inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-triskgold'>
                            Rendimiento
                        </p>
                        <h2 className='text-3xl font-bold text-white'>
                            Top Jugadores
                        </h2>
                        <p className='max-w-2xl text-lg text-white/75'>
                            Top {MAX_PLAYERS} jugadores con más bloques minados
                            dentro del servidor. El tablero se actualiza
                            automáticamente con la actividad de la comunidad.
                        </p>
                    </div>
                    <div className='rounded-2xl border border-triskgold/30 bg-triskgold/10 px-5 py-4 text-right shadow-lg shadow-triskgold/20'>
                        <p className='text-xs font-semibold uppercase tracking-wide text-triskgold'>
                            Total minado
                        </p>
                        <p className='text-2xl font-bold text-white'>
                            {total.toLocaleString('es-MX')}
                        </p>
                        <p
                            className='text-xs text-white/60'
                            title='Posiblemente los datos no son totalmente precisos'
                        >
                            Datos estimados en tiempo real
                        </p>
                    </div>
                </div>

                <div className='overflow-hidden rounded-2xl border border-white/10 bg-black/30 shadow-lg shadow-black/30 backdrop-blur'>
                    <table className='w-full text-left'>
                        <thead className='bg-gradient-to-r from-triskmint/60 to-triskgreen/60 uppercase tracking-wide text-triskgold'>
                            <tr>
                                <th className='px-4 py-3 text-sm'>Nombre</th>
                                <th className='px-4 py-3 text-right text-sm'>
                                    Puntaje
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='border-b border-white/5 bg-white/5 font-semibold text-white'>
                                <td className='px-4 py-3'>Total</td>
                                <td className='px-4 py-3 text-right'>
                                    {total.toLocaleString('es-MX')}
                                </td>
                            </tr>
                            {data.map((user, index) => (
                                <tr
                                    key={index}
                                    className='border-b border-white/5 text-white transition hover:bg-white/5'
                                >
                                    <td className='px-4 py-3'>
                                        <span className='mr-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-triskgold/20 text-xs font-bold text-triskgold'>
                                            #{index + 1}
                                        </span>
                                        {user.mc_name}
                                    </td>
                                    <td className='px-4 py-3 text-right font-semibold text-triskgold'>
                                        {user.digs.toLocaleString('es-MX')}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DigsTable
