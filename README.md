# Halcom Landing Page

Website company profile modern untuk **Halcom** yang dibangun menggunakan Next.js 16 dengan teknologi terkini.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4-06B6D4?style=flat-square&logo=tailwindcss)

## ✨ Fitur

- 🎨 **Desain Modern** - UI/UX yang responsif dan menarik
- ⚡ **Performa Tinggi** - Dibangun dengan Next.js App Router
- 🎭 **Animasi Smooth** - Menggunakan Framer Motion + GSAP
- 🌙 **Dark/Light Mode** - Tema yang dapat disesuaikan
- 📱 **Responsif** - Optimal di semua perangkat
- 🧩 **Komponen UI** - Menggunakan Radix UI + Shadcn/ui
- 🤖 **AI Chatbot** - Chatbot interaktif dengan Groq SDK
- 🖼️ **Gambar Profesional** - Integrasi Unsplash API
- 🎯 **Animasi Kustom** - Library animasi yang reusable
- 📊 **Testimonial Carousel** - Auto-scrolling testimonials
- 🤝 **Partnership Slider** - Logo partner dengan animasi
- 🎨 **Aceternity Icons** - Custom SVG icons
- 📈 **Performance Optimized** - GPU-accelerated animations

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
│   │   ├── contact-section.tsx
│   │   ├── about/           # About section variants
│   │   ├── customers/       # Customer testimonials
│   │   ├── events/          # Events section
│   │   ├── partner/         # Partnership section
│   │   ├── project/         # Project showcase
│   │   └── qualifications/  # Company qualifications
│   ├── shared/             # Shared components (Header, Footer)
│   ├── ui/                 # Reusable UI components
│   │   └── aceternity-icons.tsx # Custom SVG icons
│   ├── Chatbot.tsx         # AI Chatbot component
│   ├── image-auto-slider.tsx # Auto-scrolling images
│   ├── testimonials-columns-1.tsx # Testimonial carousel
│   ├── thumbnails-carousel.tsx # Image carousel
│   └── logo-cloud-2.tsx    # Partnership logos
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions
│   ├── animations.ts       # Animation variants
│   ├── constants/          # Data constants
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── styles/                 # Additional styles
└── ANIMATION_FEATURES.md  # Animation documentation
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
| Animation     | Framer Motion + GSAP  |
| UI Components | Radix UI, Shadcn/ui   |
| Form Handling | React Hook Form + Zod |
| Charts        | Recharts              |
| Icons         | Lucide React + Aceternity |
| AI Integration| Groq SDK              |
| Smooth Scroll | Lenis                 |
| Carousels     | Embla Carousel        |
| Image Optimization | Sharp              |
| Analytics     | Vercel Analytics      |
| Toast         | Sonner                 |

## 📝 Sections

Website ini terdiri dari beberapa section utama:

1. **Hero** - Banner utama dengan headline dan animasi
2. **Why Choose** - Alasan memilih Halcom dengan icon animations
3. **Solutions** - Solusi yang ditawarkan dengan hover effects
4. **About Company** - Tentang perusahaan dengan statistics
5. **Projects** - Portfolio project dengan image zoom
6. **Achievements** - Pencapaian perusahaan dengan counter animations
7. **Team** - Tim kami dengan social button animations
8. **Contact** - Formulir kontak dengan interactive elements
9. **Testimonials** - Customer testimonials dengan auto-scroll
10. **Partnerships** - Logo partner dengan infinite scroll
11. **AI Chatbot** - Chatbot interaktif dengan AI integration

## 🎬 Fitur Animasi

### Animasi Utama
- **Fade Animations** - Fade in up/down/left/right effects
- **Scale Animations** - Scale entrance dan hover effects
- **Stagger Animations** - Sequential item animations
- **Scroll Triggered** - Animasi saat scroll dengan `whileInView`
- **Infinite Animations** - Floating, rotating, dan scrolling effects
- **Spring Animations** - Natural motion dengan spring physics
- **Gesture Animations** - Hover, tap, dan drag interactions

### Component Animations
- **Header** - Slide down logo, hover menu effects
- **Hero Section** - Fade in text, rotating logo, floating cards
- **Cards** - Elevation effects, scale on hover
- **Images** - Zoom effects, parallax scrolling
- **Buttons** - Press animations, hover states
- **Forms** - Focus effects, validation animations
- **Chatbot** - Spring animations, message transitions

### Performance Optimizations
- GPU-accelerated transforms
- Single trigger dengan `viewport={{ once: true }}`
- Reduced motion untuk mobile devices
- Optimized SVG icons
- Lazy loading untuk images

## 🤖 AI Chatbot

Website dilengkapi dengan chatbot interaktif yang menggunakan:
- **Groq SDK** - Untuk AI processing
- **Framer Motion** - Smooth animations
- **Spring Physics** - Natural motion effects
- **Message History** - Conversation persistence
- **Responsive Design** - Mobile-friendly interface

### Chatbot Features
- Interactive chat interface dengan smooth animations
- Message bubbles dengan slide-in effects
- Typing indicators dan loading states
- Minimize/maximize functionality
- Custom bot dan user avatars
- Auto-scroll untuk new messages

## 🖼️ Image & Visual Features

### Unsplash Integration
- **Professional Images** - High-quality photos dari Unsplash
- **Optimized Sizing** - Responsive image loading
- **Dynamic Parameters** - `w=` dan `h=` untuk resize
- **Fallback Handling** - Error states untuk failed loads

### Custom Icons
- **Aceternity UI Icons** - Custom SVG icons
- **Lucide React** - Standard icon library
- **Animated Icons** - Hover dan rotation effects
- **Scalable Vectors** - Crisp di semua resolutions

### Carousels & Sliders
- **Auto-Scrolling** - Infinite loop animations
- **Testimonial Columns** - Vertical scrolling testimonials
- **Partnership Logos** - Horizontal logo carousel
- **Thumbnail Gallery** - Image showcase carousel
- **Touch Gestures** - Mobile swipe support

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
