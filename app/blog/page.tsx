import Link from "next/link"

const posts = [
  {
    slug: "ev-logistics-benefits",
    title: "Benefits of EVs in Last-Mile Logistics",
    excerpt: "Lower TCO and emissions with scalable EV fleets.",
  },
  {
    slug: "charging-infrastructure",
    title: "Charging Infrastructure at Scale",
    excerpt: "Designing reliable charging ops for delivery fleets.",
  },
  {
    slug: "measuring-impact",
    title: "Measuring Carbon Impact",
    excerpt: "KPIs and reporting for sustainability outcomes.",
  },
]

export default function BlogPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Blog</h1>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.slug} className="rounded-lg border p-4 bg-white">
              <img src="/ev-blog-cover.png" alt="" className="w-full h-40 object-cover rounded-md border" />
              <h2 className="font-medium mt-3">{p.title}</h2>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{p.excerpt}</p>
              <Link
                href={`/blog/${p.slug}`}
                className="mt-3 inline-block text-green-600 underline underline-offset-4"
              >
                Read more
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
