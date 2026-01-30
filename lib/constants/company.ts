// Company Contact Information

export interface OfficeAddress {
  name: string;
  lines: string[];
}

export const HEAD_OFFICE: OfficeAddress = {
  name: "Head Office",
  lines: ["Palma Tower, 20th Floor Jl. RA Kartini II-S Kav-6", "Kebayoran Lama, Jakarta Selatan, 12310"],
};

export const BRANCH_OFFICE: OfficeAddress = {
  name: "Branch Office",
  lines: ["The Central Business Sukajadi Blok B2 No 3A", "Batam, Kepulauan Riau, 29444, Indonesia"],
};

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
