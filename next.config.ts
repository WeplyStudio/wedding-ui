import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'leoncelesta.katsudoto.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.katsudoto.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'our-wedding.link',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'the.invisimple.id',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.qr-code-generator.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

export default nextConfig;
