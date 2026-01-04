import { HowToJoin } from '@/components/ComoUnirse'
import { VideoCard } from '@/components/video-card'

export default function Proyectos() {
    return (
        <div className='relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='md:py- container mx-auto flex max-w-6xl flex-col rounded-3xl border border-triskgold/20 bg-black/30 px-3 py-4 md:px-6'>
                <div className='flex flex-col px-4 py-6 md:px-10 md:py-0'>
                    <div className='px-6 text-center md:px-10'>
                        <h2 className='text-center text-4xl font-bold text-triskgold drop-shadow-lg'>
                            Proyectos
                        </h2>
                        <p className='m-4 mx-auto mb-6 w-full py-2 text-lg text-white/75 md:w-5/6'>
                            Esta seccion sera la lista de Proyectos de diseño
                            exclusivo de Triskcraft.
                        </p>
                    </div>
                    <div className='p-4 px-6 md:px-0'>
                        <h3 className='m-4 text-2xl font-bold text-white'>
                            Concrete Selector
                        </h3>
                        <VideoCard
                            id='p00yOMQQpMc'
                            name='Concrete Selector 96k/h'
                        />
                    </div>
                </div>
            </div>
            <HowToJoin />
        </div>
    )
}
