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
      {
        protocol: "https",
        hostname: "mychiangmaitour.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "mychiangmaitour.com",
        pathname: "/wp-content/images/**",
      },
    ],
  },
};

export default nextConfig;
