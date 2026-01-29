'use client';

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { containerVariants, itemVariants } from '@/lib/animations'

export default function Projects() {
  const projects = [
    {
      title: 'Enterprise Data Center',
      category: 'Infrastructure',
      tags: ['Server', 'Storage'],
      description: 'Complete data center infrastructure setup with redundancy and disaster recovery.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
    },
    {
      title: 'Cloud Migration',
      category: 'Cloud Services',
      tags: ['Migration', 'Optimization'],
      description: 'Seamless migration of legacy systems to modern cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1518761681033-91b2a8f8d5c6?w=400&h=300&fit=crop'
    },
    {
      title: 'Network Modernization',
      category: 'Networking',
      tags: ['Network', 'Security'],
      description: 'Advanced network architecture implementation with enhanced security measures.',
      image: 'https://images.unsplash.com/photo-1460925895917-aaf4b0c3d773?w=400&h=300&fit=crop'
    },
    {
      title: 'Security Audit',
      category: 'Compliance',
      tags: ['Security', 'Audit'],
      description: 'Comprehensive IT security assessment and compliance implementation.',
      image: 'https://images.unsplash.com/photo-1563986768711-b3baf731884b?w=400&h=300&fit=crop'
    },
    {
      title: 'Infrastructure Automation',
      category: 'DevOps',
      tags: ['Automation', 'DevOps'],
      description: 'Automated infrastructure management and continuous deployment solutions.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop'
    },
    {
      title: 'Disaster Recovery',
      category: 'Business Continuity',
      tags: ['Recovery', 'Backup'],
      description: 'Comprehensive disaster recovery planning and implementation services.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop'
    },
  ]

  return (
    <section id="projects" className="w-full py-16 sm:py-24 bg-white">
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
            Our Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Breakthrough Projects
          </h2>
          <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
            Successful implementations that drive business value for our clients
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
              className="group h-full bg-background-secondary border border-border rounded-lg overflow-hidden flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content Section */}
              <div className="p-6 flex flex-col flex-grow">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: tagIndex * 0.05 }}
                      className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors"
                  whileHover={{ x: 5 }}
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-sm text-foreground-secondary mb-3">
                  {project.category}
                </p>

                <p className="text-foreground-secondary text-sm leading-relaxed flex-grow mb-4">
                  {project.description}
                </p>

                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-primary font-semibold text-sm"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/5 transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
