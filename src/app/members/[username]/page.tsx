import { Skin3D } from '@/components/3d-skin'

export default async function MemberPage({
    params,
}: PageProps<'/members/[username]'>) {
    const { username } = await params
    return <Skin3D skin={`https://mc-heads.net/skin/${username}`} />
}
