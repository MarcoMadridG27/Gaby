// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'gabymarco.s3.us-east-1.amazonaws.com',
            },
            {
                protocol: 'https',
                hostname: 'me7aitdbxq.ufs.sh', // si aún usas este también
            },
        ],
    },
};

module.exports = nextConfig;
