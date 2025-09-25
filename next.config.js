/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cf.bstatic.com' },       // Booking CDN
      { protocol: 'https', hostname: 'images.unsplash.com' },  // placeholder
    ],
  },
};

module.exports = nextConfig;
