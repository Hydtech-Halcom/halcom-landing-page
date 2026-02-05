"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section className="relative w-full h-dvh flex items-center overflow-hidden">
      {/* Background Image with Blending Overlay */}
      <div className="absolute inset-0 z-0">
        <Image src="/assets/images/family.jpg" alt="IT Infrastructure Background" fill priority quality={90} className="object-cover" sizes="100vw" />
        {/* Gradient Overlay for blending - Heavy on left for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div className="max-w-3xl" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Content */}
          <motion.div className="flex flex-col gap-6 sm:gap-8" variants={fadeInUp}>
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <motion.div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">About Halcom</p>
              </motion.div>

              <motion.h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                A New Idea <br />
                Inspires Us To Make <br /> Great Works
              </motion.h1>

              <motion.p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Halcom is an IT Infrastructure Specialist determined to provide total solutions to our clients with 20+ years of experience and expert certified teams.
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
