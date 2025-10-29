"use client";

import TurnkeyOperations from "@/components/sections/TurnkeyOperations";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import CoreServicesSlider from "@/components/sections/CoreServicesSlider";
import LiumGoWork from "@/components/sections/LiumGoWork";
import HowLiumGoWorks from "@/components/sections/HowLiumGoWork";
import PartnersSection from "@/components/sections/PartnersSection";
import OperationsInstallations from "@/components/sections/OperationsInstallations";
import ByTheNumbers from "@/components/sections/ByTheNumbers";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import VideoSection from "@/components/sections/VideoSection";
import FooterWithForm from "@/components/sections/FooterWithForm";


export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
       <LiumGoWork />
      <HowLiumGoWorks />
      <TurnkeyOperations />
      <VideoSection />
       <CoreServicesSlider />
       <PartnersSection />
       <OperationsInstallations />
       <ByTheNumbers />
       <TestimonialsSection />
       <FooterWithForm />
     
    </>
  );
}
