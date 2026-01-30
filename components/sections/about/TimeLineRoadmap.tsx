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
        <section className="bg-linear-to-tl from-sky-900 to-slate-800 py-16 my-3 h-fit rounded-3xl">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-white text-3xl font-bold mb-11 text-center">Our Timeline</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timeline.map((item, i) => {
                        const Icon = item.icon
                        return (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="relative bg-[#1e2631] border border-sky-500/20 rounded-xl p-6 shadow-lg hover:shadow-xl hover:border-sky-500/40 transition-all duration-300"
                            >
                                <div className="absolute -top-4 left-5 bg-sky-500 p-2.5 rounded-lg shadow-md">
                                    <Icon className="w-5 h-5 text-white" />
                                </div>
                                <div className="mt-3">
                                    <span className="text-xs text-sky-400 font-semibold">{item.year}</span>
                                    <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
                                    <p className="text-sm text-sky-200/80 mt-2">{item.description}</p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}