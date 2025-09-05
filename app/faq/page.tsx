export default function FaqPage() {
  const faqs = [
    {
      q: "What is your mission?",
      a: "To achieve zero‑emission last‑mile deliveries by scaling EV fleets, charging, and rider operations.",
    },
    {
      q: "What services do you offer?",
      a: "EV fleet-as-a-service, logistics operations (riders, routing, SLAs), and sustainability reporting.",
    },
    { q: "Where do you operate?", a: "We are expanding multi-city operations with a trained rider network." },
    {
      q: "How can I partner or get pricing?",
      a: "Contact us with your use case and volumes for a customized proposal and pilot plan.",
    },
    {
      q: "How do riders join?",
      a: "Riders can apply through our delivery partners page to onboard, get trained, and start earning.",
    },
  ]

  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
        <div className="mt-6 divide-y rounded-lg border bg-white">
          {faqs.map((f, i) => (
            <div key={i} className="p-5">
              <p className="font-medium">{f.q}</p>
              <p className="mt-1 text-sm text-gray-600">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}


