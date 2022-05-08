/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, _options) {
    config.experiments = { asyncWebAssembly: true };
    return config;
  },
};

module.exports = nextConfig;
