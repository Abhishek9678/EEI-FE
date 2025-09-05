"use client"

import AnimatedSlider from "@/components/animated-slider"
import { Leaf, Sprout, TreePine } from "lucide-react"
import { cn } from "@/lib/utils"

type BadgeProps = {
  children: React.ReactNode
  className?: string
}

function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center gap-2 px-3 py-1.5 rounded-md border text-sm font-medium", className)}>
      {children}
    </span>
  )
}

export default function GreenOMeter() {
  return (
    <div className="max-w-6xl mx-auto px-3">
      <div className="w-full rounded-xl border border-black-200 bg-black-50/80 overflow-hidden">
        <div className="flex items-stretch">
          {/* Left label */}
          <div className="shrink-0 px-2 py-8 bg-black text-white rounded-l-xl font-semibold">
            Green-O-Meter
          </div>
          {/* Scroller area */}
          <div className="grow px-4 py-3 overflow-hidden">
            <AnimatedSlider
              speedMs={4000}
              gapClassName="gap-6"
              itemClassName=""
              backgroundClassName="bg-hero-animated"
              className="py-5 rounded-lg"
              items={[
                { content: <Badge className="bg-white border-gray-200 text-emerald-700"><Leaf className="h-4 w-4" /> Flipkart Minutes</Badge> },
                { content: <Badge className="bg-white border-emerald-200 text-gray-800"><Leaf className="h-4 w-4 text-emerald-600" /> House of evolve</Badge> },
                { content: <Badge className="bg-white border-emerald-200 text-gray-800"><TreePine className="h-4 w-4 text-emerald-600" /> Empowering You to Evolve.</Badge> },
                { content: <Badge className="bg-white border-emerald-200 text-gray-800"><Sprout className="h-4 w-4 text-emerald-600" /> EV </Badge> },
                { content: <Badge className="bg-white border-emerald-200 text-gray-800"><Leaf className="h-4 w-4 text-emerald-600" /> Zero Emissions</Badge> },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}


