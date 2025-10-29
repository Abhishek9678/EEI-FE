"use client";

import TurnkeyOperations from "@/components/sections/TurnkeyOperations";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import CoreServicesSlider from "@/components/sections/CoreServicesSlider";
import LiumGoWork from "@/components/sections/LiumGoWork";
import HowLiumGoWorks from "@/components/sections/HowLiumGoWork";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
       <LiumGoWork />
      <HowLiumGoWorks />
      <TurnkeyOperations />
       <CoreServicesSlider />
      {/* Next sections go here, one-by-one */}
    </>
  );
}
