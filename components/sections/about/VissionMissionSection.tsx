"use client";

import { TextAnimate } from "@/components/ui/text-animate";
import { Content } from "../content";
import { motion } from "framer-motion";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { generateSquares } from "@/components/shared/generate-squares";

const imageVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export function VisionMissionSection() {
  return (
    <Content>
      <section className="relative max-w-7xl mx-auto py-24 space-y-24 overflow-hidden">
        <GridPattern squares={generateSquares({ count: 10, maxX: 20, maxY: 20 })} className={cn("mask-[radial-gradient(1000px_circle_at_center,white,transparent)]", "inset-x-0 inset-y-[-0%] h-[200%] skew-y-12")} />
        {/* VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* TEXT */}
          <div>
            <TextAnimate animation="blurIn" as="span" className="text-primary font-semibold tracking-widest text-sm bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full inline-block px-4 py-1.5">
              • OUR VISION
            </TextAnimate>

            <TextAnimate animation="blurIn" as="h2" className="text-3xl font-bold mt-4">
              Driving Innovation with Purpose
            </TextAnimate>

            <TextAnimate animation="blurIn" as="p" className="mt-6 text-muted-foreground leading-relaxed">
              To be the leading IT company in producing IT products and services for appropriate, integrated and professional solutions. And contribute as a generator in the development of the quality of the environment and society.
            </TextAnimate>
          </div>

          {/* IMAGE */}
          <motion.div variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-80 w-full overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80" alt="Vision illustration" className="h-full w-full object-cover" />
          </motion.div>
        </div>

        {/* MISSION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* IMAGE */}
          <motion.div variants={imageVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative h-80 w-full overflow-hidden rounded-2xl">
            <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80" alt="Mission illustration" className="h-full w-full object-cover" />
          </motion.div>

          {/* TEXT */}
          <div>
            <TextAnimate animation="blurIn" as="span" className="text-primary font-semibold tracking-widest text-sm bg-primary/10 border border-primary/20 backdrop-blur-sm rounded-full inline-block px-4 py-1.5">
              • OUR MISSION
            </TextAnimate>

            <TextAnimate animation="blurIn" as="h2" className="text-3xl font-bold mt-4">
              What We Commit To Deliver
            </TextAnimate>

            <ul className="mt-6 space-y-4 text-muted-foreground">
              {[
                "Develop competitive IT industry products.",
                "Provide the best service to our customers.",
                "Developing the best and latest technological innovations.",
                "Increase benefits and added value for customers and stakeholders.",
                "Promoting professionalism and cooperation for quality services.",
                "Give a positive impact on the environment with the potential of natural resources to improve the welfare of the community.",
                "Conduct knowledge education to society in order to improve human resources quality.",
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary shrink-0" />
                  <TextAnimate animation="blurIn" as="span" className="leading-relaxed">
                    {item}
                  </TextAnimate>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </Content>
  );
}
