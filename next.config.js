const { withKeystone } = require('@keystone-6/core/next');

/** @type {import('next').NextConfig} */
const nextConfig = withKeystone({
    reactStrictMode: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
});

module.exports = nextConfig;
