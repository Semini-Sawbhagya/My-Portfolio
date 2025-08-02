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
  output: 'export',           // ✅ Static export enabled
  trailingSlash: true,        // ✅ Needed for static routing
}

export default nextConfig
