/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'i.egycdn.com',

        },
      ],
    },
  },
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['ar'],
    defaultLocale: 'ar',
  }
}

module.exports = nextConfig
