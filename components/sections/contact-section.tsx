"use client";

import Image, { StaticImageData } from "next/image";
import { MapPin, LucideIcon, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { BRANCH_OFFICES } from "@/lib/constants/company";
import { TextAnimate } from "../ui/text-animate";

// WhatsApp Icon Component
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

interface OfficeCardProps {
  icon: LucideIcon;
  title: string;
  area?: string;
  lines: string[];
  badge?: string;
  imageSrc: StaticImageData | string;
  phone?: string;
  email?: string;
  maps?: string;
  available?: string;
}

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <TextAnimate
            animation="blurIn"
            as="p"
            className="text-primary font-semibold text-sm uppercase tracking-wider mb-4"
          >
            Get in Touch
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="h2"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Contact with Our Offices
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="p"
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-0"
          >
            We&apos;re here to help you build and maintain a robust IT
            infrastructure.
          </TextAnimate>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Branch Offices */}
          {BRANCH_OFFICES.map((office, i) => (
            <OfficeCard
              key={i}
              icon={MapPin}
              title={office.name}
              area={office.area}
              imageSrc={office.imageSrc}
              lines={office.lines}
              phone={office.phone}
              email={office.email}
              maps={office.maps}
              available={office.available}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function OfficeCard({
  icon: Icon,
  title,
  area,
  lines,
  imageSrc,
  phone,
  email,
  maps,
  available,
}: OfficeCardProps) {
  // Format phone number for WhatsApp (remove spaces and special chars)
  const formatPhoneForWA = (phoneNumber: string) => {
    return phoneNumber.replace(/[^0-9]/g, "");
  };

  const CardContent = (
    <>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          priority={false}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55 group-hover:bg-black/40 transition-colors" />

      {/* Content */}
      <div className="relative p-8 text-white">
        {/* Icon */}
        <div className="w-14 h-14 bg-white/15 rounded-xl flex items-center justify-center mb-6">
          <Icon size={28} className="text-white" />
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold mb-2">{title}</h3>

        {/* Area Badge */}
        {area && (
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/20 text-white/90 backdrop-blur mb-4">
            {area}
          </span>
        )}

        {/* Address */}
        <div className="space-y-1 text-sm text-white/90 mb-3">
          {lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* Available Hours */}
        {available && (
          <div className="flex items-center gap-2 text-sm text-white/80 mb-4">
            <Clock size={16} />
            <span>{available}</span>
          </div>
        )}

        {/* Contact Links */}
        <div className="flex flex-col gap-2 mt-4">
          {phone && (
            <a
              href={`https://wa.me/${formatPhoneForWA(phone)}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-white/90 hover:text-green-400 transition-colors"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>{phone}</span>
            </a>
          )}
          {email && (
            <a
              href={`mailto:${email}`}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-2 text-sm text-white/90 hover:text-primary transition-colors"
            >
              <Mail size={16} />
              <span>{email}</span>
            </a>
          )}
        </div>
      </div>

      {/* Subtle Glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition bg-linear-to-br from-primary/20 via-transparent to-transparent" />
    </>
  );

  // If maps link exists, wrap in anchor tag
  if (maps) {
    return (
      <motion.a
        href={maps}
        target="_blank"
        rel="noopener noreferrer"
        variants={itemVariants}
        className="relative group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all cursor-pointer block"
      >
        {CardContent}
      </motion.a>
    );
  }

  return (
    <motion.div
      variants={itemVariants}
      className="relative group rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-2xl transition-all"
    >
      {CardContent}
    </motion.div>
  );
}
