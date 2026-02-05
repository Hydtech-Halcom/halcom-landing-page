"use client";

import { useState } from "react";
import Image from "next/image";
import { Content } from "@/components/sections/content";
import { Panorama360Modal } from "@/components/shared/Panorama360Modal";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import { allProjects, type ProjectCardData } from "@/lib/constants/projects";

// Re-export the type for external usage
export type { ProjectCardData };

interface ProjectCardProps {
  data: ProjectCardData;
  onView360?: (data: ProjectCardData) => void;
  priority?: boolean;
}

function ProjectCard({ data, onView360, priority = false }: ProjectCardProps) {
  const has360 = !!data.imgVirtual;

  return (
    <motion.div
      className="group relative rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden dark:border-neutral-800 dark:bg-neutral-950 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
      variants={itemVariants}
    >
      {/* Image Container */}
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={data.imgSrc}
          alt={data.imgAlt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* 360 Badge */}
        {has360 && (
          <button
            onClick={() => onView360?.(data)}
            className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg transition-transform hover:scale-105 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            View 360°
          </button>
        )}

        {/* Hover Overlay for 360 */}
        {has360 && (
          <div
            onClick={() => onView360?.(data)}
            className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
          >
            <div className="flex flex-col items-center gap-2 text-white">
              <Eye className="w-8 h-8" />
              <span className="text-sm font-medium">
                Klik untuk melihat 360°
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {data.title}
        </h3>

        {/* Product Info Badges */}
        {(data.productName || data.productCode) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {data.productName && (
              <span className="inline-flex items-center text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                {data.productName}
              </span>
            )}
            {data.productCode && (
              <span className="inline-flex items-center text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-mono">
                {data.productCode}
              </span>
            )}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">
          {data.description}
        </p>
        <span className="inline-block text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-md">
          {data.client}
        </span>
      </div>
    </motion.div>
  );
}

interface ProjectSectionProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectCardData[];
}

export function ProjectSection({
  title = "Our Projects",
  subtitle = "Explore our portfolio of innovative solutions and successful implementations.",
  projects = allProjects,
}: ProjectSectionProps) {
  const [selectedProject, setSelectedProject] =
    useState<ProjectCardData | null>(null);

  const handleView360 = (project: ProjectCardData) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Content>
      <section className="py-20">
        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Header */}
          <motion.div className="mb-8" variants={itemVariants}>
            <span className="text-primary font-semibold tracking-widest text-sm">
              • PORTFOLIO
            </span>
            <h2 className="text-3xl font-bold leading-tight mt-4">{title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
          </motion.div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                data={project}
                onView360={handleView360}
                priority={index < 4}
              />
            ))}
          </div>
        </motion.div>
      </section>

      {/* 360 Modal */}
      {selectedProject && selectedProject.imgVirtual && (
        <Panorama360Modal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          imageSrc={selectedProject.imgVirtual}
          title={selectedProject.title}
          description={selectedProject.imgAltVirtual || "360° Virtual Tour"}
          initialLookAt={selectedProject.initialLookAt}
        />
      )}
    </Content>
  );
}

export default ProjectSection;
