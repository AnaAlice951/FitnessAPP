/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  async rewrites() {
    return [{ source: '/api/:path', destination: 'http://localhost' }];
  },
};
