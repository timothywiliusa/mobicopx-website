/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        // protocol: 'https',
        // hostname: 'github.com',
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/9upxg1g8p4/**",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["localhost:3000", "localhost:3003"],
    },
  },
};

module.exports = nextConfig;
