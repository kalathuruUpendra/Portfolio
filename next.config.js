const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const { withNetlify } = require("@netlify/next");

const nextConfig = withBundleAnalyzer({
  output: process.env.BUILD_STANDALONE === "true" ? "standalone" : undefined,
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js"],
  eslint: {
    dirs: ["src"],
  },
  images: {
    domains: ["https://flagcdn.com"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });
    config.resolve.fallback = {
      fs: false,
      net: false,
      dns: false,
      child_process: false,
      tls: false,
    };

    return config;
  },
});

module.exports = withNetlify(nextConfig);
