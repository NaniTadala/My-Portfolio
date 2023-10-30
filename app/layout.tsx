import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import {Toaster} from 'react-hot-toast';

const poppins = Poppins({ weight: '500', subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Narayana Swamy's Portfolio",
  description: 'A personal portfolio page of Narayana Swamy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        {children}
        <Toaster position="top-center" />
      </body>
        
    </html>
  )
}
