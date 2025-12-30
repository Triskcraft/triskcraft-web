//app/Miembros/page.jsx
import Miembro from '@/components/Miembro'
import Comounirse from '@/components/ComoUnirse'
import { getActiveMembersAction } from '@/actions/members.actions'

export default async function MiembrosPage() {
    //const miembros = await getActiveMembersAction()
    //console.log('Fetching active members...', miembros)

    return (
        <div className='relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-10'>
            <div className='container mx-auto flex max-w-6xl flex-col rounded-3xl border border-triskgold/20 bg-black/30 px-3 py-4 md:px-6 md:py-6'>
                <div className='px-6 text-center md:px-10'>
                    <h2 className='text-center text-4xl font-bold text-triskgold drop-shadow-lg'>
                        Miembros activos del servidor
                    </h2>
                    <p className='m-4 mx-auto mb-6 w-full py-2 text-lg text-white/75 md:w-5/6'>
                        Miembros destacados del servidor por su aporte a este:
                    </p>
                </div>
                <div className='flex w-full flex-wrap items-center justify-around text-center'>
                    <Miembro
                        id='a7381886b2624d4a8a3e32ee68fdf5a2'
                        nombre='Mirocabrera01'
                        staff='Owner'
                        rol='Redstoner, Tecnico'
                    />
                    <Miembro
                        id='e809f9203e5c417cb2bf475498ff9004'
                        nombre='KillerVM'
                        staff='Owner'
                        rol='Redstoner, Tecnico'
                    />
                    <Miembro
                        id='acf884035945450689047124c68e1be8'
                        nombre='_DotJSON_'
                        staff='Admin'
                        rol='Redstoner, Tecnico'
                    />
                    <Miembro
                        id='d6a994684a9f48c6a493eba557bb2372'
                        nombre='Busterbladerss'
                        staff='Admin'
                        rol='Digger'
                        medalla={true}
                    />
                    <Miembro
                        id='3d6eaef66d6e4df9bd0b743357b3837f'
                        nombre='Lsau'
                        staff='Admin'
                        rol='Decorador'
                        medalla={true}
                        texto='https://www.youtube.com/@LsauMinecraft'
                    />
                    <Miembro
                        id='4197dca786e548ff87617df990b8259f'
                        nombre='TheVugx'
                        staff='Admin'
                        rol='Tecnico, Redstoner, Develop'
                        texto='https://linktr.ee/vugx'
                    />
                    <Miembro
                        id='81524e4ff3f242ddae2c523ae66bde86'
                        nombre='AkuaStille'
                        staff='Admin'
                        rol='Decorador'
                        medalla={true}
                        texto='https://www.twitch.tv/akuastille'
                    />
                    <Miembro
                        id='cea63f4511a44feabc0ed144b8003000'
                        nombre='TheLordPixc'
                        rol='Digger, Develop'
                    />
                    <Miembro
                        id='6543239d5666404183d9273cd2f98436'
                        nombre='kys_us'
                        staff='staff'
                        rol='Tecnico, Develop'
                        medalla={true}
                    />
                    <Miembro
                        id='b761b7885e9e4928aaf2a2190256aca1'
                        nombre='Asher011'
                        rol='Decorador'
                    />
                    <Miembro
                        id='8096e5b3f9cb46a8a17d24e4c64cd766'
                        nombre='Pseel'
                        rol='Digger'
                    />
                    <Miembro
                        id='a2e977a38e4548248135cb687597305b'
                        nombre='Manilobos'
                        rol='Digger'
                    />
                    <Miembro
                        id='cedce5f1715a4b1bb40f82d6ade7e585'
                        nombre='Comisariooo'
                        rol='Digger'
                    />
                </div>

                <div className='w-full p-4 px-6 md:px-10'>
                    <h3 className='m-4 text-4xl font-bold text-triskgold drop-shadow-lg'>
                        Miembros historicos
                    </h3>
                    <p className='m-4 mb-6 py-2 text-lg text-white/75'>
                        Miembros que ya no son activos en el servidor, pero que
                        queriamos darle un espacio, ya que sin su aporte este
                        comunidad no seria lo mismo:
                    </p>
                </div>
                <div className='flex w-full flex-wrap items-center justify-around'>
                    <Miembro
                        id='cc0d020bb28a460c802e89cc1ad64bbb'
                        nombre='Severalplot4310'
                        rol='Digger'
                    />
                    <Miembro
                        id='03b290cb27c74eb5850f81cb22160efc'
                        nombre='iFoxmin'
                        rol='Digger'
                        medalla={true}
                    />
                </div>
                <div className='flex flex-col px-4 py-6 md:px-10 md:py-0'></div>
            </div>

            <Comounirse />
        </div>
    )
}
