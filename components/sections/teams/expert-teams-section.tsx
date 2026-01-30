"use client";

import React from "react";
import { TESTIMONIALS } from "@/lib/constants/teams";
import { GradientHeading } from "@/components/shared/gradient-heading";
import { TestimonialsColumn } from "@/components/testimonials-columns-1";

export default function ExpertTeamsSection() {
  const firstColumn = TESTIMONIALS.slice(0, 3);
  const secondColumn = TESTIMONIALS.slice(3, 6);
  const thirdColumn = TESTIMONIALS.slice(6, 9);

  return (
    <section className="py-2 md:py4 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <GradientHeading size="lg" weight="bold">
            Our Expert Teams
          </GradientHeading>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Halcom has a team of dynamic and certified professionals across
            various IT segments, with knowledge and skills that are regularly
            updated.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
