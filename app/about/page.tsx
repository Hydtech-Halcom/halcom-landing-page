import { AboutSection } from "@/components/sections/about/AboutSection"
import { BussinessSection } from "@/components/sections/about/BussinessSection"
import Footer from "@/components/shared/footer"
import Header from "@/components/shared/header"

export default function About() {
    return (
        <main className="w-full">
            <Header />
            <AboutSection />
            <BussinessSection />
            <Footer />
        </main>
    )
}