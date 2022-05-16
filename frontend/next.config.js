/**
 * @type {import('next').NextConfig}
 */
const withPreact = require("next-plugin-preact")
const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost", "pd-alr-s.laserflare.net", "i.ibb.co"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withPreact(nextConfig)
