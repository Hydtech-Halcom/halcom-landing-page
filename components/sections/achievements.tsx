"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { IconTrendingUp, IconBriefcase, IconStar, IconRocket } from "@/components/ui/aceternity-icons";
import { containerVariants, itemVariants } from "@/lib/animations";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function Achievements() {
  const achievements = [
    {
      image: "/assets/achievement/ISO45001.jpeg",
      label: "ISO 45001:2018",
      description: "Occupational Health and Safety Management System (2024)",
    },
    {
      image: "/assets/achievement/ISO9001.jpeg",
      label: "ISO 9001:2015",
      description: "Quality Management (2024)",
    },
    {
      image: "/assets/achievement/Sertifikat-PLN.jpeg",
      label: "Sertifikat PLN",
      description: "PLN Certification Achievement",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">Our Achievements</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Explore the milestones and accomplishments that define our journey</p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto relative z-10">
          {achievements.map((achievement, index) => {
            return <AchievementCard key={index} achievement={achievement} index={index} />;
          })}
        </div>

        {/* Bottom Text */}
        <motion.div className="mt-16 p-8 bg-card border border-border rounded-lg text-center shadow-sm" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} viewport={{ once: true }}>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            As we commit to always giving the best IT solutions for our clients, we also achieve recognition in our field with multiple industry awards and certifications that validate our expertise and commitment to excellence.
          </p>
        </motion.div>
      </div>
      <GridPattern
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn("mask-[radial-gradient(400px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12")}
      />
    </section>
  );
}

function AchievementCard({ achievement, index }: { achievement: any; index: number }) {
  return (
    <>
      <motion.div
        variants={itemVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative text-center p-6 rounded-lg bg-card border border-border overflow-hidden flex flex-col items-center h-full shadow-sm group cursor-pointer"
      >
        <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
          <div className="absolute inset-0 bg-muted animate-pulse" />
          <Image src={achievement.image} alt={achievement.label} fill className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
        </div>
        <h3 className="font-semibold text-lg mb-2 text-primary mt-auto">{achievement.label}</h3>
        <p className="text-muted-foreground text-sm">{achievement.description}</p>
      </motion.div>
    </>
  );
}
