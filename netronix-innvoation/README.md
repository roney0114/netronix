# Netronix Innovation - Official Web Platform

Welcome to the **Netronix Innovation** website codebase. This project is built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Framer Motion**.

---

## 📁 Project Directory Structure

```text
netronix-innvoation/
│
├── public/                  # Static assets served directly (favicon, robot.txt)
│
├── src/                     # All application source code
│   │
│   ├── assets/              # Images, logos, team photos, and media files
│   │
│   ├── components/          # Reusable UI components
│   │   ├── common/          # Global popups & utilities (QuoteModal, ScrollToTop)
│   │   ├── layout/          # Page structure components (Navbar, Footer, MegaMenu, RootLayout)
│   │   ├── sections/        # Homepage sections (Hero, About, Services, WhyChooseUs, Portfolio, Team, Testimonials, Contact)
│   │   └── ui/              # Interactive graphics & animation wrappers (TiltCard, ParticleBackground)
│   │
│   ├── context/             # Global React State Providers
│   │   ├── QuoteContext.jsx # Controls opening/closing the "Get a Quote" modal anywhere in the app
│   │   └── SiteContext.jsx  # Provides company profile and site text from local data
│   │
│   ├── data/                # Content Datasets (Edit text and services here!)
│   │   ├── servicesData.js  # Full specifications, features, prices, and FAQs for all services
│   │   └── websiteData.js   # Main company profile, testimonials, FAQs, and stats
│   │
│   ├── pages/               # Individual routed pages
│   │   ├── admin/           # Admin portal dashboard
│   │   ├── services/        # Service pages (ServicesPortalPage & ServiceDetailPage)
│   │   ├── AboutPage.jsx    # Dedicated full About page
│   │   ├── ContactPage.jsx  # Dedicated full Contact page
│   │   ├── PortfolioPage.jsx# Full portfolio gallery with case study filters
│   │   └── PrivacyPolicy.jsx# Legal and privacy terms
│   │
│   ├── App.jsx              # Landing page layout (assembles homepage sections in order)
│   ├── index.css            # Global CSS, brand color tokens, and Tailwind v4 setup
│   ├── main.jsx             # React application entry point
│   └── router.jsx           # React Router route configuration
│
├── index.html               # Main HTML document template
├── package.json             # Project dependencies and npm scripts
└── vite.config.js           # Vite development server and plugin configuration
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Local Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```

---

## 🛠️ How to Edit Content (Beginner's Guide)

### 1. Where do I change text, phone number, or emails?
- Go to [`src/data/websiteData.js`](./src/data/websiteData.js).
- Update the `company` object (phone, email, location, office hours).

### 2. Where do I edit or add services?
- **Homepage cards**: Edit the `services` array inside [`src/components/sections/Services.jsx`](./src/components/sections/Services.jsx).
- **Service Detail pages**: Edit [`src/data/servicesData.js`](./src/data/servicesData.js).

### 3. Where do I change brand colors?
- Open [`src/index.css`](./src/index.css) to view the `@theme` brand color definitions:
  - `--color-brand-teal`: `#1C9773`
  - `--color-brand-orange`: `#FF9112`
  - `--color-brand-dark`: `#070B16`

### 4. Where do I add new pages?
1. Create your new page component inside `src/pages/YourNewPage.jsx`.
2. Open [`src/router.jsx`](./src/router.jsx) and add the path to the route list.
3. Link to it in [`src/components/layout/Navbar.jsx`](./src/components/layout/Navbar.jsx) or [`src/components/layout/Footer.jsx`](./src/components/layout/Footer.jsx).
