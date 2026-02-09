import { Metadata } from "next";
import ExpertTeamsSection from "@/components/sections/qualifications/expert-teams-section";

export const metadata: Metadata = {
  title: "Tim Ahli",
  description: "Kenali tim ahli bersertifikasi Halcom yang berpengalaman dalam menyediakan solusi IT Infrastructure terbaik untuk enterprise.",
  openGraph: {
    title: "Tim Ahli | Halcom",
    description: "Kenali tim ahli bersertifikasi Halcom yang berpengalaman dalam solusi IT Infrastructure.",
  },
};

export default function TeamsPage() {
  return (
    <section className="min-h-screen py-2 md:pt-12">
      <div className="container mx-auto px-4">
        <ExpertTeamsSection />
      </div>
    </section>
  );
}
