"use client";

import { motion } from "framer-motion";
import { Building2, Handshake, MapPin, Rocket, ShieldCheck, Factory, History, LineChart, HardHat, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

const milestones: Milestone[] = [
  {
    year: "2003",
    title: "COMPANY FOUNDED",
    description: "Halcom was founded in Batam, Indonesia as an IT Infrastructure Specialist.",
    icon: Building2,
  },
  {
    year: "2005–2008",
    title: "EARLY STRATEGIC PARTNERSHIPS",
    description: "Established early strategic partnerships with global principals including Cisco, Microsoft, Dell, and other international technology partners.",
    icon: Handshake,
  },
  {
    year: "2012",
    title: "BRANCH EXPANSION & ACHIEVEMENTS",
    description: "Opened new branches in Pekanbaru and Cikarang. Appointed as IBM Storage Distributor and received Best CEO Coverage award from Bina Data Mandiri.",
    icon: MapPin,
  },
  {
    year: "2013–2015",
    title: "PARTNERSHIP GROWTH & EXPANSION",
    description:
      "Expanded partnerships with Eaton UPS, Fujitsu, Rittal, HPE, and Axis (Silver Partner). Opened new branch in Karawang. Received IBM Rookie of the Year 2015 and Top Partner of the Year 2015 from PT Synnex Metrodata Indonesia.",
    icon: Users,
  },
  {
    year: "2016–2017",
    title: "NEW BUSINESS UNIT FORMATION",
    description: "Formed Mechanical & Electrical business unit. Added partnerships with Schneider Electric and Supermicro. Received Cisco FY18 Rookie Partner of the Year and Tech Data Best GEO Area Performer awards.",
    icon: HardHat,
  },
  {
    year: "2018",
    title: "BUSINESS UNIT EXPANSION",
    description: "Expanded into Industrial Automation. Achieved Dell Gold Partner, ETS Partner, and HPE Silver Partner status.",
    icon: Factory,
  },
  {
    year: "2020",
    title: "OPERATIONAL & SOLUTION STRENGTHENING",
    description: "Strengthened operations with a focus on Industrial Automation and Electrical Solutions.",
    icon: ShieldCheck,
  },
  {
    year: "2021",
    title: "ACHIEVEMENT MILESTONE",
    description: "Received Synnex Best Growth for IT Solution Channel (Sumatra, Kalimantan, Sulawesi) and Tech Data Top Enterprise Partner – GEO X awards.",
    icon: LineChart,
  },
  {
    year: "2022",
    title: "CORPORATE EXPANSION",
    description: "Established PT Halcom Inovasi Teknologi. Consolidated solution portfolio including Data Center, Networking, Server & Storage, Industrial Automation, Robotic Applications, IoT, and more.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "TWO DECADES CELEBRATION",
    description: "Celebrated two decades of Halcom Group's continuous growth and innovation.",
    icon: History,
  },
  {
    year: "2025",
    title: "PADANG BRANCH OPENING",
    description: "Opened a new branch of PT Halcom Inovasi Teknologi in Padang, continuing regional expansion.",
    icon: MapPin,
  },
];

export default function TimeLineRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!timelineRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate total width needed for all items
      const itemCount = milestones.length;
      const itemWidth = 380; // width of each item
      const gap = 32; // gap between items
      const totalWidth = (itemWidth + gap) * itemCount;

      // Calculate how much we need to scroll
      // Add extra padding to ensure the last item is fully visible and centered
      const viewportWidth = window.innerWidth;
      const extraPadding = viewportWidth * 0.7; // Add 50vw padding at the end
      const scrollDistance = totalWidth + extraPadding - viewportWidth;

      // Use the full scroll distance to ensure all items are visible
      const scrollEnd = -scrollDistance;

      // Create the horizontal scroll animation
      gsap.to(timelineRef.current, {
        x: scrollEnd,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%", // Increase scroll length to 300% of viewport height
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-20 lg:py-32 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <GridPattern width={40} height={40} x={-1} y={-1} className={cn("[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] opacity-40 dark:opacity-20")} />
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white dark:via-neutral-950/50 dark:to-neutral-950" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-neutral-800 dark:text-white uppercase">
            Our <span className="font-bold text-primary">Journey</span>
          </motion.h2>
        </div>

        {/* Desktop View: Horizontal Scroll Animation with GSAP */}
        <div className="hidden lg:block relative">
          {/* Container with fixed dimensions */}
          <div className="relative h-[500px] w-full overflow-visible">
            {/* Horizontal Line - fixed position */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/50 via-neutral-200 dark:via-neutral-800 to-primary/50 -translate-y-1/2 z-0" />

            {/* Timeline container that will be animated */}
            <div
              ref={timelineRef}
              className="absolute top-0 left-0 h-full flex items-center justify-center gap-8"
              style={{
                willChange: "transform",
                paddingLeft: "50vw", // Start from center
                paddingRight: "50vw", // End with center space
              }}
            >
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const isEven = idx % 2 === 0;

                return (
                  <div key={idx} className="flex-shrink-0 w-[380px] relative group" style={{ height: "400px" }}>
                    {/* Icon - Always centered on the line */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                      <motion.div className="w-14 h-14 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-xl shadow-primary/20 transition-transform duration-300">
                        <Icon size={24} className="text-white" />
                      </motion.div>
                    </div>

                    {/* Text Content - Alternating above/below */}
                    <div className={cn("absolute left-1/2 -translate-x-1/2 w-full max-w-[340px] text-center transition-all duration-500", isEven ? "bottom-1/2 pb-16 " : "top-1/2 pt-16")}>
                      <h3 className="text-3xl font-black text-neutral-800 dark:text-neutral-100 mb-2 transition-all duration-500 ">{milestone.year}</h3>
                      <h4 className="text-[11px] font-black tracking-[0.2em] text-primary uppercase mb-4 transition-all duration-500">{milestone.title}</h4>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed font-medium transition-all duration-500 ">{milestone.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View: Vertical Timeline */}
        <div className="lg:hidden relative z-10 px-6 max-w-2xl mx-auto w-full">
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 via-neutral-200 dark:via-neutral-800 to-transparent" />

          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-10%" }} transition={{ delay: idx * 0.05 }} className="relative pl-12">
                  {/* Circle on line */}
                  <div className="absolute left-[-11px] top-0 w-6 h-6 rounded-full bg-white dark:bg-neutral-950 border-4 border-primary shadow-sm z-20" />

                  <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-sm overflow-hidden relative group hover:shadow-md transition-all duration-300">
                    {/* Icon Background Decoration */}
                    <div className="absolute -right-4 -bottom-4 opacity-5 text-primary rotate-12 transition-all duration-500 group-hover:opacity-10 group-hover:rotate-0">
                      <Icon size={120} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-black text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors duration-300">{milestone.year}</span>
                        <div className="h-[2px] w-8 bg-primary/20 rounded-full transition-all duration-300 group-hover:w-12 group-hover:bg-primary/40" />
                        <Icon size={18} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h4 className="text-[10px] font-black tracking-widest text-primary uppercase mb-3 transition-all duration-300 group-hover:tracking-[0.3em]">{milestone.title}</h4>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">{milestone.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
