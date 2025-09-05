import Link from "next/link"

export default function DeliveryPartnersPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Delivery Partners</h1>
        <p className="mt-2 text-gray-600 leading-relaxed">
          Earn more with electric vehicles and reliable daily rentals.
        </p>

        <div id="benefits" className="mt-8 grid md:grid-cols-4 gap-6">
          {["Affordable Daily Rentals", "Own Your Scooter", "Accidental Insurance", "High Earnings"].map((b) => (
            <div key={b} className="rounded-lg border bg-white p-4">
              <h3 className="text-sm font-medium">{b}</h3>
            </div>
          ))}
        </div>

        <div id="join" className="mt-10 rounded-lg border p-6 bg-gray-50">
          <h2 className="text-xl font-semibold">Join as Pilot/Rider</h2>
          <p className="mt-2 text-sm text-gray-600">Complete a short form to start your onboarding.</p>
          <Link href="/contact" className="mt-3 inline-block text-emerald-700 underline underline-offset-4">
            Get in touch
          </Link>
        </div>

        <div id="faqs" className="mt-10">
          <h2 className="text-xl font-semibold">FAQs</h2>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>How much can I earn daily?</li>
            <li>What documents are required?</li>
            <li>Is charging covered?</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
