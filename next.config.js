/**
 * @type {import('next').NextConfig}
 */
 const nextConfig = {
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true
    },
    webpack: (config, { isServer }) => {
        // Fixes npm packages that depend on `fs` module on server
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                fs: false,
            };
        }
        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return config;
    },
  }

  module.exports = nextConfig