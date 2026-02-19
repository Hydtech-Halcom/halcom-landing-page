import { Metadata } from "next";
import { BussinessSection } from "@/components/sections/about/BussinessSection";
import { PageHero } from "@/components/shared/PageHero";
import { AboutSection } from "@/components/sections/about/AboutSection";
import TimelineRoadmap from "@/components/sections/about/TimeLineRoadmap";

export const metadata: Metadata = {
  title: "About Us",
  description: "Halcom is an IT Infrastructure Specialist committed to providing total solutions to clients with 20+ years of experience and a team of certified experts.",
  openGraph: {
    title: "About Us | Halcom",
    description: "Halcom is an IT Infrastructure Specialist committed to providing total solutions to clients with 20+ years of experience and a team of certified experts.",
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
        description="PT Halcom Integrated Solution was founded on June 18, 2003 in Batam. Widely recognized for its consistent to enterprise and government segments. Halcom's ICT service offerings range focus IT Infrastructure Specialist and IT consulting services based on industry best-practices.
        Halcom has teams of young and dynamic professionals with regular refreshed necessary knowledge and skill sets. It has also build strategic alliances with a number of national and global technology partners that have Digital Transformation vision."
        backgroundImage="/assets/images/family.jpg"
      />
      <TimelineRoadmap />
      <BussinessSection />
    </main>
  );
}
