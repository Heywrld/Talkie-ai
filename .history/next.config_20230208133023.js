/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.paparesa']
  }
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
