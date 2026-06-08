// API timestamps may arrive in seconds or milliseconds; normalize to ms.
export function toMilliseconds(timestamp: number) {
    return timestamp < 1e12 ? timestamp * 1000 : timestamp
}

export function formatPostDate(timestamp: number) {
    return new Intl.DateTimeFormat('es-ES', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    }).format(new Date(toMilliseconds(timestamp)))
}

export function formatBytes(bytes: number) {
    if (!bytes) return '0 B'
    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    const exponent = Math.min(
        Math.floor(Math.log(bytes) / Math.log(1024)),
        units.length - 1,
    )
    const value = bytes / Math.pow(1024, exponent)
    return `${value.toFixed(value >= 10 || exponent === 0 ? 0 : 1)} ${units[exponent]}`
}

export function isGif(contentType: string | null) {
    return contentType === 'image/gif'
}
