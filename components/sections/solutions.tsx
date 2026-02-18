"use client";

import { motion } from "framer-motion";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import { TextAnimate } from "../ui/text-animate";

const solutions: iCardItem[] = [
  {
    title: "IT Infrastructure",
    description: "Halcom delivers comprehensive IT infrastructure solutions from assessmentand design to full implementation and integration.",
    tag: "Design",
    src: "/assets/why-choose/bank-backed.jpg",
    link: "#contact",
    color: "#020617", // Slate 950
    textColor: "#ffffff",
  },
  {
    title: "Physical & Cyber Security",
    description: "We provide comprehensive physical and cybersecurity solutions, combining surveillance systems, access control, and advanced cybersecurity technologies to protect your critical infrastructure and digital assets.",
    tag: "Solutions",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#0f172a", // Slate 900
    textColor: "#ffffff",
  },
  {
    title: "Managed Service & Maintenance",
    description: "As part of IT Solution for your needs, we provide comprehensive managed  services and maintenance solutions to ensure the performance, reliability, and continuity of your company.",
    tag: "Management",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#1e293b", // Slate 800
    textColor: "#ffffff",
  },
  {
    title: "Mechanical Electrical Cabling Services",
    description: " We are committed to delivering the best services through our end-to-end  mechanical, electrical, and structured cabling solutions to support reliable IT infrastructure and production environments.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 700
    textColor: "#ffffff",
  },
  {
    title: "Display and Audio",
    description: "We design and implement end-to-end display and audiovisual systems,  including video walls, digital signage, conference room solutions, and event space installations.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1634532843953-a4fe7334b50d?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 600
    textColor: "#ffffff",
  },
  {
    title: "Smart Meeting",
    description: "Our smart meeting solutions integrate audiovisual technology and hybrid  collaboration tools to create productive, connected, and technology-driven meeting environments.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1631246957572-0c49e4ee6ff4?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 600
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
