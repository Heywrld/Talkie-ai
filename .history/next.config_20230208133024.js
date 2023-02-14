/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papare']
  }
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
