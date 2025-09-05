import Link from "next/link"

export default function PartnersPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Partners</h1>
        <p className="mt-2 text-gray-600 leading-relaxed">Join our ecosystem of logistics leaders.</p>
        <div className="mt-6 rounded-lg border p-6 bg-gray-50">
          <h2 className="text-lg font-medium">Become a Partner</h2>
          <p className="mt-2 text-sm text-gray-600">Work with us to electrify fleets and reduce costs.</p>
          <Link href="/contact" className="mt-4 inline-block text-emerald-700 underline underline-offset-4">
            Contact us
          </Link>
        </div>
      </div>
    </main>
  )
}
