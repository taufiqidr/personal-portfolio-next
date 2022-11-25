/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: 'picsum',
    path: 'https://picsum.photos/500?grayscale'
  },
}

module.exports = nextConfig
