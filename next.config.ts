import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images:{
  remotePatterns:[{hostname:"images.pixels.com"}],
 },
};

export default nextConfig;
