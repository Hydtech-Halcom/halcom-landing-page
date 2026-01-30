import { Logo } from "@/components/ui/logo-carousel";

// Type untuk LogoCloud (slider)
export interface PartnershipLogo {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Logo untuk LogoCarousel component
export const PARTNER_LOGOS: Logo[] = [
  {
    name: "APC by Schneider Electric",
    id: 1,
    img: "/images/APC_by_Schneider_Electric-Logo.wine.svg",
  },
  { name: "Cisco Systems", id: 2, img: "/images/Cisco_Systems-Logo.wine.svg" },
  { name: "CommScope", id: 3, img: "/images/CommScope-Logo.wine.svg" },
  {
    name: "Emerson Electric",
    id: 4,
    img: "/images/Emerson_Electric-Logo.wine.svg",
  },
  { name: "Hikvision", id: 5, img: "/images/Hikvision-Logo.wine.svg" },
  { name: "Honeywell", id: 6, img: "/images/Honeywell-Logo.wine.svg" },
  { name: "Huawei", id: 7, img: "/images/Huawei-Logo.wine.svg" },
  {
    name: "Infineon Technologies",
    id: 8,
    img: "/images/Infineon_Technologies-Logo.wine.svg",
  },
  {
    name: "LG Corporation",
    id: 9,
    img: "/images/LG_Corporation-Logo.wine.svg",
  },
  { name: "Polycom", id: 10, img: "/images/Polycom-Logo.wine.svg" },
  { name: "Rittal", id: 11, img: "/images/Rittal-Logo.wine.svg" },
  {
    name: "Robert Bosch",
    id: 12,
    img: "/images/Robert_Bosch_GmbH-Logo.wine.svg",
  },
  { name: "Samsung", id: 13, img: "/images/Samsung-Logo.wine.svg" },
  {
    name: "Schneider Electric",
    id: 14,
    img: "/images/Schneider_Electric-Logo.wine.svg",
  },
  { name: "Seiko Epson", id: 15, img: "/images/Seiko_Epson-Logo.wine.svg" },
  { name: "Yamaha", id: 16, img: "/images/Yamaha-Logo.png" },
  {
    name: "Yamaha Motor",
    id: 17,
    img: "/images/Yamaha_Motor_Company-Logo.wine.svg",
  },
];

// Logo untuk LogoCloud/Slider component (Partnership badges)
export const PARTNERSHIP_LOGOS: PartnershipLogo[] = [
  {
    src: "/images/partnership/DellEMC-Partner-Gold-01.jpg",
    alt: "Dell EMC Gold Partner",
  },
  {
    src: "/images/partnership/allied-telesis-platimum-partner.png",
    alt: "Allied Telesis Platinum Partner",
  },
  { src: "/images/partnership/cisco-fin.png", alt: "Cisco Partner" },
  {
    src: "/images/partnership/hpe-silver-partner.png",
    alt: "HPE Silver Partner",
  },
  {
    src: "/images/partnership/vmware-enterprise-partner.jpg",
    alt: "VMware Enterprise Partner",
  },
];
