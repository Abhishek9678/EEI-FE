"use client"

import { usePathname } from "next/navigation"
import AnimatedSlider from "@/components/animated-slider"

export function ConditionalTagline() {
  const pathname = usePathname()
  
  // Only show tagline on home page
  if (pathname !== "/") {
    return null
  }

  return (
    <div className="mt-10">
      <AnimatedSlider
        speedMs={14000}
        pauseOnHover={false}
        backgroundClassName="bg-gray-900"
        gapClassName="gap-12"
        itemClassName="px-8 py-4"
        className="py-6"
        edgeFade={false}
        items={Array.from({ length: 8 }).map((_, i) => ({
          key: `mantra-global-${i}`,
          content: (
            <span className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-wide uppercase text-white">
              Evolve karo, resolve karo
            </span>
          ),
        }))}
      />
    </div>
  )
}
