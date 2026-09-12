# Prince Hardware & Sanitary Store — Website

A modern, responsive website for **Prince Hardware & Sanitary Store** built with Next.js, TypeScript, and Tailwind CSS.

## 🛠️ Tech Stack

- **Next.js 14** (App Router) — React framework
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Lucide React** — Beautiful icons
- **Static Export** — Pre-rendered HTML for fast, serverless hosting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This generates a static site in the `out/` directory.

## ☁️ Deploy to Cloudflare Pages

### Option 1: Git Integration (Recommended)
1. Push this repo to **GitHub** or **GitLab**
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **"Create a project"** → **"Connect to Git"**
4. Select your repository
5. Set build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
6. Click **"Save and Deploy"**

Every push to `main` will auto-deploy! 🎉

### Option 2: Direct Upload
1. Run `npm run build`
2. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
3. Click **"Create a project"** → **"Direct Upload"**
4. Drag and drop the `out/` folder
5. Done!

## ✏️ Customizing Shop Details

All shop information is in **one file**: `src/lib/constants.ts`

Edit this file to update:
- Shop name, tagline, description
- Phone number(s), email, WhatsApp
- Address
- Google Maps embed URL
- Business hours
- Social media links
- Product categories
- Brands
- Testimonials

After editing, rebuild and redeploy.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout (fonts, SEO metadata)
│   ├── page.tsx            # Home page (assembles all sections)
│   └── globals.css         # Global styles
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Navigation bar
│   │   └── Footer.tsx      # Footer
│   ├── sections/
│   │   ├── Hero.tsx        # Hero banner
│   │   ├── Categories.tsx  # Product categories
│   │   ├── WhyChooseUs.tsx # USP features
│   │   ├── Brands.tsx      # Brand showcase
│   │   ├── Testimonials.tsx# Customer reviews
│   │   └── Contact.tsx     # Contact & map
│   └── ui/
│       └── WhatsAppButton.tsx # Floating WhatsApp CTA
└── lib/
    └── constants.ts        # ⭐ All shop details (edit this!)
```

## 📄 License

Private — built for Prince Hardware & Sanitary Store.
