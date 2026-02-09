"use client";
import { Navbar, NavBody, NavItems, MobileNav, NavbarButton, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/resizable-navbar";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Data untuk item navbar
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About Us", link: "/about" },
    { name: "Solutions", link: "/#solutions" },
    { name: "Projects", link: "/projects" },
    { name: "Events", link: "/events" },
  ];

  // Data untuk dropdown About
  const aboutDropdownItems = [
    { name: "About Us", link: "/about" },
    { name: "Partners", link: "/partner" },
    { name: "Customers", link: "/customers" },
    { name: "Qualifications", link: "/qualifications" },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Fungsi untuk render item navbar desktop dengan dropdown
  const renderDesktopNavItems = () => {
    return (
      <div
        onMouseLeave={() => setHoveredIndex(null)}
        className="absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2"
      >
        {navItems.map((item, idx) =>
          item.name === "About Us" ? (
            <div
              key={`link-${idx}`}
              ref={dropdownRef}
              className="relative px-4 py-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => {
                if (!isAboutDropdownOpen) {
                  setHoveredIndex(null);
                }
              }}
            >
              <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} onMouseEnter={() => setHoveredIndex(idx)} className="flex items-center gap-1 text-neutral-600 dark:text-neutral-300 relative z-20">
                {item.name}
                <ChevronDown className={`h-4 w-4 transition-transform ${isAboutDropdownOpen ? "rotate-180" : ""}`} />
              </button>

              {/* Background hover effect untuk About */}
              {hoveredIndex === idx && !isAboutDropdownOpen && <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800" />}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-950 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-800 py-2 z-30"
                  >
                    {aboutDropdownItems.map((dropdownItem, dropdownIdx) => (
                      <Link
                        key={`dropdown-${dropdownIdx}`}
                        href={dropdownItem.link}
                        onClick={() => {
                          setIsAboutDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div key={`link-${idx}`} className="relative px-4 py-2" onMouseEnter={() => setHoveredIndex(idx)} onMouseLeave={() => setHoveredIndex(null)}>
              <a className="text-neutral-600 dark:text-neutral-300 relative z-20" href={item.link}>
                <span className="relative z-20">{item.name}</span>
              </a>

              {hoveredIndex === idx && <motion.div layoutId="hovered" className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800" />}
            </div>
          )
        )}
      </div>
    );
  };

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <Link href="/" className="relative z-20 flex items-center">
            <Image src="/images/halcom-alter.png" alt="Halcom Logo" width={100} height={32} className="h-8 w-auto" />
          </Link>

          {/* Custom NavItems dengan dropdown support */}
          {renderDesktopNavItems()}

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
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300 block py-2 hover:text-primary transition-colors">
              <span className="block">Home</span>
            </a>

            {/* Dropdown About untuk mobile */}
            <div className="w-full">
              <div className="text-neutral-600 dark:text-neutral-300 font-medium py-2">About</div>
              <div className="pl-4 space-y-2 border-l border-gray-200 dark:border-neutral-700 ml-2">
                {aboutDropdownItems.map((item, idx) => (
                  <a key={`mobile-dropdown-${idx}`} href={item.link} onClick={() => setIsMobileMenuOpen(false)} className="block text-sm text-neutral-500 dark:text-neutral-400 hover:text-primary transition-colors py-1">
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <a href="/#solutions" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300 block py-2 hover:text-primary transition-colors">
              <span className="block">Solutions</span>
            </a>

            <a href="/teams" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300 block py-2 hover:text-primary transition-colors">
              <span className="block">Teams</span>
            </a>

            <a href="/events" onClick={() => setIsMobileMenuOpen(false)} className="relative text-neutral-600 dark:text-neutral-300 block py-2 hover:text-primary transition-colors">
              <span className="block">Events</span>
            </a>

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
