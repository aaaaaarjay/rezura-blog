import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Arjay Alangcas Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${raleway.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
      <StarsCanvas />
      <StarsCanvas />
      <StarsCanvas />
      <Navbar />
      {children}
      <Footer />
      
      </body>
    </html>
  )
}
