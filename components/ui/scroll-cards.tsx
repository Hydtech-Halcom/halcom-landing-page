"use client";
import { FC } from "react";

import Image from "next/image";
import { motion } from "framer-motion";

// Types
interface iCardItem {
  title: string;
  description: string;
  tag: string;
  src: string;
  link: string;
  color: string;
  textColor: string;
}

interface iCardProps extends Omit<iCardItem, "src" | "link" | "tag"> {
  i: number;
  src: string;
}

// Constants
const TOP_VALUES: Record<number, string> = {
  1: "1/2",
  2: "1/2",
  3: "1/2",
  4: "1/2",
};

// Components
const Card: FC<iCardProps> = ({ title, description, color, textColor, i, src }) => {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0 px-4">
      <div
        className="relative flex flex-col h-[450px] md:h-[550px] w-full max-w-[1000px] py-12 px-8 md:px-16
				items-center justify-center mx-auto rounded-3xl shadow-2xl overflow-hidden border border-white/10"
        style={{ backgroundColor: color }}
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 opacity-40">
          <Image className="w-full h-full object-cover" src={src} alt={title} fill priority={i === 0} />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center gap-2">
          <motion.span initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="text-4xl md:text-8xl font-bold tracking-tighter" style={{ color: textColor }}>
            {title}
          </motion.span>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="text-lg md:text-2xl font-medium max-w-2xl leading-snug opacity-90" style={{ color: textColor }}>
            {description}
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.4 }} className="mt-6">
            <div className="px-6 py-2 rounded-full border text-xs font-bold backdrop-blur-md uppercase tracking-[0.2em]" style={{ borderColor: textColor, color: textColor }}>
              Halcom Solution
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface iCardSlideProps {
  items: iCardItem[];
}

const CardsParallax: FC<iCardSlideProps> = ({ items }) => {
  return (
    <div className="relative">
      {items.map((project, i) => {
        return <Card key={`p_${i}`} {...project} i={i} />;
      })}
    </div>
  );
};

export { CardsParallax, type iCardItem };
