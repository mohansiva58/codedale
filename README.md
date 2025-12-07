

# CodeDale

A modern Next.js 16 + React 19 app styled with Tailwind CSS, featuring reusable UI components and custom SVG icons. This README covers local setup, deployment, project structure, and how to use icons in components.

## Features
- Next.js App Router with Turbopack for fast dev builds
- Tailwind CSS v4 with PostCSS
- Reusable components (Hero, Footer, Project Showcase, etc.)
- Custom SVG icon set in `components/custom-icons.tsx`
- Ready for deployment on Vercel

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

## Project Structure
```
app/
	layout.tsx
	page.tsx
	contact/page.tsx
components/
	custom-icons.tsx          # All icon components (SVG)
	why-choose-us.tsx         # Uses icons in feature cards
	header.tsx, footer.tsx    # Layout components
	ui/button.tsx             # Button primitive
lib/utils.ts                # Utility helpers
public/                     # Static assets
styles/globals.css          # Tailwind styles
next.config.mjs             # Next.js config (turbopack.root set)
```

## Using Icons
Icons are defined in `components/custom-icons.tsx` as React components.

### Available Icons
- `ImpactIcon`, `DeliveryIcon`, `PricingIcon`, `ExpertIcon`, `CollaborationIcon`, `TalentIcon`
- `SampleIcon`: a clean, minimal check-in-circle icon (24×24) that adapts to `currentColor`.

### Basic Usage
```tsx
import { SampleIcon, ImpactIcon } from "@/components/custom-icons";

export function Example() {
	return (
		<div className="flex items-center gap-3">
			<SampleIcon className="w-6 h-6 text-slate-900" />
			<ImpactIcon className="w-12 h-12 text-blue-600" />
		</div>
	);
}
```
- Size with Tailwind (`w-6 h-6`, etc.).
- Color via `text-*` classes when the icon uses `stroke="currentColor"` or `fill="currentColor"`.

### In a Card List (as used in `why-choose-us.tsx`)
```tsx
const features = [
	{
		icon: SampleIcon,
		title: "Transparent & Fair Pricing",
		description: "Honest pricing with no surprises.",
	},
	// ...others
];

function FeatureCard({ feature }) {
	const Icon = feature.icon;
	return (
		<div className="flex flex-col items-center text-center">
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
1. Create a React component in `components/custom-icons.tsx`:
```tsx
export const ShieldIcon = (props: React.SVGProps<SVGSVGElement>) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" {...props}>
		<path d="M12 3l7 4v5c0 5-3.5 9-7 9s-7-4-7-9V7l7-4z" />
	</svg>
);
```
2. Import and use like any other icon.

## Styling Tips for SVG Icons
- Use `viewBox` and avoid hardcoded `width`/`height` to let CSS control sizing.
- Prefer `stroke="currentColor"` / `fill="currentColor"` for easy theming.
- Wrap icons in a fixed-size container if they have large internal viewBoxes (e.g., 1080×1080) and use `className="w-full h-full"` on the icon.

## Common Issues
- Port in use: Next.js will pick the next free port automatically.
- Multiple lockfiles warning: fixed by setting `turbopack.root` in `next.config.mjs`.
- CI lockfile mismatch: either commit updated `pnpm-lock.yaml` or use `vercel.json` with `installCommand`.

## License
Proprietary project. Do not redistribute.
