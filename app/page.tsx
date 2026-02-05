import Header from "@/components/shared/header";
import Hero from "@/components/sections/hero";
import WhyChoose from "@/components/sections/why-choose";
import Solutions from "@/components/sections/solutions";
import AboutCompany from "@/components/sections/about-company";
import Projects from "@/components/sections/projects";
import Achievements from "@/components/sections/achievements";
import Team from "@/components/sections/team";
import ContactSection from "@/components/sections/contact-section";
import Footer from "@/components/shared/footer";
import { Logos3 } from "@/components/sections/logos3";

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Logos3 />
      <WhyChoose />
      <Solutions />
      <AboutCompany />
      {/* <Projects /> */}
      <Achievements />
      {/* <Team /> */}
      <ContactSection />
    </main>
  );
}
