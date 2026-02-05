// Company Contact Information

export interface OfficeAddress {
  name: string;
  lines: string[];
  imageSrc: string;
  badge?: string;
}

export const HEAD_OFFICE: OfficeAddress = {
  name: "Head Office",
  lines: ["Palma Tower, 20th Floor Jl. RA Kartini II-S Kav-6", "Kebayoran Lama, Jakarta Selatan, 12310"],
  imageSrc: "/assets/contact/halcom-jakarta.jpg",
  badge: "HQ",
};

export const BRANCH_OFFICES: OfficeAddress[] = [
  {
    name: "Branch Office – Batam",
    lines: ["The Central Business Sukajadi Blok B2 No 3A", "Batam, Kepulauan Riau, 29444, Indonesia"],
    imageSrc: "/assets/contact/halcom-batam.jpg",
    badge: "Branch",
  },
  {
    name: "Branch Office – Padang",
    lines: ["Auditorium Universitas Negeri Padang", "Jl. Prof. Dr. Hamka, Air Tawar Barat", "Padang Utara, Kota Padang, Sumatera Barat"],
    imageSrc: "/assets/contact/halcom-padang.jpg",
    badge: "Branch",
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
  { label: "Teams", href: "/teams" },
  { label: "Contact", href: "/contact" },
];

export const SOCIAL_LINKS = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "LinkedIn", href: "#" },
];
