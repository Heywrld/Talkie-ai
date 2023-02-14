/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
