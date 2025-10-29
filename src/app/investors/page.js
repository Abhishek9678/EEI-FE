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
