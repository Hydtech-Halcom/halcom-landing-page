"use client";

import StrategicPartnershipSection from "@/components/sections/partner/strategic-partnership-section";
import TechnologyPartnerSection from "@/components/sections/partner/technology-partner-section";

export default function PartnerPage() {
  return (
    <section className="min-h-screen py-2 md:pt-12">
      <div className="container mx-auto px-4">
        <TechnologyPartnerSection />
        <StrategicPartnershipSection />
      </div>
    </section>
  );
}
