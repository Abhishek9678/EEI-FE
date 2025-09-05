"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function InvestorsPage() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [tenure, setTenure] = useState("12")
  const [ammount,setAmmount] = useState("")
  const fixedInterestRate = 10

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name || !email || !phone || !tenure || !ammount) {
      alert("Please fill in all fields.")
      return
    }
    alert(`Thank you, ${name}!\nTenure: ${tenure} months\nAmmount: ${ammount}\n Fixed interest rate: ${fixedInterestRate}%.`)
  }

  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Investors</h1>
        <p className="mt-2 text-white/90 leading-relaxed max-w-3xl">
          We are backed by leading investors committed to accelerating EV adoption and battery-swapping ecosystems
          across India. Their support helps us scale fleets, expand cities, and build cutting-edge tech for
          sustainable logistics.
        </p>

        <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {["Gogoro", "Goodyear Ventures", "9Unicorns", "IAN", "LetsVenture", "Grip", "WFC", "Ivygrowth"].map((name) => (
            <div key={name} className="rounded-lg border p-5 bg-white/90 backdrop-blur-sm text-sm text-gray-700">{name}</div>
          ))}
        </div>

        <div className="mt-10 rounded-lg border p-6 bg-white/90 backdrop-blur-sm">
          <h2 className="text-lg font-semibold text-gray-900">Growth plans</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-gray-700 space-y-2">
            <li>Scale EV fleet and rider network across more cities.</li>
            <li>Expand charging and swapping infrastructure.</li>
            <li>Advance IoT/telematics and routing intelligence.</li>
          </ul>
        </div>

        {/* Investor payment form */}
        <div className="mt-10 rounded-lg border p-6 bg-white/95 backdrop-blur-sm">
          <h2 className="text-xl font-semibold text-gray-900">Investor Payment</h2>
          <p className="text-sm text-gray-600 mt-1">Fixed interest rate: <span className="font-medium">10% per annum.</span></p>

          <form className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={onSubmit}>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="name">Investor Name</label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="h-10 rounded-md border px-3 text-sm text-gray-900 placeholder:text-gray-400 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@example.com"
                className="h-10 rounded-md border px-3 text-sm text-gray-900 placeholder:text-gray-400 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 98765 43210"
                className="h-10 rounded-md border px-3 text-sm text-gray-900 placeholder:text-gray-400 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="tenure">Tenure (months)</label>
              <select
                id="tenure"
                value={tenure}
                onChange={(e) => setTenure(e.target.value)}
                className="h-10 rounded-md border px-3 text-sm text-gray-900 bg-white"
                required
              >
                <option value="6">6</option>
                <option value="12">12</option>
                <option value="18">18</option>
                <option value="24">24</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="ammount">Amount</label>
              <input
                id="ammount"
                type="number"
                min="0"
                step="0.01"
                value={ammount}
                onChange={(e) => setAmmount(e.target.value)}
                placeholder="eg.5000"
                className="h-10 rounded-md border px-3 text-sm text-gray-900 placeholder:text-gray-400 bg-white"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm text-gray-700" htmlFor="rate">Interest Rate</label>
              <input
                id="rate"
                type="text"
                value={`${fixedInterestRate}% (fixed)`}
                readOnly
                className="h-10 rounded-md border px-3 text-sm text-gray-900 bg-gray-100"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <Button type="submit" className="w-full md:w-auto bg-emerald-700 hover:bg-emerald-800">Proceed to Payment</Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

