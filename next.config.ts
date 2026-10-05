import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static HTML export, so the site can be hosted on Netlify or Vercel as plain files
  output: 'export',
  // The image optimizer needs a server, which a static export doesn't have
  images: { unoptimized: true },
}

export default nextConfig
