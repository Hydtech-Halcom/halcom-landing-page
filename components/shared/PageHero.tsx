"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, containerVariants, itemVariants } from "@/lib/animations";
import { ReactNode } from "react";

export interface PageHeroProps {
  /** Background image path */
  backgroundImage?: string;
  /** Alt text for background image */
  backgroundAlt?: string;
  /** Badge/tag text above the title */
  badge?: string;
  /** Main title - can be string or ReactNode for custom formatting */
  title: ReactNode;
  /** Description text below the title */
  description?: string;
  /** Additional content below description (e.g., buttons, stats) */
  children?: ReactNode;
  /** Custom gradient overlay className */
  overlayClassName?: string;
  /** Custom section className */
  className?: string;
  /** Custom content container className */
  contentClassName?: string;
  /** Whether to show full height (100dvh) or auto height */
  fullHeight?: boolean;
}

export function PageHero({
  backgroundImage = "/assets/images/family.jpg",
  backgroundAlt = "Hero Background",
  badge,
  title,
  description,
  children,
  overlayClassName = "bg-linear-to-r from-background via-background/90 to-background/30",
  className = "",
  contentClassName = "max-w-3xl",
  fullHeight = true,
}: PageHeroProps) {
  return (
    <section
      className={`relative w-full ${fullHeight ? "h-dvh" : "py-24 sm:py-32"} flex items-center overflow-hidden ${className}`}
    >
      {/* Background Image with Blending Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={backgroundAlt}
          fill
          priority
          quality={90}
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient Overlay for blending */}
        <div className={`absolute inset-0 ${overlayClassName}`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className={contentClassName}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Content */}
          <motion.div
            className="flex flex-col gap-6 sm:gap-8"
            variants={fadeInUp}
          >
            <motion.div
              className="space-y-4 sm:space-y-6"
              variants={itemVariants}
            >
              {/* Badge */}
              {badge && (
                <motion.div
                  className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-primary font-semibold text-xs sm:text-sm uppercase tracking-wider">
                    {badge}
                  </p>
                </motion.div>
              )}

              {/* Title */}
              <motion.h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                {title}
              </motion.h1>

              {/* Description */}
              {description && (
                <motion.p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  {description}
                </motion.p>
              )}
            </motion.div>

            {/* Additional Content (buttons, stats, etc.) */}
            {children && (
              <motion.div variants={itemVariants}>{children}</motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default PageHero;
