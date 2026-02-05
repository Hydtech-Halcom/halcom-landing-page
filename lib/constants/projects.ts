// Project data for Hydtech company profile
export interface ProjectCardData {
  id: string;
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  client: string;
  productName?: string;
  productCode?: string;
  imgVirtual?: string;
  imgAltVirtual?: string;
  initialLookAt?: {
    longitude: number;
    latitude: number;
  };
}

// Perpustakaan Universitas Negeri Padang Projects
export const projectsUNP: ProjectCardData[] = [
  {
    id: "glass-board-unp",
    imgSrc: "/assets/project/glass-board.jpg",
    imgAlt: "Glass Board UNP",
    title: "Glass Board Interactive Display",
    description:
      "Interactive glass board display system with touch capabilities for modern meeting rooms.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/glass-board-360.jpg",
    imgAltVirtual: "Glass Board 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "wall-panel-unp",
    imgSrc: "/assets/project/wall-panel.jpg",
    imgAlt: "Wall Panel UNP",
    title: "Smart Wall Panel System",
    description:
      "Integrated wall panel system with LED displays and interactive controls.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/wall-panel-360.jpg",
    imgAltVirtual: "Wall Panel 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "book-drop-unp",
    imgSrc: "/assets/project/book-drop.jpg",
    imgAlt: "Book Drop UNP",
    title: "Book Drop System",
    description:
      "Self-service automated book return station for modern libraries.",
    client: "Perpustakaan Universitas Negeri Padang",
    productName: "Flex Book Drop HF RFID Manual Flat Front",
    productCode: "AMH510005-000",
  },
  {
    id: "self-check-1000-white-unp",
    imgSrc: "/assets/project/scanner-book.jpg",
    imgAlt: "Scanner Book UNP",
    title: "Book Scanner System",
    description:
      "SelfCheck 1000 white is a high-speed book scanner that can scan books at a rate of 1000 pages per minute.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/scanner-book-360.jpg",
    imgAltVirtual: "Scanner Book 360 View",
    productName: "SelfCheck 1000 white",
    productCode: "SCK600000-000",
    initialLookAt: { longitude: 0, latitude: -30 },
  },
  {
    id: "library-unp",
    imgSrc: "/assets/project/library-unp.jpg",
    imgAlt: "Library UNP",
    title: "Digital Library System",
    description:
      "Complete digital library management system with integrated catalog and member services.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/library-unp-360.jpg",
    imgAltVirtual: "Library UNP 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "rfid-gate-unp",
    imgSrc: "/assets/project/rfid-gate-unp.jpg",
    imgAlt: "RFID Gate UNP",
    title: "RFID Gate System",
    description:
      "RFID Premium gate Baseplate, 1 aisle is a high-speed book scanner that can scan books at a rate of 1000 pages per minute.",
    client: "Perpustakaan Universitas Negeri Padang",
    productName: "RFID Premium gate Baseplate, 1 aisle",
    productCode: "GAT000812-000",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "computer-unp",
    imgSrc: "/assets/project/computer.jpg",
    imgAlt: "Computer Lab UNP",
    title: "Digital Computer Lab",
    description:
      "Modern computer workstation setup for digital library access and research.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/computer-360.jpg",
    imgAltVirtual: "Computer Lab 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "control-room-unp",
    imgSrc: "/assets/project/control-room.jpg",
    imgAlt: "Control Room UNP",
    title: "Digital Control Room",
    description:
      "Centralized control room for monitoring and managing library systems.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/control-room-360.jpg",
    imgAltVirtual: "Control Room 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "server-unp",
    imgSrc: "/assets/project/server.jpg",
    imgAlt: "Server Room UNP",
    title: "Server Infrastructure",
    description:
      "Enterprise-grade server infrastructure for library data management and backup.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/server-360.jpg",
    imgAltVirtual: "Server Room 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "standing-digital",
    imgSrc: "/assets/project/standing-digital.jpg",
    imgAlt: "Standing Digital Kiosk",
    title: "Digital Standing Kiosk",
    description:
      "Interactive standing digital kiosk for self-service information access.",
    client: "Perpustakaan Universitas Negeri Padang",
    imgVirtual: "/assets/project/standing-digital-360.jpg",
    imgAltVirtual: "Standing Digital Kiosk 360 View",
    productName: "MultiTech Custom Kiosk",
    productCode: "MTK-032-TS",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
];

// Politeknik Negeri Padang Projects
export const projectsPNP: ProjectCardData[] = [
  {
    id: "glass-board-pnp",
    imgSrc: "/assets/project/glass-board-pnp.jpg",
    imgAlt: "Glass Board PNP",
    title: "Glass Board Interactive Display",
    description:
      "Interactive glass board display with advanced presentation capabilities.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/glass-board-pnp-360.jpg",
    imgAltVirtual: "Glass Board PNP 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "monitor-pnp",
    imgSrc: "/assets/project/monitor-pnp.jpg",
    imgAlt: "Monitor Display PNP",
    title: "Digital Monitor Display",
    description:
      "High-resolution digital monitor display for information and announcements.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/monitor-pnp-360.jpg",
    imgAltVirtual: "Monitor Display 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "super-comp-pnp",
    imgSrc: "/assets/project/super-com-pnp.jpg",
    imgAlt: "Super Computer PNP",
    title: "High Performance Computing",
    description:
      "Advanced computing infrastructure for research and data processing.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/super-comp-pnp-360.jpg",
    imgAltVirtual: "Super Computer 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "teater-room-pnp",
    imgSrc: "/assets/project/teater-room-pnp.jpg",
    imgAlt: "Theater Room PNP",
    title: "Digital Theater Room",
    description:
      "State-of-the-art theater room with immersive audio-visual experience.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/teater-room-360-pnp.jpg",
    imgAltVirtual: "Theater Room 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "vidiotron-pnp",
    imgSrc: "/assets/project/vidiotron-pnp.jpg",
    imgAlt: "Videotron PNP",
    title: "LED Videotron Display",
    description:
      "Large-scale LED videotron for outdoor information and event displays.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/vidiotron-pnp-360.jpg",
    imgAltVirtual: "Videotron 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
  {
    id: "vidiotron2-pnp",
    imgSrc: "/assets/project/vidiotron2-pnp.jpg",
    imgAlt: "Videotron 2 PNP",
    title: "Indoor LED Display Wall",
    description:
      "High-resolution indoor LED display wall for presentations and events.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/vidiotron2-pnp-360.jpg",
    imgAltVirtual: "Videotron 2 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
];

// Combined all projects
export const allProjects: ProjectCardData[] = [...projectsUNP, ...projectsPNP];

// Default projects to display (featured)
export const featuredProjects: ProjectCardData[] = [
  projectsUNP[0], // Glass Board UNP
  projectsUNP[1], // Wall Panel UNP
  projectsPNP[0], // Glass Board PNP
  projectsPNP[3], // Theater Room PNP
  projectsUNP[4], // Library UNP
  projectsUNP[7], // Control Room UNP
  projectsPNP[4], // Videotron PNP
  projectsUNP[8], // Server UNP
];
