// Company Contact Information

export interface OfficeAddress {
  name: string;
  area?: string;
  lines: string[];
  imageSrc: string;
  badge?: string;
  phone?: string;
  email?: string;
  maps?: string;
  available?: string;
}

export const BRANCH_OFFICES: OfficeAddress[] = [
  {
    name: "PT Halcom Inovasi Teknologi",
    area: "All Indonesia except Batam Area",
    lines: ["Palma Tower, 20th Floor, Jl. RA Kartini II-S Kav-6", "Kebayoran Lama, South Jakarta, 12310"],
    imageSrc: "/assets/contact/halcom-jakarta.jpg",
    badge: "HQ",
    phone: "+6281297218055",
    email: "sales@halcominovasi.co.id",
    maps: "https://maps.app.goo.gl/urcZjB1NcJahgayJ8",
    available: "09:00 AM - 06:00 PM",
  },
  {
    name: "PT Halcom Integrated Solution",
    area: "Batam Area Only",
    lines: ["The Central Business Sukajadi Block B2 No 3A", "Batam, Riau Islands, 29444, Indonesia"],
    imageSrc: "/assets/contact/halcom-batam.jpg",
    badge: "Branch",
    phone: "+62818461503",
    email: "sales@halcom.co.id",
    maps: "https://maps.app.goo.gl/FULEJjsLDn5p4QM49",
    available: "08:00 AM - 05:00 PM",
  },
  {
    name: "PT Halcom Inovasi Teknologi",
    area: "Branch Office – Padang",
    lines: ["Auditorium Universitas Negeri Padang Jl. Prof. Hamka, Air Tawar Barat, Padang Utara, Kota Padang, Sumatera Barat"],
    imageSrc: "/assets/contact/halcom-padang.jpg",
    badge: "Branch",
    phone: "+628136376959",
    email: "sales@halcominovasi.co.id",
    maps: "https://maps.app.goo.gl/pqMoqsC5cKyMkswc7",
    available: "09:00 AM - 05:00 PM",
  },
];

export const CONTACT_INFO = {
  phone: "+62 21-3003-3418",
  email: "sales@halcominovasi.co.id",
};

export const NAV_LINKS = [
  { label: "About Us", href: "/about" },
  { label: "Solutions", href: "/solutions" },
  { label: "Partner", href: "/partner" },
  { label: "Qualifications", href: "/qualifications" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
];
