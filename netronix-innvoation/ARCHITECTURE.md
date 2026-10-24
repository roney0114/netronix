# Netronix Innovation — Frontend Architecture & Backend Handover Guide

Welcome to the **Netronix Innovation** frontend codebase. This project has been engineered following modern, production-grade clean architecture principles. It is structured to be modular, intuitive, and immediately ready to hand over to backend developers to connect any backend API (Node.js/Express, Python/FastAPI, Go, Laravel/PHP, etc.) without altering the user interface or design aesthetics.

---

## 1. Quick Start Commands

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts frontend Vite dev server at `http://localhost:5173` |
| `npm run mock` | Starts the zero-dependency Node mock backend server on `http://localhost:5000` |
| `npm run dev:all` | Runs **both** frontend and mock backend concurrently |
| `npm run build` | Compiles production bundle with zero warnings |
| `npm run preview` | Previews the compiled production bundle locally |

---

## 2. Directory Structure

```text
netronix-innvoation/
├── .env.example               # Environment variable reference
├── package.json               # Dependencies and scripts (dev, mock, dev:all, build)
├── vite.config.js             # Vite config with automatic /api reverse proxy to port 5000
├── index.html                 # Single-page HTML entry point
├── scripts/
│   └── mockServer.js          # Executable reference mock backend (Node http, zero-deps)
│
└── src/
    ├── assets/                # Static brand images, team photos, portfolio previews
    │   ├── portfolio/         # Screenshots of delivered client websites
    │   └── team/              # High-resolution leadership portraits
    │
    ├── components/            # UI Component Layer
    │   ├── common/            # Shared business modals (QuoteModal, ScrollToTop)
    │   ├── layout/            # Shell components (Navbar, Footer, MegaMenu, RootLayout)
    │   └── ui/                # Micro-interaction primitives (ParticleBackground, TiltCard)
    │
    ├── config/                # Environment & Application Configuration
    │   └── appConfig.js       # Central source of truth for API base URLs & storage keys
    │
    ├── constants/             # Immutable Configuration & Tokens
    │   ├── routes.js          # Centralized route definitions (eliminates hardcoded URLs)
    │   └── theme.js           # Official brand design tokens (Teal, Amber, Midnight Dark)
    │
    ├── context/               # Global React State Contexts
    │   ├── QuoteContext.jsx   # Opens/closes modal and pre-fills service payloads
    │   └── SiteContext.jsx    # General site data provider
    │
    ├── data/                  # Static Business Content & Specifications
    │   ├── servicesData.js    # 6 Core Pillars & 69 Sub-Services master catalog
    │   └── websiteData.js     # Company bio, social links, stats, testimonials
    │
    ├── hooks/                 # Custom Reusable React Hooks
    │   ├── useScrollPosition.js # Window scroll detector (used by Navbar & animations)
    │   ├── useAsync.js        # Universal async operation wrapper (loading, error, data)
    │   └── index.js           # Clean barrel exports
    │
    ├── pages/                 # Full Page Route Views
    │   ├── admin/
    │   │   └── AdminDashboard.jsx # Submissions & Operations Console (/admin)
    │   ├── services/          # 6 Dedicated Pillar Pages
    │   │   ├── WebDevelopment.jsx
    │   │   ├── SoftwareDevelopment.jsx
    │   │   ├── NetworkingHosting.jsx
    │   │   ├── MobileApp.jsx
    │   │   ├── MarketingDesign.jsx
    │   │   └── Consulting.jsx
    │   ├── AboutPage.jsx
    │   ├── ContactPage.jsx
    │   ├── HomePage.jsx
    │   ├── PortfolioPage.jsx
    │   ├── PrivacyPolicy.jsx
    │   ├── ServicesPage.jsx   # Interactive 6-Pillar Hub & Explorer
    │   ├── TeamPage.jsx
    │   └── TermsOfService.jsx
    │
    ├── services/              # API & Backend Integration Layer
    │   ├── apiClient.js       # Universal fetch wrapper with timeouts, auth token & error parsing
    │   ├── quoteService.js    # Handles project quote requests (API + local fallback)
    │   ├── contactService.js  # Handles contact inquiries (API + local fallback)
    │   └── index.js           # Clean barrel exports
    │
    ├── utils/                 # Pure Functional Utilities
    │   ├── formatters.js      # Currency (NPR) & Date formatters
    │   ├── validators.js      # Pure email, phone, and text field validators
    │   └── serviceCategoryMapper.js # Quote modal category auto-resolution
    │
    ├── index.css              # Global styles, Tailwind directives, custom scrollbars
    ├── main.jsx               # React DOM bootstrap
    └── router.jsx             # React Router configuration
```

---

## 3. Backend Handover & API Contract

Connecting a real backend takes **less than 2 minutes** because the frontend is completely decoupled from the UI via the `src/services/` layer:

### Step 1: Environment Configuration
Create a `.env` file in the project root:
```bash
VITE_API_BASE_URL=http://localhost:5000/api
```
*(In production, set `VITE_API_BASE_URL=https://api.yourdomain.com/api`)*

### Step 2: Test With the Included Mock Backend
Your friends can immediately run:
```bash
npm run mock
```
This launches `scripts/mockServer.js` on `http://localhost:5000`, which provides the live, working example of every endpoint! They can study this script to replicate the exact routes in Express, FastAPI, Django, NestJS, etc.

### Step 3: Required API Endpoints

#### A. Quotation Submissions
- **`POST /api/quotes`**
  - **Payload sent by frontend:**
    ```json
    {
      "name": "Sandesh Sharma",
      "email": "sandesh@example.com",
      "phone": "+977 9800000000",
      "company": "Tech Corp",
      "service": "Website Development, Software Development",
      "budget": "Rs.60k - Rs.3L",
      "timeline": "1-3 months",
      "details": "We need a custom online store with eSewa integration.",
      "files": [],
      "createdAt": "2026-10-20T13:40:00.000Z"
    }
    ```
  - **Expected Response:** `200 OK` or `201 Created` with `{ "success": true, "id": "quote_123", "data": { ... } }`

- **`GET /api/quotes`** *(Consumed by `/admin`)*
  - **Expected Response:** JSON array of submitted quotes.

- **`DELETE /api/quotes/:id`** *(Consumed by `/admin`)*
  - **Expected Response:** `{ "success": true, "message": "Quote deleted" }`

#### B. Contact Inquiries
- **`POST /api/contacts`**
  - **Payload sent by frontend:**
    ```json
    {
      "name": "Client Name",
      "email": "client@example.com",
      "phone": "+977 9800000000",
      "subject": "Office Networking, Hosting & CCTV",
      "message": "Looking to overhaul our office network.",
      "createdAt": "2026-10-20T13:40:00.000Z"
    }
    ```
  - **Expected Response:** `{ "success": true, "message": "Message sent successfully" }`

- **`GET /api/contacts`** *(Consumed by `/admin`)*
  - **Expected Response:** JSON array of inquiries.

- **`DELETE /api/contacts/:id`** *(Consumed by `/admin`)*
  - **Expected Response:** `{ "success": true, "message": "Inquiry deleted" }`

#### C. System Health
- **`GET /api/health`**
  - **Expected Response:** `{ "status": "ok" }`

---

## 4. Standalone / Offline Resilience (Zero-Fail Guarantee)

If the backend server is temporarily offline, restarting, or hasn't been built yet:
1. `quoteService.js` and `contactService.js` automatically intercept the call and cache the submission in the browser's `localStorage`.
2. The user always receives an immediate, polished success confirmation.
3. The submissions are never lost and can be inspected or exported to JSON at any time from **`/admin`**.
4. Once the backend comes online, submissions sync to the server seamlessly.

---

## 5. Operations Console (`/admin`)

Visit **`/admin`** to view:
- **Quotation Requests:** Live list of quote submissions with client contact details, selected services, budget, timeline, and notes.
- **Contact Inquiries:** Incoming messages sent via the contact form.
- **API Status:** Live indicator showing whether the frontend is actively connected to your backend API or operating in local cache mode.
- **Data Export:** One-click JSON backup export.

---

## 6. Design System Tokens

- **Canvas Background:** `#070B16`
- **Card Background:** `#0D1424`
- **Primary Teal:** `#1C9773` (Glow: `rgba(28, 151, 115, 0.35)`)
- **Secondary Amber:** `#FF9112` (Glow: `rgba(255, 145, 18, 0.35)`)
