import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "tse3.mm.bing.net",
      },
       {
        protocol: "https",
        hostname: "tse2.mm.bing.net",
      },
       {
        protocol: "https",
        hostname: "cdn.arabsstock.com",
      },
    ],
  },
};

export default nextConfig;
