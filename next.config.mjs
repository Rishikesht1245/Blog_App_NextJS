/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      //we can add multiple domains
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
};

export default nextConfig;
