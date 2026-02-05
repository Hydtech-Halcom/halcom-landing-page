import { PageHero } from "@/components/shared/PageHero";
import { ProjectSection } from "@/components/sections/project/project-section";

export default function ProjectsPage() {
  return (
    <main className="w-full">
      <PageHero
        badge="Our Projects"
        title={
          <>
            Innovative Solutions <br />
            That Drive Success
          </>
        }
        description="Explore our portfolio of successful projects and discover how we deliver excellence through cutting-edge technology and dedicated expertise."
        backgroundImage="/assets/images/project.webp"
      />
      <ProjectSection />
    </main>
  );
}
