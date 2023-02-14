/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links']
  }
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
