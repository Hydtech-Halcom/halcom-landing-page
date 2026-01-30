import { BussinessSection } from "@/components/sections/about/BussinessSection"
import HeroSection from "@/components/sections/about/HeroSection"
import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"

export default function About() {
    return (
        <main className="w-full">
            <Header />
            {/* <AboutSection /> */}
            <HeroSection />
            <BussinessSection />
            <Footer />
        </main>
    )
}