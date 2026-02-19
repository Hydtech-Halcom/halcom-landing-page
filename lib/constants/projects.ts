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
    description: "Interactive glass board display system with touch capabilities for modern meeting rooms.",
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
    description: "Integrated wall panel system with LED displays and interactive controls.",
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
    description: "Self-service automated book return station for modern libraries.",
    client: "Perpustakaan Universitas Negeri Padang",
    productName: "Flex Book Drop HF RFID Manual Flat Front",
    productCode: "AMH510005-000",
  },
  {
    id: "self-check-1000-white-unp",
    imgSrc: "/assets/project/scanner-book.jpg",
    imgAlt: "Scanner Book UNP",
    title: "Book Scanner System",
    description: "SelfCheck 1000 white is a high-speed book scanner that can scan books at a rate of 1000 pages per minute.",
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
    description: "Complete digital library management system with integrated catalog and member services.",
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
    description: "RFID Premium gate Baseplate, 1 aisle is a high-speed book scanner that can scan books at a rate of 1000 pages per minute.",
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
    description: "Modern computer workstation setup for digital library access and research.",
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
    description: "Centralized control room for monitoring and managing library systems.",
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
    description: "Enterprise-grade server infrastructure for library data management and backup.",
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
    description: "Interactive standing digital kiosk for self-service information access.",
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
    description: "Interactive glass board display with advanced presentation capabilities.",
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
    description: "High-resolution digital monitor display for information and announcements.",
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
    description: "Advanced computing infrastructure for research and data processing.",
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
    description: "State-of-the-art theater room with immersive audio-visual experience.",
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
    description: "Large-scale LED videotron for outdoor information and event displays.",
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
    description: "High-resolution indoor LED display wall for presentations and events.",
    client: "Politeknik Negeri Padang",
    imgVirtual: "/assets/project/vidiotron2-pnp-360.jpg",
    imgAltVirtual: "Videotron 2 360 View",
    initialLookAt: { longitude: 0, latitude: 0 },
  },
];

// PLN Batam Projects
export const projectsPLNBatam: ProjectCardData[] = [
  {
    id: "instalasi-pln-batam-1",
    imgSrc: "/assets/project/Instalasi-PLN Batam-1.jpeg",
    imgAlt: "Instalasi PLN Batam 1",
    title: "PLN Batam Installation - Site 1",
    description: "On-site installation activity for PLN Batam infrastructure setup.",
    client: "PLN Batam",
  },
  {
    id: "instalasi-pln-batam-2",
    imgSrc: "/assets/project/Instalasi-PLN Batam-2.jpeg",
    imgAlt: "Instalasi PLN Batam 2",
    title: "PLN Batam Installation - Site 2",
    description: "Field implementation and equipment installation for PLN Batam.",
    client: "PLN Batam",
  },
  {
    id: "instalasi-pln-batam-3",
    imgSrc: "/assets/project/Instalasi-PLN Batam-3.jpeg",
    imgAlt: "Instalasi PLN Batam 3",
    title: "PLN Batam Installation - Site 3",
    description: "Technical deployment process as part of PLN Batam project execution.",
    client: "PLN Batam",
  },
  {
    id: "instalasi-pln-batam-4",
    imgSrc: "/assets/project/Instalasi-PLN Batam-4.jpeg",
    imgAlt: "Instalasi PLN Batam 4",
    title: "PLN Batam Installation - Site 4",
    description: "Infrastructure installation documentation for PLN Batam operations.",
    client: "PLN Batam",
  },
];

export const dataCenterContainment: ProjectCardData[] = [
  {
    id: "photo-2026-02-02-13-02-18",
    imgSrc: "/assets/project/PHOTO-2026-02-02-13-02-18.jpg",
    imgAlt: "Project Documentation 1",
    title: "Project Documentation - Session 1",
    description: "Project site documentation during implementation activities in the field.",
    client: "JOB Pertamina - Medco E&P Tomori Sulawesi",
  },
  {
    id: "photo-2026-02-02-13-02-54",
    imgSrc: "/assets/project/PHOTO-2026-02-02-13-02-54.jpg",
    imgAlt: "Project Documentation 2",
    title: "Project Documentation - Session 2",
    description: "Implementation progress capture for ongoing technical deployment.",
    client: "JOB Pertamina - Medco E&P Tomori Sulawesi",
  },
  {
    id: "photo-2026-02-02-13-03-10",
    imgSrc: "/assets/project/PHOTO-2026-02-02-13-03-10.jpg",
    imgAlt: "Project Documentation 3",
    title: "Project Documentation - Session 3",
    description: "Field activity record as part of system installation and commissioning.",
    client: "JOB Pertamina - Medco E&P Tomori Sulawesi",
  },
  {
    id: "photo-2026-02-02-13-04-10",
    imgSrc: "/assets/project/PHOTO-2026-02-02-13-04-10.jpg",
    imgAlt: "Project Documentation 4",
    title: "Project Documentation - Session 4",
    description: "Final-stage documentation for project installation on site.",
    client: "JOB Pertamina - Medco E&P Tomori Sulawesi",
  },
];

// General Installation Projects
export const projectsInstallation: ProjectCardData[] = [
  {
    id: "instalasi-1",
    imgSrc: "/assets/project/Instalasi-1.jpeg",
    imgAlt: "Installation 1",
    title: "Installation Documentation 1",
    description: "Field installation activity documentation for technology solution implementation.",
    client: "PT SIIX EMS Indonesia",
  },
  {
    id: "instalasi-2",
    imgSrc: "/assets/project/Instalasi-2.jpeg",
    imgAlt: "Installation 2",
    title: "Installation Documentation 2",
    description: "Documentation of device installation progress and system integration at the location.",
    client: "PT SIIX EMS Indonesia",
  },
  {
    id: "instalasi-3",
    imgSrc: "/assets/project/Instalasi-3.jpeg",
    imgAlt: "Installation 3",
    title: "Installation Documentation 3",
    description: "Technical team activities during deployment and configuration process in the field.",
    client: "PT SIIX EMS Indonesia",
  },
  {
    id: "instalasi-4",
    imgSrc: "/assets/project/Instalasi-4.jpeg",
    imgAlt: "Installation 4",
    title: "Installation Documentation 4",
    description: "Final stage of installation implementation as part of project execution.",
    client: "PT SIIX EMS Indonesia",
  },
];

export const projectsWirelessAssessmentEkahau: ProjectCardData[] = [
  {
    id: "wireless-assessment-ekahau-1",
    imgSrc: "/assets/project/[PT-PLN-Batam]-Wireless-Assessment-Ekahau1.jpg",
    imgAlt: "Wireless Assessment Ekahau 1",
    title: "Wireless Assessment Ekahau - Site 1",
    description: "Wireless network assessment using Ekahau tools for coverage mapping and optimization.",
    client: "PT PLN Batam",
  },
  {
    id: "wireless-assessment-ekahau-2",
    imgSrc: "/assets/project/[PT-PLN-Batam]-Wireless-Assessment-Ekahau2.jpg",
    imgAlt: "Wireless Assessment Ekahau 2",
    title: "Wireless Assessment Ekahau - Site 2",
    description: "On-site validation for signal quality and wireless performance benchmarking.",
    client: "PT PLN Batam",
  },
  {
    id: "wireless-assessment-ekahau-3",
    imgSrc: "/assets/project/[PT-PLN-Batam]-Wireless-Assessment-Ekahau3.jpg",
    imgAlt: "Wireless Assessment Ekahau 3",
    title: "Wireless Assessment Ekahau - Site 3",
    description: "Survey and heatmap documentation for Wi-Fi infrastructure planning.",
    client: "PT PLN Batam",
  },
  {
    id: "wireless-assessment-ekahau-4",
    imgSrc: "/assets/project/[PT-PLN-Batam]-Wireless-Assessment-Ekahau4.jpg",
    imgAlt: "Wireless Assessment Ekahau 4",
    title: "Wireless Assessment Ekahau - Site 4",
    description: "Final assessment pass to ensure wireless coverage and reliability targets are met.",
    client: "PT PLN Batam",
  },
];

export const projectsWirelessAssessmentTdk: ProjectCardData[] = [
  {
    id: "tdk-wireless-assessment-ekahau-1",
    imgSrc: "/assets/project/[PT TDK-ELECTRONICS-INDONESIA]-Wireless-Assessment-Ekahau1.jpg",
    imgAlt: "TDK Wireless Assessment Ekahau 1",
    title: "Wireless Assessment Ekahau - TDK Site 1",
    description: "On-site wireless assessment activity using Ekahau for signal and coverage analysis.",
    client: "PT TDK Electronics Indonesia",
  },
  {
    id: "tdk-wireless-assessment-ekahau-2",
    imgSrc: "/assets/project/[PT TDK ELECTRONICS INDONESIA] Wireless Assessment Ekahau2.jpg",
    imgAlt: "TDK Wireless Assessment Ekahau 2",
    title: "Wireless Assessment Ekahau - TDK Site 2",
    description: "Wireless measurement and validation process for infrastructure optimization.",
    client: "PT TDK Electronics Indonesia",
  },
  {
    id: "tdk-wireless-assessment-ekahau-3",
    imgSrc: "/assets/project/[PT TDK ELECTRONICS INDONESIA] Wireless Assessment Ekaha3.jpg",
    imgAlt: "TDK Wireless Assessment Ekahau 3",
    title: "Wireless Assessment Ekahau - TDK Site 3",
    description: "Survey documentation for access point planning and network reliability improvement.",
    client: "PT TDK Electronics Indonesia",
  },
  {
    id: "tdk-wireless-assessment-ekahau-4",
    imgSrc: "/assets/project/[PT TDK ELECTRONICS INDONESIA] Wireless Assessment Ekahau4.jpg",
    imgAlt: "TDK Wireless Assessment Ekahau 4",
    title: "Wireless Assessment Ekahau - TDK Site 4",
    description: "Field verification of Wi-Fi quality and coverage consistency across areas.",
    client: "PT TDK Electronics Indonesia",
  },
  {
    id: "tdk-wireless-assessment-ekahau-5",
    imgSrc: "/assets/project/[PT TDK ELECTRONICS INDONESIA] Wireless Assessment Ekahau5.jpg",
    imgAlt: "TDK Wireless Assessment Ekahau 5",
    title: "Wireless Assessment Ekahau - TDK Site 5",
    description: "Final assessment stage and reporting for wireless infrastructure readiness.",
    client: "PT TDK Electronics Indonesia",
  },
];

export const projectsEpsonAcControl: ProjectCardData[] = [
  {
    id: "epson-ac-control-1",
    imgSrc: "/assets/project/[PT-Epson-Batam]-New-Building-AC-Control1.jpeg",
    imgAlt: "New Building AC Control 1",
    title: "New Building AC Control - Phase 1",
    description: "Initial installation stage for centralized AC control system in the new building.",
    client: "PT Epson Batam",
  },
  {
    id: "epson-ac-control-2",
    imgSrc: "/assets/project/[PT-Epson-Batam]-New-Building-AC-Control2.jpeg",
    imgAlt: "New Building AC Control 2",
    title: "New Building AC Control - Phase 2",
    description: "Control panel deployment and integration with building infrastructure.",
    client: "PT Epson Batam",
  },
  {
    id: "epson-ac-control-3",
    imgSrc: "/assets/project/[PT-Epson-Batam]-New-Building-AC-Control3.jpeg",
    imgAlt: "New Building AC Control 3",
    title: "New Building AC Control - Phase 3",
    description: "System configuration and testing for operational AC zoning management.",
    client: "PT Epson Batam",
  },
  {
    id: "epson-ac-control-4",
    imgSrc: "/assets/project/[PT-Epson-Batam]-New-Building-AC-Control4.jpeg",
    imgAlt: "New Building AC Control 4",
    title: "New Building AC Control - Phase 4",
    description: "Implementation progress for monitoring and remote control capabilities.",
    client: "PT Epson Batam",
  },
  {
    id: "epson-ac-control-5",
    imgSrc: "/assets/project/[PT-Epson-Batam]-New-Building-AC-Control5.jpeg",
    imgAlt: "New Building AC Control 5",
    title: "New Building AC Control - Phase 5",
    description: "Final commissioning and validation of AC control system operations.",
    client: "PT Epson Batam",
  },
];

export const projectsDellServerVmCluster: ProjectCardData[] = [
  {
    id: "dell-server-vm-cluster-1",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster1.jpg",
    imgAlt: "Dell Server VM Cluster 1",
    title: "Dell Server VM Cluster - Stage 1",
    description: "Server rack preparation and infrastructure setup for VM cluster deployment.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-2",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster2.jpg",
    imgAlt: "Dell Server VM Cluster 2",
    title: "Dell Server VM Cluster - Stage 2",
    description: "Hardware installation process for cluster nodes and network components.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-3",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster3.jpg",
    imgAlt: "Dell Server VM Cluster 3",
    title: "Dell Server VM Cluster - Stage 3",
    description: "System integration and storage connectivity configuration.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-4",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster4.jpg",
    imgAlt: "Dell Server VM Cluster 4",
    title: "Dell Server VM Cluster - Stage 4",
    description: "Virtualization environment setup and cluster readiness checks.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-5",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster5.jpg",
    imgAlt: "Dell Server VM Cluster 5",
    title: "Dell Server VM Cluster - Stage 5",
    description: "Performance tuning and validation for production workload support.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-6",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster6.jpg",
    imgAlt: "Dell Server VM Cluster 6",
    title: "Dell Server VM Cluster - Stage 6",
    description: "High-availability and failover scenario testing across cluster nodes.",
    client: "PT Sumitomo Wiring Systems",
  },
  {
    id: "dell-server-vm-cluster-7",
    imgSrc: "/assets/project/[PT-Sumitomo-Wiring-Systems]-Dell-Server-VM-Cluster7.jpg",
    imgAlt: "Dell Server VM Cluster 7",
    title: "Dell Server VM Cluster - Stage 7",
    description: "Final deployment documentation and handover preparation.",
    client: "PT Sumitomo Wiring Systems",
  },
];

export const projectsManageService: ProjectCardData[] = [
  {
    id: "manage-service-1",
    imgSrc: "/assets/project/manage-service-1.jpeg",
    imgAlt: "Manage Service 1",
    title: "Managed Service Activity - 1",
    description: "Routine managed service support activity for operational system stability.",
    client: "Managed Service Project",
  },
  {
    id: "manage-service-2",
    imgSrc: "/assets/project/manage-service-2.jpeg",
    imgAlt: "Manage Service 2",
    title: "Managed Service Activity - 2",
    description: "Technical maintenance and monitoring support at customer site.",
    client: "Managed Service Project",
  },
  {
    id: "manage-service-3",
    imgSrc: "/assets/project/manage-service-3.jpeg",
    imgAlt: "Manage Service 3",
    title: "Managed Service Activity - 3",
    description: "Implementation follow-up and service quality assurance process.",
    client: "Managed Service Project",
  },
  {
    id: "manage-service-4",
    imgSrc: "/assets/project/manage-service-4.jpeg",
    imgAlt: "Manage Service 4",
    title: "Managed Service Activity - 4",
    description: "Incident handling and infrastructure optimization support.",
    client: "Managed Service Project",
  },
  {
    id: "manage-service-5",
    imgSrc: "/assets/project/manage-service-5.jpeg",
    imgAlt: "Manage Service 5",
    title: "Managed Service Activity - 5",
    description: "Ongoing managed operation and final service documentation.",
    client: "Managed Service Project",
  },
];

// Combined all projects
export const allProjects: ProjectCardData[] = [
  ...projectsUNP,
  ...projectsPNP,
  ...projectsPLNBatam,
  ...projectsInstallation,
  ...dataCenterContainment,
  ...projectsWirelessAssessmentEkahau,
  ...projectsWirelessAssessmentTdk,
  ...projectsEpsonAcControl,
  ...projectsDellServerVmCluster,
  ...projectsManageService,
];

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
