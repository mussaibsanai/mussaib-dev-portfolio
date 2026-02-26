# Mussaib Rasheed — Portfolio & Blog

A modern, SEO-optimized portfolio built with **Next.js 14**, **Tailwind CSS**, and **TypeScript**. Features dark/light theme, blog system with markdown posts, and full SEO setup.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:3000
```

## 📁 Project Structure

```
portfolio-nextjs/
├── public/
│   └── images/
│       ├── projects/          # Project screenshots (add yours here)
│       ├── blog/              # Blog post images
│       └── og-image.png       # Social share image (create 1200x630px)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout (SEO metadata, fonts, theme)
│   │   ├── page.tsx           # Home page (assembles all sections)
│   │   ├── globals.css        # Tailwind + custom styles
│   │   └── blog/
│   │       ├── page.tsx       # Blog listing page
│   │       └── [slug]/
│   │           └── page.tsx   # Individual blog post page
│   ├── components/
│   │   ├── Navbar.tsx         # Navigation with mobile menu
│   │   ├── ThemeToggle.tsx    # Dark/light toggle
│   │   ├── ThemeProvider.tsx  # next-themes provider
│   │   ├── Hero.tsx           # Hero section with video placeholder
│   │   ├── Services.tsx       # Services grid
│   │   ├── Projects.tsx       # Project showcase cards
│   │   ├── TechStack.tsx      # Animated skill bars
│   │   ├── Testimonials.tsx   # Client reviews
│   │   ├── Contact.tsx        # Contact form
│   │   └── Footer.tsx         # Footer with social links
│   ├── data/
│   │   └── site.ts            # ⭐ ALL YOUR DATA LIVES HERE
│   ├── lib/
│   │   └── blog.ts            # Blog utility (reads markdown files)
│   └── content/
│       └── blog/              # 📝 Your blog posts (markdown files)
│           ├── react-native-vs-flutter-2025.md
│           └── how-i-ship-mvps-fast.md
├── next.config.js
├── next-sitemap.config.js     # Sitemap generation for SEO
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## ✏️ Customization Guide

### 1. Update Your Data (MOST IMPORTANT)

Edit `src/data/site.ts` to update:
- Your name, title, description
- Social links (Upwork, GitHub, LinkedIn, email)
- Project details (replace placeholders with your real projects)
- Services and tech stack
- Testimonials (add real ones as you get them)

### 2. Add Project Screenshots

Place screenshots in `public/images/projects/`:
- `finflow.png` — SaaS Dashboard demo
- `swiftcart.png` — Mobile Commerce demo
- `web-project.png` — Your real web project
- `mobile-project.png` — Your real mobile project
- `api-toolkit.png` — API demo

Recommended size: **1200x800px** or **16:10 aspect ratio**

### 3. Add Your Video

Replace the video placeholder in `Hero.tsx` with:
- A Loom embed
- A HeyGen/Synthesia AI video embed
- A YouTube embed

### 4. Write Blog Posts

Create `.md` files in `src/content/blog/` with this frontmatter:

```markdown
---
title: "Your Post Title"
description: "A brief description for SEO and previews"
date: "2025-02-20"
readTime: "5 min read"
tags: ["React", "Next.js", "Tutorial"]
published: true
---

Your content here...
```

### 5. Connect Contact Form

In `Contact.tsx`, connect the form to your preferred service:
- **Formspree:** Add `action="https://formspree.io/f/YOUR_ID"` to the form
- **EmailJS:** Add EmailJS SDK
- **API Route:** Create `src/app/api/contact/route.ts`

### 6. Create OG Image

Create a `public/images/og-image.png` (1200x630px) for social sharing. Use Figma or Canva.

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variable
# SITE_URL = https://your-domain.com
```

### After Deployment

1. Update `siteConfig.url` in `src/data/site.ts` with your real domain
2. Update `next-sitemap.config.js` with your domain
3. Run `npm run build` to generate sitemap
4. Submit sitemap to Google Search Console

## 🔍 SEO Features

- ✅ Full meta tags (title, description, OG, Twitter cards)
- ✅ JSON-LD structured data on blog posts
- ✅ Auto-generated sitemap via next-sitemap
- ✅ robots.txt generation
- ✅ Semantic HTML throughout
- ✅ Fast loading (Next.js SSG)
- ✅ Mobile-responsive design
- ✅ Blog with proper heading hierarchy

## 📝 Blog Post Ideas (for SEO & Trust)

Write these to attract clients through Google:

1. "React Native vs Flutter in 2025" ✅ (included)
2. "How I Ship MVPs in 2-3 Weeks" ✅ (included)
3. "Next.js vs React: When to Use Which"
4. "PostgreSQL vs MongoDB: A Practical Guide"
5. "5 Mistakes That Kill MVP Projects"
6. "How to Choose a Freelance Developer (Client Guide)"
7. "Building a SaaS Dashboard: Architecture Decisions"
8. "My Full Stack Developer Toolkit in 2025"

## 🛠 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Theme:** next-themes (dark/light)
- **Icons:** Lucide React
- **Blog:** Markdown + gray-matter
- **SEO:** next-sitemap + JSON-LD
- **Deployment:** Vercel

---

Built by Mussaib Rasheed. Ship fast, build businesses.
