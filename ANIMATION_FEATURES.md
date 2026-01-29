# Halcom Website - Animation Features

## Overview
Website Halcom kini dilengkapi dengan animasi smooth menggunakan **Framer Motion**, image profesional dari **Unsplash**, dan custom icons dari **Aceternity UI** + **Lucide Icons**.

## 📦 Dependencies yang Ditambahkan

```json
{
  "framer-motion": "^11.0.3"
}
```

## 🎨 Fitur Animasi

### 1. **Header Component**
- Logo slide down dan hover effect dengan rotate
- Menu items memiliki hover effect dengan slide up
- Mobile menu dengan accordion animation
- Smooth transition untuk menu icons

### 2. **Hero Section**
- Fade in up animation untuk text dan buttons
- Rotate animation untuk logo HC (infinite)
- Floating effect pada info card dengan floating bounce
- Hover scale effects pada CTA buttons
- Image dari Unsplash dengan overlay gradient

### 3. **Why Choose Section**
- Container dengan stagger animation untuk item
- Icon hover dengan scale dan rotate
- Card hover dengan elevation effect
- Custom Aceternity icons (IconBriefcase, IconTrendingUp, IconStar, IconCheck)

### 4. **Solutions Section**
- Grid items dengan scale animation on hover
- Icon container dengan hover animation
- Background accent dengan infinite scale pulse
- Unsplash icons dari Aceternity UI library

### 5. **Projects Section**
- Image hover dengan zoom effect
- Tag animation dengan staggered entrance
- Card hover dengan shadow effect
- Project images dari Unsplash

### 6. **Achievements Section**
- Icon hover dengan scale dan rotate
- Number counter dengan spring animation
- Dark background section dengan white text
- Animated stat numbers dengan entrance delay

### 7. **Team Section**
- Image dengan hover zoom effect
- Team member cards dengan elevation on hover
- Social button animations (whileHover scale)
- Profile images dari Unsplash

### 8. **About Company Section**
- Left content dengan fade in left
- Right visual dengan Unsplash image
- Stats dengan staggered scale animation
- Highlights dengan hover slide effect

### 9. **Contact Section**
- Contact info items dengan hover slide right
- Icon containers dengan rotate animation
- Form inputs dengan whileFocus scale
- Button dengan press animation

### 10. **Footer**
- Social icons dengan hover and tap animation
- Scroll to top button dengan floating animation
- Links dengan hover effects

## 🖼️ Image Sources (Unsplash)

Semua image menggunakan Unsplash API dengan optimized sizing:
- Hero Image: IT Infrastructure concept
- Solutions Section: Uses Aceternity icons (no images needed)
- Projects: 6 different project images
- Team: 4 team member photos
- About Section: Business/growth concept image
- Achievements: Dark section (no image)

## 🎯 Animation Primitives (lib/animations.ts)

Reusable animation variants:
- `fadeInUp` - Fade in dengan slide up
- `fadeInDown` - Fade in dengan slide down
- `fadeInLeft` - Fade in dari kiri
- `fadeInRight` - Fade in dari kanan
- `scaleIn` - Scale entrance animation
- `containerVariants` - Parent container dengan stagger
- `itemVariants` - Child items dengan delay
- `hoverScale` - Scale on hover/tap
- `floatingAnimation` - Infinite floating effect

## 🎨 Aceternity Icons (components/ui/aceternity-icons.tsx)

Custom SVG icons:
- `IconBriefcase` - Suitcase icon
- `IconRocket` - Rocket icon
- `IconShield` - Shield icon
- `IconNetwork` - Network icon
- `IconCloud` - Cloud icon
- `IconStar` - Star icon
- `IconCheck` - Check mark icon
- `IconArrowRight` - Arrow right icon
- `IconTrendingUp` - Trending up icon

## 🔧 Implementasi Tips

### Mengubah Durasi Animasi
```tsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.8 }} // Ubah value ini
>
```

### Mengubah Timing Function
```tsx
transition={{ 
  duration: 0.6,
  ease: "easeInOut" // atau "easeOut", "easeIn", "linear"
}}
```

### Mengubah Delay
```tsx
transition={{ 
  delay: 0.2,
  staggerChildren: 0.1 // Untuk container
}}
```

## 📱 Responsive Design

Semua animasi di-optimize untuk mobile:
- Reduced motion untuk mobile devices
- Touch-friendly animations
- Optimized image sizes dengan responsive queries

## 🚀 Performance

- Menggunakan `whileInView` untuk trigger animations saat visible
- `viewport={{ once: true }}` untuk single trigger
- GPU-accelerated transforms (scale, translate, rotate)
- Optimized SVG icons untuk fast rendering

## 📝 Notes

- Semua image menggunakan URL Unsplash dengan paramete `w=` dan `h=` untuk resize
- Custom Aceternity icons berfungsi sebagai SVG elements
- Lucide icons tetap digunakan untuk common icons (Phone, Mail, etc)
- Framer Motion installed dan ready to use di semua components

## 🎬 Preview

Buka preview untuk melihat semua animasi berjalan. Scroll down untuk melihat trigger animations dengan `whileInView`.
