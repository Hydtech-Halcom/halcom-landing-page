import { Content } from "../content";
import TimelineRoadmap from "./TimeLineRoadmap";
import Link from "next/link";
import Image from "next/image";
import { InteractiveHoverButton } from "@/components/shared/interactive-button";

export function AboutSection() {
    return (
        <Content>
            {/* HERO */}
            <section className="relative h-[60vh] w-full overflow-hidden">
                <Image
                    src="/assets/images/family.jpg"
                    alt="About"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/70" />

                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                    <h1 className="text-5xl font-bold mb-3">About</h1>
                    <div className="flex gap-2 text-sm text-sky-300 bg-[#8f8f8f88] px-3 py-1.5 rounded-4xl">
                        <Link href="/" className="hover:underline">Home</Link>
                        <span>/</span>
                        <span className="text-white">About</span>
                    </div>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                    {/* LEFT */}
                    <div>
                        <span className="text-primary font-semibold tracking-widest text-sm">
                            • ABOUT OUR COMPANY
                        </span>
                        <h2 className="text-5xl font-bold leading-tight mt-4">
                            <span className="font-light">A New Idea</span> <br />
                            Inspires Us To Make <br /> Great Works
                        </h2>
                    </div>

                    {/* RIGHT */}
                    <div className="space-y-5 text-slate-600">
                        <p>
                            Our mission is to empower businesses of all sizes to thrive in an
                            ever-changing marketplace. We deliver exceptional value through
                            strategic insight and innovative approaches.
                        </p>
                        <p>
                            Committed to delivering excellence with modern technology and
                            transformation vision.
                        </p>

                        <Link
                            href="/contact">
                            <InteractiveHoverButton>
                                Contact Us
                            </InteractiveHoverButton>
                        </Link>
                    </div>
                </div>
            </section>

            {/* TIMELINE */}
            <TimelineRoadmap />
        </Content>
    )
}
