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
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
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
            className="min-h-screen bg-cover bg-center bg-no-repeat bg-fixed relative"
            style={{
              backgroundImage: "url('/astro.png')"
            }}
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
