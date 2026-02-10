"use client";

import { motion } from "framer-motion";
import { CardsParallax, type iCardItem } from "@/components/ui/scroll-cards";
import { TextAnimate } from "../ui/text-animate";

const solutions: iCardItem[] = [
  {
    title: "IT Infrastructure",
    description: "IT infrastructure, also called technology infrastructure, is what enables a company to build and run the applications that underpin its business.",
    tag: "Design",
    src: "/assets/why-choose/bank-backed.jpg",
    link: "#contact",
    color: "#020617", // Slate 950
    textColor: "#ffffff",
  },
  {
    title: "Physical & Cyber Security",
    description: "IT perimeter security is the process of securing a network perimeter by implementing a combination of software, devices, and techniques.",
    tag: "Solutions",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#0f172a", // Slate 900
    textColor: "#ffffff",
  },
  {
    title: "Managed Service & Maintenance",
    description: "As part of IT Solution for your needs, we committed to give best services through our managed services and maintenance services solution.",
    tag: "Management",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#1e293b", // Slate 800
    textColor: "#ffffff",
  },
  {
    title: "Mechanical Electrical Cabling Services",
    description: "To achieved end to end solution to our customer, we provide cabling solution services for your IT and Production Infrastructure.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 700
    textColor: "#ffffff",
  },
  {
    title: "Display and Audio",
    description: "includes compute, network, workplace, data platform and edge capabilities.",
    tag: "Compliance",
    src: "https://images.unsplash.com/photo-1634532843953-a4fe7334b50d?q=80&w=2000&auto=format&fit=crop",
    link: "#contact",
    color: "#334155", // Slate 600
    textColor: "#ffffff",
  },
  {
    title: "Smart Meeting",
    description: "Our smart meeting room solution integrates advanced audiovisual systems and seamless collaboration tools, enabling efficient discussions, remote connectivity, and decision-making for university teams and stakeholders.",
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
