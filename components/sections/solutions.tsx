"use client";

import { motion } from "framer-motion";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import { TextAnimate } from "../ui/text-animate";

const solutions: iCardItem[] = [
  {
    title: "Infrastructure",
    description: "Custom IT infrastructure design tailored to your business needs and scalability requirements.",
    tag: "Design",
    src: "/assets/why-choose/bank-backed.jpg",
    link: "#contact",
    color: "#020617", // Slate 950
    textColor: "#ffffff",
  },
  {
    title: "Cloud",
    description: "Comprehensive cloud infrastructure services for modern businesses and enterprises.",
    tag: "Solutions",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#0f172a", // Slate 900
    textColor: "#ffffff",
  },
  {
    title: "Network",
    description: "Advanced networking solutions with 24/7 monitoring and optimal performance management.",
    tag: "Management",
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#1e293b", // Slate 800
    textColor: "#ffffff",
  },
  {
    title: "Security",
    description: "Enterprise-grade security solutions with compliance to international standards.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 700
    textColor: "#ffffff",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="w-full bg-background">
      <div className="pt-24 pb-12">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <TextAnimate animation="blurIn" as="p" className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 px-4 inline-block py-1.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            Our Solutions
          </TextAnimate>
          <TextAnimate animation="blurIn" as="h2" className="text-3xl sm:text-5xl font-bold text-foreground mb-4 px-4">
            Transformative IT Solutions
          </TextAnimate>
          <TextAnimate animation="blurIn" as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto px-4">
            Get our exclusive services designed to drive business growth and operational excellence
          </TextAnimate>
        </motion.div>

        {/* Scroll Cards Parallax */}
        <div className="relative">
          <CardsParallax items={solutions} />
        </div>
      </div>
    </section>
  );
}
