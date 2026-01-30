"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp, fadeInRight, containerVariants, itemVariants } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative w-full py-20 sm:py-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Left Content */}
          <motion.div className="flex flex-col gap-6" variants={fadeInUp}>
            <motion.div className="space-y-4" variants={itemVariants}>
              <motion.p className="text-primary font-semibold text-sm uppercase tracking-wider">Welcome to Halcom</motion.p>
              <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">Complete IT Infrastructure Solutions</motion.h1>
              <motion.p className="text-lg text-foreground-secondary leading-relaxed">
                Halcom is an IT Infrastructure Specialist determined to provide total solutions to our clients with 20+ years of experience and expert certified teams.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div className="flex flex-col sm:flex-row gap-4 pt-4" variants={itemVariants}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Get Free Consultation
                  <ArrowRight size={20} />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link href="#solutions" className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors">
                  Explore Solutions
                </Link>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div className="grid grid-cols-3 gap-4 pt-8 border-t border-border" variants={itemVariants}>
              {[
                { number: "20+", label: "Years Experience" },
                { number: "200+", label: "Projects Completed" },
                { number: "2003", label: "Since Founded" },
              ].map((stat, index) => (
                <motion.div key={index} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                  <p className="text-2xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-foreground-secondary">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div className="relative h-96 sm:h-[500px] lg:h-full rounded-lg overflow-hidden" variants={fadeInRight}>
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop" alt="IT Infrastructure" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/30 rounded-lg"></div>
            <motion.div className="absolute inset-0 flex items-center justify-center" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ delay: 0.3, duration: 0.6 }} viewport={{ once: true }}>
              <motion.div className="text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8" animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <motion.div className="inline-block mb-6" animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}>
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-2xl">HC</div>
                </motion.div>
                <h3 className="text-2xl font-bold text-foreground mb-2">IT Infrastructure</h3>
                <p className="text-foreground-secondary text-sm">Specialist Solutions</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
