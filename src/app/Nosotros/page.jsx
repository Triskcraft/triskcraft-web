//app/Nosotros/page.jsx
import Comounirse from '@/components/ComoUnirse'
import Image from 'next/image'

export default function Nosotros() {
    return (
        <div className='relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='md:py- container mx-auto flex max-w-6xl flex-col rounded-3xl border border-triskgold/20 bg-black/30 px-3 py-4 md:px-6'>
                <h2 className='text-center text-4xl font-bold text-triskgold drop-shadow-lg'>
                    Sobre nosotros
                </h2>
                <div className='m-2 my-20 flex w-full flex-wrap items-center justify-between'>
                    <div className='w-full p-4 px-6 md:w-1/2 md:px-10'>
                        <h3 className='m-4 text-3xl font-bold text-white'>
                            Historia
                        </h3>
                        <p className='m-4 mb-6 w-5/6 py-2 text-lg text-white/75'>
                            Todo comenzó en 2019, impulsado por la simple pero
                            poderosa necesidad de jugar Minecraft junto a
                            personas verdaderamente apasionadas por el modo de
                            juego técnico. Dos amigos dieron el primer paso y
                            fundaron lo que sería conocido como TriskCraft,
                            reclutando jugadores desde grupos y comunidades
                            dedicadas a esta rama del juego. Con el tiempo,
                            llegó un tercer integrante que se convertiría en un
                            pilar fundamental del proyecto. Juntos, los tres
                            administradores experimentaron, fallaron,
                            aprendieron y reconstruyeron TriskCraft una y otra
                            vez, dando vida a múltiples versiones del servidor.
                            Cada reinicio no fue un final, sino una evolución.
                            Gracias a esa constancia y visión compartida,
                            TriskCraft fue tomando forma hasta convertirse en lo
                            que es hoy: una comunidad sólida, técnica y en
                            constante crecimiento.
                        </p>
                    </div>
                    <div className='flex w-full items-center justify-center p-4 px-6 md:w-1/2 md:px-10'>
                        <Image
                            src='/triskcraft_logo.webp'
                            alt='logo mapa'
                            width={500}
                            height={500}
                            className='rounded-lg'
                        />
                    </div>
                </div>
                <div className='m-2 my-20 flex w-full flex-wrap justify-between'>
                    <div className='w-full p-4 px-6 md:w-1/2 md:px-10'>
                        <h3 className='m-4 text-3xl font-bold text-white'>
                            Visión
                        </h3>
                        <p className='m-4 mb-6 w-5/6 py-2 text-lg text-white/75'>
                            Buscamos ser una comunidad que explote las mecanicas
                            del Minecraft, diseñando y Construyendo proyectos
                            cada vez mas grandes.
                        </p>
                    </div>
                    <div className='w-full p-4 px-6 md:w-1/2 md:px-10'>
                        <h3 className='m-4 text-3xl font-bold text-white'>
                            Mision
                        </h3>
                        <p className='m-4 mb-6 w-5/6 py-2 text-lg text-white/75'>
                            Triskcraft busca ser una comunidad amable con nuevos
                            y veteranos en Minecraft tecnico y una forma de
                            aprender todos juntos para crear nuevos y mejores
                            proyectos.
                        </p>
                    </div>
                </div>
            </div>
            <Comounirse />
        </div>
    )
}
