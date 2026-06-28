import { withTypeRoute } from '@eliyya/type-routes/next'

/** @type {import('next').NextConfig} */
const nextConfig = {
    allowedDevOrigins: ['dev.eliyya.dev'],
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mc-heads.net',
            },
            {
                protocol: 'https',
                hostname: 'cdn.prod.website-files.com',
            },
            {
                protocol: 'https',
                hostname: 'img.youtube.com',
            },
        ],
    },
}

export default withTypeRoute(nextConfig)
