"use client";


import ByTheNumbers from "@/components/franchise/ByTheNumber";
import CoreServicesRevenue from "@/components/franchise/CoreServicesFranchise";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseModels from "@/components/franchise/FranchiseModels";
import HowEEIWorks from "@/components/franchise/HowEEIWork";
import InvestmentReturns from "@/components/franchise/InvestmentReturn";
import TestimonialsSection from "@/components/franchise/Testimonial";
import WhatEEIProvides from "@/components/franchise/WhatEEIProvides";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <FranchiseHero />
      <HowEEIWorks />
      <FranchiseModels />
      <WhatEEIProvides />
      <CoreServicesRevenue />
      <ByTheNumbers />
      <TestimonialsSection />
      <InvestmentReturns />
      
      {/* Next sections go here, one-by-one */}
    </>
  );
}
