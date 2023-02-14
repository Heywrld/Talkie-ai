/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.clipartmax.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
