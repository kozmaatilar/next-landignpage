/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    distDir: 'build',
    eslint: {
      ignoreDuringBuilds: true
    },
  
    images: {
      domains: ['localhost:1223'],
      unoptimized: true
    }
  }
  
  export default nextConfig
  