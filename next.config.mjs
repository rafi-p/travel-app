/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qdepzlolvigtkieqjois.supabase.co",
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
