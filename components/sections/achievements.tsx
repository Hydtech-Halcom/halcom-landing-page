'use client';

import { motion } from 'framer-motion'
import { IconTrendingUp, IconBriefcase, IconStar, IconRocket } from '@/components/ui/aceternity-icons'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Achievements() {
  const achievements = [
    {
      icon: IconTrendingUp,
      stat: '200+',
      label: 'Successful Projects',
      description: 'Completed projects across various industries'
    },
    {
      icon: IconBriefcase,
      stat: '20+',
      label: 'Years Experience',
      description: 'Industry expertise and proven track record'
    },
    {
      icon: IconStar,
      stat: '100%',
      label: 'Client Satisfaction',
      description: 'Committed to exceeding expectations'
    },
    {
      icon: IconRocket,
      stat: '2003',
      label: 'Founded',
      description: 'Established with commitment to excellence'
    },
  ]

  return (
    <section className="w-full py-16 sm:py-24 bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore the milestones and accomplishments that define our journey
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(255,255,255,0.1)' }}
                className="text-center p-8 rounded-lg bg-white/5 border border-white/10 overflow-hidden"
              >
                <motion.div 
                  className="flex justify-center mb-4"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="text-accent" />
                </motion.div>
                <motion.p 
                  className="text-4xl font-bold text-accent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: 'spring', delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {achievement.stat}
                </motion.p>
                <h3 className="font-semibold text-lg mb-2">
                  {achievement.label}
                </h3>
                <p className="text-gray-300 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          className="mt-16 p-8 bg-white/5 border border-white/10 rounded-lg text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            As we commit to always giving the best IT solutions for our clients, we also achieve recognition in our field with multiple industry awards and certifications that validate our expertise and commitment to excellence.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
