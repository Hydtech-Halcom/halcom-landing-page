"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";
import { TextAnimate } from "../ui/text-animate";
import { TextLoop } from "../ui/text-loop";
import { FlowButton } from "../ui/flow-button";

export default function AboutCompany() {
  const highlights = [
    "Management with 20+ years IT and M&E experience",
    "Expert and certified professional teams",
    "Bank-backed by HSBC and Mandiri",
    "Strategic partnerships with global IT leaders",
    "Proven track record of 200+ successful projects",
    "Total solutions with seamless implementation",
  ];

  return (
    <section id="about" className="relative w-full py-20 lg:py-32 overflow-hidden isolate">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000" alt="Company Excellence Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-background/80 lg:bg-background/60 backdrop-blur-[2px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-3xl" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Content */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <motion.div variants={itemVariants}>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">Our Company</p>
              <TextAnimate animation="blurIn" as="h2" className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
                Crafting Success Tailored Solutions
              </TextAnimate>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-lg sm:text-xl text-foreground-secondary leading-relaxed">
                Halcom has been established since <span className="font-semibold text-primary">2003</span> with full commitment to provide the best IT solutions for our clients. We have successfully completed{" "}
                <span className="font-semibold text-primary">200+ projects</span> with various company backgrounds.
              </p>

              <p className="text-base sm:text-lg text-foreground-secondary leading-relaxed">
                Our mission is to empower businesses of all sizes to thrive in our ever-changing marketplace. We are committed to delivering exceptional value through our strategic insights and innovative approaches to IT infrastructure.
              </p>
            </motion.div>

            {/* Highlights */}
            {/* Mobile Layout */}
            <div className="flex justify-start md:hidden">
              <div className="space-y-3">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                    <span className="text-base font-medium text-foreground-secondary leading-normal wrap-break-word">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-start md:max-w-full">
              <TextLoop className="text-xl md:text-2xl font-medium text-foreground-secondary leading-normal" interval={3}>
                {highlights.map((highlight, index) => (
                  <span key={index} className="flex items-center gap-3 md:max-w-full">
                    <CheckCircle2 className="text-primary shrink-0" size={24} />
                    {highlight}
                  </span>
                ))}
              </TextLoop>
            </div>

            <Link href="/about">
              <FlowButton text="Read More About Us" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
