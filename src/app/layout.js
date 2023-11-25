import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react';
// import NavBarTest from '@/components/NavBarTest'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Debora Tomazilli',
  description: 'Links úteis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
      </head>
      <body className={`${inter.className} bg-hero-image-bg`}>
        <div className='w-full'>
          {/* <NavBarTest /> */}
        </div>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
