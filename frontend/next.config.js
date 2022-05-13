/**
 * @type {import('next').NextConfig}
 */
const withPreact = require("next-plugin-preact")
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
  },
}

module.exports = withPreact(nextConfig)
