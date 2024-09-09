/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.idio.co/**',
        port: '', // Leave this blank if not using a custom port
      },
    ],
  },
};

export default nextConfig;
