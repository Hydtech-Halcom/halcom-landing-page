import { Metadata } from "next";
import { BussinessSection } from "@/components/sections/about/BussinessSection";
import { PageHero } from "@/components/shared/PageHero";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description:
    "Halcom adalah IT Infrastructure Specialist yang berkomitmen memberikan solusi total kepada klien dengan pengalaman 20+ tahun dan tim bersertifikasi ahli.",
  openGraph: {
    title: "Tentang Kami | Halcom",
    description:
      "Halcom adalah IT Infrastructure Specialist yang berkomitmen memberikan solusi total kepada klien dengan pengalaman 20+ tahun.",
  },
};

export default function About() {
  return (
    <main className="w-full">
      <PageHero
        badge="About Halcom"
        title={
          <>
            A New Idea <br />
            Inspires Us To Make <br /> Great Works
          </>
        }
        description="Halcom is an IT Infrastructure Specialist determined to provide total solutions to our clients with 20+ years of experience and expert certified teams."
        backgroundImage="/assets/images/family.jpg"
      />
      <BussinessSection />
    </main>
  );
}
