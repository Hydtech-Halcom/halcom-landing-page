'use client';

import { CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { fadeInLeft, fadeInRight, containerVariants, itemVariants } from '@/lib/animations'

export default function AboutCompany() {
  const highlights = [
    'Management with 20+ years IT and M&E experience',
    'Expert and certified professional teams',
    'Bank-backed by HSBC and Mandiri',
    'Strategic partnerships with global IT leaders',
    'Proven track record of 200+ successful projects',
    'Total solutions with seamless implementation',
  ]

  return (
    <section id="about" className="w-full py-16 sm:py-24 bg-background-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Content */}
          <motion.div className="space-y-8" variants={fadeInLeft}>
            <motion.div variants={itemVariants}>
              <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
                Our Company
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
                Crafting Success Tailored Solutions
              </h2>
            </motion.div>

            <motion.div className="space-y-4" variants={itemVariants}>
              <p className="text-lg text-foreground-secondary leading-relaxed">
                Halcom has been established since <span className="font-semibold text-primary">2003</span> with full commitment to provide the best IT solutions for our clients. We have successfully completed <span className="font-semibold text-primary">200+ projects</span> with various company backgrounds.
              </p>

              <p className="text-base text-foreground-secondary leading-relaxed">
                Our mission is to empower businesses of all sizes to thrive in our ever-changing marketplace. We are committed to delivering exceptional value through our strategic insights and innovative approaches to IT infrastructure.
              </p>
            </motion.div>

            {/* Highlights */}
            <motion.div
              className="space-y-3"
              variants={containerVariants}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3"
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-foreground-secondary">{highlight}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <Link
                href="/about"
                className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors w-fit"
              >
                Read More About Us
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            className="relative h-96 sm:h-125 rounded-lg overflow-hidden"
            variants={fadeInRight}
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=600&fit=crop"
              alt="Company Excellence"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-br from-primary/40 to-secondary/30"></div>
            <motion.div
              className="absolute inset-0 flex items-center justify-center p-8"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="space-y-6 text-center bg-white/95 backdrop-blur-sm rounded-2xl p-8"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.p
                    className="text-5xl sm:text-6xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    20+
                  </motion.p>
                  <p className="text-lg text-foreground-secondary">Years of Excellence</p>
                </motion.div>

                <div className="h-px bg-border w-12 mx-auto"></div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.p
                    className="text-4xl sm:text-5xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    200+
                  </motion.p>
                  <p className="text-lg text-foreground-secondary">Successful Projects</p>
                </motion.div>

                <div className="h-px bg-border w-12 mx-auto"></div>

                <motion.div
                  className="space-y-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <motion.p
                    className="text-3xl sm:text-4xl font-bold text-primary"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, type: 'spring' }}
                    viewport={{ once: true }}
                  >
                    100%
                  </motion.p>
                  <p className="text-lg text-foreground-secondary">Client Satisfaction</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
