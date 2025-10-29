"use client";


import ByTheNumbers from "@/components/franchise/ByTheNumber";
import CoreServicesRevenue from "@/components/franchise/CoreServicesFranchise";
import ExpansionLocations from "@/components/franchise/ExpansionLocations";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseModels from "@/components/franchise/FranchiseModels";
import HowEEIWorks from "@/components/franchise/HowEEIWork";
import InvestmentRangeSection from "@/components/franchise/InvestmentRangeSection";
import InvestmentReturns from "@/components/franchise/InvestmentReturn";
import TestimonialsSection from "@/components/franchise/Testimonial";
import WhatEEIProvides from "@/components/franchise/WhatEEIProvides";
import Header from "@/components/layout/Header";
import FooterWithForm from "@/components/sections/FooterWithForm";

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
      <InvestmentRangeSection />
      <ExpansionLocations />
      <FooterWithForm />
      
      {/* Next sections go here, one-by-one */}
    </>
  );
}
