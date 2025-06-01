# SabiVet - Cabinet Vétérinaire Website 🐾

A modern, professional veterinary clinic website built with Next.js, featuring smart service booking integration, professional typography, and automated GitHub Pages deployment.

![SabiVet Website](https://img.shields.io/badge/Status-Live-brightgreen)
![Next.js](https://img.shields.io/badge/Next.js-14-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-blue)

## 🚀 Features

### Smart Service Booking Integration
- **Interactive Service Cards**: Click any service to automatically scroll to booking form
- **Auto-populate Booking**: Selected service is pre-filled in the contact form
- **Visual Feedback**: Highlighted selection states and smooth animations
- **State Management**: React Context for seamless service selection

### Professional Design
- **Modern Typography**: Inter, Poppins, and Montserrat fonts with proper hierarchy
- **Responsive Design**: Optimized for all devices and screen sizes
- **Advanced Animations**: Sophisticated hover effects and transitions
- **Professional Color Palette**: Green-themed design reflecting veterinary care

### GitHub Pages Ready
- **Automated Deployment**: GitHub Actions workflow for continuous deployment
- **Static Export**: Optimized static site generation
- **Performance Optimized**: Fast loading with proper asset optimization

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Fonts**: Google Fonts (Inter, Poppins, Montserrat)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS animations
- **Deployment**: GitHub Pages with Actions

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/sabivet-website.git
   cd sabivet-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment to GitHub Pages

### Automatic Deployment

1. **Enable GitHub Pages**
   - Go to repository Settings > Pages
   - Select "GitHub Actions" as source

2. **Push to main branch**
   ```bash
   git push origin main
   ```

3. **Workflow will automatically**:
   - Install dependencies
   - Build the Next.js app
   - Export static files
   - Deploy to GitHub Pages

### Manual Deployment

```bash
# Build and export
npm run build

# Deploy the 'out' folder to your hosting provider
```

### Custom Domain Setup

1. **Add CNAME file** in `public/` folder:
   ```
   yourdomain.com
   ```

2. **Update `next.config.js`** for custom domain:
   ```javascript
   // Uncomment and update these lines
   assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
   basePath: process.env.NODE_ENV === 'production' ? '' : '',
   ```

## 🎨 Typography System

### Font Families
- **Primary (Body)**: Inter - Clean, readable, modern
- **Headings**: Poppins - Professional, trustworthy
- **Display**: Montserrat - Bold, impactful

### Responsive Typography
```css
/* Display Typography */
.text-display-1  /* 2.5rem - 6rem responsive */
.text-display-2  /* 2rem - 4rem responsive */
.text-headline   /* 1.5rem - 2.5rem responsive */

/* Body Typography */
.text-body-large /* 1.125rem with optimized spacing */
.text-body       /* 1rem with 1.7 line height */
.text-caption    /* 0.875rem for small text */
```

### Font Features
- OpenType features enabled (ligatures, kerning)
- Optimized letter spacing for readability
- Proper contrast ratios (WCAG AA compliant)

## 🔧 Configuration

### Environment Variables
Create `.env.local` for local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=contact@sabivet.ma
NEXT_PUBLIC_PHONE=+212637150811
```

### Next.js Configuration
The `next.config.js` includes:
- Static export configuration
- Image optimization settings
- Asset prefix for GitHub Pages

## 📱 Smart Booking System

### How It Works

1. **Service Selection**: User clicks on any service card
2. **Context Update**: Service name is stored in React Context
3. **Smooth Scroll**: Automatically scrolls to contact form
4. **Form Population**: Service dropdown is pre-selected
5. **Visual Feedback**: Selected service is highlighted

### Code Example
```javascript
// Service card click handler
const handleServiceSelect = (serviceName) => {
  selectService(serviceName)
}

// Context automatically handles:
// - State management
// - Smooth scrolling
// - Form population
```

## 🎯 Key Components

### ServiceContext
- Global state management for service selection
- Smooth scrolling integration
- Form auto-population

### Services Component
- Interactive service cards with flip animations
- Click-to-book functionality
- Responsive grid layout

### Contact Component
- Smart form with auto-populated service selection
- Form validation and error handling
- Professional styling with visual feedback

### Typography Components
- Consistent font loading
- Responsive text sizing
- Professional hierarchy

## 🎨 Color Palette

```css
Primary: #376d53    /* Professional green */
Secondary: #5b8871  /* Lighter green */
Accent: #eaf5ef     /* Light green background */
Dark: #2a5240       /* Dark green for contrast */
```

## 📊 Performance

- **Fast Loading**: Optimized static export
- **SEO Ready**: Proper meta tags and structured data
- **Mobile First**: Responsive design principles
- **Accessibility**: WCAG AA compliant

## 🛡️ SEO Features

- Structured data for local business
- Open Graph meta tags
- Twitter Card support
- Sitemap generation
- Proper heading hierarchy

## 📧 Contact Information

- **Email**: contact@sabivet.ma
- **Phone**: +212 6 37 15 08 11
- **Address**: Agadir, Morocco
- **Emergency**: 24/7 availability

## 📄 License

This project is private and proprietary to SabiVet Cabinet Vétérinaire.

## 🤝 Contributing

This is a private project. For any modifications or improvements, please contact the development team.

---

**Built with ❤️ for SabiVet Cabinet Vétérinaire in Agadir, Morocco** 