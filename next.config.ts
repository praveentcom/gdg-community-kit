import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gdg-brand-tools.vercel.app",
        port: "",
        pathname: "**",
        search: "",
      },
      {
        protocol: "https",
        hostname: "gdg.praveent.com",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
};

export default nextConfig;
