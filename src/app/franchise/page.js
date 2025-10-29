"use client";


import FranchiseHero from "@/components/franchise/FranchiseHero";
import HowEEIWorks from "@/components/franchise/HowEEIWork";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <FranchiseHero />
      <HowEEIWorks />
      
      {/* Next sections go here, one-by-one */}
    </>
  );
}
