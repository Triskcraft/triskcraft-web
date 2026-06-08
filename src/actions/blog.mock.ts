import type { BlogMedia, BlogPost } from '@/types'

// Sample data used only in development as a fallback when the real API
// (GET /v1/posts/) returns nothing, so the blog can be previewed "full".

function img(
    id: string,
    url: string,
    description: string | null = null,
    width = 1200,
    height = 675,
): BlogMedia {
    return {
        id,
        filename: `${id}.jpg`,
        url,
        content_type: 'image/jpeg',
        media_type: 'IMAGE',
        size: 240_000,
        width,
        height,
        description,
        hash: null,
    }
}

function gif(id: string, url: string, description: string | null = null): BlogMedia {
    return {
        id,
        filename: `${id}.gif`,
        url,
        content_type: 'image/gif',
        media_type: 'IMAGE',
        size: 1_800_000,
        width: 480,
        height: 480,
        description,
        hash: null,
    }
}

function video(id: string, url: string, description: string | null = null): BlogMedia {
    return {
        id,
        filename: `${id}.mp4`,
        url,
        content_type: 'video/mp4',
        media_type: 'VIDEO',
        size: 5_200_000,
        width: 1280,
        height: 720,
        description,
        hash: null,
    }
}

function audio(id: string, url: string, description: string | null = null): BlogMedia {
    return {
        id,
        filename: `${id}.mp3`,
        url,
        content_type: 'audio/mpeg',
        media_type: 'AUDIO',
        size: 2_400_000,
        width: null,
        height: null,
        description,
        hash: null,
    }
}

function file(
    id: string,
    filename: string,
    url: string,
    contentType: string,
    size: number,
    description: string | null = null,
): BlogMedia {
    return {
        id,
        filename,
        url,
        content_type: contentType,
        media_type: 'FILE',
        size,
        width: null,
        height: null,
        description,
        hash: null,
    }
}

const SAMPLE = (seed: string) => `https://picsum.photos/seed/${seed}/1200/675`
const SAMPLE_SQ = (seed: string) => `https://picsum.photos/seed/${seed}/600/600`
const SAMPLE_VIDEO =
    'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'
const SAMPLE_GIF =
    'https://upload.wikimedia.org/wikipedia/commons/2/2c/Rotating_earth_%28large%29.gif'
const SAMPLE_AUDIO =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
const SAMPLE_PDF =
    'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf'

export const MOCK_POSTS: BlogPost[] = [
    {
        id: 'optimizacion-granja-hierro',
        title: 'Cómo optimizamos la granja de hierro para el servidor',
        cover_image: img(
            'cover-iron',
            SAMPLE('trisk-iron-cover'),
            'Vista general de la nueva granja de hierro',
        ),
        user: { id: 'u1', username: 'Vugx' },
        created_at: 1_737_158_400,
        updated_at: 1_737_158_400,
        player: {
            uuid: '069a79f444e94726a5befca90e38aaf5',
            nickname: 'Vugx',
            digs: 1_240_000,
            rank: 'Admin',
            linked_roles: [{ role: { name: 'Admin' } }],
            roles: ['Admin', 'Redstone', 'Builder'],
        },
        post_blocks: [
            {
                timestamp: 1_737_158_400,
                content: [
                    '## Rediseño de la lógica',
                    '',
                    'Durante esta semana rediseñamos la granja principal con una lógica más estable y eficiente. El objetivo fue mantener **producción constante** sin afectar el `rendimiento` general del mundo.',
                    '',
                    '### Cambios clave',
                    '',
                    '- Reemplazamos el reloj de `hopper` por uno de comparadores',
                    '- Aislamos las zonas de spawn con paredes de luz',
                    '- Añadimos un sistema de *overflow* hacia un cofre doble',
                    '',
                    '> "La eficiencia no está reñida con la estética: solo hay que esconder los cables."',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [],
            },
            {
                timestamp: 1_737_158_460,
                content: [
                    'Este es el reloj que terminamos usando para sincronizar los pistones:',
                    '',
                    '```js',
                    'function hopperClock(ticks) {',
                    '    const items = ticks * 2.5',
                    '    // un item por tick redstone',
                    '    return Math.floor(items)',
                    '}',
                    '',
                    'console.log(hopperClock(40)) // 100',
                    '```',
                    '',
                    'Y algunas fotos del resultado final desde distintos ángulos:',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [
                    img('iron-1', SAMPLE('trisk-iron-1'), 'Fachada principal'),
                    img('iron-2', SAMPLE('trisk-iron-2'), 'Sistema de recolección'),
                    img('iron-3', SAMPLE('trisk-iron-3'), 'Cofres de salida'),
                ],
            },
        ],
    },
    {
        id: 'red-almacenamiento-centralizada',
        title: 'Tour técnico: red de almacenamiento centralizada',
        cover_image: img('cover-storage', SAMPLE('trisk-storage-cover')),
        user: { id: 'u2', username: 'Nara' },
        created_at: 1_738_972_800,
        updated_at: 1_738_972_800,
        player: {
            uuid: '853c80ef3c3749fdaa49938b674adae6',
            nickname: 'Nara',
            digs: 640_000,
            rank: 'Staff',
            linked_roles: [{ role: { name: 'Staff' } }],
            roles: ['Staff', 'Logística'],
        },
        post_blocks: [
            {
                timestamp: 1_738_972_800,
                content: [
                    'Compartimos el planteamiento de nuestra red de cofres y clasificadores automáticos. La idea principal: **una sola entrada, todo se ordena solo.**',
                    '',
                    '| Sección      | Items/min | Estado     |',
                    '| ------------ | --------- | ---------- |',
                    '| Minerales    | 320       | Estable    |',
                    '| Comida       | 180       | Estable    |',
                    '| Bloques      | 540       | Saturado   |',
                    '',
                    'La configuración del clasificador vive en este archivo:',
                    '',
                    '```yaml',
                    'sorter:',
                    '  input: hopper_line_a',
                    '  overflow: void_drop',
                    '  categories:',
                    '    - ores',
                    '    - food',
                    '    - building',
                    '```',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [
                    img(
                        'storage-1',
                        SAMPLE('trisk-storage-1'),
                        'Pared de cofres etiquetados',
                    ),
                ],
            },
        ],
    },
    {
        id: 'tour-base-tecnica',
        title: 'Recorrido en vídeo por la base técnica de temporada',
        cover_image: img('cover-base', SAMPLE('trisk-base-cover')),
        user: { id: 'u3', username: 'Aitor' },
        created_at: 1_740_528_000,
        updated_at: 1_740_528_000,
        player: {
            uuid: '61699b2ed3274a019f1e0ea8c3f06bc6',
            nickname: 'Aitor',
            digs: 2_010_000,
            rank: 'Builder',
            linked_roles: [{ role: { name: 'Builder' } }],
            roles: ['Builder', 'Decoración'],
        },
        post_blocks: [
            {
                timestamp: 1_740_528_000,
                content: [
                    '## Un paseo rápido',
                    '',
                    'Grabamos un recorrido corto mostrando las automatizaciones ocultas detrás de los acabados. Combina galería de imágenes con el clip del tour.',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [
                    video('base-tour', SAMPLE_VIDEO, 'Recorrido por la base'),
                    img('base-1', SAMPLE_SQ('trisk-base-1'), 'Sala de granjas'),
                    img('base-2', SAMPLE_SQ('trisk-base-2'), 'Núcleo de redstone'),
                    gif('base-gif', SAMPLE_GIF, 'Mecanismo en movimiento'),
                ],
            },
            {
                timestamp: 1_740_528_120,
                content: 'Y aquí la narración en audio con los detalles de construcción:',
                components: [],
                embeds: [],
                media: [
                    audio(
                        'base-narracion',
                        SAMPLE_AUDIO,
                        'Narración del recorrido (3:18)',
                    ),
                ],
            },
        ],
    },
    {
        id: 'checklist-base-tecnica-desde-cero',
        title: 'Checklist para iniciar una base técnica desde cero',
        cover_image: img('cover-checklist', SAMPLE('trisk-checklist-cover')),
        user: { id: 'u4', username: 'Sarai' },
        created_at: 1_742_860_800,
        updated_at: 1_742_860_800,
        player: {
            uuid: '4566e69fc90748ee8d71d7ba5aa00d20',
            nickname: 'Sarai',
            digs: 410_000,
            rank: 'Miembro',
            linked_roles: [{ role: { name: 'Miembro' } }],
            roles: ['Miembro', 'Early Game'],
        },
        post_blocks: [
            {
                timestamp: 1_742_860_800,
                content: [
                    'Estas son las prioridades de *early game* que mejor resultado nos han dado. Orden recomendado:',
                    '',
                    '1. Cama, brújula y punto de respawn',
                    '2. Granja de comida básica (zanahorias o trigo)',
                    '3. Mina ramificada con `branch mining` a la altura -59',
                    '4. Primera granja de hierro pequeña',
                    '',
                    'Te dejamos el checklist completo para descargar:',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [
                    file(
                        'checklist-json',
                        'checklist-early-game.json',
                        'https://jsonplaceholder.typicode.com/posts',
                        'application/json',
                        18_432,
                        'Checklist en formato JSON',
                    ),
                    file(
                        'checklist-pdf',
                        'guia-base-tecnica.pdf',
                        SAMPLE_PDF,
                        'application/pdf',
                        102_400,
                        'Guía completa en PDF',
                    ),
                ],
            },
        ],
    },
    {
        id: 'ideas-eventos-comunitarios',
        title: 'Ideas para eventos comunitarios en un SMP técnico',
        cover_image: null,
        user: { id: 'u5', username: 'Lia' },
        created_at: 1_745_452_800,
        updated_at: 1_745_452_800,
        player: null,
        post_blocks: [
            {
                timestamp: 1_745_452_800,
                content: [
                    '## Más allá de las granjas',
                    '',
                    'Los eventos fortalecen la colaboración entre jugadores. Algunos formatos que nos han funcionado:',
                    '',
                    '- **Retos de ingeniería**: construir la granja más compacta posible',
                    '- **Recorridos guiados** mostrando avances de temporada',
                    '- **Speedrun cooperativo** de objetivos semanales',
                    '',
                    'Este post no tiene portada ni autor vinculado a propósito, para ver cómo se comporta el diseño en ese caso.',
                ].join('\n'),
                components: [],
                embeds: [],
                media: [],
            },
        ],
    },
]
