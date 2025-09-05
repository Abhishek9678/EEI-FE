"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from "@/components/ui/carousel"

type Slide = { src: string; alt: string }

export default function AutoCarousel({
  slides,
  intervalMs = 3000,
  itemClassName = "md:basis-1/2 lg:basis-1/3",
  imageHeightClass = "h-64",
}: {
  slides: Slide[]
  intervalMs?: number
  itemClassName?: string
  imageHeightClass?: string
}) {
  const [api, setApi] = useState<CarouselApi | null>(null)

  useEffect(() => {
    if (!api) return
    const id = setInterval(() => {
      api.scrollNext()
    }, intervalMs)
    return () => clearInterval(id)
  }, [api, intervalMs])

  return (
    <Carousel className="w-full" opts={{ loop: true, align: "start" }} setApi={setApi}>
      <CarouselContent>
        {slides.map((img) => (
          <CarouselItem key={img.src} className={itemClassName}>
            <div className="rounded-lg overflow-hidden border bg-black p-2">
              <Image
                src={img.src}
                alt={img.alt}
                width={900}
                height={800}
                className={`${imageHeightClass} w-full object-cover rounded`}
                priority={false}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bg-white/90 hover:bg-white" />
      <CarouselNext className="bg-white/90 hover:bg-white" />
    </Carousel>
  )
}


