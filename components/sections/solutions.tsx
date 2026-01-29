'use client';

import { ArrowRight, Network, Shield } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { IconCloud, IconRocket } from '@/components/ui/aceternity-icons'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Solutions() {
  const solutions = [
    {
      icon: IconRocket,
      title: 'Infrastructure Design',
      description: 'Custom IT infrastructure design tailored to your business needs and scalability requirements.'
    },
    {
      icon: IconCloud,
      title: 'Cloud Solutions',
      description: 'Comprehensive cloud infrastructure services for modern businesses and enterprises.'
    },
    {
      icon: Network,
      title: 'Network Management',
      description: 'Advanced networking solutions with 24/7 monitoring and optimal performance management.',
      isLucide: true
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security solutions with compliance to international standards.',
      isLucide: true
    },
  ]

  return (
    <section id="solutions" className="w-full py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Our Solutions
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Transformative IT Solutions
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Get our exclusive services designed to drive business growth and operational excellence
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                className="group relative p-8 bg-background-secondary rounded-lg border border-border overflow-hidden cursor-pointer"
              >
                {/* Background accent */}
                <motion.div 
                  className="absolute -right-8 -top-8 w-32 h-32 bg-primary/5 rounded-full"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative z-10">
                  <motion.div 
                    className="mb-4 inline-flex items-center justify-center w-14 h-14 bg-white rounded-lg border-2 border-primary/20"
                    whileHover={{ scale: 1.1, borderColor: '#1e40af' }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {solution.isLucide ? (
                      <Icon className="text-primary" size={28} />
                    ) : (
                      <Icon className="text-primary" />
                    )}
                  </motion.div>
                  
                  <motion.h3 
                    className="font-semibold text-xl text-foreground mb-3"
                    whileHover={{ x: 5 }}
                  >
                    {solution.title}
                  </motion.h3>
                  
                  <p className="text-foreground-secondary leading-relaxed mb-4">
                    {solution.description}
                  </p>

                  <motion.div whileHover={{ x: 5 }}>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-2 text-primary font-semibold"
                    >
                      Get Started
                      <ArrowRight size={18} />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Explore All Services
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
