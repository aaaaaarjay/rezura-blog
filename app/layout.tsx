
import type { Metadata } from 'next'
import { Aladin, Raleway } from 'next/font/google'
import './globals.css'
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"



const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'RJ',
  description: 'Arjay Alangcas Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Analytics />
  <SpeedInsights />
      <body className={`${raleway.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas />

      <Navbar />
      {children}
      
      <Footer />
      </body>
    </html>
  )
}
