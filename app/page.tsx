"use client";

import { useState } from "react";
import Benefits from "@/components/Benefits";
import Calculator from "@/components/Calculator";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import PopularServices from "@/components/PopularServices";
import ServiceGrid from "@/components/ServiceGrid";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  const [selectedService, setSelectedService] = useState<{ id: string | null; requestId: number }>({
    id: null,
    requestId: 0,
  });

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService((current) => ({
      id: serviceId,
      requestId: current.requestId + 1,
    }));

    window.requestAnimationFrame(() => {
      document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <Hero />
      <ServiceGrid onServiceSelect={handleServiceSelect} />
      <Calculator
        key={selectedService.requestId}
        initialServiceId={selectedService.id}
      />
      <PopularServices onServiceSelect={handleServiceSelect} />
      <Benefits />
      <HowItWorks />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </main>
  );
}
