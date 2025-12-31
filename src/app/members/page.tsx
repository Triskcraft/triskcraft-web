//app/Miembros/page.jsx
import { Member } from '@/components/Miembro'
import Comounirse from '@/components/ComoUnirse'
import { getActiveMembersAction } from '@/actions/members.actions'
import type { Member as MemberType } from '@/types'

export default async function MiembrosPage() {
    const members = await getActiveMembersAction()

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
                    <MemberList members={members} />
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
                    <Member
                        id='cc0d020bb28a460c802e89cc1ad64bbb'
                        name='Severalplot4310'
                        role='Digger'
                        description={''}
                        rank={''}
                        digs={0}
                    />
                    <Member
                        id='03b290cb27c74eb5850f81cb22160efc'
                        name='iFoxmin'
                        role='Digger'
                        description={''}
                        rank={''}
                        digs={1_000_000}
                    />
                </div>
                <div className='flex flex-col px-4 py-6 md:px-10 md:py-0'></div>
            </div>

            <Comounirse />
        </div>
    )
}

interface MemberListProps {
    members: MemberType[]
}
function MemberList({ members }: MemberListProps) {
    return members.map(
        ({ description, digs, mc_name, mc_uuid, rank, roles }) => (
            <Member
                digs={digs}
                rank={rank}
                description={description}
                key={mc_uuid}
                id={mc_uuid}
                name={mc_name}
                role={roles.toLocaleString('es-MX')}
            />
        ),
    )
}
