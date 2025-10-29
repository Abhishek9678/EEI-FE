"use client";

import LiumGoWork from "@/components/sections/LiumGoWork";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <LiumGoWork />
      {/* Next sections go here, one-by-one */}
    </>
  );
}
