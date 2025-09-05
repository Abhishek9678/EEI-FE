"use client"

import { useState } from "react"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")

  async function onSubmit(formData: FormData) {
    setStatus("submitting")
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      })
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  return (
    <main className="px-4 lg:px-8 py-10">
      <div className="max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold text-white">Contact</h1>
        <p className="mt-2 text-white/90 leading-relaxed">Book a demo or reach out to partner with us.</p>

        <form action={onSubmit} className="mt-6 space-y-4 bg-white/90 backdrop-blur-sm p-6 rounded-lg">
          <div>
            <label className="text-sm font-medium text-gray-900">Name</label>
            <input required name="name" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">Email</label>
            <input required type="email" name="email" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">Company</label>
            <input name="company" className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-900">Message</label>
            <textarea required name="message" rows={4} className="mt-1 w-full rounded-md border px-3 py-2" />
          </div>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex items-center justify-center rounded-md bg-emerald-700 px-4 py-2 font-medium text-white hover:bg-emerald-800 disabled:opacity-60"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>

          {status === "success" ? <p className="text-sm text-emerald-700">Thanks! We'll be in touch.</p> : null}
          {status === "error" ? <p className="text-sm text-red-600">Something went wrong. Please try again.</p> : null}
        </form>
      </div>
    </main>
  )
}
