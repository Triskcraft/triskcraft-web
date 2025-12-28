import React from 'react'
import Image from 'next/image'

const isURL = text => {
    try {
        new URL(text)
        return true
    } catch (error) {
        return false
    }
}

const Miembro = ({ id, nombre, staff, rol, texto, medalla }) => {
    return (
        <div
            id={nombre}
            className='m-2 my-10 min-h-[200px] min-w-[250px] rounded-2xl border border-triskgold/25 bg-white/5 p-6 text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex md:w-full md:max-w-sm md:flex-wrap md:items-center md:justify-between'
        >
            <div className='flex justify-center md:flex-shrink-0'>
                <Image
                    src={`https://api.mineatar.io/head/${id}?scale=16`}
                    alt={`Avatar de ${nombre}`}
                    title={`${nombre}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className='flex-grow text-center md:ml-9 md:text-left'>
                <h3 className='flex justify-center gap-2 text-center text-xl font-semibold text-white md:justify-start'>
                    {nombre}
                    {medalla && (
                        <Image
                            src='/medalla.png'
                            alt='Medalla 1 Millon de Bloques Minados'
                            title='Medalla 1 Millon de Bloques Minados'
                            width={30}
                            height={30}
                        />
                    )}
                </h3>
                <p className='text-sm text-triskgold/80'>{staff}</p>
                <p className='text-sm text-white/70'>{rol}</p>
                <p className='text-sm text-white/70'>
                    {isURL(texto) ?
                        <a
                            href={texto}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold text-triskgold transition hover:text-white'
                        >
                            {'Redes sociales'}
                        </a>
                    :   texto}
                </p>
            </div>
        </div>
    )
}

export default Miembro
