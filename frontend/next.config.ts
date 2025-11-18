import type { NextConfig } from "next";
import type { RemotePattern } from 'next/dist/shared/lib/image-config';
import createNextIntlPlugin from 'next-intl/plugin';

const BACKEND_TARGET = process.env.BACKEND_TARGET || "http://localhost:8000";

console.log(`Using BACKEND_TARGET: ${BACKEND_TARGET}`);

// NEXT_IMAGE_SOURCES can be a comma-separated list of URLs or hostnames
// e.g. "https://picsum.photos,http://backend,http://mydomain.com"
const imageSources = (process.env.NEXT_IMAGE_SOURCES || 
  'https://picsum.photos,http://backend,http://localhost,http://127.0.0.1')
  .split(',')
  .map(s => s.trim())
  .filter(Boolean);

const dynamicRemotePatterns: RemotePattern[] = imageSources.map(src => {
  try {
    const withScheme = src.includes('://') ? src : `http://${src}`;
    const u = new URL(withScheme);
    return { protocol: u.protocol.replace(':',''), hostname: u.hostname, pathname: '/**' };
  } catch {
    return null;
  }
}).filter(Boolean) as RemotePattern[];

const nextConfig: NextConfig = {
  /* config options here */
  // reactStrictMode: false,
  images: {
    remotePatterns: dynamicRemotePatterns,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async rewrites() {
    return [
      { source: '/api/:path*', destination: `${BACKEND_TARGET}/api/:path*/` },
      { source: '/media/:path*', destination: `${BACKEND_TARGET}/media/:path*` },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);