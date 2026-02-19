"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { itemVariants } from "@/lib/animations";
import { GridPattern } from "../ui/grid-pattern";
import { cn } from "@/lib/utils";
import { TextAnimate } from "../ui/text-animate";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

type Achievement = {
  image: string;
  label: string;
  description: string;
};

type CarouselPlugin = any;

const achievements: Achievement[] = [
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
  {
    image: "/assets/achievement/AwardedbyCiscoIndonesia.jpg",
    label: "FY16 Rookie Partner of the Year - Cisco Indonesia",
    description: "PT Cisco (2016)",
  },
  {
    image: "/assets/achievement/AwardedbyPTTechDataAdvanced.jpg",
    label: "Top Enterprise Partner - Geo X Partner Award FY21",
    description: "Awarded by PT Tech Data Advanced (2021)",
  },
  {
    image: "/assets/achievement/best-of-growth-for-it-solution-c-awarded-pt-synnex-metrodata-indonesia.jpg",
    label: "Best of Growth for IT Solutions Award",
    description: "Awarded by PT Synnex Metrodata Indonesia (2021)",
  },
  {
    image: "/assets/achievement/Best-GEO-Area-Performer-July-2016-June-2017-Awarded-by-PT-Tech-Data-Advanced-Solutions-Indonesia.jpg",
    label: "Best GEO Area Performer Award",
    description: "Awarded by PT Tech Data Advanced Solutions Indonesia (2016-2017)",
  },
  {
    image: "/assets/achievement/Recognition-to-1H09-Nusantara-IBM-System-x-Promo-Awarded-by-IBM.jpg",
    label: "Recognition to 1H09 Nusantara IBM System x Promo",
    description: "Awarded by IBM",
  },
  {
    image: "/assets/achievement/Rookie-of-The-Year-2005-Awarded-by-IBM.jpg",
    label: "Rookie of The Year",
    description: "Awarded by IBM (2005)",
  },
  {
    image: "/assets/achievement/Top-Partner-of-The-Year-2015-Awarded-by-PT-Synnex-Metrodata Indonesia.jpg",
    label: "Top Partner of The Year",
    description: "Awarded by PT Synnex Metrodata Indonesia (2015)",
  },
];

export default function Achievements() {
  const autoScrollPlugins = useMemo<CarouselPlugin[]>(
    () => [
      AutoScroll({
        playOnInit: true,
        speed: 0.65,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
      }),
    ],
    [],
  );

  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <TextAnimate animation="blurIn" as="h2" className="text-3xl sm:text-4xl font-bold mb-4 text-foreground">
            Our Achievements
          </TextAnimate>
          <TextAnimate animation="blurIn" as="p" className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the milestones and accomplishments that define our journey
          </TextAnimate>
        </motion.div>

        {/* Achievements Carousel */}
        <motion.div className="relative z-10 mx-auto max-w-6xl" initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true }}>
          <Carousel opts={{ align: "start", loop: true }} plugins={autoScrollPlugins} className="w-full">
            <CarouselContent>
              {achievements.map((achievement, index) => (
                <CarouselItem key={index} className="md:basis-1/2 xl:basis-1/3">
                  <AchievementCard achievement={achievement} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 h-10 w-10 border-border/70 bg-background/90 shadow-md backdrop-blur hover:bg-background" />
            <CarouselNext className="right-2 h-10 w-10 border-border/70 bg-background/90 shadow-md backdrop-blur hover:bg-background" />
          </Carousel>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-linear-to-r from-background via-background/70 to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-linear-to-l from-background via-background/70 to-transparent" />
        </motion.div>

        {/* Bottom Text */}
        <motion.div
          className="mt-16 rounded-2xl border border-border/80 bg-card/95 p-8 text-center shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
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
        className={cn("inset-0 opacity-60 mask-[radial-gradient(420px_circle_at_center,white,transparent)]", "skew-y-6")}
      />
    </section>
  );
}

function AchievementCard({ achievement }: { achievement: Achievement }) {
  return (
    <motion.article
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="group relative h-108 w-full cursor-pointer overflow-hidden rounded-xl border border-white/20 bg-card transition-all duration-500 "
    >
      <Image src={achievement.image} alt={achievement.label} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw" />

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-black/5" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-transparent via-white/0 to-white/15 opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
        <div className="rounded-xl border border-white/20 bg-black/30 p-4 backdrop-blur-md">
          <h3 className="text-lg font-semibold leading-snug text-white">{achievement.label}</h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/90">{achievement.description}</p>
        </div>
      </div>
    </motion.article>
  );
}
