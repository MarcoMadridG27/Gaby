/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true, // ⚠️ Temporal
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gabymarco.s3.amazonaws.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
}

module.exports = nextConfig