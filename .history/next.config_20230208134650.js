/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['www.google.co'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
