/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papa']
  }
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
