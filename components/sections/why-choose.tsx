"use client";

import { motion } from "framer-motion";
import { IconBriefcase, IconTrendingUp, IconStar, IconCheck } from "@/components/ui/aceternity-icons";
import { containerVariants, itemVariants } from "@/lib/animations";
import { TextAnimate } from "../ui/text-animate";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function WhyChoose() {
  const reasons = [
    {
      icon: IconBriefcase,
      title: "Expert Teams",
      description: "Management with 20+ years IT and M&E experience with certified professional experts.",
      image: "/assets/why-choose/team.jpg",
    },
    {
      icon: IconTrendingUp,
      title: "Bank-Backed",
      description: "Fund supported by international bank HSBC and national bank Mandiri for financial stability.",
      image: "/assets/why-choose/bank-backed.jpg",
    },
    {
      icon: IconStar,
      title: "Strategic Partnerships",
      description: "Strategic partnership with global players in IT industry for cutting-edge solutions.",
      image: "/assets/why-choose/strategic.jpg",
    },
    {
      icon: IconCheck,
      title: "Total Solutions",
      description: "Comprehensive IT solutions including convenience in implementing the solutions we provide.",
      image: "/assets/why-choose/solutions.jpg",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-background-secondary overflow-hidden">
      <div className="absolute inset-0 z-0">
        <GridPattern width={30} height={30} x={-1} y={-1} strokeDasharray={"4 2"} className={cn("mask-[radial-gradient(300px_circle_at_center,white,transparent)]")} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <TextAnimate animation="blurIn" as="h2" className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </TextAnimate>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">Discover what makes Halcom the trusted partner for IT Infrastructure solutions</p>
        </div>

        {/* Reasons Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div key={index} variants={itemVariants} className="relative bg-white border border-border overflow-hidden group cursor-pointer h-75">
                {/* Konten Default (Saat tidak hover) */}
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center transition-all duration-500 group-hover:opacity-0 z-10">
                  <motion.div className="mb-4 flex items-center justify-center w-12 h-12 bg-primary/10 " whileHover={{ scale: 1.1, rotate: 10 }} whileTap={{ scale: 0.95 }}>
                    <Icon className="text-primary" />
                  </motion.div>
                  <h3 className="font-semibold text-lg text-foreground mb-2 text-center">{reason.title}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed text-center">{reason.description}</p>
                </div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {/* Gambar Background */}
                  <Image src={reason.image} alt={reason.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw" loading={index === 0 ? "eager" : "lazy"} priority={index === 0} />

                  <div className="absolute inset-0 bg-black/50"></div>
                  <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-white">
                    <div className="mb-4 flex items-center justify-center w-12 h-12 bg-white/20 rounded-lg backdrop-blur-sm">
                      <Icon className="text-white" />
                    </div>

                    <h3 className="font-semibold text-lg text-white mb-2 text-center">{reason.title}</h3>

                    <p className="text-white/90 text-sm leading-relaxed text-center">{reason.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
