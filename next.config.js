/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "_mixin.scss";
      $DEV_MODE : ${process.env.NODE_ENV === 'development'};
    `,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    return {
      '/': { page: '/' },
      '/events': { page: '/events' },
      '/calendar': { page: '/calendar' },
      '/account': { page: '/account' },
      '/account/bookedgame': { page: '/account', query: { title: 'bookedgame' } },
      '/account/seasonalclub': { page: '/account', query: { title: 'seasonalclub' } },
    };
  },
};

module.exports = nextConfig;
