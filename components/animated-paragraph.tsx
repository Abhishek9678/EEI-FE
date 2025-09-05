"use client"

import { CSSProperties, PropsWithChildren, ReactNode } from "react"
import { cn } from "@/lib/utils"

type AnimatedParagraphProps = {
  text?: string
  className?: string
  durationMs?: number
  delayMs?: number
  marquee?: boolean
  marqueeSpeedMs?: number
  highlightWords?: string[]
  sweep?: "rtl" | "ltr"
}

export function AnimatedParagraph(
  { text, className, durationMs = 700, delayMs = 0, marquee = false, marqueeSpeedMs = 12000, highlightWords = [], sweep, children }: PropsWithChildren<AnimatedParagraphProps>
) {
  const style: CSSProperties = marquee
    ? { animation: `marqueeLeft ${marqueeSpeedMs}ms linear 0ms infinite` }
    : sweep === "rtl"
      ? { animation: `sweepRTL ${durationMs}ms linear 0ms infinite` }
      : sweep === "ltr"
        ? { animation: `sweepLTR ${durationMs}ms linear 0ms infinite` }
        : { animation: `slideXInRight ${durationMs}ms ease-out ${delayMs}ms forwards` }

  const content: ReactNode = ((): ReactNode => {
    const source = text ?? (typeof children === "string" ? (children as string) : children)
    if (!source || typeof source !== "string" || highlightWords.length === 0) return source as ReactNode

    const regex = new RegExp(`(${highlightWords.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("|")})`, "gi")
    const parts = source.split(regex)
    return (
      <>
        {parts.map((part, i) =>
          highlightWords.some(w => w.toLowerCase() === part.toLowerCase()) ? (
            <span key={i} className="text-emerald-500 font-semibold">{part}</span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </>
    )
  })()

  if (marquee) {
    return (
      <div className={cn("relative w-full overflow-hidden", className)}>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
        <div className="whitespace-nowrap will-change-transform" style={style}>
          <span className="inline-block pr-12 text-white/90 text-base md:text-lg leading-relaxed">{content}</span>
          <span className="inline-block pr-12 text-white/90 text-base md:text-lg leading-relaxed">{content}</span>
        </div>
      </div>
    )
  }

  // Sweep or simple slide-in inside a clipped container
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent" />
      <p
        style={style}
        className={cn(
          "inline-block text-white/80 text-base md:text-lg leading-relaxed whitespace-nowrap will-change-transform",
          sweep ? undefined : "translate-x-full opacity-0",
        )}
      > 
        {content}
      </p>
    </div>
  )
}

export default AnimatedParagraph


