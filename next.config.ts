import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2mtrfo5jo8mxmvit.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
