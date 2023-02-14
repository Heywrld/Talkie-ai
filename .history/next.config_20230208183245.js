/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['o.remove.bg'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
