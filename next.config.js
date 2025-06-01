/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  // GitHub Pages configuration
  assetPrefix: process.env.NODE_ENV === 'production' ? '/sabivet' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/sabivet' : '',
}

module.exports = nextConfig 