/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    // Moved serverComponentsExternalPackages to the root level
  },
  // Moved to root level as per Next.js 15
  serverExternalPackages: ['lightningcss'],
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `lightningcss` module
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        fs: false,
      };
    }
    return config;
  },
}

export default nextConfig
