"use client"
import { motion } from "framer-motion"
import {
    User,
    Search,
    Star,
    ClipboardList,
    CreditCard,
    ShoppingBag,
} from "lucide-react"

type TimelineItem = {
    year: string
    title: string
    description: string
    icon: any
}

const timeline: TimelineItem[] = [
    { year: "2003", title: "Founded", description: "Founded in Batam", icon: User },
    { year: "2005–2008", title: "Partnership", description: "Cisco, Microsoft, Dell", icon: Search },
    { year: "2012", title: "New Branch", description: "Pekanbaru Office", icon: Star },
    { year: "2013–2015", title: "Enterprise", description: "HPE, VMware, Asus", icon: ClipboardList },
    { year: "2016–2017", title: "New Unit", description: "Mechanical & Electrical", icon: CreditCard },
    { year: "2018–2019", title: "Automation", description: "Industrial Automation", icon: ShoppingBag },
]

export default function TimelineRoadmap() {
    return (
        <section className="bg-[#0b1f3a] py-6 my-3">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-white text-3xl font-bold mb-12 text-center">Our Timeline</h2>
                <div className="relative">
                    {/* Vertical connecting line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-blue-600 z-0"></div>

                    <div className="space-y-12">
                        {timeline.map((item, i) => {
                            const Icon = item.icon
                            const isLeft = i % 2 === 0
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.6, delay: i * 0.1 }}
                                    viewport={{ once: true }}
                                    className={`flex items-center ${isLeft ? "justify-start" : "justify-end"} relative z-10`}
                                >
                                    {/* Dot on timeline */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-[#0b1f3a] z-20"></div>

                                    <div className={`relative w-5/12 bg-[#102a4d] border border-white/10 rounded-xl p-4 shadow-lg ${isLeft ? 'mr-auto' : 'ml-auto'}`}>
                                        <div className={`absolute -top-3 ${isLeft ? "left-4" : "right-4"} bg-blue-600 p-2 rounded-lg shadow-md`}>
                                            <Icon className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-xs text-blue-300 font-semibold block mt-2">{item.year}</span>
                                        <h3 className="text-base font-semibold text-white mt-1">{item.title}</h3>
                                        <p className="text-sm text-blue-200 mt-1.5">{item.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}