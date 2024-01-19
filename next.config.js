/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'zvyasrdqzilbxmvqsxnm.supabase.co',
      },
    ],
  },
};

module.exports = nextConfig;
