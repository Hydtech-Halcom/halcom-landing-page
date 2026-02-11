import { Building2, Handshake, MapPin, Rocket, ShieldCheck, Factory, History, LineChart, HardHat, Users } from "lucide-react";

export interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export const milestones: Milestone[] = [
  {
    year: "2003",
    title: "COMPANY FOUNDED",
    description: "Halcom was founded in Batam, Indonesia as an IT Infrastructure Specialist.",
    icon: Building2,
  },
  {
    year: "2005–2008",
    title: "EARLY STRATEGIC PARTNERSHIPS",
    description: "Established early strategic partnerships with global principals including Cisco, Microsoft, Dell, and other international technology partners.",
    icon: Handshake,
  },
  {
    year: "2012",
    title: "BRANCH EXPANSION & ACHIEVEMENTS",
    description: "Opened new branches in Pekanbaru and Cikarang. Appointed as IBM Storage Distributor and received Best CEO Coverage award from Bina Data Mandiri.",
    icon: MapPin,
  },
  {
    year: "2013–2015",
    title: "PARTNERSHIP GROWTH & EXPANSION",
    description:
      "Expanded partnerships with Eaton UPS, Fujitsu, Rittal, HPE, and Axis (Silver Partner). Opened new branch in Karawang. Received IBM Rookie of the Year 2015 and Top Partner of the Year 2015 from PT Synnex Metrodata Indonesia.",
    icon: Users,
  },
  {
    year: "2016–2017",
    title: "NEW BUSINESS UNIT FORMATION",
    description: "Formed Mechanical & Electrical business unit. Added partnerships with Schneider Electric and Supermicro. Received Cisco FY18 Rookie Partner of the Year and Tech Data Best GEO Area Performer awards.",
    icon: HardHat,
  },
  {
    year: "2018",
    title: "BUSINESS UNIT EXPANSION",
    description: "Expanded into Industrial Automation. Achieved Dell Gold Partner, ETS Partner, and HPE Silver Partner status.",
    icon: Factory,
  },
  {
    year: "2020",
    title: "OPERATIONAL & SOLUTION STRENGTHENING",
    description: "Strengthened operations with a focus on Industrial Automation and Electrical Solutions.",
    icon: ShieldCheck,
  },
  {
    year: "2021",
    title: "ACHIEVEMENT MILESTONE",
    description: "Received Synnex Best Growth for IT Solution Channel (Sumatra, Kalimantan, Sulawesi) and Tech Data Top Enterprise Partner – GEO X awards.",
    icon: LineChart,
  },
  {
    year: "2022",
    title: "CORPORATE EXPANSION",
    description: "Established PT Halcom Inovasi Teknologi. Consolidated solution portfolio including Data Center, Networking, Server & Storage, Industrial Automation, Robotic Applications, IoT, and more.",
    icon: Rocket,
  },
  {
    year: "2023",
    title: "TWO DECADES CELEBRATION",
    description: "Celebrated two decades of Halcom Group's continuous growth and innovation.",
    icon: History,
  },
  {
    year: "2025",
    title: "PADANG BRANCH OPENING",
    description: "Opened a new branch of PT Halcom Inovasi Teknologi in Padang, continuing regional expansion.",
    icon: MapPin,
  },
];
