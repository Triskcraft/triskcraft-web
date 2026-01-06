import { MinecraftSkinThree } from '@/components/MinecraftSkinThree'

export default async function MemberPage({
    params,
}: PageProps<'/members/[username]'>) {
    const { username } = await params
    return <MinecraftSkinThree skin={`https://mc-heads.net/skin/${username}`} />
}
