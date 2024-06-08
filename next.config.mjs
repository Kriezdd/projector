/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/uploads/:path*',
        destination: `http://localhost:1337/uploads/:path*`,
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
