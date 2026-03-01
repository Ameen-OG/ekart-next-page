import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // remotePatterns is more flexible and secure than 'domains'
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
        port: '',
        pathname: '/**', // Matches all images from this host
      },
    ],
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
