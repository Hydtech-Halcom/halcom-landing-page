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
    title: "Forum Komunikasi Pengelola Pengadaan Barang/Jasa dan Business Matching dalam Rangka Hari Jadi IFPI Ke-9 Tahun 2025",
    description:
      "Forum komunikasi dan business matching yang diselenggarakan dalam rangka memperingati Hari Jadi IFPI ke-9. Acara ini bertujuan untuk memperkuat jaringan antara pengelola pengadaan barang/jasa dengan vendor serta menciptakan peluang kolaborasi bisnis.",
    shortDescription: "Forum komunikasi dan business matching IFPI ke-9",
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
      "/assets/events/411A0889.jpg",
      "/assets/events/411A0890.jpg",
      "/assets/events/411A1141.jpg",
      "/assets/events/411A1164.jpg",
      "/assets/events/411A1171.jpg",
      "/assets/events/411A1665.jpg",
      "/assets/events/411A1732.jpg",
      "/assets/events/411A1749.jpg",
    ],
    status: "upcoming",
    featured: true,
  },
  {
    id: 2,
    slug: "epson-solution-innovation-empowerment-sumatera-barat-2025",
    title: "Epson Solution for Innovation & Empowerment: 'Mendorong Inovasi, Solusi, dan Pemberdayaan Digital di Sumatera Barat'",
    description: "Seminar dan showcase solusi Epson untuk mendorong inovasi digital di Sumatera Barat. Acara ini menampilkan teknologi terkini dari Epson dan bagaimana solusi tersebut dapat memberdayakan digitalisasi di berbagai sektor.",
    shortDescription: "Showcase solusi inovasi digital Epson",
    date: "2025-09-30",
    time: "10:00 - 15:00 WIB",
    location: "Hotel Santika Premiere Padang",
    category: "Seminar & Technology Showcase",
    image: ["/assets/events/epson-sumatera-barat-2025.jpg"],
    status: "upcoming",
    featured: true,
  },
  {
    id: 3,
    slug: "product-knowledge-session-smart-campus-empowerment-2025",
    title: "Product Knowledge Session: Smart Campus Empowerment - 'Future-Ready Campus, Smarter Generation'",
    description: "Sesi pengetahuan produk yang berfokus pada solusi smart campus untuk perguruan tinggi. Acara ini membahas teknologi yang dapat mengubah kampus menjadi lingkungan pembelajaran yang lebih cerdas dan efisien.",
    shortDescription: "Sesi pengetahuan produk solusi smart campus",
    date: "2025-08-28",
    time: "13:00 - 16:00 WIB",
    location: "UNP Hotel & Convention Center",
    category: "Product Knowledge Session",
    image: ["/assets/events/smart-campus-2025.jpg"],
    status: "upcoming",
    featured: true,
  },
  {
    id: 4,
    slug: "digital-transformation-forum-2024",
    title: "Digital Transformation Forum 2024",
    description: "Join industry leaders as we explore the future of digital transformation in enterprise IT infrastructure.",
    shortDescription: "Exploring future IT infrastructure trends",
    date: "2024-03-15",
    time: "09:00 - 17:00",
    location: "Jakarta Convention Center",
    category: "Conference",
    image: ["/assets/events/conference.jpg"],
    status: "completed",
    featured: false,
  },
  {
    id: 5,
    slug: "cybersecurity-workshop-2024",
    title: "Advanced Cybersecurity Workshop",
    description: "Hands-on workshop focusing on the latest cybersecurity threats and defense strategies.",
    shortDescription: "Hands-on cybersecurity training",
    date: "2024-03-22",
    time: "13:00 - 16:00",
    location: "Halcom Training Center",
    category: "Workshop",
    image: ["/assets/events/workshop.jpg"],
    status: "completed",
    featured: false,
  },
];
