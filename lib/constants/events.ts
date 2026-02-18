export type Event = {
  id: number;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  location: string;
  category: string;
  image: string[]; // URL or path to the event image
  status: "upcoming" | "completed";
  featured: boolean;
};

export const events: Event[] = [
  {
    id: 1,
    slug: "forum-komunikasi-pengelola-pengadaan-business-matching-2025",
    title:
      "Forum Komunikasi Pengelola Pengadaan Barang/Jasa dan Business Matching dalam Rangka Hari Jadi IFPI Ke-9 Tahun 2025",
    description:
      " A communication forum and business matching event organized to commemorate the 9th Anniversary of IFPI. The event aims to strengthen networks between procurement management professionals and vendors, as well as create opportunities for business collaboration.",
    shortDescription: "9th IFPI Communication and Business Matching Forum",
    date: "2025-04-24",
    time: "09:00 - 17:00 WIB",
    location: "Harris Hotel Batam",
    category: "Forum & Business Matching",
    image: [
      "/assets/events/411A1201.jpg",
      "/assets/events/411A0482.jpg",
      "/assets/events/411A0655.jpg",
      "/assets/events/411A0766.jpg",
      "/assets/events/411A0886.jpg",
      "/assets/events/411A1204.jpg",
      "/assets/events/411A0889.JPG",
      "/assets/events/411A0890.JPG",
      "/assets/events/411A1141.JPG",
      "/assets/events/411A1164.JPG",
      "/assets/events/411A1171.JPG",
      "/assets/events/411A1665.JPG",
      "/assets/events/411A1732.JPG",
      "/assets/events/411A1749.JPG",
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    slug: "epson-solution-innovation-empowerment-sumatera-barat-2025",
    title:
      "Epson Solution for Innovation & Empowerment: 'Mendorong Inovasi, Solusi, dan Pemberdayaan Digital di Sumatera Barat'",
    description:
      "A seminar and solution showcase by Epson aimed at driving innovation and digital transformation in Sumatera Barat. The event featured Epson’s latest technologies and solutions, highlighting how they can support government initiatives across various sectors.",
    shortDescription: "Epson Digital Innovation Solutions Showcase",
    date: "2025-09-30",
    time: "10:00 - 15:00 WIB",
    location: "Hotel Santika Premiere Padang",
    category: "Seminar & Technology Showcase",
    image: [
      "/assets/events/PRH_1328.JPG",
      "/assets/events/PRH_7305.JPG",
      "/assets/events/PRH_7308.JPG",
      "/assets/events/PRH_7351.JPG",
      "/assets/events/PRH_7379.JPG",
      "/assets/events/PRH_7438.JPG",
      "/assets/events/PRH_7441.JPG",
      "/assets/events/PRH_7464.JPG",
      "/assets/events/PRH_7484.JPG",
      "/assets/events/PRH_7491.JPG",
      "/assets/events/PRH_7503.JPG",
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: 3,
    slug: "product-knowledge-session-smart-campus-empowerment-2025",
    title:
      "Product Knowledge Session: Smart Campus Empowerment - 'Future-Ready Campus, Smarter Generation'",
    description:
      "A product knowledge session focused on smart campus solutions for higher education institutions. The event discussed technologies that support the development of smarter and more efficient learning environments using Huawei and Hikvision products.",
    shortDescription: "Smart Campus Solution Product Knowledge Session",
    date: "2025-08-28",
    time: "13:00 - 16:00 WIB",
    location: "UNP Hotel & Convention Center",
    category: "Product Knowledge Session",
    image: [
      "/assets/events/IMG_9154.JPG",
      "/assets/events/IMG_9118.JPG",
      "/assets/events/IMG_9179.JPG",
      "/assets/events/IMG_9269.JPG",
      "/assets/events/IMG_9469.JPG",
      "/assets/events/IMG_9480.JPG",
    ],
    status: "upcoming",
    featured: true,
  },
];
