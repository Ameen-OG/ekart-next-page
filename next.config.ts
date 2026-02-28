import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["fakestoreapi.com"],
  },
  reactCompiler: true,
  reactStrictMode: true,
};

export default nextConfig;
