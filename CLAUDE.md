# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Behelo Website Architecture Guide

## Project Overview

Behelo is a cultural heritage platform that bridges traditional knowledge with modern technology. The site features digital tools, a resource library focused on Bubi culture (Equatorial Guinea), and aims to preserve and share cultural knowledge. The name "Behelo" means "to be wanted" in Bubi language.

**Core Mission**: Cultural preservation through digital tools, traditional knowledge sharing, and an authentic digital library.

## Tech Stack & Framework Setup

### Next.js 15.5.3 (App Router)
- **Framework**: Latest Next.js with App Router architecture
- **React**: 19.1.0 with React DOM 19.1.0
- **TypeScript**: Full TypeScript implementation
- **Turbopack**: Development server uses `--turbopack` for faster builds
- **Node Target**: ES2017 with modern bundle optimizations

### Styling Architecture
- **Primary**: Custom CSS with CSS Variables (no Tailwind config found)
- **Approach**: Utility-first with semantic class names
- **Tailwind**: v4 installed but minimally used (only PostCSS integration)
- **Design System**: CSS custom properties in `/app/globals.css`

### Performance Optimizations
- Image optimization with AVIF/WebP formats
- Compression enabled
- Aggressive caching headers for static assets (1 year)
- Package import optimization for Lucide React icons
- ETags generation for better caching

## Project Structure

```
/Users/michaelebako-hodgson/Code/behelo/
├── app/                     # Next.js App Router pages
│   ├── layout.tsx          # Root layout with SEO, navigation, footer
│   ├── page.tsx            # Homepage with modular sections
│   ├── globals.css         # Design system & CSS variables
│   ├── auth/               # Authentication pages
│   ├── library/            # Digital library & resources
│   ├── admin/              # Admin dashboard
│   ├── author/             # Content creator portal
│   └── [other-pages]/      # Various legal/info pages
├── components/             # Reusable React components
├── lib/                    # Business logic & utilities
├── public/                 # Static assets
├── next.config.ts          # Next.js configuration
└── vercel.json            # Deployment configuration
```

## Architecture Patterns

### Component Architecture
- **Modular Sections**: Homepage built from composable section components
- **Reusable Components**: Consistent patterns across ToolTile, ResourceCard, etc.
- **Client/Server Split**: Strategic use of 'use client' directive
- **Composition**: Heavy use of component composition over inheritance

### State Management
- **Auth Context**: React Context for user authentication (`/lib/auth.tsx`)
- **Shopping Cart**: Local state management with custom hooks
- **Mock Data**: Development uses mock data in lib files (auth, library, tools)

### Routing Patterns
- **App Router**: File-system based routing with layouts
- **Nested Routes**: Library section has complex nested routing
- **Dynamic Routes**: `/library/resource/[id]` and `/library/checkout/[id]`
- **Route Groups**: Organized by feature areas

### Data Architecture
- **Mock Databases**: TypeScript interfaces with mock data
- **Library Resources**: Structured content with cultural metadata
- **User Roles**: 'user' | 'author' | 'admin' role-based access
- **Shopping Cart**: E-commerce functionality for digital resources

## Key Configuration Details

### Environment Variables
```bash
NEXT_PUBLIC_GA_MEASUREMENT_ID=     # Google Analytics 4
NEXT_PUBLIC_SITE_URL=https://behelo.com
NODE_ENV=production
```

### Security Headers
- X-Content-Type-Options: nosniff
- X-Frame-Options: DENY
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: origin-when-cross-origin

### SEO Configuration
- Comprehensive metadata in layout.tsx
- OpenGraph and Twitter card support
- Structured data (JSON-LD) for organization
- Sitemap and robots.txt generation
- Search verification codes ready

## Development Workflows

### Available Scripts
```bash
npm run dev          # Development server with Turbopack
npm run build        # Production build
npm start           # Start production server
npm run lint        # ESLint with Next.js config
```

### Development Patterns
- **Hot Reload**: Turbopack for fast development
- **TypeScript**: Strict mode enabled with path aliases (`@/*`)
- **Linting**: ESLint with Next.js and TypeScript rules
- **Image Optimization**: Next.js Image component with remote patterns

## Component Patterns

### Design System
```css
/* CSS Variables in globals.css */
:root {
  --bg: #ffffff;
  --ink: #121212;
  --accent: #A3542C;  /* Warm brown brand color */
  --step-0: 1rem;     /* Fluid typography scale */
  --step-4: clamp(3.2rem, 7vw + 1rem, 5rem);
}
```

### Styling Approach
- **CSS-in-JS**: Inline styles for component-specific styling
- **Semantic Classes**: `.hero`, `.section`, `.container` for layout
- **Responsive**: CSS Grid and flexbox with auto-fit patterns
- **Accessibility**: High contrast mode and reduced motion support

### Component Examples
- **ToolTile**: Consistent product tile component
- **Navigation**: Responsive nav with authentication state
- **Hero**: Dictionary-style brand presentation
- **ResourceCard**: Library resource display with purchase flow

## Library & E-commerce Features

### Resource Types
```typescript
interface LibraryResource {
  category: 'language' | 'culture' | 'history' | 'education' | 'stories';
  culturalOrigin: string;  // e.g., "Bubi (Equatorial Guinea)"
  language: string;        // e.g., "Bubi", "Spanish", "English"
  price: number;          // 0 for free resources
}
```

### Shopping Cart
- Local state management
- Digital product purchases
- Free resource downloads
- User authentication integration

## Deployment & Performance

### Vercel Configuration
- Framework detection: Next.js
- Build optimization for static assets
- Function timeouts for icon generation
- Environment variable management

### Performance Features
- Static generation where possible
- Image optimization with multiple formats
- Aggressive browser caching
- Bundle optimization with import analysis

## Cultural Context & Content

### Bubi Language Integration
- Cultural authenticity in naming and content
- Traditional knowledge preservation
- Educational resource categorization
- Respectful representation of indigenous culture

### Content Structure
- Educational resources by category
- Author attribution and bios
- Cultural origin metadata
- Multi-language support consideration

## Key Architectural Decisions

1. **App Router over Pages**: Modern Next.js architecture
2. **CSS Variables over Tailwind**: Custom design system control
3. **Mock Data Architecture**: Scalable data patterns without backend dependency
4. **Component Composition**: Modular, reusable component patterns
5. **Cultural Focus**: Content architecture designed for cultural preservation
6. **E-commerce Ready**: Shopping cart and payment flow infrastructure

## Development Tips

- Use `@/` path alias for imports from project root
- Components in `/components/` are reusable across pages
- Business logic lives in `/lib/` files
- Check `/app/globals.css` for design system variables
- Mock data patterns in `/lib/` files show expected data shapes
- Navigation component handles authentication state
- SEO metadata is comprehensive but may need updates for new pages

## Future Considerations

- Backend integration points are already structured in lib files
- Authentication system ready for real backend
- Payment processing hooks prepared for Stripe/similar
- Cultural content management system architecture in place
- Multi-language support architecture considered