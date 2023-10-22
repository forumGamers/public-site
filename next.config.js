/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    serverActions: true,
    appDocumentPreloading: true,
    logging: {
      fullUrl: true,
    },
  },
  headers: async () => [
    {
      source: "/:path*",
      headers: [
        {
          key: "X-DNS-Prefetch-Control",
          value: "on",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
      ],
    },
  ],
  images: {
    domains: ["ik.imagekit.io"],
  },
};

module.exports = nextConfig;
