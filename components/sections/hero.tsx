"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";
import { NumberTicker } from "@/components/ui/number-ticker";

export default function Hero() {
  return (
    <section className="relative w-full min-h-dvh flex items-center overflow-hidden p-4 sm:p-10 lg:p-16 isolate">
      {/* Background Image with Blending Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image src="/assets/hero/bg-colorful.jpg" alt="IT Infrastructure Background" fill priority quality={90} className="object-cover" sizes="100vw" />
        {/* Gradient Overlay for blending - Heavy on left for text readability */}
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/90 to-background/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div className="max-w-3xl" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Content */}
          <motion.div className="flex flex-col gap-6 sm:gap-8" variants={fadeInUp}>
            <motion.div className="space-y-4 sm:space-y-6" variants={itemVariants}>
              <motion.div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm" whileHover={{ scale: 1.05 }}>
                <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">Welcome to Halcom</p>
              </motion.div>

              <motion.h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Complete IT Infrastructure <span className="text-primary">Solutions</span>
              </motion.h1>

              <motion.p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Halcom is an IT Infrastructure Specialist determined to provide total solutions to our clients with 20+ years of experience and expert certified teams.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-2" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="#contact"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-primary text-primary-foreground rounded-sm font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 text-sm sm:text-base"
                >
                  Get Free Consultation
                  <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
                <Link
                  href="#solutions"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-background/50 backdrop-blur-md border border-border text-foreground rounded-sm font-semibold hover:bg-background/80 transition-all text-sm sm:text-base"
                >
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>

            <motion.div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-12 border-t border-border/50 mt-4 sm:mt-8" variants={itemVariants}>
              {[
                { number: 20, suffix: "+", label: "Years Experience", useGrouping: true },
                { number: 200, suffix: "+", label: "Projects Completed", useGrouping: true },
                { number: 2003, suffix: "", label: "Since Founded", useGrouping: false },
              ].map((stat, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <p className="text-xl sm:text-3xl font-bold text-primary flex items-center gap-0.5">
                    <NumberTicker value={stat.number} useGrouping={stat.useGrouping} />
                    {stat.suffix}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
