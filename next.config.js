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
};

module.exports = nextConfig;
