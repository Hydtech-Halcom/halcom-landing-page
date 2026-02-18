"use client";

import { Content } from "../content";
import { motion } from "framer-motion";
import { FlippingCard } from "@/components/shared/flipping-card";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface MobileBusinessCardProps {
  data: CardData;
}
interface GenericCardFrontProps {
  data: CardData["front"];
}

interface GenericCardBackProps {
  data: CardData["back"];
}

interface CardData {
  id: string;
  front: {
    imageSrc: string;
    imageAlt: string;
    title: string;
    description: string;
  };
  back: {
    description: string;
    buttonText: string;
  };
}

const cardsData: CardData[] = [
  {
    id: "it-infrastructure",
    front: {
      imageSrc: "/assets/images/it.jpg",
      imageAlt: "IT Infrastructure Specialist",
      title: "IT Infrastructure Specialist",
      description: "Halcom focused on main line of business as an IT Infrastructure Specialist.",
    },
    back: {
      description: "We provide IT hardware and software solutions along with professional services including project management, installation, testing, and training to support stable and efficient system operations.",
      buttonText: "View Portfolio",
    },
  },
  {
    id: "industrial-automation",
    front: {
      imageSrc: "/assets/images/mechanic.jpeg",
      imageAlt: "Industrial Automation",
      title: "Industrial Automation",
      description: "Halcom operates in Industrial and IoT systems including building automation, factory automation, and system integration.",
    },
    back: {
      description: "Our Industrial and IoT activities cover Building Automation Systems, Factory Automation, Robotic Applications, and integrated monitoring and control platforms for commercial and industrial environments. ",
      buttonText: "Learn More",
    },
  },
  {
    id: "mechanical-electrical",
    front: {
      imageSrc: "/assets/images/electrical.jpg",
      imageAlt: "Mechanical & Electrical",
      title: "Mechanical & Electrical",
      description: "Halcom operates in mechanical and electrical works, supporting facility and infrastructure requirements.",
    },
    back: {
      description: "Halcom provides design, supervise and installation of electrical and mechanical works at various facilities such as office buildings, hotels, airport, and manufacturing.",
      buttonText: "Learn More",
    },
  },
  {
    id: "managed-service",
    front: {
      imageSrc: "/assets/images/service.jpg",
      imageAlt: "Managed Services",
      title: "Managed Services",
      description: "Halcom delivers managed services and maintenance support for IT infrastructure operations.",
    },
    back: {
      description: "Our managed services include preventive and corrective maintenance, NOC/SOC support, and SLA-based operational coverage to ensure system stability and continuity.",
      buttonText: "Learn More",
    },
  },
];

export function BussinessSection() {
  return (
    <Content>
      <section className="max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div className="col-span-2">
            {/* <span className="inline-block px-4 py-1.5 text-primary font-semibold tracking-widest text-sm bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full">OUR LINE OF BUSINESS</span> */}
            <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl font-light tracking-tight text-neutral-800 dark:text-white uppercase text-center">
              Our <span className="font-bold text-primary">Line of Business</span>
            </motion.h2>
          </div>

          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* DESKTOP VERSION */}
            <div className="hidden lg:contents">
              {cardsData.map(card => (
                <FlippingCard key={card.id} height={420} frontContent={<GenericCardFront data={card.front} />} backContent={<GenericCardBack data={card.back} />} />
              ))}
            </div>

            {/* MOBILE & TABLET VERSION */}
            <div className="lg:hidden contents">
              {cardsData.map(card => (
                <MobileBusinessCard key={card.id} data={card} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
}

function GenericCardFront({ data }: GenericCardFrontProps) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl">
      {/* IMAGE */}
      <img src={data.imageSrc} alt={data.imageAlt} className="absolute inset-0 h-full w-full object-cover" />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />

      {/* TEXT PROPOSITION */}
      <div className="relative z-10 flex h-full flex-col justify-end p-5">
        <h3 className="text-lg font-semibold text-white">{data.title}</h3>
        <p className="mt-2 text-sm text-white/80 leading-relaxed">{data.description}</p>
      </div>
    </div>
  );
}

function GenericCardBack({ data }: GenericCardBackProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full p-6">
      <p className="text-[18px] mt-2 text-muted-foreground text-center">{data.description}</p>
    </div>
  );
}

function MobileBusinessCard({ data }: MobileBusinessCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-xl overflow-hidden border bg-card shadow-sm transition-all duration-300">
      {/* IMAGE */}
      <div className="relative h-48">
        <img src={data.front.imageSrc} alt={data.front.imageAlt} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="relative z-10 p-4 flex items-end h-full">
          <h3 className="text-white text-lg font-semibold">{data.front.title}</h3>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <p className="text-sm text-muted-foreground">{data.front.description}</p>

        {/* EXPAND BUTTON */}
        <button onClick={() => setOpen(!open)} className="flex items-center gap-2 mt-4 text-primary font-medium text-sm">
          {open ? "Hide Details" : "View Details"}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {/* EXPANDED SECTION */}
        <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
          <div className="overflow-hidden">
            <p className="text-sm text-muted-foreground leading-relaxed">{data.back.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
