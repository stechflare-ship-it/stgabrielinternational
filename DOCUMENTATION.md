# 📚 St Gabriel\'s International School — Comprehensive System & Technical Documentation

> **Official Institutional Platform for St Gabriel\'s International School (Lanet, Nakuru County, Kenya)**  
> **Motto**: *"HOPE TO THE WORLD"* · *"A Balanced Life & Real-Life Experience"*  
> **Dual-Curriculum**: Kenya Competency-Based Curriculum (CBC PP1 to Senior School Grade 12) & British International (EYFS to A-Level)

---

## 📑 Table of Contents

1. [Executive Summary & Institutional Context](#1-executive-summary--institutional-context)
2. [Project Recognition & Core Contributors](#2-project-recognition--core-contributors)
3. [System Architecture & Tech Stack](#3-system-architecture--tech-stack)
4. [Application Routing & Page Directory](#4-application-routing--page-directory)
5. [Core Functional Modules](#5-core-functional-modules)
   - [5.1 Dual-Curriculum Academic Engine](#51-dual-curriculum-academic-engine)
   - [5.2 Residential Boarding & Pastoral Care](#52-residential-boarding--pastoral-care)
   - [5.3 Admissions & Online Application Pipeline](#53-admissions--online-application-pipeline)
   - [5.4 Cash-Free Fee Engine & M-Pesa Paybill Validator](#54-cash-free-fee-engine--m-pesa-paybill-validator)
   - [5.5 Interactive Testimonials & Community Reviews](#55-interactive-testimonials--community-reviews)
   - [5.6 Interactive Campus Tour & Filterable Media Gallery](#56-interactive-campus-tour--filterable-media-gallery)
   - [5.7 AI Virtual Assistant & Interactive FAQ Engine](#57-ai-virtual-assistant--interactive-faq-engine)
6. [Component Architecture & UI Hierarchy](#6-component-architecture--ui-hierarchy)
7. [Design System & Theme Specifications](#7-design-system--theme-specifications)
8. [Data Models & TypeScript Schema](#8-data-models--typescript-schema)
9. [Performance, SEO & Accessibility Standards](#9-performance-seo--accessibility-standards)
10. [Local Development, Build & Deployment Guide](#10-local-development-build--deployment-guide)
11. [Maintenance & Future Expansion Roadmap](#11-maintenance--future-expansion-roadmap)

---

## 🏛️ 1. Executive Summary & Institutional Context

Founded in 1998 in Lanet, Nakuru County, Kenya, **St Gabriel\'s International School** has provided over 28 years of academic excellence, holistic character formation, and leadership development. The institution caters to both day scholars and boarders across two distinct, gender-separated boarding compounds located approximately 4 km apart in Lanet.

The web platform serves as an enterprise-grade digital portal providing prospective parents, current scholars, alumni, and global educational partners with immediate access to:
- Comprehensive dual-curriculum exploration across both national (Kenya CBC) and international (British CAIE) pathways.
- Transparent grade-by-grade fee structures with direct bank and M-Pesa Paybill guides enforcing a strict cashless policy.
- Real-time admissions inquiry handling and document downloads.
- Immersive campus life showcases featuring high-definition video hero backgrounds, interactive tours, and rich multimedia galleries.

---

## 👥 2. Project Recognition & Core Contributors

This web platform is the result of dedicated collaboration between the school administration and the engineering team:

### 💻 Software Development & Engineering Team

| Contributor | Project Role | Responsibilities & Core Accomplishments |
| :--- | :--- | :--- |
| **Anthony Wanyaga Maina** | **Lead Software Engineer** | System architecture, TypeScript interface design, React component hierarchy, full-stack state management, video background performance optimization, SEO metadata engine, responsive design system, and production release engineering. |

### 🏫 St Gabriel\'s School Leadership & Project Advisory Committee

| Contributor | School Capacity | Key Project Role & Advisory Contributions |
| :--- | :--- | :--- |
| **Nicholas Okeyo** | **Executive Principal & School Leadership** | Executive sponsor, institutional policy oversight, Principal Welcome address, academic standards alignment, and school vision governance. |
| **Paul Muira** | **Academic & Administrative Advisory** | Dual-curriculum syllabus mapping, examination milestone definitions (KPSEA, KJSEA, IGCSE, A-Levels), and academic scheduling. |
| **Michael** | **School Technical & Operations Liaison** | On-site infrastructure coordination, IT hardware requirements, digital asset collection, and network liaison. |
| **James** | **Co-Curricular & Student Affairs Advisory** | Sports curriculum, championship brass band media, student club rosters, and house system documentation. |
| **Lydiah Mwangi** | **Admissions, Pastoral Care & Content Coordination** | Admissions workflow design, pastoral care policies, girls' boarding compound guidelines, and document prospectus verification. |

---

## ⚙️ 3. System Architecture & Tech Stack

The application is architected as a high-efficiency Single Page Application (SPA) powered by:

```text
┌───────────────────────────────────────────────────────────┐
│                    Client Browser                         │
│  React 18 + TypeScript + Vite + Tailwind CSS v4           │
└─────────────────────────────┬─────────────────────────────┘
                              │
       ┌──────────────────────┼──────────────────────┐
       ▼                      ▼                      ▼
┌───────────────┐      ┌───────────────┐      ┌───────────────┐
│ React Router  │      │ Central Data  │      │ Dynamic SEO & │
│  DOM (v6)     │      │ (schoolData)  │      │ Metadata      │
└───────────────┘      └───────────────┘      └───────────────┘
```

| Layer / Library | Version | Role in Platform |
| :--- | :--- | :--- |
| **React** | `^18.3.1` | Declarative UI rendering, component encapsulation, and reactive state management. |
| **TypeScript** | `^5.5.3` | Strict static typing across all data interfaces, props, and utility functions. |
| **Vite** | `^5.4.2` | Fast HMR development server, optimized Rollup bundling, and tree-shaking. |
| **Tailwind CSS** | `@import "tailwindcss"` (v4) | Utility-first responsive design tokens, typography scales, and fluid layout grids. |
| **React Router DOM** | `^6.26.1` | Client-side routing, deep-link handling, dynamic stage parameters, and history management. |
| **Lucide React** | `^0.344.0` | Vector icon suite providing accessible visual indicators across UI modules. |

---

## 🗺️ 4. Application Routing & Page Directory

All routes are declared in `/src/App.tsx` and wrapped with the `ScrollToTop` restoration utility:

| Path | Component File | Description & Purpose |
| :--- | :--- | :--- |
| `/` | `src/pages/HomePage.tsx` | Main portal featuring Video Hero with Tour Modal, Quick Stats, Dual-Curriculum Highlights, Testimonials, and News. |
| `/about` | `src/pages/AboutPage.tsx` | 28-year school legacy, Mission/Vision, Core Values, Campus Facilities, and Executive Leadership Directory. |
| `/academics` | `src/pages/AcademicsPage.tsx` | Complete Dual-Curriculum Explorer: CBC (PP1–Grade 12) & British (EYFS–A-Level), STEM labs, and Senior School specializations. |
| `/academics/:stageId` | `src/pages/EYFSPage.tsx` | Dynamic deep-dive page for individual curriculum stages (e.g., `/academics/eyfs`, `/academics/igcse`, `/academics/jss`). |
| `/student-life` | `src/pages/StudentLifePage.tsx` | Co-curricular activities, Championship Brass Band, Taekwondo, STEM Robotics, Swimming, and House Competitions. |
| `/boarding` | `src/pages/BoardingPage.tsx` | Residential life, separate Boys & Girls compounds (4 km apart), daily boarder schedules, dining nutrition, and health clinic. |
| `/admissions` | `src/pages/AdmissionsPage.tsx` | Intake procedures, age guidelines, required documentation checklist, and interactive enrollment inquiry modal. |
| `/admissions/fees` | `src/pages/FeesPage.tsx` | Full termly fee schedules for Day & Boarding, Equity Bank payment cards, and M-Pesa Paybill format generator. |
| `/gallery` | `src/pages/GalleryPage.tsx` | Filterable high-resolution media gallery (Campus, STEM, Sports, Arts, Events) with responsive Lightbox viewer. |
| `/news` | `src/pages/NewsPage.tsx` | Latest announcements, term calendars, examination notices, and interactive article detail modals. |
| `/blog` | `src/pages/BlogPage.tsx` | Educational editorial articles, parenting advice, British syllabus insights, and boarding preparation guides. |
| `/downloads` | `src/pages/DownloadsPage.tsx` | Official document downloads (Prospectus 2026/27, Fee Structure, Admission Forms, Boarding Code of Conduct). |
| `/contact` | `src/pages/ContactPage.tsx` | Campus location directions (Lanet Transformer Rd), interactive inquiry form, emergency hotlines, and Google Maps embed. |

---

## 💡 5. Core Functional Modules

### 5.1 Dual-Curriculum Academic Engine
- **Kenya CBC Pathway**: Pre-Primary (PP1/PP2), Lower Primary (Grades 1–3), Upper Primary with KPSEA (Grades 4–6), Junior Secondary School with KJSEA (Grades 7–9), and Senior Secondary School (Grades 10–12) with STEM, Social Sciences, and Arts & Sports Pathways.
- **British Stream**: Early Years Foundation Stage (EYFS), British Primary (Years 1–6), British Lower Secondary (Years 7–9), British IGCSE (Years 10–11), and Advanced Level / A-Levels (Years 12–13).
- **Stage Navigation**: Step-by-step curriculum visualizer (`CurriculumTimeline.tsx`) with age indicators, core competencies, and career progression maps.

### 5.2 Residential Boarding & Pastoral Care
- Highlights the distinct **separate campuses** for Boys and Girls situated ~4 km apart in Lanet.
- Transparent daily routine breakdown: morning devotionals (5:30 AM), academic prep, sports hours (4:00 PM), dining hall meals, and lights-out discipline (9:30 PM).
- Pastoral care mentorship by experienced resident housemasters and housemistresses.

### 5.3 Admissions & Online Application Pipeline
- Structured step-by-step enrollment pathway: Inquiry ➔ Campus Tour ➔ Assessment & Interview ➔ Letter of Offer ➔ Onboarding.
- Direct digital admission forms (`AdmissionForm.tsx`) with age bracket validation and curriculum stream selection.

### 5.4 Cash-Free Fee Engine & M-Pesa Paybill Validator
- Enforces the school's strict **cashless payment policy** to safeguard parents from fraudulent transaction channels.
- **Equity Bank Deposit Card**: Branch, Account Number, and Swift code for direct bank deposits and RTGS transfers.
- **M-Pesa Paybill Generator (`PaybillCard.tsx`)**:
  - **Business Number**: `247247` (Equity Bank Gateway)
  - **Account Format**: `780824#STUDENT_NAME/CLASS`
  - Built-in one-click copy button with visual validation feedback.

### 5.5 Interactive Testimonials & Community Reviews
- Authentic reviews from verified parents, current scholars, and distinguished alumni.
- Multi-tab filtering (*All Reviews, Parents, Scholars, Alumni*), auto-play carousel rotation, 5-star rating metrics, and verified reviewer badges.

### 5.6 Interactive Campus Tour & Filterable Media Gallery
- Categorized photo exploration: *All, Campus Grounds, STEM & Robotics, Sports & Athletics, Performing Arts & Band, Events & Milestones*.
- Full-screen accessible Lightbox modal with keyboard arrow navigation and caption overlays.

### 5.7 AI Virtual Assistant & Interactive FAQ Engine
- Intelligent client-side chatbot (`Chatbot.tsx`) capable of instantly answering queries regarding admissions, fee estimates, boarding rules, and curriculum differences.
- Live keyword search across all common school policy questions.

---

## 🧱 6. Component Architecture & UI Hierarchy

```text
src/
├── components/
│   ├── AdmissionForm.tsx          # Modal inquiry and enrollment form
│   ├── BackToTop.tsx              # Floating scroll-to-top button
│   ├── BankPaymentCard.tsx        # Official Equity Bank details card
│   ├── BoardingSection.tsx        # Reusable boarding campus feature block
│   ├── Breadcrumbs.tsx            # Accessible breadcrumb trail
│   ├── Button.tsx                 # Standardized primary/secondary/outline button
│   ├── Chatbot.tsx                # Interactive AI assistant floating widget
│   ├── ContactButtons.tsx         # Quick phone & WhatsApp action bar
│   ├── CopyButton.tsx             # One-click clipboard copy with status
│   ├── CurriculumTimeline.tsx     # Step-by-step visual curriculum guide
│   ├── FeeTable.tsx               # Grade-by-grade fee tables
│   ├── FloatingWhatsApp.tsx       # Direct WhatsApp admissions hotline bubble
│   ├── Footer.tsx                 # Comprehensive footer with links & contacts
│   ├── Gallery.tsx                # Multi-category media gallery grid
│   ├── Hero.tsx                   # Video background hero with tour modal
│   ├── Lightbox.tsx               # Full-screen image lightbox dialog
│   ├── Logo.tsx                   # Branded St Gabriel\'s crest component
│   ├── MobileMenu.tsx             # Responsive slide-out navigation drawer
│   ├── Navbar.tsx                 # Top sticky navigation bar with dropdowns
│   ├── NewsCard.tsx               # News article preview card
│   ├── NewsModal.tsx              # Full article reader modal
│   ├── PaybillCard.tsx            # Interactive M-Pesa 247247 validator
│   ├── PaymentPolicy.tsx          # Term installment and payment rules
│   ├── RequirementsChecklist.tsx  # Boarding items & stationery checklist
│   ├── ScrollToTop.tsx            # Route change scroll reset handler
│   ├── SectionHeading.tsx         # Standardized section header with badge
│   ├── SEOMetadata.tsx            # Dynamic head title and meta injector
│   ├── StaffModal.tsx             # Executive biography modal
│   ├── TestimonialSlider.tsx      # Filterable testimonial carousel
│   └── TestimonialsCarousel.tsx   # Testimonial section container
```

---

## 🎨 7. Design System & Theme Specifications

The application uses an authoritative, elegant color palette reflecting the dignity of St Gabriel\'s International School:

| Token Name | Hex Code | Purpose & Application |
| :--- | :--- | :--- |
| **Primary Navy (`navy-900`)** | `#0A192F` / `#0B1D33` | Deep structural backgrounds, headers, footers, and high-contrast surfaces. |
| **Navy Accent (`navy-800`)** | `#132B4F` | Card surfaces, modal containers, and elevated panels. |
| **Brand Gold (`gold-500`)** | `#D4AF37` / `#C59B27` | Accent badges, primary CTA buttons, rating stars, and highlighted borders. |
| **Gold Light (`gold-400`)** | `#E5C358` | Interactive button hover states and subtle glow accents. |
| **Cyan Accent (`cyan-400`)** | `#5CE1E6` | Secondary highlights, digital badges, and STEM feature accents. |
| **Surface Neutral (`slate-50`)** | `#F8FAFC` | Light mode page backgrounds, card backgrounds, and reading canvases. |
| **Dark Neutral (`slate-900`)** | `#0F172A` | High-contrast body typography in light theme sections. |

### Typography Pairings
- **Display Headings**: `Playfair Display`, serif — provides academic heritage, elegance, and distinction.
- **Body & UI**: `Plus Jakarta Sans`, sans-serif — ensures high legibility, clean spacing, and modern readability across all display resolutions.

---

## 📊 8. Data Models & TypeScript Schema

All centralized structured data is stored in `/src/data/schoolData.ts` and typed in `/src/types.ts`:

```typescript
// Core Data Types
export interface SchoolInfo {
  name: string;
  shortName: string;
  tagline: string;
  motto: string;
  established: number;
  phone: string;
  altPhone: string;
  email: string;
  address: string;
  location: string;
  equityAccount: {
    accountNumber: string;
    accountName: string;
    branch: string;
  };
  mpesaPaybill: {
    businessNumber: string;
    accountFormat: string;
    accountExample: string;
  };
}

export interface CurriculumStage {
  id: string;
  name: string;
  system: 'British' | 'CBC' | 'Both';
  ageRange: string;
  grades: string;
  description: string;
  subjects: string[];
  keyFeatures: string[];
  examinationBody: string;
  nextStage: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  qualification: string;
  bio: string;
  email: string;
  image: string;
}
```

---

## 🚀 9. Performance, SEO & Accessibility Standards

1. **Lightweight Placeholders & Assets**: All image references use optimized, high-contrast SVG/data URLs and lightweight assets to ensure sub-second page loads.
2. **Dynamic SEO Engine (`/src/utils/seo.ts`)**: Injects semantic titles, description tags, OpenGraph previews (`og:title`, `og:image`), Twitter cards, and `BreadcrumbList` JSON-LD structured data for Google Search.
3. **Accessibility (WCAG AA)**:
   - High text contrast ratios exceeding 4.5:1 on all text surfaces.
   - Accessible keyboard controls on modals, lightboxes, and sliders.
   - Semantic HTML elements (`<main>`, `<header>`, `<footer>`, `<nav>`, `<article>`).
4. **Mobile Responsiveness**: Fluid layouts supporting devices from 320px viewport widths to ultra-wide 4K displays.

---

## 🛠️ 10. Local Development, Build & Deployment Guide

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Local Development Commands

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server (Port 3000)
npm run dev

# 3. Validate TypeScript types & lint codebase
npm run lint

# 4. Compile optimized production build into /dist
npm run build

# 5. Preview production build locally
npm run preview
```

### Production Deployment
The output generated in the `/dist` directory is a production-ready static bundle compatible with:
- **Cloud Run / Google Cloud Storage**
- **Vercel / Netlify / Cloudflare Pages**
- **Nginx / Apache Web Servers**

---

## 🔮 11. Maintenance & Future Expansion Roadmap

- **Phase 1: Parent & Scholar Portal**: Secure login system for termly grade reports, homework downloads, and teacher messaging.
- **Phase 2: Automated M-Pesa STK Push Gateway**: Direct instant Paybill checkout with automated SMS payment receipting.
- **Phase 3: Alumni Mentorship Network**: Interactive directory connecting graduating scholars with alumni in higher education and industry.

---

*Document Version 2.4.0 · Published August 2026 · St Gabriel\'s International School*
