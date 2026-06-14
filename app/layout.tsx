import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientEffects from '@/components/ClientEffects'
import { siteMetadata, generateAdvancedSeoSchema } from '@/contents/siteMetadata'


const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: {
    default: `${siteMetadata.title} | Diseño Web Premium en 48 Horas`,
    template: `%s | ${siteMetadata.title}`
  },
  description: siteMetadata.description,
  metadataBase: new URL(siteMetadata.url),
  alternates: { canonical: '/' },
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: siteMetadata.url,
    siteName: 'Artstrokes',
    locale: 'es_MX',
    type: 'website',
    images: [
      {
        url: siteMetadata.ogImage,
        width: 1200,
        height: 630,
        alt: 'Artstrokes — Páginas web premium en 48 horas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [siteMetadata.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = generateAdvancedSeoSchema(siteMetadata);

  return (
    <html lang="es">
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        <ClientEffects />
        {children}
      </body>
    </html>
  )
}