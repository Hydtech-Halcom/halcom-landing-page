"use client";
import { Navbar, NavBody, NavItems, MobileNav, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Solutions", link: "/#solutions" },
    { name: "Partner", link: "/partner" },
    { name: "Teams", link: "/teams" },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link href="/" className="relative z-20 flex items-center">
            <Image src="/images/halcom-alter.png" alt="Halcom Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton href="/#contact" variant="primary">
              Contact Us
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <Link href="/" className="relative z-20 flex items-center">
              <Image src="/images/halcom-alter.png" alt="Halcom Logo" width={100} height={32} className="h-8 w-auto" />
            </Link>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.map((item, idx) => (
              <a key={`mobile-link-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300">
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 pt-4">
              <NavbarButton href="/#contact" onClick={() => setIsMobileMenuOpen(false)} variant="primary" className="w-full">
                Contact Us
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  );
}
