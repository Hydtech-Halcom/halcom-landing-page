"use client";

import Image, { StaticImageData } from "next/image";
import { Phone, MapPin, LucideIcon } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { HEAD_OFFICE, BRANCH_OFFICES, CONTACT_INFO } from "@/lib/constants/company";
import { TextAnimate } from "../ui/text-animate";

interface OfficeCardProps {
  icon: LucideIcon;
  title: string;
  lines: string[];
  badge?: string;
  imageSrc: StaticImageData | string;
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <TextAnimate animation="blurIn" as="p" className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Get in Touch
          </TextAnimate>
          <TextAnimate animation="blurIn" as="h2" className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact with Our Offices
          </TextAnimate>
          <TextAnimate animation="blurIn" as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0">
            We're here to help you build and maintain a robust IT infrastructure.
          </TextAnimate>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Head Office */}
          <OfficeCard icon={MapPin} title={HEAD_OFFICE.name} lines={HEAD_OFFICE.lines} imageSrc={HEAD_OFFICE.imageSrc} />

          {/* Branch Offices */}
          {BRANCH_OFFICES.map((office, i) => (
            <OfficeCard key={i} icon={MapPin} title={office.name} imageSrc={office.imageSrc} lines={office.lines} />
          ))}

          {/* Contact */}
          <ContactCard />
        </motion.div>
      </div>
    </section>
  );
}

function OfficeCard({ icon: Icon, title, lines, badge, imageSrc }: OfficeCardProps) {
  return (
    <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src={imageSrc} alt={title} fill priority={false} className="object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors" />

      {/* Content */}
      <div className="relative p-8 text-white">
        {badge && <span className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-primary/80 text-white backdrop-blur">{badge}</span>}

        {/* Icon */}
        <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-6">
          <Icon size={28} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-3">{title}</h3>

        {/* Address */}
        <div className="space-y-1 text-sm text-white/90">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-primary/20 via-transparent to-transparent" />
    </motion.div>
  );
}

function ContactCard() {
  return (
    <motion.div variants={itemVariants} className="relative group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image src="/assets/contact/cs.jpg" alt="Contact background" fill className="object-cover transition-transform duration-500 group-hover:scale-105" priority={false} />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors" />

      {/* Content */}
      <div className="relative p-8 text-white flex flex-col justify-between h-full">
        <div>
          {/* Icon */}
          <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-6 ">
            <Phone size={28} className="text-white" />
          </div>

          {/* Title */}
          <h3 className="text-xl font-bold mb-4">Direct Communication</h3>

          {/* Contact */}
          <div className="space-y-4">
            <a href={`tel:${CONTACT_INFO.phone}`} className="block font-medium text-white/90 hover:text-white transition-colors">
              {CONTACT_INFO.phone}
            </a>

            <a href={`mailto:${CONTACT_INFO.email}`} className="block font-medium truncate text-white/90 hover:text-white transition-colors">
              {CONTACT_INFO.email}
            </a>
          </div>
        </div>

        {/* Footer */}
        <p className="text-sm text-white/80 mt-6">Available on business hours</p>
      </div>

      {/* Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-primary/20 via-transparent to-transparent" />
    </motion.div>
  );
}
