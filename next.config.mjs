/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qdepzlolvigtkieqjois.supabase.co",
      },
    ],
  },
};

export default nextConfig;
