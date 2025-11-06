# Quinterotatuador - Next.js 14 Premium Project

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
quinterotatuador/
├── app/
│   ├── components/
│   │   ├── ui/           # shadcn/ui components
│   │   ├── sections/     # Page sections
│   │   └── layout/       # Layout components
│   ├── lib/              # Utilities and config
│   ├── data/             # Static data (portfolio, testimonials)
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── public/
│   ├── images/
│   │   ├── portfolio/    # Portfolio images
│   │   └── testimonials/ # Client photos
│   └── icons/            # Icons and favicons
├── tailwind.config.ts    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json
```

## 🎨 Design System

### Colors (Tailwind Classes)
- **Primary:** `bg-ink` (#050505)
- **Secondary:** `bg-gray-warm` (#F4E6D9) 
- **Accent:** `bg-gold` (#D4AF37)
- **Text:** `text-ink` / `text-white`

### Typography
- **Display/Headings:** Cinzel (font-cinzel)
- **Body/UI:** Poppins (font-poppins)

### Components
- **Buttons:** Rounded, premium hover states
- **Cards:** Subtle shadows, hover animations
- **Grid:** Masonry layout for portfolio
- **Lightbox:** Full-screen image viewer

## 🔧 Features

✅ **Next.js 14** with App Router
✅ **Tailwind CSS** + **shadcn/ui** 
✅ **Framer Motion** animations
✅ **Masonry Portfolio** with filters
✅ **Image Lightbox** component
✅ **WhatsApp Float Button**
✅ **Sticky CTAs**
✅ **Mobile-first Responsive**
✅ **SEO Optimized**
✅ **Performance Optimized**

## 📱 Key Components

### 1. Hero Section
- Animated text reveal
- Dual CTA buttons
- Background gradient

### 2. Portfolio Grid
- Interactive filters
- Masonry layout
- Lightbox integration
- Lazy loading

### 3. Process Steps
- Animated counters
- Step-by-step flow
- Progress indicators

### 4. Testimonials
- Client cards
- Rotating testimonials
- Video integration ready

### 5. FAQ Section
- Accordion interface
- Smooth animations
- WhatsApp integration

## 🎯 Conversion Optimization

- **Primary CTA:** "Diseña tu tatuaje conmigo"
- **Secondary CTA:** "Ver portafolio" 
- **Floating CTAs:** Always visible
- **WhatsApp Integration:** Direct messaging
- **Lead Capture:** Contact forms
- **Social Proof:** Testimonials prominent

## 📊 SEO & Performance

- **Meta Tags:** Complete set
- **Open Graph:** Social sharing
- **Image Optimization:** Next.js Image
- **Lazy Loading:** Viewport-based
- **Core Web Vitals:** Optimized
- **Lighthouse Score:** 90+ target

## 🔄 Content Management

Portfolio items structure:
```typescript
interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  story: string;
  image: string;
  featured: boolean;
  bodyArea: string;
  style: string;
}
```

Easy to add new portfolio items in `/app/data/portfolio.ts`

## 🚀 Deployment

Ready for deployment on:
- **Vercel** (recommended)
- **Netlify**
- **Any Node.js hosting**

## 📞 Contact Integration

- **WhatsApp Business API**
- **Contact Form** with validation
- **Google Analytics** ready
- **Facebook Pixel** ready

---

**Built for Carlos Quintero (@quinterotatuador)**
*Aquí no repetimos diseños. Porque nadie repite tu historia.*