"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { ctas, mainNav, utilityLinks } from "./site-config"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ChevronDown, Menu } from "lucide-react"
import Image from "next/image"

export function MultiHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "w-full border-b fixed top-0 z-[200] transition-all duration-300",
      isScrolled ? "bg-white text-gray-900" : "bg-transparent text-white"
    )}>
      {/* Deck 2: Main nav */}
      <div className={cn(
        "py-1 flex items-center justify-between transition-all duration-300",
        isScrolled ? "bg-white" : "bg-hero-coke"
      )}>
        <Link href="/" className="flex items-center gap-2 pl-4 sm:pl-6 md:pl-12" aria-label="Go to homepage">
          
        <Image
                  src="/EElogo.png"
                  alt="EEI logo"
                  width={200}
                  height={102}
                  priority
                  className="h-15   w-auto md:h-15"
                />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center font-normal gap-6  " aria-label="Primary">
          {mainNav.map((item) => (
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                className={cn(
                  "text-sm transition-all duration-300 relative z-10 px-4 py-2 rounded-md",
                  isScrolled ? "text-gray-900 hover:text-gray-700" : "text-white hover:text-white",
                  item.children?.length && "inline-flex items-center gap-1",
                )}
              >
                {item.label}
                {item.children?.length ? <ChevronDown className="h-4 w-4" aria-hidden="true" /> : null}
              </Link>
              {/* Hover background rectangle */}
              <div className={cn(
                "absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10",
                isScrolled ? "bg-gray-100" : "bg-black"
              )} />
              
              {item.children?.length ? (
                <div className="pointer-events-none absolute left-0 mt-2 min-w-52 rounded-md border bg-white shadow-lg opacity-0 transition-opacity group-hover:opacity-100 group-hover:pointer-events-auto z-50">
                  <ul className="p-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className={cn(
                            " text-sm transition-colors text-black duration-200",
                            isScrolled ? "hover:bg-gray-300 hover:text-gray-900" : " hover:text-green-600"
                          )}
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center px-4 gap-4">
          <Button asChild variant="outline" className={cn(
            "transition-all duration-300",
            isScrolled ? "border-gray-300 text-gray-900 bg-transparent hover:bg-gray-100" : "border-white text-white bg-transparent hover:bg-white/10"
          )}>
            <Link href={ctas.secondary.href}>{ctas.secondary.label}</Link>
          </Button>
          <Button asChild className={cn(
            "transition-all duration-300",
            isScrolled ? "bg-gray-900 hover:bg-black text-white" : "bg-black hover:bg-gray-800 text-white"
          )}>
            <Link href={ctas.primary.href}>{ctas.primary.label}</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className={cn(
            "md:hidden inline-flex items-center justify-center h-10 w-10 rounded border transition-all duration-300 mr-4",
            isScrolled ? "border-gray-300 text-gray-900" : "border-white text-white"
          )}
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Deck 3: Mobile drawer */}
      {mobileOpen ? (
        <div className="md:hidden border-t bg-white relative z-[100]">
          <nav className="flex flex-col p-2" aria-label="Mobile Primary">
            {mainNav.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between">
                  <Link href={item.href} className="px-2 py-3 text-sm font-medium">
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <button
                      className="px-2 py-3 text-sm"
                      onClick={() => setOpenMenu(openMenu === item.label ? null : item.label)}
                      aria-expanded={openMenu === item.label}
                    >
                      <ChevronDown
                        className={cn("h-4 w-4 transition-transform", openMenu === item.label && "rotate-180")}
                      />
                    </button>
                  ) : null}
                </div>
                {item.children?.length && openMenu === item.label ? (
                  <ul className="ml-2 mb-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded px-3 py-2 text-sm text-gray-700 hover:bg-emerald-50"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}

            <div className="mt-2 grid grid-cols-2 gap-2">
              <Button asChild variant="outline" className="border-emerald-600 text-emerald-700 bg-transparent">
                <Link href={ctas.secondary.href}>{ctas.secondary.label}</Link>
              </Button>
              <Button asChild className="bg-emerald-700 hover:bg-emerald-800">
                <Link href={ctas.primary.href}>{ctas.primary.label}</Link>
              </Button>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
