"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BRANCH_OFFICES, CONTACT_INFO, NAV_LINKS } from "@/lib/constants/company";

export default function Footer() {
  return (
    <motion.footer className="w-full bg-foreground text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Image src="/images/halcom-white.png" alt="Halcom Logo" width={120} height={36} className="h-auto w-full max-w-40 md:max-w-45 lg:max-w-50" />
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block md:col-span-1">
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Offices */}
          {BRANCH_OFFICES.map((office, i) => (
            <div key={i}>
              <h3 className="font-semibold text-sm mb-3 uppercase">{office.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {office.lines.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
          ))}

          {/* Social Links */}
          {/* Social Links */}
          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">Find Us</h3>

            <div className="flex gap-3 mb-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Linkedin, href: "#" },
              ].map((social, i) => (
                <motion.a key={i} href={social.href} className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
