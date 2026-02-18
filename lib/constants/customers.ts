// Type untuk Customer Logo
export interface CustomerLogo {
  id: number;
  name: string;
  img: string;
}

// Customer logos dari folder /public/images/customers
export const CUSTOMER_LOGOS: CustomerLogo[] = [
  {
    id: 1,
    name: "Caterpillar",
    img: "/images/customers/Caterpillar_Logo.wine.svg",
  },
  { id: 2, name: "Chevron", img: "/images/customers/Chevron_Logo.wine.svg" },
  { id: 3, name: "Flex", img: "/images/customers/Flex_Logo.wine.svg" },
  {
    id: 4,
    name: "Panasonic",
    img: "/images/customers/Panasonic-Logo.wine.svg",
  },
  { id: 5, name: "Philips", img: "/images/customers/Philips-Logo.wine.svg" },
  { id: 6, name: "Toshiba", img: "/images/customers/Toshiba-Logo.wine.svg" },
  { id: 7, name: "Yokogawa", img: "/images/customers/Yokogawa-Logo.wine.svg" },
  { id: 8, name: "Yokohama", img: "/images/customers/Yokohama-Logo.wine.svg" },
  {
    id: 9,
    name: "Bank Riau Kepri",
    img: "/images/customers/bank-riaukepri-logo.png",
  },
  {
    id: 10,
    name: "Banyan Tree",
    img: "/images/customers/banyan-tree-logo.jpeg",
  },
  { id: 11, name: "Bapedal", img: "/images/customers/bapedal-logo.png" },
  { id: 12, name: "Bank Indonesia", img: "/images/customers/bi-logo.png" },
  { id: 13, name: "BNI", img: "/images/customers/bni-logo.jpg" },
  { id: 14, name: "BP Batam", img: "/images/customers/bpbatam-logo.jpg" },
  { id: 15, name: "BPJS", img: "/images/customers/bpjs-logo.png" },
  { id: 16, name: "Diskominfo", img: "/images/customers/diskominfo-logo.jpeg" },
  {
    id: 17,
    name: "Harris Hotel",
    img: "/images/customers/harris-hotel-logo.png",
  },
  { id: 18, name: "ISI PP", img: "/images/customers/isi-pp-logo.png" },
  { id: 19, name: "Kemenkes", img: "/images/customers/kemenkes-logo.png" },
  { id: 20, name: "Marco Polo", img: "/images/customers/marcopolo-logo.jpeg" },
  { id: 21, name: "Patria", img: "/images/customers/patria-logo.jpg" },
  { id: 22, name: "PLN Batam", img: "/images/customers/pln-batam-logo.png" },
  { id: 23, name: "Ria Bintan", img: "/images/customers/ria-bintan-logo.png" },
  { id: 24, name: "ByteDance", img: "/images/customers/byte-dance-logo.png" },
  {
    id: 25,
    name: "Treasure Bay",
    img: "/images/customers/treasure-bay-logo.png",
  },
  {
    id: 26,
    name: "UIN Imam Bonjol",
    img: "/images/customers/uin-yunus-logo.png",
  },
  {
    id: 27,
    name: "Universitas Andalas",
    img: "/images/customers/unand-logo.png",
  },
  {
    id: 28,
    name: "Universitas Negeri Padang",
    img: "/images/customers/unp-logo.png",
  },
  { id: 29, name: "VME", img: "/images/customers/vme-logo.jpeg" },
];
