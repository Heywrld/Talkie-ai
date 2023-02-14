/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['o.remove.bg',
    'lh3.googleusercontent.com',
  'links.papareact.com'],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig
