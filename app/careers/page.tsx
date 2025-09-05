const jobs = [
  { title: "Operations Manager", location: "Gurugram, IN", type: "Full-time" },
  { title: "Fleet Supervisor", location: "Bengaluru, IN", type: "Full-time" },
  { title: "Sustainability Analyst", location: "Remote", type: "Contract" },
]

export default function CareersPage() {
  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-semibold">Careers</h1>
        <p className="mt-2 text-gray-600 leading-relaxed">Help build a cleaner, smarter logistics future.</p>
        <ul className="mt-6 divide-y rounded-lg border">
          {jobs.map((job) => (
            <li key={job.title} className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.location} • {job.type}
                  </p>
                </div>
                <a href="/contact" className="text-emerald-700 underline underline-offset-4">
                  Apply
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
