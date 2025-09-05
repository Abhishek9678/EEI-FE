import { MultiHeader } from "@/components/multi-header"
import { MultiFooter } from "@/components/multi-footer"

export default function SolutionsPage() {
  return (
    <main>
      <MultiHeader />
      <section className="px-4 lg:px-8 py-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-semibold">Solutions</h1>
          <p className="mt-2 text-gray-600 leading-relaxed">End-to-end electric mobility for last-mile logistics.</p>

          <div id="ev-fleet" className="mt-8 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">EV Fleet</h2>
            <p className="mt-2 text-sm text-gray-600">Flexible EV leasing and full-service fleet management.</p>
          </div>

          <div id="logistics" className="mt-6 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Logistics</h2>
            <p className="mt-2 text-sm text-gray-600">Rider ops, route optimization, and delivery SLAs.</p>
          </div>

          <div id="sustainability" className="mt-6 rounded-lg border p-6">
            <h2 className="text-xl font-semibold">Sustainability</h2>
            <p className="mt-2 text-sm text-gray-600">Measure and report carbon impact and savings.</p>
          </div>
        </div>
      </section>
      <MultiFooter />
    </main>
  )
}
