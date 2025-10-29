"use client";


import ByTheNumbers from "@/components/investor/ByTheNumbers";
import CoreServicesRevenue from "@/components/franchise/CoreServicesFranchise";
import FranchiseHero from "@/components/franchise/FranchiseHero";
import FranchiseModels from "@/components/franchise/FranchiseModels";
import HowEEIWorks from "@/components/franchise/HowEEIWork";
import InvestmentReturns from "@/components/franchise/InvestmentReturn";
import TestimonialsSection from "@/components/franchise/Testimonial";
import WhatEEIProvides from "@/components/franchise/WhatEEIProvides";
import HowInvestmentWorks from "@/components/investor/HowInvestmentWorks";
import InvestEEI from "@/components/investor/InvestEEI";
import InvestmentOpportunities from "@/components/investor/InvestmentOpportunities";
import InvestorHero from "@/components/investor/InvestorsHero";
import Header from "@/components/layout/Header";

export default function HomePage() {
  return (
    <>
      <Header />
      <InvestorHero />
      <InvestEEI />
      <HowInvestmentWorks />
      <InvestmentOpportunities/>
      <ByTheNumbers />
      
      
      {/* Next sections go here, one-by-one */}
    </>
  );
}
