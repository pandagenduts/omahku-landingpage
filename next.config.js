/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'nos.wjv-1.neo.id',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
