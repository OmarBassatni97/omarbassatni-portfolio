import type { Metadata, Viewport } from 'next'
import { Raleway } from 'next/font/google'
import { SITE_URL } from '@/lib/links'
import './globals.css'
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

const title = 'Omar Bassatni | Frontend Developer'
const description = 'Frontend Developer specializing in React.js and Next.js, based in Beirut, Lebanon.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: `Omar Bassatni - ${description}`,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    title,
    description,
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.png'],
  },
  icons: { apple: '/logo192.png' },
}

export const viewport: Viewport = {
  themeColor: '#21272f',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className={raleway.variable}>
      <Analytics />
      <SpeedInsights />
      <body>{children}</body>
    </html>
  )
}
