// Site-wide navigation and CTAs derived from Zypp's structure
export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const utilityLinks: { label: string; href: string }[] = [
  { label: "Blog", href: "/blog" },
  { label: "Careers", href: "/careers" },
  { label: "Contact Us", href: "/contact " },
]

export const mainNav: NavItem[] = [
  {
    label: "About",
    href: "/who-we-are",
    children: [
      { label: "Who We Are", href: "/who-we-are" },
      { label: "Partners", href: "/partners" },
    ],
  },
  { label: "Franchise", href: "/franchise" },
  { label: "News", href: "/advertise" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "EV Fleet", href: "/services#ev-fleet" },
      { label: "Logistics", href: "/services#logistics" },
      { label: "Sustainability", href: "/services#sustainability" },
    ],
  },
  { label: "Investors", href: "/investors" },
]

export const ctas = {
  primary: { label: "Get Started", href: "/contact" },
  secondary: { label: "Become a Partner", href: "/partners" },
}

export const footerLinks = {
  company: [
    { label: "Who We Are", href: "/who-we-are" },
    { label: "Careers", href: "/careers" },
    { label: "Partners", href: "/partners" },
    { label: "Contact", href: "/contact" },
  ],
  solutions: [
    { label: "EV Fleet", href: "/services#ev-fleet" },
    { label: "Logistics", href: "/services#logistics" },
    { label: "Sustainability", href: "/services#sustainability" },
  ],
  resources: [
    { label: "Blog", href: "/blog" },
    { label: "Franchise", href: "/franchise" },
    { label: "Advertise", href: "/advertise" },
  ],
}

export const social = [
  { label: "LinkedIn", href: "https://www.linkedin.com" },
  { label: "X", href: "https://x.com" },
  { label: "Instagram", href: "https://instagram.com" },
]
