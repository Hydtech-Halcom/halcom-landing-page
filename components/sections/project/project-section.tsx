"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Content } from "@/components/sections/content";
import { Panorama360Modal } from "@/components/shared/Panorama360Modal";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/animations";
import {
  allProjects,
  dataCenterContainment,
  projectsDellServerVmCluster,
  projectsEpsonAcControl,
  projectsInstallation,
  projectsManageService,
  projectsPLNBatam,
  projectsWirelessAssessmentEkahau,
  projectsWirelessAssessmentTdk,
  type ProjectCardData,
} from "@/lib/constants/projects";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

// Re-export the type for external usage
export type { ProjectCardData };

interface ProjectGalleryGroup {
  id: string;
  title: string;
  description: string;
  client: string;
  projects: ProjectCardData[];
}

interface ProjectGalleryState {
  group: ProjectGalleryGroup;
  initialIndex: number;
}

const groupedProjectDefinitions: Array<Omit<ProjectGalleryGroup, "projects"> & { source: ProjectCardData[] }> = [
  {
    id: "projects-pln-batam",
    title: "PLN Batam Project",
    description: "Project documentation from PLN Batam installation activities.",
    client: "PLN Batam",
    source: projectsPLNBatam,
  },
  {
    id: "data-center-containment",
    title: "Data Center Containment",
    description: "Field documentation for data center containment implementation.",
    client: "JOB Pertamina - Medco E&P Tomori Sulawesi",
    source: dataCenterContainment,
  },
  {
    id: "projects-installation",
    title: "Installation Projects",
    description: "Installation documentation across multiple project locations.",
    client: "PT SIIX EMS Indonesia",
    source: projectsInstallation,
  },
  {
    id: "wireless-assessment-ekahau",
    title: "Wireless Assessment Ekahau",
    description: "Wireless assessment documentation and Ekahau site survey results.",
    client: "PT PLN Batam",
    source: projectsWirelessAssessmentEkahau,
  },
  {
    id: "wireless-assessment-ekahau-tdk",
    title: "Wireless Assessment Ekahau TDK",
    description: "Wireless assessment documentation and Ekahau survey for TDK facilities.",
    client: "PT TDK Electronics Indonesia",
    source: projectsWirelessAssessmentTdk,
  },
  {
    id: "epson-ac-control",
    title: "New Building AC Control",
    description: "Implementation documentation for centralized AC control system.",
    client: "PT Epson Batam",
    source: projectsEpsonAcControl,
  },
  {
    id: "dell-server-vm-cluster",
    title: "Dell Server VM Cluster",
    description: "End-to-end deployment documentation for server virtualization cluster.",
    client: "PT Sumitomo Wiring Systems",
    source: projectsDellServerVmCluster,
  },
  {
    id: "manage-service",
    title: "Managed Services",
    description: "Managed service operations and technical support documentation.",
    client: "Managed Service Project",
    source: projectsManageService,
  },
];

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
        <Image src={data.imgSrc} alt={data.imgAlt} fill priority={priority} className="object-cover transition-transform duration-500 group-hover:scale-110" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

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
          <div onClick={() => onView360?.(data)} className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer">
            <div className="flex flex-col items-center gap-2 text-white">
              <Eye className="w-8 h-8" />
              <span className="text-sm font-medium">Klik untuk melihat 360°</span>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{data.title}</h3>

        {/* Product Info Badges */}
        {(data.productName || data.productCode) && (
          <div className="flex flex-wrap gap-2 mb-3">
            {data.productName && <span className="inline-flex items-center text-[11px] font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">{data.productName}</span>}
            {data.productCode && <span className="inline-flex items-center text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full font-mono">{data.productCode}</span>}
          </div>
        )}

        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{data.description}</p>
        <span className="inline-block text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-md">{data.client}</span>
      </div>
    </motion.div>
  );
}

interface ProjectGalleryCardProps {
  group: ProjectGalleryGroup;
  onOpenGallery: (group: ProjectGalleryGroup, index: number) => void;
  priority?: boolean;
}

function ProjectGalleryCard({ group, onOpenGallery, priority = false }: ProjectGalleryCardProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!carouselApi) return;

    const updateCurrentIndex = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    updateCurrentIndex();
    carouselApi.on("select", updateCurrentIndex);
    carouselApi.on("reInit", updateCurrentIndex);

    return () => {
      carouselApi.off("select", updateCurrentIndex);
      carouselApi.off("reInit", updateCurrentIndex);
    };
  }, [carouselApi]);

  return (
    <motion.div
      className="group relative rounded-xl border border-neutral-200 bg-white shadow-lg overflow-hidden dark:border-neutral-800 dark:bg-neutral-950 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
      variants={itemVariants}
    >
      <div className="relative overflow-hidden">
        <Carousel setApi={setCarouselApi} opts={{ loop: true }} className="h-full">
          <CarouselContent className="ml-0">
            {group.projects.map((project, index) => (
              <CarouselItem key={project.id} className="pl-0">
                <button type="button" className="relative block w-full aspect-4/3 cursor-pointer" onClick={() => onOpenGallery(group, index)}>
                  <Image
                    src={project.imgSrc}
                    alt={project.imgAlt}
                    fill
                    priority={priority && index === 0}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex flex-col items-center gap-2 text-white">
                      <Eye className="w-8 h-8" />
                      <span className="text-sm font-medium">Click to view gallery</span>
                    </div>
                  </div>
                </button>
              </CarouselItem>
            ))}
          </CarouselContent>
          {group.projects.length > 1 && (
            <>
              <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-0 bg-black/60 text-white hover:bg-black/75 disabled:opacity-30" />
              <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-0 bg-black/60 text-white hover:bg-black/75 disabled:opacity-30" />
            </>
          )}
        </Carousel>

        <button
          type="button"
          onClick={() => onOpenGallery(group, currentIndex)}
          className="absolute top-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold shadow-lg transition-transform hover:scale-105 cursor-pointer"
        >
          <Eye className="w-3.5 h-3.5" />
          View Gallery
        </button>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-foreground mb-2">{group.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{group.description}</p>
        <span className="inline-block text-[10px] text-muted-foreground bg-muted px-2 py-1 rounded-md">{group.client}</span>
      </div>
    </motion.div>
  );
}

interface ProjectGalleryModalProps {
  selectedGallery: ProjectGalleryState | null;
  onClose: () => void;
}

function ProjectGalleryModal({ selectedGallery, onClose }: ProjectGalleryModalProps) {
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!selectedGallery || !carouselApi) return;
    carouselApi.scrollTo(selectedGallery.initialIndex, true);
  }, [selectedGallery, carouselApi]);

  if (!selectedGallery) return null;

  return (
    <Dialog open={!!selectedGallery} onOpenChange={open => !open && onClose()}>
      <DialogContent className="max-w-none sm:max-w-none w-[95vw] h-[92vh] p-0 overflow-hidden flex flex-col gap-0">
        <DialogHeader className="p-4 pb-2">
          <DialogTitle>{selectedGallery.group.title}</DialogTitle>
          <DialogDescription>{selectedGallery.group.client}</DialogDescription>
        </DialogHeader>

        <div className="flex-1 min-h-0 px-4 pb-4">
          <Carousel setApi={setCarouselApi} opts={{ loop: true, startIndex: selectedGallery.initialIndex }} className="h-full">
            <CarouselContent className="ml-0 h-full">
              {selectedGallery.group.projects.map(project => (
                <CarouselItem key={project.id} className="pl-0 h-full">
                  <div className="h-full rounded-xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-black/90">
                    <div className="relative h-[68vh] w-full">
                      <Image src={project.imgSrc} alt={project.imgAlt} fill className="object-contain" sizes="95vw" />
                    </div>
                    <div className="bg-background p-4">
                      <h4 className="text-base font-semibold text-foreground mb-1">{project.title}</h4>
                      <p className="text-sm text-muted-foreground">{project.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {selectedGallery.group.projects.length > 1 && (
              <>
                <CarouselPrevious className="left-3 top-1/2 -translate-y-1/2 border-0 bg-black/70 text-white hover:bg-black/85 disabled:opacity-30" />
                <CarouselNext className="right-3 top-1/2 -translate-y-1/2 border-0 bg-black/70 text-white hover:bg-black/85 disabled:opacity-30" />
              </>
            )}
          </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface ProjectSectionProps {
  title?: string;
  subtitle?: string;
  projects?: ProjectCardData[];
}

export function ProjectSection({ title = "Our Projects", subtitle = "Explore our portfolio of innovative solutions and successful implementations.", projects = allProjects }: ProjectSectionProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectCardData | null>(null);
  const [selectedGallery, setSelectedGallery] = useState<ProjectGalleryState | null>(null);

  const { regularProjects, groupedProjects } = useMemo(() => {
    const visibleProjectIds = new Set(projects.map(project => project.id));

    const availableGroupedProjects: ProjectGalleryGroup[] = groupedProjectDefinitions
      .map(definition => ({
        id: definition.id,
        title: definition.title,
        description: definition.description,
        client: definition.client,
        projects: definition.source.filter(project => visibleProjectIds.has(project.id)),
      }))
      .filter(group => group.projects.length > 0);

    const groupedIds = new Set(availableGroupedProjects.flatMap(group => group.projects.map(project => project.id)));

    return {
      groupedProjects: availableGroupedProjects,
      regularProjects: projects.filter(project => !groupedIds.has(project.id)),
    };
  }, [projects]);

  const handleView360 = (project: ProjectCardData) => {
    setSelectedProject(project);
  };

  const handleOpenGallery = (group: ProjectGalleryGroup, initialIndex: number) => {
    setSelectedGallery({ group, initialIndex });
  };

  const handleCloseGallery = () => {
    setSelectedGallery(null);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <Content>
      <section className="py-20">
        <motion.div className="grid gap-6" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          {/* Header */}
          <motion.div className="mb-8" variants={itemVariants}>
            <span className="text-primary font-semibold tracking-widest text-sm">• PORTFOLIO</span>
            <h2 className="text-3xl font-bold leading-tight mt-4">{title}</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl">{subtitle}</p>
          </motion.div>

          {/* Project Grid */}
          {groupedProjects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {groupedProjects.map((group, index) => (
                <ProjectGalleryCard key={group.id} group={group} onOpenGallery={handleOpenGallery} priority={index === 0} />
              ))}
            </div>
          )}

          {regularProjects.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {regularProjects.map((project, index) => (
                <ProjectCard key={project.id} data={project} onView360={handleView360} priority={index < 4} />
              ))}
            </div>
          )}
        </motion.div>
      </section>

      <ProjectGalleryModal selectedGallery={selectedGallery} onClose={handleCloseGallery} />

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
