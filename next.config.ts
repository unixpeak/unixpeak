import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.zegotravel.com",
        pathname: "/images/image_programtour/**",
      },
    ],
  },
};

export default nextConfig;
