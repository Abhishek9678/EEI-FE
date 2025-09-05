import Link from "next/link"

const links = [
  "/",
  "/who-we-are",
  "/partners",
  "/franchise",
  "/advertise",
  "/delivery-partners",
  "/services",
  "/campaigns",
  "/careers",
  "/blog",
  "/contact",
  "/privacy",
  "/terms",
]

export default function SitemapPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-semibold">Sitemap</h1>
        <ul className="mt-4 list-disc pl-6">
          {links.map((l) => (
            <li key={l}>
              <Link href={l} className="text-emerald-700 underline underline-offset-4">
                {l}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
