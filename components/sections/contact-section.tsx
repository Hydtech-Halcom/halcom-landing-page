"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { HEAD_OFFICE, BRANCH_OFFICE, CONTACT_INFO } from "@/lib/constants/company";

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">Get in Touch</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">Connect with Our Offices</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Visit us or reach out through our contact channels. Our expert team is ready to assist you with your IT infrastructure needs.</p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Head Office */}
          <motion.div className="group p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300" variants={itemVariants}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MapPin className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{HEAD_OFFICE.name}</h3>
            <div className="space-y-2 text-muted-foreground">
              {HEAD_OFFICE.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>

          {/* Branch Office */}
          <motion.div className="group p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300" variants={itemVariants}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <MapPin className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{BRANCH_OFFICE.name}</h3>
            <div className="space-y-2 text-muted-foreground">
              {BRANCH_OFFICE.lines.map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </motion.div>

          {/* Quick Contact */}
          <motion.div className="group p-8 bg-card rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1" variants={itemVariants}>
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Phone className="text-primary group-hover:text-white transition-colors duration-300" size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">Direct Communication</h3>
            <div className="space-y-4">
              <a href={`tel:${CONTACT_INFO.phone}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span className="font-medium">{CONTACT_INFO.phone}</span>
              </a>
              <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span className="font-medium truncate">{CONTACT_INFO.email}</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
