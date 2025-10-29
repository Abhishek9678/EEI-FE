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
import PartnersSection from "@/components/sections/PartnersSection";
import InvestEnquirySection from "./InvestEnquirySection";
import LeadCaptureSection from "./LeadCaptureSection";
import BuildTheFutureSection from "./BuildTheFutureSection";
import InvestorPitchDeckSection from "./InvestorPitchDeckSection";
import FooterWithForm from "@/components/sections/FooterWithForm";
import InvestImpactSection from "@/components/investors/InvestImpactSection";

export default function HomePage() {
  return (
    <>
      <Header />
       <InvestorHero />
      <InvestEEI />
      <HowInvestmentWorks />
      <InvestmentOpportunities/>
      <ByTheNumbers />
     <PartnersSection />
        <TestimonialsSection />
       
       <BuildTheFutureSection />
      <InvestorPitchDeckSection />
      <InvestImpactSection />
      <FooterWithForm />
      
      {/* Next sections go here, one-by-one */}
    </>
  );
}
