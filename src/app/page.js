"use client";

import TurnkeyOperations from "@/components/sections/TurnkeyOperations";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import CoreServicesSlider from "@/components/sections/CoreServicesSlider";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
       <TurnkeyOperations />
       <CoreServicesSlider />
      {/* Next sections go here, one-by-one */}
    </>
  );
}
