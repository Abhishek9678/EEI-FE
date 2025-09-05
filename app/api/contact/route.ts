import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const formData = await req.formData()
  const payload = Object.fromEntries(formData.entries())

  console.log("[v0] Contact submission:", payload)

  return NextResponse.json({ ok: true })
}
