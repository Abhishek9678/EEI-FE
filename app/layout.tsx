import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { MultiHeader } from "@/components/multi-header"
import { MultiFooter } from "@/components/multi-footer"
import { Suspense } from "react"
import { Loading } from "@/components/loading"
import { ConditionalTagline } from "@/components/conditional-tagline"

export const metadata: Metadata = {
  title: "EEI Serives",
  description: "End-to-end electric mobility for last-mile logistics.",
  generator: "EEI Services",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Loading />
        <Suspense fallback={<div>Loading...</div>}>
          <MultiHeader />
          {/* Main content with astro background */}
          <div
          
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30 pointer-events-none"></div>
            {/* Content above overlay */}
            <div className="relative z-10">
              {children}
              {/* Conditional tagline - only shows on home page */}
              <ConditionalTagline />
            </div>
          </div>
          <MultiFooter />
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
