# Halcom Landing Page

Website company profile modern untuk **Halcom** yang dibangun menggunakan Next.js 16 dengan teknologi terkini.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Fitur

- 🎨 **Desain Modern** - UI/UX yang responsif dan menarik
- ⚡ **Performa Tinggi** - Dibangun dengan Next.js App Router
- 🎭 **Animasi Smooth** - Menggunakan Framer Motion
- 🌙 **Dark/Light Mode** - Tema yang dapat disesuaikan
- 📱 **Responsif** - Optimal di semua perangkat
- 🧩 **Komponen UI** - Menggunakan Radix UI + Shadcn/ui

## 📂 Struktur Project

```
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── sections/           # Section components
│   │   ├── hero.tsx
│   │   ├── about-company.tsx
│   │   ├── solutions.tsx
│   │   ├── projects.tsx
│   │   ├── achievements.tsx
│   │   ├── team.tsx
│   │   ├── why-choose.tsx
│   │   └── contact-section.tsx
│   ├── shared/             # Shared components (Header, Footer)
│   └── ui/                 # Reusable UI components
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
├── public/                 # Static assets
└── styles/                 # Additional styles
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 atau lebih baru
- npm / pnpm / yarn

### Installation

1. **Clone repository**

   ```bash
   git clone git@github.com:Hydtech-Halcom/halcom-landing-page.git
   cd halcom-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # atau
   pnpm install
   ```

3. **Jalankan development server**

   ```bash
   npm run dev
   ```

4. **Buka browser**

   Akses [http://localhost:3000](http://localhost:3000)

## 📜 Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Menjalankan development server |
| `npm run build` | Build untuk production         |
| `npm run start` | Menjalankan production server  |
| `npm run lint`  | Menjalankan ESLint             |

## 🛠️ Tech Stack

| Category      | Technology            |
| ------------- | --------------------- |
| Framework     | Next.js 16            |
| Language      | TypeScript 5          |
| UI Library    | React 19              |
| Styling       | Tailwind CSS 4        |
| Animation     | Framer Motion         |
| UI Components | Radix UI, Shadcn/ui   |
| Form Handling | React Hook Form + Zod |
| Charts        | Recharts              |
| Icons         | Lucide React          |

## 📝 Sections

Website ini terdiri dari beberapa section utama:

1. **Hero** - Banner utama dengan headline
2. **Why Choose** - Alasan memilih Halcom
3. **Solutions** - Solusi yang ditawarkan
4. **About Company** - Tentang perusahaan
5. **Projects** - Portfolio project
6. **Achievements** - Pencapaian perusahaan
7. **Team** - Tim kami
8. **Contact** - Formulir kontak

## 🤝 Contributing

1. Fork repository ini
2. Buat branch fitur (`git checkout -b feature/AmazingFeature`)
3. Commit perubahan (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buka Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Hydtech-Halcom.

---

Dibuat dengan ❤️ oleh [Hydtech-Halcom](https://github.com/Hydtech-Halcom)
