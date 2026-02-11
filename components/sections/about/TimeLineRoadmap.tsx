"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/grid-pattern";
import { useRef, useState } from "react";
import { Milestone, milestones } from "@/lib/constants/about";

export default function TimeLineRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const totalItems = milestones.length;

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === 0 ? totalItems - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex(prev => (prev === totalItems - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 300);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <section ref={containerRef} className="relative py-16 md:py-20 lg:py-32 bg-white dark:bg-neutral-950 transition-colors duration-500 overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 z-0">
        <GridPattern width={40} height={40} x={-1} y={-1} className={cn("mask-[radial-gradient(circle_at_30%_30%,white,transparent_80%)] opacity-50 dark:opacity-25")} />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-white/50 to-white dark:via-neutral-950/50 dark:to-neutral-950" />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-16 px-4">
          <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-neutral-800 dark:text-white uppercase">
            Our <span className="font-bold text-primary">Journey</span>
          </motion.h2>
        </div>

        {/* Desktop View: Carousel */}
        <div className="hidden lg:block relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary hover:border-primary group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Previous milestone"
          >
            <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={goToNext}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-full bg-white dark:bg-neutral-900 border-2 border-neutral-200 dark:border-neutral-700 shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-primary hover:border-primary group disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Next milestone"
          >
            <svg className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Carousel Container */}
          <div className="relative h-[500px] w-full flex items-center justify-center">
            {/* Horizontal Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 via-50% to-primary/20 -translate-y-1/2 z-0" />

            {/* Carousel Items */}
            <div className="relative w-full h-full flex items-center justify-center">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const position = idx - currentIndex;
                const isActive = position === 0;
                const isPrev = position === -1 || (currentIndex === 0 && idx === totalItems - 1);
                const isNext = position === 1 || (currentIndex === totalItems - 1 && idx === 0);

                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                      opacity: isActive ? 1 : isPrev || isNext ? 0.5 : 0.2,
                      x: position * 450,
                      zIndex: isActive ? 30 : isPrev || isNext ? 20 : 10,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute w-[400px] h-full flex items-center justify-center"
                  >
                    <div className="relative w-full group" style={{ height: "320px" }}>
                      {/* Icon - Centered on line */}
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 0.9,
                        }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
                      >
                        <div
                          className={cn(
                            "w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-300",
                            isActive ? "bg-primary border-2 border-primary shadow-primary/30" : "bg-white dark:bg-neutral-800 border-2 border-neutral-300 dark:border-neutral-700"
                          )}
                        >
                          <Icon size={24} className={isActive ? "text-white" : "text-neutral-600 dark:text-neutral-400"} />
                        </div>
                      </motion.div>

                      {/* Text Content - Alternating position */}
                      <div className={cn("absolute left-1/2 -translate-x-1/2 w-full max-w-[320px] text-center transition-all duration-500", idx % 2 === 0 ? "top-1/2 pt-20" : "bottom-1/2 pb-20")}>
                        <motion.h3
                          animate={{
                            y: isActive ? 0 : 20,
                            opacity: isActive ? 1 : 0.8,
                          }}
                          transition={{ duration: 0.3 }}
                          className="text-3xl font-black text-neutral-800 dark:text-neutral-100 mb-2 transition-colors duration-300 group-hover:text-primary"
                        >
                          {milestone.year}
                        </motion.h3>
                        <motion.h4
                          animate={{
                            y: isActive ? 0 : 10,
                            opacity: isActive ? 1 : 0.6,
                          }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                          className="text-[11px] font-black tracking-[0.15em] text-primary uppercase mb-3"
                        >
                          {milestone.title}
                        </motion.h4>
                        <motion.p
                          animate={{
                            y: isActive ? 0 : 10,
                            opacity: isActive ? 1 : 0.4,
                          }}
                          transition={{ duration: 0.3, delay: 0.2 }}
                          className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium"
                        >
                          {milestone.description}
                        </motion.p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-30">
            {milestones.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                disabled={isAnimating}
                className={`transition-all duration-300 disabled:cursor-not-allowed focus:outline-none ${
                  idx === currentIndex ? "w-10 h-2 bg-primary rounded-full" : "w-2 h-2 bg-neutral-300 dark:bg-neutral-600 rounded-full hover:bg-neutral-400 dark:hover:bg-neutral-500"
                }`}
                aria-label={`Go to milestone ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Tablet View: Horizontal Scroll Carousel */}
        <div className="hidden md:block lg:hidden relative">
          <div className="relative h-[400px] w-full">
            {/* Horizontal Line */}
            <div className="absolute top-1/2 left-4 right-4 h-[2px] bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 -translate-y-1/2 z-0" />

            {/* Carousel Items for Tablet */}
            <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
              {milestones.map((milestone, idx) => {
                const Icon = milestone.icon;
                const position = idx - currentIndex;
                const isActive = position === 0;

                return (
                  <motion.div
                    key={idx}
                    initial={false}
                    animate={{
                      scale: isActive ? 1 : 0.8,
                      opacity: isActive ? 1 : 0,
                      x: position * 350,
                      zIndex: isActive ? 30 : 10,
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute w-[320px] h-full flex items-center justify-center"
                  >
                    <div className="relative w-full" style={{ height: "280px" }}>
                      {/* Icon */}
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="w-12 h-12 rounded-full bg-primary border-2 border-primary flex items-center justify-center shadow-lg shadow-primary/20">
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>

                      {/* Text Content */}
                      <div className={cn("absolute left-1/2 -translate-x-1/2 w-full max-w-[280px] text-center", idx % 2 === 0 ? "top-1/2 pt-16" : "bottom-1/2 pb-16")}>
                        <h3 className="text-2xl font-black text-neutral-800 dark:text-neutral-100 mb-1">{milestone.year}</h3>
                        <h4 className="text-[10px] font-black tracking-[0.15em] text-primary uppercase mb-2">{milestone.title}</h4>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium line-clamp-3">{milestone.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Navigation for Tablet */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={goToPrevious}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
                aria-label="Previous"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute right-2 top-1/2 -translate-y-1/2 z-30">
              <button
                onClick={goToNext}
                disabled={isAnimating}
                className="w-10 h-10 rounded-full bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 shadow-md flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50"
                aria-label="Next"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile View: Vertical Timeline */}
        <div className="md:hidden relative z-10 px-4 max-w-lg mx-auto w-full">
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-neutral-200 dark:via-neutral-800 to-transparent" />

          <div className="space-y-6 py-4">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              return (
                <motion.div key={idx} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-5%" }} transition={{ delay: idx * 0.05 }} className="relative pl-10">
                  {/* Circle on line */}
                  <div className="absolute -left-2.5 top-4 w-4 h-4 rounded-full bg-white dark:bg-neutral-950 border-3 border-primary shadow-sm z-20" />

                  <div className="bg-white dark:bg-neutral-900/50 backdrop-blur-sm p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 shadow-sm overflow-hidden relative group hover:shadow-md transition-all duration-300">
                    {/* Icon Background Decoration */}
                    <div className="absolute -right-2 -bottom-2 opacity-5 text-primary rotate-12 transition-all duration-500 group-hover:opacity-10 group-hover:rotate-0">
                      <Icon size={60} strokeWidth={1} />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-lg font-black text-neutral-800 dark:text-neutral-100 group-hover:text-primary transition-colors duration-300">{milestone.year}</span>
                        <div className="h-0.5 w-4 bg-primary/20 rounded-full transition-all duration-300 group-hover:w-6 group-hover:bg-primary/40" />
                        <Icon size={14} className="text-primary transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h4 className="text-[9px] font-black tracking-widest text-primary uppercase mb-1 transition-all duration-300 group-hover:tracking-[0.2em]">{milestone.title}</h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed font-medium transition-colors duration-300 group-hover:text-neutral-700 dark:group-hover:text-neutral-300">{milestone.description}</p>
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
