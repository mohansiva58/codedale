

# 🚀 CodeDale

> A modern, high-performance web application showcasing tech services and expertise with sleek UI/UX.

## 📋 Project Overview

CodeDale is a production-ready Next.js application built to showcase a tech consulting agency's services, projects, and value propositions. The app features smooth animations, responsive design, custom SVG icons, and a contact form—all optimized for performance and SEO.

**Key Highlights:**
- ⚡ Lightning-fast dev builds with Turbopack
- 🎨 Modern, accessible UI with Tailwind CSS v4
- 🧩 Fully reusable component architecture
- 📱 Mobile-first responsive design
- 🎯 Production-ready for Vercel deployment

## 🛠️ Tech Stack

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | Next.js 16 (App Router) | Server-side rendering, routing, and optimization |
| **UI Library** | React 19 | Component-based UI with latest features |
| **Styling** | Tailwind CSS v4 | Utility-first CSS with PostCSS |
| **Build Tool** | Turbopack | Fast bundler for development |
| **Components** | Radix UI | Accessible, unstyled primitives |
| **Icons** | Custom SVG + Lucide React | Scalable, themeable icons |
| **Forms** | React Hook Form + Zod | Type-safe form validation |
| **Deployment** | Vercel | Edge network with automatic CI/CD |
| **Package Manager** | pnpm 10.x | Fast, disk-efficient installs |

## ✨ Features
- 🏠 **Hero Section**: Eye-catching landing with CTA
- 🎯 **Why Choose Us**: Feature cards with custom icons
- 🖼️ **Project Showcase**: Interactive project gallery
- 📬 **Contact Form**: Validated form with email integration
- 🌗 **Theme Support**: Dark/light mode ready (via next-themes)
- 📊 **Analytics**: Vercel Analytics integrated

## Requirements
- Node.js 18+
- pnpm 10.x, npm, or corepack-enabled environment

## Install & Run
```powershell
# From the project root
npx pnpm@10 install
npm run dev
```
- App runs on `http://localhost:3000` (or the next available port).
- If Turbopack warns about multiple lockfiles, we set `turbopack.root` in `next.config.mjs` to the project root.

## Build & Start
```powershell
npm run build
npm start
```

## Deployment (Vercel)
- Vercel reads `vercel.json` to skip CI frozen lockfile when dependencies change.
- If you prefer strict lockfiles, update and commit `pnpm-lock.yaml` instead and remove `installCommand` from `vercel.json`.

## 📁 Project Structure

```
codedale-main/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout with providers
│   ├── page.tsx                  # Homepage (Hero, Features, CTA)
│   ├── globals.css               # Global Tailwind styles
│   └── contact/
│       └── page.tsx              # Contact form page
│
├── components/                   # Reusable UI components
│   ├── custom-icons.tsx          # 🎨 All SVG icon components
│   ├── why-choose-us.tsx         # Feature cards with icons
│   ├── hero-section.tsx          # Landing hero with CTA
│   ├── project-showcase.tsx      # Project gallery
│   ├── contact-form.tsx          # Validated contact form
│   ├── header.tsx                # Site header/navigation
│   ├── footer.tsx                # Site footer with links
│   ├── floating-nav.tsx          # Sticky navigation
│   └── ui/                       # Primitive components
│       └── button.tsx            # Reusable button
│
├── lib/
│   └── utils.ts                  # Utility helpers (cn, etc.)
│
├── public/                       # Static assets
│   └── hero-icons/               # Icon assets
│
├── styles/
│   └── globals.css               # Additional global styles
│
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
├── pnpm-lock.yaml                # Lock file for dependencies
└── vercel.json                   # Vercel deployment config
```

### Key Components Explained

| Component | Purpose | Features |
|-----------|---------|----------|
| `hero-section.tsx` | Landing page hero | CTA buttons, animated text |
| `why-choose-us.tsx` | Feature highlights | 6 cards with custom icons, scroll animations |
| `project-showcase.tsx` | Portfolio display | Project cards with descriptions |
| `contact-form.tsx` | Contact submission | React Hook Form + Zod validation |
| `custom-icons.tsx` | Icon library | 7+ custom SVG components |
| `floating-nav.tsx` | Sticky navigation | Smooth scroll, active states |

## 🎨 Using Icons

Icons are defined in `components/custom-icons.tsx` as React components with proper TypeScript types.

### Available Custom Icons
| Icon | Use Case |
|------|----------|
| `ImpactIcon` | Impact-driven solutions |
| `DeliveryIcon` | Fast delivery features |
| `PricingIcon` | Transparent pricing |
| `ExpertIcon` | Expert problem solving |
| `CollaborationIcon` | Team collaboration |
| `TalentIcon` | Top talent access |
| `SampleIcon` | Generic checkmark (24×24) |

### Quick Usage Example
```tsx
import { SampleIcon, ImpactIcon } from "@/components/custom-icons";

export function Example() {
  return (
    <div className="flex items-center gap-3">
      {/* Minimal icon with current text color */}
      <SampleIcon className="w-6 h-6 text-slate-900" />
      
      {/* Larger custom icon */}
      <ImpactIcon className="w-12 h-12 text-blue-600" />
    </div>
  );
}
```

### Icon in Feature Cards (Real Example from `why-choose-us.tsx`)
```tsx
const features = [
  {
    icon: ImpactIcon,
    title: "Impact-Driven Solutions",
    description: "Every product we build is custom-crafted to create real business impact.",
  },
  // ...
];

function FeatureCard({ feature }) {
  const Icon = feature.icon;
  return (
    <div className="flex flex-col items-center text-center">
      {/* Fixed container for consistent sizing */}
      <div className="w-24 h-24 flex items-center justify-center">
        <Icon className="w-full h-full" />
      </div>
      <h3 className="text-xl font-bold">{feature.title}</h3>
      <p className="text-slate-600">{feature.description}</p>
    </div>
  );
}
```

### Adding Your Own SVG Icon
1. Open `components/custom-icons.tsx`
2. Add a new exported component:
```tsx
export const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth={2} 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    {...props}
  >
    <path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
  </svg>
);
```
3. Import and use: `import { ShieldIcon } from "@/components/custom-icons"`

### 💡 Icon Styling Tips
- ✅ Use `viewBox` instead of fixed `width`/`height` for responsive sizing
- ✅ Use `currentColor` for stroke/fill to enable Tailwind color classes
- ✅ Wrap large viewBox icons (e.g., 1080×1080) in a container with `w-*` and use `className="w-full h-full"` on the icon
- ✅ Prefer semantic sizing: `w-4 h-4` (small), `w-6 h-6` (medium), `w-12 h-12` (large)

## ⚙️ Configuration & Setup Details

### TypeScript
- Configured in `tsconfig.json` with strict mode
- Path aliases: `@/*` maps to root directory
- Current version: 5.0.2 (consider upgrading to 5.1+ for Next.js 16 compatibility)

### Tailwind CSS
- v4 with PostCSS configuration
- Custom animations via `tailwindcss-animate`
- Utility classes for responsive design
- Dark mode support ready

### Next.js Config (`next.config.mjs`)
```javascript
{
  reactStrictMode: true,
  turbopack: { root: process.cwd() },  // Fixes multi-lockfile warnings
  typescript: { ignoreBuildErrors: true },
  images: { unoptimized: true }
}
```

### Vercel Deployment (`vercel.json`)
```json
{
  "installCommand": "pnpm install --no-frozen-lockfile",
  "buildCommand": "pnpm build"
}
```
- Bypasses frozen lockfile in CI to handle dependency mismatches
- For strict lockfile enforcement, commit updated `pnpm-lock.yaml` and remove this config

## 🚨 Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| **Port 3000 in use** | Next.js auto-selects next available port (3001, etc.) |
| **Multiple lockfiles warning** | Set `turbopack.root` in `next.config.mjs` (already done) |
| **CI lockfile mismatch** | Run `npx pnpm@10 install` and commit `pnpm-lock.yaml`, or use `vercel.json` override |
| **TypeScript version warning** | Upgrade to 5.1+: `pnpm add -D typescript@latest` |
| **Build scripts ignored** | Run `pnpm approve-builds` to allow sharp and Tailwind oxide builds |

## 🔒 License
Proprietary project. Do not redistribute.
