import { BussinessSection } from "@/components/sections/about/BussinessSection";
import { PageHero } from "@/components/shared/PageHero";

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
