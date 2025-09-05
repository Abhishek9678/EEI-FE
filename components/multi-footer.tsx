import Link from "next/link"
import { ctas, footerLinks, social } from "./site-config"
import AnimatedSlider from "./animated-slider"

export function MultiFooter() {
  return (
    <footer className="border-t bg-gray-200 text-gray-900">
      {/* Deck 1: CTA */}
      <div className="px-4 lg:px-8 py-12 bg-black text-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-pretty text-xl md:text-2xl font-semibold">Ready to electrify your deliveries?</h2>
            <p className="text-sm opacity-90">See how EV-as-a-Service reduces cost and emissions.</p>
          </div>
          <Link
            href={ctas.primary.href}
            className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 font-medium text-black hover:bg-amber-600"
          >
            {ctas.primary.label}
          </Link>
        </div>
      </div>

      {/* Deck 2: Links grid */}
      <div className="px-4 lg:px-8 py-16">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              {footerLinks.solutions.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-emerald-700">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Follow</h3>
            <ul className="space-y-2">
              {social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-emerald-700">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Deck 3: Legal */}
      <div className="px-4 lg:px-8 py-6 border-t bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-600">© {new Date().getFullYear()} EEI. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            <Link href="/privacy" className="hover:text-emerald-700">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-emerald-700">
              Terms
            </Link>
            <Link href="/sitemap" className="hover:text-emerald-700">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
