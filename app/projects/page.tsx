import { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ProjectSection } from "@/components/sections/project/project-section";

export const metadata: Metadata = {
  title: "Proyek Kami",
  description: "Jelajahi portofolio proyek sukses kami dan temukan bagaimana kami memberikan keunggulan melalui teknologi mutakhir dan keahlian yang berdedikasi.",
  openGraph: {
    title: "Proyek Kami | Halcom",
    description: "Jelajahi portofolio proyek sukses kami dengan teknologi mutakhir dan keahlian yang berdedikasi.",
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
