"use client";

import LiumGoWork from "@/components/sections/LiumGoWork";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import HowLiumGoWorks from "@/components/sections/HowLiumGoWork";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <LiumGoWork />
      <HowLiumGoWorks />
      {/* Next sections go here, one-by-one */}
    </>
  );
}
