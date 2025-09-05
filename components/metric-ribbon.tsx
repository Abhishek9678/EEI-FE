"use client"

import { useEffect, useState } from "react"

// Simple animated counters inspired by Zypp's "Green-O-Meter"
const metrics = [
  { label: "KM on EVs", value: 651234789 },
  { label: "CO₂ Saved (tons)", value: 53210 },
  { label: "Deliveries", value: 22345567 },
  { label: "Riders", value: 12000 },
]

function useCountUp(target: number, duration = 1200) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const start = performance.now()
    const step = (t: number) => {
      const p = Math.min(1, (t - start) / duration)
      setCount(Math.floor(target * (0.2 + 0.8 * p)))
      if (p < 1) requestAnimationFrame(step)
    }
    const id = requestAnimationFrame(step)
    return () => cancelAnimationFrame(id)
  }, [target, duration])
  return count
}

export function MetricRibbon() {
  return (
    <div className="w-full border-t border-b bg-gray-50">
      <div className="mx-auto max-w-6xl overflow-x-auto">
        <ul className="flex items-center gap-8 px-4 py-2 min-w-max">
          {metrics.map((m) => {
            const count = useCountUp(m.value)
            return (
              <li key={m.label} className="flex items-center gap-2">
                <span className="inline-block h-2 w-2 rounded-full bg-green-600" aria-hidden="true" />
                <span className="text-sm text-gray-600">{m.label}:</span>
                <strong className="tabular-nums text-sm text-gray-900">{count.toLocaleString()}</strong>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
