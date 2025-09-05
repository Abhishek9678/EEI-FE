import { MultiHeader } from "@/components/multi-header"
import { MultiFooter } from "@/components/multi-footer"

export default function AboutPage() {
  return (
    <main>
      <section className="px-4 lg:px-8 py-10 bg-white/90 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-semibold text-gray-900">About</h1>
          <p className="mt-2 text-gray-700 leading-relaxed">
            We accelerate EV adoption for last-mile logistics with scalable EV-as-a-Service.
          </p>
        </div>
      </section>
    </main>
  )
}
