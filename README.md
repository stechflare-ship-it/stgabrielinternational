# 🎓 St Gabriel\'s International School — Official Web Platform

> **"HOPE TO THE WORLD" · "A Balanced Life & Real-Life Experience"**  
> *Premier Dual-Curriculum Institution: Kenya CBC (PP1 to Senior School Grade 12) & British International (EYFS to A-Level)*  
> *Lanet, Nakuru County, Kenya*

---

## 📌 1. Project Overview

The **St Gabriel\'s International School Web Platform** is a modern, high-performance, single-page enterprise web application engineered to represent the school's prestigious 28-year legacy in Nakuru County, Kenya.

The platform provides a comprehensive digital gateway for prospective parents, current day and boarding scholars, alumni, and global educational partners. It features deep dual-curriculum exploration (Kenya CBC and British CAIE), admissions pipelines, fee schedule calculators with official Equity Bank & M-Pesa Paybill payment guides, interactive community testimonials, boarding life guides (celebrating separate boys and girls facilities 4 km apart in Lanet), an executive administration directory, virtual campus tours, and multimedia galleries.

📖 *For comprehensive architecture, routing, component hierarchy, and data schemas, please consult [`DOCUMENTATION.md`](./DOCUMENTATION.md).*

---

## 👥 2. Project Recognition & Acknowledgements

We proudly acknowledge the dedicated team whose vision, leadership, and engineering expertise made this platform possible:

### 💻 Software Development & Engineering Lead

| Contributor | Role | Core Contributions |
| :--- | :--- | :--- |
| **Anthony Wanyaga Maina** | **Lead Software Engineer** | Full-Stack Architecture, TypeScript Core, Component Hierarchy, Responsive Design System, Video Hero Performance Optimization, Dynamic SEO Engine & Production Release Engineering. |

### 🏫 St Gabriel\'s School Leadership & Advisory Team

| Contributor | Capacity & Role | Key Contributions & Institutional Input |
| :--- | :--- | :--- |
| **Nicholas Okeyo** | **Executive Principal & School Leadership** | Executive vision, Principal Welcome address, academic policy guidance, and institutional governance. |
| **Paul Muira** | **Academic & Administrative Advisory** | Dual-curriculum syllabus architecture (CBC & British), examination frameworks (KPSEA, KJSEA, IGCSE, A-Levels), and academic scheduling. |
| **Michael** | **School Technical & Operations Liaison** | On-site infrastructure coordination, IT systems liaison, campus asset coordination, and technical support. |
| **James** | **Co-Curricular & Student Affairs Advisory** | Sports curriculum, championship brass band media, student club rosters, and co-curricular programs. |
| **Lydiah Mwangi** | **Admissions, Pastoral Care & Content Coordination** | Admissions workflow design, pastoral care policies, girls' boarding compound guidelines, and prospectus content verification. |

---

## 🛠️ 3. Technical Stack & Architecture

| Technology | Standard / Version | Purpose |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Declarative, component-driven reactive UI framework. |
| **TypeScript** | `^5.5.3` | Strict static typing, self-documenting data interfaces, and runtime safety. |
| **Vite** | `^5.4.2` | Ultra-fast bundling, tree-shaking, and instant local HMR. |
| **Tailwind CSS** | `@import "tailwindcss"` (v4) | Modern utility-first CSS framework for responsive layout design. |
| **React Router DOM** | `^6.26.1` | Client-side SPA routing with deep linking and history management. |
| **Lucide React** | `^0.344.0` | Accessible, unified vector icon library. |

---

## 🏛️ 4. Key Functional Modules

1. **Dual-Curriculum Academic Hub (`/academics`)**:
   - **Kenya CBC Stream**: Pre-Primary (PP1/PP2), Lower Primary (Grades 1–3), Upper Primary & KPSEA (Grades 4–6), Junior Secondary School (JSS Grades 7–9 with KJSEA), and Senior Secondary School (Grades 10–12 with STEM, Social Sciences, and Arts Pathways).
   - **British Stream**: Early Years Foundation Stage (EYFS), British Primary (Years 1–6), Lower Secondary (Years 7–9), British IGCSE (Years 10–11), and Advanced Level (A-Level Years 12–13).
2. **Interactive Community Testimonial Carousel (`/src/components/TestimonialSlider.tsx`)**:
   - Dynamic multi-category filter (*All Reviews, Parents, Scholars, Alumni*), auto-play rotation, rating stars, verified badges, and trust indicators.
3. **Boarding Life & Pastoral Care Hub (`/boarding`)**:
   - Details the separate boys and girls boarding compounds located ~4 km apart in Lanet, daily boarder schedule, dining nutrition, spiritual devotionals, and health services.
4. **Transparent Fees & M-Pesa Paybill Validator (`/admissions/fees`)**:
   - Grade-by-grade fee breakdown, one-time admissions charges, strict cash-free policy, official Equity Bank account details, and M-Pesa Paybill `247247` format instructions (`780824#NAME/CLASS`).
5. **Executive Leadership & Staff Profiles (`/about#leadership`)**:
   - Interactive modals featuring complete professional biographies, qualifications, contact lines, and welcome statements from executive leadership.
6. **Virtual Campus Tour & Photo Gallery (`/gallery`)**:
   - Filterable multimedia showcase categorized by Campus, Academics, STEM Labs, Sports, Arts, and Boarding.

---

## 📂 5. Clean Codebase Directory Structure

```text
st-gabriel-international/
├── .env.example                  # Environment variable template
├── DOCUMENTATION.md              # Full system documentation & technical manual
├── README.md                     # Project overview and contributor roster
├── index.html                    # HTML entry point with metadata and Google Fonts
├── metadata.json                 # AI Studio applet capabilities
├── package.json                  # Dependencies, scripts, and build tools
├── tsconfig.json                 # TypeScript compiler configuration
├── vite.config.ts                # Vite build configuration
└── src/
    ├── main.tsx                  # React entry point
    ├── App.tsx                   # Main layout shell, router mapping, and scroll reset
    ├── index.css                 # Global Tailwind CSS imports & theme styling
    ├── types.ts                  # Shared TypeScript interfaces & types
    ├── assets/                   # Video assets & multimedia
    │   └── hero.mp4              # Dynamic hero background video
    ├── components/               # 28 modular TypeScript React components
    │   ├── AdmissionForm.tsx     # Online admission inquiry form
    │   ├── Chatbot.tsx           # Floating AI assistant widget
    │   ├── CurriculumTimeline.tsx# Interactive curriculum stage visualizer
    │   ├── Footer.tsx            # School footer with emergency lines
    │   ├── Hero.tsx              # Video hero with campus tour modal
    │   ├── Navbar.tsx            # Sticky header with multi-level dropdowns
    │   ├── PaybillCard.tsx       # M-Pesa Paybill 247247 validator card
    │   ├── SEOMetadata.tsx       # Dynamic SEO tags & breadcrumbs injector
    │   └── TestimonialSlider.tsx # Interactive community review carousel
    ├── data/
    │   └── schoolData.ts         # Central structured data store
    ├── pages/                    # 13 route-level page components
    │   ├── AboutPage.tsx         # School legacy, mission, and leadership
    │   ├── AcademicsPage.tsx     # Dual-curriculum gateway
    │   ├── AdmissionsPage.tsx    # Intake steps & criteria
    │   ├── BlogPage.tsx          # Educational articles & guides
    │   ├── BoardingPage.tsx      # Residential boarding life in Lanet
    │   ├── ContactPage.tsx       # Contact details & campus directions
    │   ├── DownloadsPage.tsx     # Official prospectus & form downloads
    │   ├── EYFSPage.tsx          # Dedicated stage detail views
    │   ├── FeesPage.tsx          # Termly fee tables & payment guides
    │   ├── GalleryPage.tsx       # Filterable media gallery with lightbox
    │   ├── HomePage.tsx          # Main landing portal
    │   ├── NewsPage.tsx          # Announcements & event calendar
    │   └── StudentLifePage.tsx   # Sports, arts, and co-curricular life
    └── utils/
        └── seo.ts                # SEO metadata and JSON-LD schema helper
```

---

## 🚀 6. Installation & Local Development Setup

```bash
# 1. Clone the repository
git clone https://github.com/stechflare-ship-it/stgabrielinternational.git

# 2. Navigate to project folder
cd stgabrielinternational

# 3. Install dependencies
npm install

# 4. Start local development server (Port 3000)
npm run dev

# 5. Validate TypeScript compilation & linting
npm run lint

# 6. Build for production deployment
npm run build
```

---

*© 2026 St Gabriel\'s International School · All Rights Reserved · Designed & Engineered for Academic Distinction.*
