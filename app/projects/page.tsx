import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProjectSection } from "@/components/sections/project/project-section";

export const metadata: Metadata = {
  title: "Our Projects",
  description: "Explore our portfolio of successful projects and discover how we deliver excellence through cutting-edge technology and dedicated expertise.",
  openGraph: {
    title: "Our Projects | Halcom",
    description: "Explore our portfolio of successful projects with cutting-edge technology and dedicated expertise.",
  },
};

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
        backgroundImage="/assets/project/vidiotron-pnp.jpg"
      />
      <ProjectSection />
    </main>
  );
}
