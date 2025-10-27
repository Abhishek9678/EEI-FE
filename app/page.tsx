import { Hero } from "@/components/hero"
import GreenOMeter from "@/components/green-o-meter"
import Image from "next/image"
import AutoCarousel from "@/components/auto-carousel"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <main>

      <Hero />

      <div className="mt-6 mb-10">
        <GreenOMeter />
      </div>

      <section className="px-4 lg:px-8 py-12 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-pretty text-2xl md:text-3xl font-semibold text-white">Why choose our EV platform</h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {[
              { title: "Lower Costs", desc: "EVs reduce fuel and maintenance expenses vs ICE vehicles." },
              { title: "Sustainable", desc: "Cut carbon emissions with measurable impact." },
              { title: "Reliable", desc: "Managed fleet, charging infra, and rider ops at scale." },
            ].map((f) => (
              <div key={f.title} className="rounded-lg border bg-blue-900 p-6 text-white">
                <h3 className="font-medium">{f.title}</h3>
                <p className="mt-2 text-sm text-white/80 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promo video */}
     

      {/* Logistics & Fleet carousel */}
      <section className="px-4 lg:px-8 py-10 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Our Logistics & Fleet</h2>
          <p className="mt-2 text-gray-700">A glimpse of operations, vehicles, and rider-first execution.</p>

          <div className="relative mt-6">
            <AutoCarousel
              slides={[
                { src: "/logistic.jpg", alt: "Logistics 1" },
                { src: "/logistic2.jpg", alt: "Logistics 2" },
                { src: "/cars1.jpg", alt: "Fleet Cars 1" },
                { src: "/cars2.jpg", alt: "Fleet Cars 2" },
              ]}
              intervalMs={3000}
              itemClassName="basis-full"
              imageHeightClass="h-[32rem] md:h-[36rem]"
            />
          </div>
        </div>
      </section>

      {/* About preview */}
      <section className="px-4 lg:px-8 py-12 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">About us</h2>
            <p className="mt-3 text-gray-700 leading-relaxed">
              We power zero-emission last‑mile deliveries with a tech-enabled EV fleet, battery swapping/charging,
              rider operations, and data platforms. Affordable, reliable, and sustainable at scale.
            </p>
            <a href="/who-we-are" className="inline-block mt-5 text-sm font-medium text-green-700 hover:text-green-800">
              Learn more →
            </a>
          </div>
          <div className="rounded-lg border p-6 flex items-center justify-center bg-gray-50">
            <Image src="/rocket.png" alt="Rocket icon" width={360} height={260} className="h-auto w-full max-w-xs" />
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="px-4 lg:px-8 py-12 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="w-full">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Services</h2>
            <div className="mt-6 grid gap-4">
              <div className="rounded-lg border bg-blue-900 p-5 text-white">
                <h3 className="font-medium">EV Fleet</h3>
                <p className="mt-2 text-sm text-white/80">Flexible EV leasing and full-service fleet management.</p>
              </div>
              <div className="rounded-lg border bg-blue-900 p-5 text-white">
                <h3 className="font-medium">Logistics</h3>
                <p className="mt-2 text-sm text-white/80">Rider ops, routing, and delivery SLAs for growth.</p>
              </div>
              <div className="rounded-lg border bg-blue-900 p-5 text-white">
                <h3 className="font-medium">Sustainability</h3>
                <p className="mt-2 text-sm text-white/80">Track carbon impact and report CO₂ savings.</p>
              </div>
            </div>
            <a href="/services" className="inline-block mt-6 text-sm font-medium text-green-700 hover:text-green-800">
              Explore services →
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 lg:px-8 py-12 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">How it works</h2>
          <p className="mt-2 text-white/80">Watch our platform in action.</p>
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 bg-black">
            <video
              className="w-full h-[22rem] md:h-[28rem] object-cover"
              controls
              playsInline
              autoPlay
              muted
              loop
              poster="/placeholder.jpg"
            >
              <source src="/vid1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      {/* Investors preview */}
      <section className="px-4 lg:px-8 py-12 bg-blue-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white">Investors</h2>
          <p className="mt-3 text-white/80 max-w-3xl">
            Backed by leading investors supporting large-scale EV adoption and battery swapping ecosystems.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {["Gogoro", "Goodyear Ventures", "9Unicorns", "IAN", "LetsVenture", "Grip"].map((name) => (
              <div key={name} className="rounded-lg border border-white/10 p-4 text-sm text-white bg-blue-900">{name}</div>
            ))}
          </div>
          <a href="/investors" className="inline-block mt-6 text-sm font-medium text-green-300 hover:text-green-200">
            See all investors →
          </a>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="px-4 lg:px-8 py-12 bg-white/90 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">FAQs</h2>
            <div className="mt-6 divide-y rounded-lg border bg-white">
              {[
                { q: "What is your mission?", a: "To achieve zero-emission last‑mile deliveries with EVs at scale." },
                { q: "What services do you offer?", a: "EV fleet, logistics ops, and sustainability reporting." },
                { q: "Where do you operate?", a: "Expanding multi-city operations with trained rider networks." },
              ].map((f, i) => (
                <div key={i} className="p-5">
                  <p className="font-medium">{f.q}</p>
                  <p className="mt-1 text-sm text-gray-600">{f.a}</p>
                </div>
              ))}
            </div>
            <a href="/faq" className="inline-block mt-6 text-sm font-medium text-green-700 hover:text-green-800">
              Visit FAQs →
            </a>
          </div>
          <div className="rounded-lg border p-6 flex items-center justify-center bg-gray-50">
            <Image src="/robo.png" alt="Robot illustration" width={400} height={300} className="h-auto w-full max-w-sm" />
          </div>
        </div>
      </section>
    </main>
  )
}
