"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import useEmblaCarousel from "embla-carousel-react"
import { useCallback, useEffect, useState } from "react"

const heroImages = [
  {
    src: "/ev1.jpg",
    alt: "Electric scooter fleet",
    title: "Electrify last-mile logistics with EV-as-a-Service",
    subtitle: "Reduce delivery costs and carbon emissions with a managed EV fleet, charging, rider ops, and analytics."
  },
  {
    src: "/cars2.jpg",
    alt: "EV charging infrastructure",
    title: "Sustainable Mobility Solutions",
    subtitle: "Transform your business with cutting-edge electric vehicle technology and smart charging solutions."
  },
  {
    src: "/cars1.jpg",
    alt: "Energy efficiency innovation",
    title: "",
    subtitle: "Leading the charge towards a greener future with innovative energy solutions and smart grid technology."
  }
]

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 20 })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index)
  }, [emblaApi])

  const togglePlayPause = useCallback(() => {
    setIsPlaying(!isPlaying)
  }, [isPlaying])

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi || !isPlaying) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 3000)

    return () => clearInterval(interval)
  }, [emblaApi, isPlaying])

  return (
    <section className="relative px-4 sm:px-6 lg:px-10 py-12 sm:py-16 lg:py-20 text-gray-900 overflow-hidden min-h-screen bg-gradient-to-br from-blue-50 to-blue-200">
      {/* Carousel container with reduced width and rounded border */}
      <div className="max-w-6xl mx-auto relative rounded-2xl sm:rounded-3xl border-2 border-blue-200 overflow-hidden bg-white shadow-xl" ref={emblaRef}>
        <div className="flex h-full">
          {heroImages.map((image, index) => (
            <div key={index} className="flex-[0_0_100%] relative h-[70vh] sm:h-[75vh] md:h-[80vh]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover object-center"
                quality={95}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-blue-900/30" />
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-16 text-center">
                  <div className="max-w-4xl mx-auto">
                    <h1 className="text-pretty text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight text-white drop-shadow-lg animate-in slide-in-from-bottom-4 duration-700">
                      {image.title}
                    </h1>
                    <p className="mt-4 sm:mt-6 lg:mt-8 text-blue-100 leading-relaxed text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl max-w-3xl mx-auto drop-shadow-md animate-in slide-in-from-bottom-4 duration-700 delay-200">
                      {image.subtitle}
                    </p>
                    <div className="mt-6 sm:mt-8 lg:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                      <Button asChild className="bg-blue-700 hover:bg-blue-800 text-white hover:scale-110 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 w-full sm:w-auto shadow-md hover:shadow-lg transition-all">
                        <Link href="/contact">Book a Demo</Link>
                      </Button>
                      <Button asChild variant="outline" className="border-white/70 text-white bg-white/20 hover:bg-white/30 hover:border-white/90 text-sm sm:text-base lg:text-lg px-6 sm:px-8 lg:px-10 py-3 sm:py-4 w-full sm:w-auto backdrop-blur-sm hover:backdrop-blur transition-all">
                        <Link href="/services">Explore Services</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation controls */}
      <div className="relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex justify-end items-center">
          {/* Right side - Carousel controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={scrollPrev}
              className="border-white/50 text-white hover:bg-white/20 hover:border-white/80 bg-black/20 backdrop-blur-sm h-10 w-10 sm:h-12 sm:w-12 transition-all"
            >
              <ChevronLeft className="h-3 w-3 sm:h-5 sm:w-5" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={togglePlayPause}
              className="border-white/50 text-white hover:bg-white/20 hover:border-white/80 bg-black/20 backdrop-blur-sm h-10 w-10 sm:h-12 sm:w-12 transition-all"
            >
              {isPlaying ? <Pause className="h-3 w-3 sm:h-5 sm:w-5" /> : <Play className="h-3 w-3 sm:h-5 sm:w-5" />}
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              onClick={scrollNext}
              className="border-white/50 text-white hover:bg-white/20 hover:border-white/80 bg-black/20 backdrop-blur-sm h-10 w-10 sm:h-12 sm:w-12 transition-all"
            >
              <ChevronRight className="h-3 w-3 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex space-x-2 sm:space-x-3">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-300 border-2 ${
                index === selectedIndex
                  ? "bg-white scale-125 border-white"
                  : "bg-white/50 hover:bg-white/70 hover:scale-110 border-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
