# 🌾 Shree Swami Samarth Rice Mill

<div align="center">

![Shree Swami Samarth Rice Mill Banner](https://dhqenopo9lcuj.cloudfront.net/images/converted.webp)

**Harvesting & Milling Excellence Since 1998**  
*State-of-the-Art Japanese Sortex Milling • 100% Pure & Hygienic • Domestic & Global Export*

[![React 19](https://img.shields.io/badge/React-19.2.8-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.2.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.43.0-FF0055?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis-Smooth_Scroll-black)](https://github.com/darkroomengineering/lenis)
[![CDN CloudFront](https://img.shields.io/badge/AWS_CloudFront-CDN_Accelerated-FF9900?logo=amazon-aws&logoColor=white)](https://aws.amazon.com/cloudfront/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

[Explore Products](#-featured-product-collection) • [Milling Process](#-rice-milling--quality-pipeline) • [System Architecture](#-system-architecture) • [Getting Started](#-getting-started) • [Contact Us](#-contact--trade-inquiries)

</div>

---

## 📖 Overview

**Shree Swami Samarth Rice Mill** is a modern, high-performance web platform presenting our legacy of premium rice processing and wholesale distribution based in Maharashtra, India. 

Equipped with modern Japanese Sortex milling technology, multi-stage destoners, and moisture-controlled polishing lines, our mill produces pristine Basmati, Indrayani, Kolam, Kolpi, and Jeera varieties for retail distributors, supermarkets, commercial banquet chains, and international export partners.

### 🌟 Key Platform Highlights
- **Fluid Visual Immersion:** Custom video preloader, smooth inertia scrolling powered by Lenis, dynamic cursor effects, and subtle grain particle physics.
- **Interactive 3D Product Showcase:** Tilt-responsive cards, category-filtering tabs, and full-resolution lightbox inspection with zoom-in magnification.
- **Factory Tour Modal & Storytelling:** Virtual tour video integrations capturing modern processing plant operations and packaging halls.
- **One-Click Quotation & WhatsApp Integration:** Rapid wholesale inquiry workflows routing custom specifications directly to mill sales coordinators.
- **CloudFront CDN Edge Architecture:** High-resolution WebP images and optimized MP4 assets streamed globally with sub-second latency.

---

## 🏛️ System Architecture

The following diagram illustrates the component architecture, data flow, media pipeline, and user interaction layers of the platform:

```mermaid
flowchart TB
    subgraph Client["🖥️ Client Browser (React 19 + Vite)"]
        direction TB
        UI["Entry Layer\n(index.html & main.jsx)"]
        
        subgraph CoreApp["Core Application Container (App.jsx)"]
            ScrollEngine["Lenis Smooth Scroll & ScrollProgress"]
            Cursor["Custom Magnetic Cursor"]
            Preloader["Intro Video Preloader Screen"]
            Navbar["Sticky Responsive Navigation Bar\n(ScrollSpy + Mobile Drawer)"]
            
            subgraph Sections["Page Sections"]
                Hero["Hero Section\n(3D Floating Rice & Stats Ribbon)"]
                About["About Section\n(Facility Highlights & Story)"]
                Products["Interactive Product Catalog\n(Category Filters & Tilt Cards)"]
                Process["4-Step Process Walkthrough"]
                Gallery["Mill & Warehouse Gallery"]
                Testimonials["Client Testimonials & Trust Badges"]
                Contact["Contact & WhatsApp Form Hub"]
                Footer["Footer & Quick Navigation"]
            end
            
            subgraph Modals["Interactive Modals (Lazy Loaded)"]
                QuoteModal["Quotation Request Modal"]
                FactoryModal["Virtual Factory Tour Modal"]
                LightboxModal["Product Image Zoom Lightbox"]
            end
        end
    end

    subgraph MediaPipeline["☁️ Global Media Delivery Network"]
        CDN["Amazon CloudFront CDN"]
        MediaConfig["src/config/media.js\n(Centralized Asset Manifest)"]
        EnvVar["VITE_MEDIA_URL (.env)"]
    end

    subgraph UserAction["📲 User Conversion Channels"]
        WA["WhatsApp Business API"]
        Tel["Direct Mill Telephone"]
    end

    UI --> CoreApp
    EnvVar --> MediaConfig
    MediaConfig --> CDN
    CDN --> Hero
    CDN --> Products
    CDN --> Gallery
    CDN --> Process
    CDN --> About

    Products --> LightboxModal
    Hero --> QuoteModal
    Hero --> FactoryModal
    Products --> QuoteModal
    Contact --> WA
    QuoteModal --> WA
    Contact --> Tel
```

---

## 🔄 User Journey & Navigation Flow

```mermaid
sequenceDiagram
    autonumber
    actor Visitor as Wholesale Buyer / Distributor
    participant App as FreshMart AI Web App
    participant Preloader as Video Preloader
    participant Showcase as Product Showcase
    participant Modal as Lightbox / Quote Modal
    participant WhatsApp as WhatsApp Sales Dispatch

    Visitor->>App: Loads Website
    App->>Preloader: Triggers Intro Video & Branding Animation
    Visitor->>Preloader: Completes video or skips
    Preloader-->>App: Unlocks main interface with smooth scroll
    Visitor->>App: Explores Hero & Factory Highlights
    Visitor->>Showcase: Filters Rice Varieties (Basmati / Indrayani / Aged / Export)
    Visitor->>Showcase: Clicks "Inspect Bag" on chosen variety
    Showcase->>Modal: Launches High-Resolution Zoom Lightbox
    Visitor->>Modal: Toggles 1.5x grain zoom & specs inspection
    Visitor->>Modal: Clicks "Request Quote"
    Modal->>Visitor: Prompts quantity, destination & packing type
    Visitor->>Modal: Confirms inquiry details
    Modal->>WhatsApp: Generates formatted purchase order draft
    WhatsApp-->>Visitor: Direct WhatsApp chat opened with Mill Coordinator
```

---

## 🌾 Rice Milling & Quality Pipeline

Our grain processing methodology combines traditional agrarian heritage with computerized Japanese Sortex cleaning:

```mermaid
graph LR
    A["🌾 01. Farm Selection\nPaddy procurement from certified farmers"] --> B["🧹 02. Cleaning & Sorting\nMulti-deck pre-cleaners, destoners & separators"]
    B --> C["⚙️ 03. Modern Milling\nAutomated rubber roll hulling, multi-pass polishers"]
    C --> D["🔬 04. Sortex Grading\nHigh-speed CCD optical cameras & color sorting"]
    D --> E["📦 05. Moisture-Proof Packing\nMulti-layer 5kg, 10kg, 25kg, 50kg bags"]
    E --> F["🚚 06. Dispatch & Export\nPan-India distribution & sea freight shipments"]
```

### Visual Process Stages

| Stage 01: Farm Selection | Stage 02: Cleaning & Sorting | Stage 03: Modern Milling | Stage 04: Quality Inspection |
| :---: | :---: | :---: | :---: |
| ![Farm Selection](https://dhqenopo9lcuj.cloudfront.net/images/process/farm_selection.webp) | ![Cleaning & Sorting](https://dhqenopo9lcuj.cloudfront.net/images/process/clean.webp) | ![Modern Milling](https://dhqenopo9lcuj.cloudfront.net/images/process/3.webp) | ![Quality Testing](https://dhqenopo9lcuj.cloudfront.net/images/process/testing.webp) |
| *Direct farmer procurement & sustainable grain selection.* | *Impurity removal, magnetic destoning & grain grading.* | *Uniform friction whitening and silk polishing.* | *Lab testing, moisture certification & zero-defect Sortex check.* |

---

## 📦 Featured Product Collection

Our collection features daily staples, vintage aged reserves, and long-grain biryani specialties:

| Product | Variety | Category | Grain Characteristics | Curing / Aging | Visual Inspection |
| :--- | :--- | :--- | :--- | :--- | :---: |
| **Basmati Rice** | Traditional Basmati | Royal Special | Extra-long slender grains, elongates up to 2x cooked | Naturally Aged | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/basmati1.webp" width="110" alt="Basmati Rice" /> |
| **Indrayani (Fresh)** | Maharashtra Fragrant | Daily Essential | Medium soft grains, sweet natural fragrance | Fresh Harvest | <img src="https://dhqenopo9lcuj.cloudfront.net/images/Indrayani.webp" width="110" alt="Indrayani Fresh" /> |
| **Indrayani (Aged)** | Vintage Reserve | Connoisseur Choice | Firm texture, non-sticky cooking, deep nutty aroma | 18+ Months Cured | <img src="https://dhqenopo9lcuj.cloudfront.net/images/Indrayani.webp" width="110" alt="Indrayani Aged" /> |
| **Kolam Rice** | Traditional Kolam | Daily Table Rice | Slender light grain, quick cooking, easy digestion | Year Aged | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/kolam1.webp" width="110" alt="Kolam Rice" /> |
| **Kolpi Rice** | Premium Kolpi | Export Grade | Double silky polished, consistent micron grading | Sortex Cleaned | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/kolpi1.webp" width="110" alt="Kolpi Rice" /> |
| **Jeera 1008 (New)** | Micro Grain | Quick Cooking | Cumin-sized slender grain, delicate fragrance | Current Crop | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/jeera.webp" width="110" alt="Jeera New" /> |
| **Jeera 1008 (Old)** | Cured Micro Grain | Chef's Selection | Fluffy separation, ideal for jeera rice and pulao | Aged 2 Years | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/jeera.webp" width="110" alt="Jeera Old" /> |
| **Basmati Steam** | Extra Long Steam | Banquets & Exports | Thermal steam conditioned for superior tensile strength | Steam Processed | <img src="https://dhqenopo9lcuj.cloudfront.net/images/products/basmati1.webp" width="110" alt="Basmati Steam" /> |

---

## 🏭 Mill Infrastructure & Processing Unit

<div align="center">

![Rice Mill Processing Facility](https://dhqenopo9lcuj.cloudfront.net/images/about/factory.webp)

*State-of-the-art milling machinery, automated sorting towers, and climate-controlled warehouse silos.*

</div>

- **Processing Capacity:** High-throughput daily milling lines equipped with pneumatic grain elevators.
- **Dust-Free Environment:** Cyclonic air filtration systems ensuring sanitary processing conditions.
- **Packaging Lines:** Automated bagging machines providing 5kg, 10kg, 25kg, and 50kg moisture-barrier packaging.
- **Logistics Hub:** Direct highway connectivity (Ghoti-Shirdi Road) enabling rapid dispatch across Maharashtra, Gujarat, and major Indian ports.

---

## 🛠️ Technology Stack & Dependencies

```mermaid
graph TD
    subgraph Frontend["Frontend Ecosystem"]
        React["React 19 (Component UI)"]
        Vite["Vite 8 (Build Tool & HMR)"]
        Tailwind["Tailwind CSS v4 (Styling)"]
        Framer["Framer Motion (Animations & Micro-interactions)"]
        Lenis["@studio-freight/lenis (Smooth Inertia Scroll)"]
        Lucide["Lucide React & React Icons (Vector Graphics)"]
        CountUp["React CountUp (Live Stat Counter)"]
    end

    subgraph Tooling["Code Quality & Optimization"]
        Oxlint["Oxlint (Ultra-Fast Rust Linter)"]
        Compression["vite-plugin-compression (Gzip / Brotli)"]
        CloudFront["AWS CloudFront CDN (Global Asset Edge)"]
    end

    Frontend --> Tooling
```

| Technology | Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^19.2.8` | Component architecture, state hooks, and Suspense lazy loading |
| **Vite** | `^8.2.0` | Ultra-fast local dev server and optimized production tree-shaking |
| **Tailwind CSS** | `^4.3.3` | Next-generation utility-first styling with high-performance CSS engine |
| **Framer Motion** | `^12.43.0` | Fluid scroll triggers, spring transitions, and interactive gesture handling |
| **@studio-freight/lenis**| `^1.0.42` | Native-feel inertia scrolling across all viewports and hardware |
| **Lucide React** | `^1.28.0` | Crisp, scalable iconography |
| **Oxlint** | `^1.75.0` | High-performance Rust-based static code analysis |
| **AWS CloudFront** | - | Edge media caching for high-bitrate video and WebP assets |

---

## 📁 Repository Directory Structure

```plaintext
freshmart-ai/
├── 📁 public/                     # Static assets & web manifests
│   ├── favicon.svg               # Brand vector favicon
│   ├── icons.svg                 # SVG sprite sheet
│   └── 📁 images/                # Local asset fallback folder
├── 📁 src/                        # Core application source code
│   ├── 📁 components/            # Modular React components
│   │   ├── 📁 About/             # Facility story & quality badges
│   │   ├── 📁 Contact/           # Contact cards & WhatsApp integration
│   │   ├── 📁 Distributor/       # Supply & distributor partner network
│   │   ├── 📁 FactoryModal/      # Virtual plant video modal
│   │   ├── 📁 Footer/            # Platform links & copyright info
│   │   ├── 📁 Gallery/           # Mill machinery & warehouse gallery
│   │   ├── 📁 Hero/              # Hero header, floating rice & statistics
│   │   ├── 📁 Intro/             # Intro video preloader screen
│   │   ├── 📁 Navbar/            # Navigation bar, mobile drawer, scroll spy
│   │   ├── 📁 Process/           # 4-stage interactive milling pipeline
│   │   ├── 📁 Products/          # Product catalog, category tabs & zoom modal
│   │   ├── 📁 QuoteModal/        # Quotation request form modal
│   │   ├── 📁 Testimonials/      # Customer & distributor reviews
│   │   ├── 📁 Trusted/           # Certifications & trust badges
│   │   ├── 📁 WhyChooseUs/       # Competitive advantages & metrics
│   │   └── 📁 common/            # CustomCursor, SmoothScroll, TiltCard, etc.
│   ├── 📁 config/                # Environment & media configuration
│   │   ├── config.js             # Base MEDIA_URL configuration
│   │   └── media.js              # Centralized CDN media asset mappings
│   ├── 📁 context/               # Global state contexts (Theme, UI)
│   ├── 📁 pages/                 # Route page components
│   ├── App.jsx                   # Root application layout & Suspense wrappers
│   ├── index.css                 # Global CSS tokens, fonts, and animation styles
│   └── main.jsx                  # React DOM root entry point
├── .env.example                  # Environment variable reference template
├── .oxlintrc.json                # Fast Rust-based linter rules
├── index.html                    # HTML entry point with preconnect & fonts
├── package.json                  # Dependencies and execution scripts
├── vercel.json                   # Edge routing & cache headers configuration
└── vite.config.js                # Vite build settings & React plugins
```

---

## 🚀 Getting Started

Follow these instructions to set up the project locally on your machine:

### 1. Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm`, `pnpm`, or `yarn`
- **Git** installed on your system

### 2. Clone the Repository
```bash
git clone https://github.com/parthkale3231/Rice_mill.git
cd Rice_mill
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Configure Environment Variables
Copy the `.env.example` file to create your local `.env`:
```bash
cp .env.example .env
```

Set your Media CDN endpoint in `.env`:
```env
# Production Media CDN URL
VITE_MEDIA_URL=https://dhqenopo9lcuj.cloudfront.net
```
> **Note:** If `VITE_MEDIA_URL` is left empty, the application falls back to images located in the local `/public` directory.

### 5. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` to explore the live application with Hot Module Replacement (HMR).

### 6. Code Linting
Run Oxlint to check for code quality and potential issues:
```bash
npm run lint
```

### 7. Production Build
Compile and bundle the application with Brotli/Gzip compression:
```bash
npm run build
```
Preview the production build locally:
```bash
npm run preview
```

---

## ⚡ Performance & UX Optimizations

1. **Next-Gen WebP & CDN Streaming:**
   - All gallery and product photos use WebP compression.
   - Global AWS CloudFront CDN ensures rapid media delivery regardless of visitor location.
2. **Code Splitting via React 19 `lazy` & `Suspense`:**
   - Modals (`QuoteModal`, `FactoryModal`) and below-the-fold sections (`Process`, `Gallery`, `Testimonials`) load on demand to minimize initial JavaScript payloads.
3. **Inertia Scrolling with Lenis:**
   - Eliminates layout jank and provides unified 60/120 FPS scrolling across trackpads, mice, and mobile touchscreens.
4. **Vite Compression Plugin:**
   - Pre-compresses static assets during build time to enable instant HTTP transfer via reverse proxies or Vercel edge networks.
5. **SEO & Accessibility Ready:**
   - Semantic HTML5 structure, descriptive `aria-label` tags on all interactive buttons, DNS prefetching for Google Fonts, and high-priority image preloading.

---

## 📞 Contact & Trade Inquiries

We welcome wholesale inquiries, domestic dealership applications, and international export contracts.

<div align="center">

| Channel | Contact Details |
| :--- | :--- |
| **📍 Mill Address** | Shree Swami Samarth Rice Mill, Ghoti-Shirdi Rd, Maharashtra, India |
| **📞 Phone / WhatsApp** | [+91 8605194211](tel:+918605194211) / [+91 9370107793](tel:+919370107793) |
| **💬 Direct WhatsApp** | [Chat on WhatsApp](https://wa.me/918605194211) |
| **✉️ Email** | [info@ricesamarth.com](mailto:info@ricesamarth.com) |
| **🕒 Working Hours** | Monday – Saturday : 9:00 AM – 7:00 PM IST |

</div>

---

<div align="center">

Designed & Engineered with ❤️ for **Shree Swami Samarth Rice Mill**  
*© 1998 - 2026 Shree Swami Samarth Rice Mill. All Rights Reserved.*

</div>
