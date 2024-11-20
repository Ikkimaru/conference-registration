/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/conference-registration',
  assetPrefix: '/conference-registration/',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
