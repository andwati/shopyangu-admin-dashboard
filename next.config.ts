import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  /* config options here */
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
