"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function Loading() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center space-y-1">
        {/* Logo */}
        <div className="relative">
          <Image
            src="/EElogo.png"
            alt="EEI logo"
            width={200}
            height={102}
            priority
            className="h-20 w-auto md:h-24"
          />
        </div>
        
        {/* Loading Spinner */}
        <div className="flex items-center space-x-1">
          <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
        
        {/* Loading Text */}
        <p className="text-black text-sm font-medium animate-pulse">
          Loading...
        </p>
      </div>
    </div>
  )
}
