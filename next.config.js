/** @type {import('next').NextConfig} */

const path = require('path');

const nextConfig = {
  webpack: (config, { isServer }) => {
    config.resolve.alias['@'] = path.resolve(__dirname);

    return config;
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      }
    ],
  },
};

module.exports = nextConfig;