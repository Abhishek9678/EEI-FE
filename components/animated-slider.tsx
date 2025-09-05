"use client"

import { CSSProperties } from "react"
import { cn } from "@/lib/utils"

type AnimatedSliderProps = {
  items: Array<{ key?: string; content: React.ReactNode }>
  className?: string
  itemClassName?: string
  gapClassName?: string
  backgroundClassName?: string
  speedMs?: number
  pauseOnHover?: boolean
  edgeFade?: boolean
  edgeColorClass?: string
}

/**
 * AnimatedSlider: horizontally scrolling marquee from left → right on an infinite loop.
 * Duplicate track is rendered for seamless looping.
 */
export default function AnimatedSlider({
  items,
  className,
  itemClassName,
  gapClassName = "gap-8",
  backgroundClassName = "bg-green-100",
  speedMs = 12000,
  pauseOnHover = true,
  edgeFade = true,
  edgeColorClass = "from-green-100",
}: AnimatedSliderProps) {
  const style: CSSProperties = {
    animation: `marqueeRight ${speedMs}ms linear infinite`,
  }

  const containerHover = pauseOnHover ? "hover:[&_.marquee-track]:[animation-play-state:paused]" : undefined

  return (
    <div className={cn("relative w-full overflow-hidden", backgroundClassName, containerHover, className)}>
      {edgeFade ? (
        <>
          <div className={cn("pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r to-transparent", edgeColorClass)} />
          <div className={cn("pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l to-transparent", edgeColorClass)} />
        </>
      ) : null}

      <div className={cn("flex items-center", gapClassName)}>
        {/* Track A */}
        <div className={cn("marquee-track flex items-center shrink-0", gapClassName, "whitespace-nowrap will-change-transform")} style={style}>
          {items.map((it, idx) => (
            <div key={it.key ?? `a-${idx}`} className={cn("inline-flex", itemClassName)}>
              {it.content}
            </div>
          ))}
        </div>

        {/* Track B (duplicate) */}
        <div className={cn("marquee-track flex items-center shrink-0", gapClassName, "whitespace-nowrap will-change-transform")} style={style} aria-hidden>
          {items.map((it, idx) => (
            <div key={it.key ?? `b-${idx}`} className={cn("inline-flex", itemClassName)}>
              {it.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}


