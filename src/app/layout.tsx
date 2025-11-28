import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: 'CloudFlow - Streamline Your Workflow',
    template: '%s | CloudFlow'
  },
  description: 'The ultimate SaaS solution for modern teams to collaborate, automate, and achieve more in less time. Start your free trial today.',
  keywords: 'SaaS, workflow, automation, collaboration, productivity, team management, project tools',
  authors: [{ name: 'CloudFlow Team' }],
  creator: 'CloudFlow',
  publisher: 'CloudFlow',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cloudflow.com',
    title: 'CloudFlow - Streamline Your Workflow',
    description: 'The ultimate SaaS solution for modern teams to collaborate, automate, and achieve more in less time.',
    siteName: 'CloudFlow',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CloudFlow - Streamline Your Workflow',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CloudFlow - Streamline Your Workflow',
    description: 'The ultimate SaaS solution for modern teams to collaborate, automate, and achieve more in less time.',
    images: ['/og-image.jpg'],
  },
  metadataBase: new URL('https://cloudflow.com'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased bg-white dark:bg-gray-900 transition-colors duration-300`}>
        {children}
      </body>
    </html>
  )
}