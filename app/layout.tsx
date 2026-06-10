import type { Metadata } from 'next'
import { Space_Grotesk, DM_Sans, DM_Mono } from 'next/font/google'
import './globals.css'
import ClientEffects from '@/components/ClientEffects'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-space-grotesk',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-dm-sans',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
})

export const metadata: Metadata = {
  title: 'Artstrokes — Páginas web en 48 horas · $3,500 MXN',
  description:
    'Diseño web para emprendedores en México. Tu página lista en 48 horas desde $3,500 MXN. Sin suscripciones, sin sorpresas.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body
        className={`${spaceGrotesk.variable} ${dmSans.variable} ${dmMono.variable}`}
      >
        <ClientEffects />
        {children}
      </body>
    </html>
  )
}
