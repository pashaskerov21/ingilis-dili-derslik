/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tam statik export — offline/PWA üçün. Sadəcə HTML/CSS/JS fayllarına build olunur.
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
