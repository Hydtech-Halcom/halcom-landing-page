// Type untuk Teams Logo
export interface TeamMember {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// Data team members dari folder /public/images/teams
export const TEAM_MEMBERS: TeamMember[] = [
  { src: "/images/teams/team-1.png", alt: "Team Member 1" },
  { src: "/images/teams/team-2.png", alt: "Team Member 2" },
  { src: "/images/teams/team-3.png", alt: "Team Member 3" },
  { src: "/images/teams/team-4.png", alt: "Team Member 4" },
  { src: "/images/teams/team-5.png", alt: "Team Member 5" },
  { src: "/images/teams/team-6.png", alt: "Team Member 6" },
  { src: "/images/teams/team-7.png", alt: "Team Member 7" },
  { src: "/images/teams/team-8.png", alt: "Team Member 8" },
  { src: "/images/teams/team-9.png", alt: "Team Member 9" },
];

// Type untuk Testimonial
export interface Testimonial {
  text: string;
  image: string;
  name: string;
  role: string;
}

// Data testimonials
export const TESTIMONIALS: Testimonial[] = [
  {
    text: "Hydtech memberikan solusi infrastruktur yang sangat handal untuk perusahaan kami.",
    image: "/images/teams/team-1.png",
    name: "Ahmad Rizky",
    role: "IT Manager",
  },
  {
    text: "Tim support yang sangat responsif dan profesional dalam menangani masalah teknis.",
    image: "/images/teams/team-2.png",
    name: "Siti Nurhaliza",
    role: "CTO",
  },
  {
    text: "Implementasi sistem berjalan lancar berkat koordinasi tim Hydtech yang solid.",
    image: "/images/teams/team-3.png",
    name: "Budi Santoso",
    role: "Project Manager",
  },
  {
    text: "Kualitas layanan yang diberikan melebihi ekspektasi kami.",
    image: "/images/teams/team-4.png",
    name: "Dewi Lestari",
    role: "Operations Director",
  },
  {
    text: "Hydtech menjadi partner terpercaya kami dalam transformasi digital.",
    image: "/images/teams/team-5.png",
    name: "Eko Prasetyo",
    role: "CEO",
  },
  {
    text: "Solusi yang diberikan sangat cost-effective dan scalable.",
    image: "/images/teams/team-6.png",
    name: "Fitri Amanda",
    role: "Finance Manager",
  },
  {
    text: "Solusi yang diberikan sangat cost-effective dan scalable.",
    image: "/images/teams/team-7.png",
    name: "Fitri Amanda",
    role: "Finance Manager",
  },
  {
    text: "Solusi yang diberikan sangat cost-effective dan scalable.",
    image: "/images/teams/team-8.png",
    name: "Fitri Amanda",
    role: "Finance Manager",
  },
  {
    text: "Solusi yang diberikan sangat cost-effective dan scalable.",
    image: "/images/teams/team-9.png",
    name: "Fitri Amanda",
    role: "Finance Manager",
  },
];
