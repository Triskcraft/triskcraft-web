import Image from 'next/image'
import MedallaIamge from '@/images/medalla.png'

const isURL = (text: string) => {
    try {
        new URL(text)
        return true
    } catch (error) {
        return false
    }
}

interface MemberProps {
    id: string
    name: string
    rank: string
    role: string
    description: string
    digs: number
}
export function Member({
    id,
    name,
    rank,
    role,
    description,
    digs,
}: MemberProps) {
    return (
        <div className='m-2 my-10 min-h-[200px] min-w-[250px] rounded-2xl border border-triskgold/25 bg-white/5 p-6 text-white shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:flex md:w-full md:max-w-sm md:flex-wrap md:items-center md:justify-between'>
            <div className='flex justify-center md:flex-shrink-0'>
                <Image
                    src={`https://api.mineatar.io/head/${id}?scale=16`}
                    alt={`Avatar de ${name}`}
                    title={`${name}`}
                    width={100}
                    height={100}
                />
            </div>
            <div className='flex-grow text-center md:ml-9 md:text-left'>
                <h3 className='flex justify-center gap-2 text-center text-xl font-semibold text-white md:justify-start'>
                    {name}
                    <Medalla digs={digs} />
                </h3>
                <p className='text-sm text-triskgold/80'>{rank}</p>
                <p className='text-sm text-white/70'>{role}</p>
                <p className='text-sm text-white/70'>
                    {isURL(description) ?
                        <a
                            href={description}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='font-semibold text-triskgold transition hover:text-white'
                        >
                            {'Redes sociales'}
                        </a>
                    :   description}
                </p>
            </div>
        </div>
    )
}

interface MedallaProps {
    digs: number
}
function Medalla({ digs }: MedallaProps) {
    if (digs >= 1_000_000) return null
    return (
        <Image
            src={MedallaIamge}
            alt='Medalla 1 Millon de Bloques Minados'
            title='Medalla 1 Millon de Bloques Minados'
            width={30}
            height={30}
        />
    )
}
