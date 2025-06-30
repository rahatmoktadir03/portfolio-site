/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this to help with SSR issues
  experimental: {
    esmExternals: "loose",
  },

  // Disable SSR for specific pages if needed
  // output: 'export', // Only use this if you want static export

  // Webpack configuration to handle problematic packages
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Don't resolve these modules on the server side
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
      };
    }

    return config;
  },

  // Handle image optimization
  images: {
    domains: ["your-domain.com"], // Add your image domains here
    unoptimized: true, // Temporarily disable optimization if causing issues
  },
};

module.exports = nextConfig;
