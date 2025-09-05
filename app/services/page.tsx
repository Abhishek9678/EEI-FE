export default function ServicesPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Services</h1>
        <p className="mt-2 text-white/90 leading-relaxed">End-to-end electric mobility for last-mile logistics.</p>

        <div id="ev-fleet" className="mt-8 rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-900">EV Fleet</h2>
          <p className="mt-2 text-sm text-gray-700">Flexible EV leasing and full-service fleet management.</p>
        </div>

        <div id="logistics" className="mt-6 rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-900">Logistics</h2>
          <p className="mt-2 text-sm text-gray-700">Rider ops, route optimization, and delivery SLAs.</p>
        </div>

        <div id="sustainability" className="mt-6 rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-900">Sustainability</h2>
          <p className="mt-2 text-sm text-gray-700">Measure and report carbon impact and savings.</p>
        </div>
      </div>
    </main>
  )
}
