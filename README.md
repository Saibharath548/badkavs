# BADKAVS — Game Development & Creative Services

**BADKAVS** is a multidisciplinary game development and creative services group offering programming, 2D/3D art, animation, game design, technical art, shaders, UI/UX, video editing, and creative production.

This repository contains the complete, production-ready frontend website built with React, TypeScript, and Vite. It is designed specifically for **GitHub Pages** as a fast, accessible, and maintenance-free static website with zero backend, database, or API dependencies.

---

## Architecture: Data-Driven Design

The core architectural principle of BADKAVS is:

> **CONTENT / CONFIGURATION  →  REUSABLE COMPONENTS  →  PAGES**

- All services are declared in a single centralized source of truth: [`src/data/services.ts`](src/data/services.ts).
- All contact links and brand metadata live in [`src/config/site.ts`](src/config/site.ts).
- All categories live in [`src/data/categories.ts`](src/data/categories.ts).
- All team data lives in [`src/data/team.ts`](src/data/team.ts).

You never need to edit JSX or component code to change a service's availability, update pricing/deliverables, add a new service, or change contact links.

---

## Features

- **Centralized Service Management:** 12 services pre-configured across Development, Art, Design, and Media categories.
- **Service Status System:** Statuses (`available`, `coming-soon`, `unavailable`) automatically control badges, visual styling, banners, and call-to-actions across the entire site.
- **Dynamic Service Pages:** A single reusable component ([`src/pages/ServiceDetail.tsx`](src/pages/ServiceDetail.tsx)) handles any service slug dynamically without page code duplication.
- **Category Filtering:** Filter services by category (All, Development, Art, Design, Media) driven directly from the central data file.
- **About Page with Modular Team Section:** Clean presentation of BADKAVS's focus areas and an extensible team registry.
- **Contact Hub:** Interactive contact cards for Email, Instagram, and LinkedIn. **No contact form, backend, or third-party form service required.**
- **GitHub Pages Routing:** Implemented with `HashRouter` ensuring URLs like `/#/services/game-programming` work on refresh without HTTP 404 errors.
- **Automated CI/CD:** GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) automatically builds and deploys to GitHub Pages upon pushing to the `main` branch.
- **Premium Dark Aesthetic:** Tailored game-studio visual identity with deep dark palette, subtle purple neon accents, glowing grids, and responsive layouts.
- **Accessibility & Performance:** Semantic HTML, ARIA labels, status text (never relying on color alone), reduced-motion support, and responsive across all device sizes.

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler:** Vite 6
- **Routing:** React Router v7 (`HashRouter` for GitHub Pages static compatibility)
- **Icons:** Lucide React
- **Styling:** Vanilla CSS design system with CSS custom properties
- **Deployment:** GitHub Pages via GitHub Actions

---

## Project Structure

```text
badkavs/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions deployment workflow
├── public/
│   ├── favicon.svg             # BADKAVS monogram favicon
│   ├── robots.txt              # Search engine crawler instructions
│   ├── 404.html                # GitHub Pages fallback redirect
│   └── images/
│       └── .gitkeep            # Static assets directory
├── src/
│   ├── components/
│   │   ├── Button.tsx          # Polymorphic button / link component
│   │   ├── ContactCard.tsx     # Large interactive contact card
│   │   ├── CTASection.tsx      # Reusable call-to-action banner
│   │   ├── Footer.tsx          # Site-wide footer with nav & socials
│   │   ├── Hero.tsx            # Main hero with grid & glow effects
│   │   ├── Navbar.tsx          # Responsive navigation bar with mobile menu
│   │   ├── ProcessSection.tsx  # 6-step workflow process cards
│   │   ├── SectionHeading.tsx  # Section title & subtitle wrapper
│   │   ├── ServiceCard.tsx     # Card displaying service info & status
│   │   ├── ServiceCategoryFilter.tsx # Category filter pills
│   │   ├── ServiceGrid.tsx     # Grid layout for service cards
│   │   ├── ServiceIcon.tsx     # Dynamic Lucide icon resolver
│   │   └── ServiceStatusBadge.tsx # Status pill (Available, Coming Soon, etc.)
│   ├── config/
│   │   └── site.ts             # Central site metadata & contact links
│   ├── data/
│   │   ├── categories.ts       # Service categories (Development, Art, etc.)
│   │   ├── services.ts         # SINGLE SOURCE OF TRUTH for all services
│   │   └── team.ts             # Modular team member registry
│   ├── layouts/
│   │   └── Layout.tsx          # Root layout with Navbar and Footer
│   ├── pages/
│   │   ├── About.tsx           # Studio overview & team section
│   │   ├── Contact.tsx         # Contact cards (Email, Instagram, LinkedIn)
│   │   ├── Home.tsx            # Landing page
│   │   ├── NotFound.tsx        # 404 page with return link
│   │   ├── ServiceDetail.tsx   # Dynamic reusable service detail view
│   │   └── Services.tsx        # Complete service directory with filter
│   ├── styles/
│   │   └── index.css           # Global dark design system & utilities
│   ├── App.tsx                 # Route configuration
│   ├── main.tsx                # Application mounting
│   └── vite-env.d.ts           # Vite TypeScript declarations
├── index.html                  # HTML entry point with SEO & font imports
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # Root TypeScript configuration
├── tsconfig.app.json           # Application TypeScript configuration
├── tsconfig.node.json          # Node / build tooling TypeScript configuration
├── vite.config.ts              # Vite configuration
└── README.md                   # Documentation & guide
```

---

## Local Development

### 1. Prerequisites
- Node.js (v18 or higher recommended)
- npm (installed with Node.js)

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the Development Server
```bash
npm run dev
```
Open your browser at the local URL shown in the terminal (typically `http://localhost:5173`).

---

## Production Build

### Compile for Production
```bash
npm run build
```
This runs the TypeScript compiler (`tsc -b`) and bundles production-ready static assets into the `dist/` directory.

### Preview the Production Build Locally
```bash
npm run preview
```

---

## How to Change Service Status

Service status is completely decoupled from the UI.

1. Open [`src/data/services.ts`](src/data/services.ts).
2. Locate the service you wish to update by its `id` or `slug`.
3. Modify the `status` field:

```ts
{
  id: "audio",
  name: "Audio",
  slug: "audio",
  // ...
  status: "available", // Options: "available" | "coming-soon" | "unavailable"
}
```

### Supported Statuses:
- `"available"`: Displays a green **AVAILABLE** badge, regular card appearance, and active "Interested in this service? Get in Touch" call to action.
- `"coming-soon"`: Displays an amber **COMING SOON** badge, subtly dimmed card appearance, and a dedicated "Coming Soon" notification banner on the detail page.
- `"unavailable"`: Displays a red **CURRENTLY UNAVAILABLE** badge and informational banner.

Saving the file will instantly update the service cards, filters, and detail pages across the entire website.

---

## How to Add a New Service

To add a new service to BADKAVS:

1. Open [`src/data/services.ts`](src/data/services.ts).
2. Add a new object to the `services` array matching the `Service` interface:

```ts
{
  id: "vfx-design",
  name: "Visual Effects (VFX)",
  slug: "vfx-design",
  shortDescription: "Particle systems, stylized effects, and visual magic for games.",
  description: "BADKAVS crafts immersive visual effects...",
  status: "available", // "available" | "coming-soon" | "unavailable"
  category: "art",      // "development" | "art" | "design" | "media"
  featured: false,      // Set to true to include on the Home page preview
  icon: "Sparkles",     // Any icon name mapped in src/components/ServiceIcon.tsx
  capabilities: [
    "Niagara particle systems",
    "Unity Particle System",
    "Stylized spell & combat effects",
    "Environmental ambience",
  ],
  technologies: ["Unity", "Unreal Engine", "Blender"],
  deliverables: [
    "Game-ready particle prefabs",
    "VFX sprite sheets",
    "Integration documentation",
  ],
},
```

That's it! The new service will automatically appear in:
- The `/services` directory page
- Category filters
- Its own detail page at `/#/services/vfx-design`
- The homepage preview (if `featured: true`)

---

## How to Change Contact Information

All contact URLs and brand details are centralized in [`src/config/site.ts`](src/config/site.ts).

Open [`src/config/site.ts`](src/config/site.ts) and replace the placeholders:

```ts
export const siteConfig = {
  name: 'BADKAVS',

  tagline: 'Building Games. Creating Worlds.',

  description:
    'BADKAVS provides game development, art, design, technical art, and creative services.',

  contact: {
    email: 'contact@badkavs.com', // Your actual email
    instagram: 'https://instagram.com/badkavs', // Your actual Instagram link
    linkedin: 'https://linkedin.com/company/badkavs', // Your actual LinkedIn link
  },
  // ...
};
```

These values are consumed throughout the application:
- Footer email & social links
- Contact page interactive cards
- SEO metadata and descriptions

---

## How to Add Team Members (Optional)

Open [`src/data/team.ts`](src/data/team.ts). When team information is ready, add member objects to the `team` array:

```ts
export const team: TeamMember[] = [
  {
    id: "john-doe",
    name: "Alex Rivera",
    role: "Lead Gameplay Programmer",
    bio: "Systems architect and Unity/C# developer.",
  },
];
```

If `team` is left empty `[]`, the About page automatically displays the placeholder: *"Team information coming soon."* without any manual template changes.

---

## GitHub Pages Deployment Guide

### Step 1: Create a GitHub Repository
1. Go to [GitHub](https://github.com/new).
2. Create a new repository named `badkavs` (or any name you choose).
3. Keep it **Public** (required for free GitHub Pages).

### Step 2: Initialize Git and Push Your Project
In your local project directory:
```bash
git init
git add .
git commit -m "Initial commit: BADKAVS production website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
git push -u origin main
```

### Step 3: Enable GitHub Pages with GitHub Actions
1. On GitHub, navigate to your repository's **Settings** tab.
2. In the left sidebar, click **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** > **Source**, select:
   **GitHub Actions** (NOT "Deploy from a branch").
4. Once selected, the included `.github/workflows/deploy.yml` workflow will automatically trigger whenever you push to `main`.
5. Under the **Actions** tab on GitHub, you can monitor the deployment run. When it finishes (typically 30–60 seconds), your live website URL will be displayed:
   `https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/`

### Step 4: Updating the Website
Whenever you make changes (such as changing a service status or contact email):
```bash
git add .
git commit -m "Update service status"
git push origin main
```
GitHub Actions will automatically build and publish the changes live.

---

## Placeholder Replacement Checklist

Before announcing the website publicly, ensure the following placeholders have been replaced:

| File | Item | Status / Action |
|------|------|-----------------|
| [`src/config/site.ts`](src/config/site.ts) | `contact.email` | Replace `'YOUR_EMAIL_HERE'` with official email |
| [`src/config/site.ts`](src/config/site.ts) | `contact.instagram` | Replace `'YOUR_INSTAGRAM_URL_HERE'` with official Instagram URL |
| [`src/config/site.ts`](src/config/site.ts) | `contact.linkedin` | Replace `'YOUR_LINKEDIN_URL_HERE'` with official LinkedIn URL |
| [`public/robots.txt`](public/robots.txt) | `Sitemap URL` | Update hostname to your actual published GitHub Pages domain |
| [`src/data/team.ts`](src/data/team.ts) | `team` array | Optionally populate team members when ready |

---

## License

All rights reserved &copy; BADKAVS.
