/** @type {import('tailwindcss').Config} */
const Config = {
    darkMode: 'media',
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                dsblue: '#5865F2',
                triskyellow: '#d6af3f',
                triskgold: '#d6af3f',
                triskgreen: '#0f3127',
                colorsecundaro: '#0f3127',
                triskmint: '#1f4f3e',
            },
        },
    },
    plugins: [],
}

export default Config
