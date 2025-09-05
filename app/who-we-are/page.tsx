export default function WhoWeArePage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Who We Are</h1>
        <p className="mt-2 text-white/90 leading-relaxed">
          We are an EV-as-a-Service platform focused on decarbonizing last‑mile logistics. Our mission is
          to make deliveries affordable, intelligent, reliable, and 100% electric by building an ecosystem that
          brings together EV fleet, battery swapping/charging, rider operations, and data-driven technology.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-5 bg-white/90 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-gray-900">Mission</h2>
            <p className="mt-2 text-sm text-gray-700">Zero-emission deliveries by accelerating EV adoption for every last-mile.</p>
          </div>
          <div className="rounded-lg border p-5 bg-white/90 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-gray-900">Scale</h2>
            <p className="mt-2 text-sm text-gray-700">Growing multi-city operations with a tech-enabled rider-first operating model.</p>
          </div>
          <div className="rounded-lg border p-5 bg-white/90 backdrop-blur-sm">
            <h2 className="text-lg font-semibold text-gray-900">Impact</h2>
            <p className="mt-2 text-sm text-gray-700">Lower delivery costs, faster SLAs, and measurable CO₂ savings for partners.</p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
            <h3 className="text-base font-semibold text-gray-900">What We Do</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>Deploy connected EV fleets with IoT for real-time visibility.</li>
              <li>Enable battery swapping/charging to maximize rider uptime.</li>
              <li>Operate trained rider networks with safety and compliance.</li>
              <li>Optimize routes and SLAs with data platforms and APIs.</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
            <h3 className="text-base font-semibold text-gray-900">For Partners</h3>
            <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2">
              <li>E-commerce, quick-commerce, grocery, pharma, and food delivery use cases.</li>
              <li>Flexible commercial models: pay-per-order, subscription, or fleet-as-a-service.</li>
              <li>Transparent dashboards for performance, uptime, and CO₂ saved.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
