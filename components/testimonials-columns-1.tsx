"use client";
import React from "react";
import { motion } from "motion/react";
import { type Testimonial } from "@/lib/constants/teams";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ image, name }, i) => (
                <div
                  className="rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full overflow-hidden"
                  key={i}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  );
};
