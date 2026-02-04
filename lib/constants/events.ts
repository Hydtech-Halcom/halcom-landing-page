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
    image: [
      "/assets/events/PRH_1328.jpg",
      "/assets/events/PRH_7305.jpg",
      "/assets/events/PRH_7308.jpg",
      "/assets/events/PRH_7351.jpg",
      "/assets/events/PRH_7379.jpg",
      "/assets/events/PRH_7438.jpg",
      "/assets/events/PRH_7441.jpg",
      "/assets/events/PRH_7464.jpg",
      "/assets/events/PRH_7484.jpg",
      "/assets/events/PRH_7491.jpg",
      "/assets/events/PRH_7503.jpg",
    ],
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
    image: ["/assets/events/IMG_9154.jpg", "/assets/events/IMG_9118.jpg", "/assets/events/IMG_9179.jpg", "/assets/events/IMG_9269.jpg", "/assets/events/IMG_9469.jpg", "/assets/events/IMG_9480.jpg"],
    status: "upcoming",
    featured: true,
  },
];
