"use client"

import AnimatedSlider from "@/components/animated-slider"
import { Leaf } from "lucide-react"
import { cn } from "@/lib/utils"

type GreenTickerProps = {
  className?: string
}

export default function GreenTicker({ className }: GreenTickerProps) {
  return (
    <div className={cn("max-w-6xl mx-auto px-4", className)}>
      <div className="w-full overflow-hidden rounded-xl border border-emerald-200 bg-emerald-50">
        <div className="flex items-stretch">
          {/* Left green label */}
          <div className="shrink-0 w-[190px] px-5 py-4 bg-emerald-500 text-white rounded-l-xl text-base md:text-lg font-semibold">
            Green-O-Meter
          </div>
          {/* Right slider area */}
          <div className="grow py-3 pl-5 pr-3">
            <AnimatedSlider
              speedMs={16000}
              gapClassName="gap-8"
              itemClassName="px-3 py-1.5 rounded-md border border-emerald-200 bg-white text-gray-800"
              backgroundClassName="bg-hero-animated"
              className="py-5 rounded-lg"
              items={[
                { key: "brand", content: <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Flipkart Minutes</span> },
                { key: "co2", content: <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Co2: 1 Ton</span> },
                { key: "trees", content: <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Trees: 0.0k</span> },
                { key: "green", content: <span className="inline-flex items-center gap-2"><Leaf className="h-4 w-4 text-emerald-600" /> Green Deliveries</span> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


