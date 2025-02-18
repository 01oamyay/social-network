/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "preline.co",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
