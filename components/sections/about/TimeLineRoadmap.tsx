"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export default function TimelineRoadmap() {
  return (
    <section className="relative py-16 my-3 h-fit rounded-3xl overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <GridPattern className={cn("mask-[radial-gradient(1000px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-0%] h-[200%] skew-y-12")} />

        <h2 className="text-primary text-3xl font-bold mb-11 text-center">Our Timeline</h2>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="relative w-full flex justify-center">
          <Image src="/assets/about/about-halcom.png" alt="Halcom Timeline Roadmap" width={1200} height={600} className="w-full h-auto max-w-5xl rounded-xl shadow-2xl" priority />
        </motion.div>
      </div>
    </section>
  );
}
