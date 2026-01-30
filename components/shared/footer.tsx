"use client";

import Link from "next/link";
import { Facebook, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { HEAD_OFFICE, BRANCH_OFFICE, CONTACT_INFO, NAV_LINKS } from "@/lib/constants/company";

export default function Footer() {
  return (
    <motion.footer className="w-full bg-foreground text-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="lg:col-span-1">
            <Image src="/images/halcom-white.png" alt="Halcom Logo" width={160} height={48} className="h-10 w-auto" />
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

          {/* Head Office */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">{HEAD_OFFICE.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {HEAD_OFFICE.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < HEAD_OFFICE.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Branch Office */}
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide">{BRANCH_OFFICE.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              {BRANCH_OFFICE.lines.map((line, index) => (
                <span key={index}>
                  {line}
                  {index < BRANCH_OFFICE.lines.length - 1 && <br />}
                </span>
              ))}
            </p>
          </div>

          {/* Social Links */}
          <div className="col-span-1 lg:col-span-1 text-right">
            <h3 className="font-semibold text-sm mb-3 uppercase tracking-wide text-left md:text-right ">Find Us</h3>
            <div className="flex gap-3 lg:justify-end">
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
            <p className="text-gray-300 text-sm mt-4 text-left md:text-right">
              {CONTACT_INFO.phone} | {CONTACT_INFO.email}
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
