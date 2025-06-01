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
  // Asset prefix for GitHub Pages (uncomment and set when deploying to custom domain)
  // assetPrefix: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
  // basePath: process.env.NODE_ENV === 'production' ? '/repository-name' : '',
}

module.exports = nextConfig 