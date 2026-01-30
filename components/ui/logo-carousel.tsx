"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Logo {
  name: string;
  id: number;
  img: string;
}

interface LogoColumnProps {
  logos: Logo[];
  index: number;
  currentIndex: number;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos: Logo[], columnCount: number): Logo[][] => {
  const shuffled = shuffleArray(allLogos);
  const columns: Logo[][] = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

// Simplified animation variants - removed blur filter for better performance
const logoVariants = {
  initial: { y: 20, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    y: -20,
    opacity: 0,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const LogoColumn: React.FC<LogoColumnProps> = React.memo(
  ({ logos, index, currentIndex }) => {
    // Offset each column by its index
    const adjustedIndex = (currentIndex + index) % logos.length;
    const currentLogo = logos[adjustedIndex];

    return (
      <div className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentLogo.id}
            className="absolute inset-0 flex items-center justify-center"
            variants={logoVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Image
              src={currentLogo.img}
              alt={currentLogo.name}
              width={128}
              height={128}
              className="h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
              loading="lazy"
              unoptimized // Skip Next.js optimization for SVGs
            />
          </motion.div>
        </AnimatePresence>
      </div>
    );
  },
);

LogoColumn.displayName = "LogoColumn";

interface LogoCarouselProps {
  columnCount?: number;
  logos: Logo[];
}

export function LogoCarousel({ columnCount = 2, logos }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Memoize logo distribution to prevent recalculation
  const logoSets = useMemo(
    () => distributeLogos(logos, columnCount),
    [logos, columnCount],
  );

  // Update index every 3 seconds instead of tracking time every 100ms
  useEffect(() => {
    const maxLength = Math.max(...logoSets.map((col) => col.length));
    const intervalId = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % maxLength);
    }, 3000); // Changed from 100ms to 3000ms

    return () => clearInterval(intervalId);
  }, [logoSets]);

  return (
    <div className="flex space-x-4">
      {logoSets.map((columnLogos, index) => (
        <LogoColumn
          key={index}
          logos={columnLogos}
          index={index}
          currentIndex={currentIndex}
        />
      ))}
    </div>
  );
}

export { LogoColumn };
export type { Logo };
