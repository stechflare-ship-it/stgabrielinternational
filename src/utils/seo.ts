import { useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

/**
 * Interface for breadcrumb navigation items in JSON-LD schema
 */
export interface SEOBreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Interface for FAQ structured data items
 */
export interface SEOFAQItem {
  question: string;
  answer: string;
}

/**
 * Interface for academic course schema
 */
export interface SEOCourseInfo {
  name: string;
  description: string;
  provider?: string;
  educationalLevel?: string;
  courseCode?: string;
  teaches?: string[];
}

/**
 * Configuration options for dynamic SEO & OpenGraph tag injection
 */
export interface SEOTagOptions {
  /** Page Title (appears in tab and search engine results) */
  title: string;
  /** Meta Description (150-160 characters recommended for SERP snippets) */
  description: string;
  /** Comma-separated search keywords */
  keywords?: string;
  /** Canonical URL path relative to baseUrl (e.g. "/academics" or "/boarding") */
  canonicalPath?: string;
  /** OpenGraph Title (defaults to title if not specified) */
  ogTitle?: string;
  /** OpenGraph Description (defaults to description if not specified) */
  ogDescription?: string;
  /** OpenGraph Image URL for WhatsApp/Facebook/LinkedIn link previews */
  ogImage?: string;
  /** Alt text for OpenGraph Image */
  ogImageAlt?: string;
  /** Image dimensions */
  ogImageWidth?: string | number;
  /** Image height */
  ogImageHeight?: string | number;
  /** OpenGraph Type ('website' | 'article' | 'profile') */
  ogType?: 'website' | 'article' | 'profile';
  /** OpenGraph Site Name (defaults to St Gabriel\'s International School) */
  ogSiteName?: string;
  /** OpenGraph Locale (defaults to en_KE) */
  ogLocale?: string;
  /** Twitter Card Style ('summary' | 'summary_large_image' | 'app' | 'player') */
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  /** Twitter Account Handle (e.g. '@StGabrielNakuru') */
  twitterSite?: string;
  /** Author name or handle */
  author?: string;
  /** Robots directive (e.g. 'index, follow' or 'noindex, nofollow') */
  robots?: string;
  /** If true, sets robots to 'noindex, nofollow' */
  noIndex?: boolean;
  /** Article published date ISO string for blog/news articles */
  publishedTime?: string;
  /** Article modified date ISO string */
  modifiedTime?: string;
  /** Article section or category */
  articleSection?: string;
  /** Article keywords / tags */
  articleTags?: string[];
  /** Breadcrumb hierarchy for search rich snippets */
  breadcrumbs?: SEOBreadcrumbItem[];
  /** FAQ items for Google rich FAQ snippet expansion */
  faqs?: SEOFAQItem[];
  /** Academic Course Schema */
  course?: SEOCourseInfo;
  /** Custom JSON-LD schema objects to inject */
  customSchema?: Record<string, unknown> | Record<string, unknown>[];
}

/** Default Fallback OpenGraph Image */
export const DEFAULT_OG_IMAGE =
  'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200';

/** Default Search Keywords */
export const DEFAULT_KEYWORDS =
  'St Gabriel\'s International School, international school nakuru, kenya cbc, senior secondary school, junior secondary school, jss nakuru, British igcse, British a-level, eyfs, lanet boarding school, christian school nakuru, dual curriculum kenya, best school in nakuru county, transformer road lanet';

/**
 * Dynamically upserts a `<meta>` tag in `<head>` by key attribute.
 */
export function setMetaTag(
  keyAttr: 'name' | 'property' | 'http-equiv',
  keyValue: string,
  content: string | undefined | null
): void {
  if (typeof document === 'undefined') return;

  const selector = `meta[${keyAttr}="${keyValue}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);

  if (content === undefined || content === null || content === '') {
    if (element) {
      element.remove();
    }
    return;
  }

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(keyAttr, keyValue);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

/**
 * Dynamically upserts a `<link>` tag in `<head>` (e.g. canonical, alternate).
 */
export function setLinkTag(rel: string, href: string | undefined | null): void {
  if (typeof document === 'undefined') return;

  const selector = `link[rel="${rel}"]`;
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!href) {
    if (element) element.remove();
    return;
  }

  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }

  element.setAttribute('href', href);
}

/**
 * Injects or updates a structured JSON-LD `<script>` tag in `<head>`.
 */
export function injectJsonLd(id: string, schema: object | null | undefined): void {
  if (typeof document === 'undefined') return;

  let script = document.getElementById(id) as HTMLScriptElement | null;

  if (!schema) {
    if (script) script.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema, null, 2);
}

/**
 * Core engine function to dynamically inject comprehensive meta tags,
 * OpenGraph tags, Twitter Card tags, canonical links, and JSON-LD structured
 * data for any page.
 */
export function injectMetaTags(options: SEOTagOptions): () => void {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return () => {};
  }

  const {
    title,
    description,
    keywords = DEFAULT_KEYWORDS,
    canonicalPath = '',
    ogTitle = title,
    ogDescription = description,
    ogImage = DEFAULT_OG_IMAGE,
    ogImageAlt = `${SCHOOL_INFO.name} - Lanet, Nakuru`,
    ogImageWidth = '1200',
    ogImageHeight = '630',
    ogType = 'website',
    ogSiteName = SCHOOL_INFO.name,
    ogLocale = 'en_KE',
    twitterCard = 'summary_large_image',
    twitterSite = '@StGabrielNakuru',
    author = SCHOOL_INFO.name,
    robots = options.noIndex
      ? 'noindex, nofollow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    publishedTime,
    modifiedTime,
    articleSection,
    articleTags = [],
    breadcrumbs = [],
    faqs,
    course,
    customSchema
  } = options;

  const baseUrl = window.location.origin || 'https://stgabrielinternational.co.ke';
  const canonicalUrl = canonicalPath.startsWith('http')
    ? canonicalPath
    : `${baseUrl}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  // 1. Page Title
  document.title = title;

  // 2. Standard Search Meta Tags
  setMetaTag('name', 'description', description);
  setMetaTag('name', 'keywords', keywords);
  setMetaTag('name', 'robots', robots);
  setMetaTag('name', 'googlebot', robots);
  setMetaTag('name', 'author', author);
  setMetaTag('name', 'publisher', SCHOOL_INFO.name);
  setMetaTag('name', 'theme-color', '#0B1D33');

  // Geo Tags for Nakuru, Kenya Local SEO
  setMetaTag('name', 'geo.region', 'KE-31');
  setMetaTag('name', 'geo.placename', 'Nakuru, Kenya');
  setMetaTag('name', 'geo.position', `${SCHOOL_INFO.location.coordinates.lat};${SCHOOL_INFO.location.coordinates.lng}`);
  setMetaTag('name', 'ICBM', `${SCHOOL_INFO.location.coordinates.lat}, ${SCHOOL_INFO.location.coordinates.lng}`);

  // 3. Canonical Link Tag
  setLinkTag('canonical', canonicalUrl);

  // 4. OpenGraph Tags (Facebook, WhatsApp, LinkedIn, Discord, Telegram)
  setMetaTag('property', 'og:title', ogTitle);
  setMetaTag('property', 'og:description', ogDescription);
  setMetaTag('property', 'og:url', canonicalUrl);
  setMetaTag('property', 'og:type', ogType);
  setMetaTag('property', 'og:site_name', ogSiteName);
  setMetaTag('property', 'og:image', ogImage);
  setMetaTag('property', 'og:image:secure_url', ogImage.startsWith('https') ? ogImage : undefined);
  setMetaTag('property', 'og:image:alt', ogImageAlt);
  setMetaTag('property', 'og:image:width', String(ogImageWidth));
  setMetaTag('property', 'og:image:height', String(ogImageHeight));
  setMetaTag('property', 'og:locale', ogLocale);

  // Article Specific OpenGraph Tags
  if (ogType === 'article') {
    if (publishedTime) setMetaTag('property', 'article:published_time', publishedTime);
    if (modifiedTime) setMetaTag('property', 'article:modified_time', modifiedTime);
    if (articleSection) setMetaTag('property', 'article:section', articleSection);
    if (author) setMetaTag('property', 'article:author', author);
    articleTags.forEach((tag, i) => {
      setMetaTag('property', `article:tag:${i}`, tag);
    });
  }

  // 5. Twitter Card Tags
  setMetaTag('name', 'twitter:card', twitterCard);
  setMetaTag('name', 'twitter:site', twitterSite);
  setMetaTag('name', 'twitter:creator', twitterSite);
  setMetaTag('name', 'twitter:title', ogTitle);
  setMetaTag('name', 'twitter:description', ogDescription);
  setMetaTag('name', 'twitter:image', ogImage);
  setMetaTag('name', 'twitter:image:alt', ogImageAlt);

  // 6. JSON-LD Structured Data: School / EducationalOrganization
  const schoolSchema = {
    '@context': 'https://schema.org',
    '@type': ['EducationalOrganization', 'School'],
    '@id': `${baseUrl}/#school`,
    name: SCHOOL_INFO.name,
    alternateName: ['St Gabriel\'s International', 'St Gabriel\'s Mission School Lanet', 'SGIS Nakuru'],
    url: baseUrl,
    logo: `${baseUrl}/favicon.png`,
    image: ogImage,
    description: `${SCHOOL_INFO.motto} - ${description}`,
    telephone: SCHOOL_INFO.contacts.mainPhone,
    email: SCHOOL_INFO.contacts.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Transformer Road, Lanet',
      addressLocality: 'Nakuru',
      addressRegion: 'Nakuru County',
      postalCode: '20100',
      addressCountry: 'KE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SCHOOL_INFO.location.coordinates.lat,
      longitude: SCHOOL_INFO.location.coordinates.lng
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:30',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '08:30',
        closes: '13:00'
      }
    ],
    sameAs: [
      SCHOOL_INFO.socialLinks.facebook,
      SCHOOL_INFO.socialLinks.instagram,
      SCHOOL_INFO.socialLinks.youtube,
      SCHOOL_INFO.socialLinks.linkedin
    ].filter(Boolean),
    hasEducationalCredential: [
      'Kenya Competency-Based Curriculum (CBC)',
      'Kenya Junior Secondary School (KJSEA)',
      'Kenya Senior Secondary School (STEM, Social Sciences & Arts)',
      'British Early Years Foundation Stage (EYFS)',
      'British Primary & Lower Secondary',
      'British IGCSE (O-Level)',
      'British Advanced Level (A-Level)'
    ],
    educationalLevel: [
      'Early Childhood Education (PP1, PP2 & EYFS)',
      'Primary School (Grades 1-6 & British Primary)',
      'Junior Secondary School (JSS Grades 7-9)',
      'Senior Secondary School (Grades 10-12)',
      'British IGCSE & A-Level'
    ],
    offers: {
      '@type': 'Offer',
      category: 'Day & Boarding Dual-Curriculum Education',
      description: 'Kenya CBC and British International Day & Boarding Education in Lanet, Nakuru'
    }
  };

  injectJsonLd('school-jsonld', schoolSchema);

  // 7. JSON-LD Breadcrumbs Hierarchy
  if (breadcrumbs.length > 0) {
    const breadcrumbSchema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl
        },
        ...breadcrumbs.map((b, idx) => ({
          '@type': 'ListItem',
          position: idx + 2,
          name: b.name,
          item: b.path.startsWith('http') ? b.path : `${baseUrl}${b.path.startsWith('/') ? b.path : `/${b.path}`}`
        }))
      ]
    };
    injectJsonLd('breadcrumb-jsonld', breadcrumbSchema);
  } else {
    injectJsonLd('breadcrumb-jsonld', null);
  }

  // 8. JSON-LD FAQ Schema
  if (faqs && faqs.length > 0) {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer
        }
      }))
    };
    injectJsonLd('faq-jsonld', faqSchema);
  } else {
    injectJsonLd('faq-jsonld', null);
  }

  // 9. Course Schema
  if (course) {
    const courseSchema = {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.name,
      description: course.description,
      provider: {
        '@type': 'EducationalOrganization',
        name: course.provider || SCHOOL_INFO.name,
        sameAs: baseUrl
      },
      educationalLevel: course.educationalLevel,
      courseCode: course.courseCode,
      teaches: course.teaches
    };
    injectJsonLd('course-jsonld', courseSchema);
  } else {
    injectJsonLd('course-jsonld', null);
  }

  // 10. Custom Additional Schemas (e.g. Article, Event, ImageGallery)
  if (customSchema) {
    injectJsonLd('custom-page-jsonld', customSchema);
  } else {
    injectJsonLd('custom-page-jsonld', null);
  }

  // Return teardown function if page changes
  return () => {
    injectJsonLd('breadcrumb-jsonld', null);
    injectJsonLd('faq-jsonld', null);
    injectJsonLd('course-jsonld', null);
    injectJsonLd('custom-page-jsonld', null);
  };
}

/**
 * Custom React Hook for dynamically injecting and updating page meta tags,
 * OpenGraph attributes, and structured JSON-LD schemas.
 */
export function useSEO(options: SEOTagOptions): void {
  useEffect(() => {
    const cleanup = injectMetaTags(options);
    return () => {
      cleanup();
    };
  }, [
    options.title,
    options.description,
    options.keywords,
    options.canonicalPath,
    options.ogTitle,
    options.ogDescription,
    options.ogImage,
    options.ogType,
    options.noIndex,
    options.publishedTime,
    JSON.stringify(options.breadcrumbs || []),
    JSON.stringify(options.faqs || []),
    JSON.stringify(options.course || null),
    JSON.stringify(options.customSchema || null)
  ]);
}
