import React, { useEffect } from 'react';
import { SCHOOL_INFO } from '../data/schoolData';

interface SEOMetadataProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: { name: string; path: string }[];
}

export const SEOMetadata: React.FC<SEOMetadataProps> = ({
  title,
  description,
  keywords = 'international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, St. Gabriel International School, St Gabriels Mission School, Transformer Rd Nakuru, Cambridge IGCSE, A-Level, EYFS, boarding school Kenya',
  canonicalPath = '',
  ogType = 'website',
  ogImage = 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&q=80&w=1200',
  breadcrumbs = []
}) => {
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://stgabriel.ac.ke';
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update meta tag
    const setMetaTag = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const [attrName, attrVal] = selector.replace('meta[', '').replace(']', '').split('=');
        element.setAttribute(attrName, attrVal.replace(/"/g, ''));
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Helper to update link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', rel);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    // 2. Standard Meta Tags
    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);
    setMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large');
    setMetaTag('meta[name="author"]', 'content', SCHOOL_INFO.name);

    // 3. Canonical Link
    setLinkTag('canonical', canonicalUrl);

    // 4. Open Graph Tags
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:site_name"]', 'content', SCHOOL_INFO.name);
    setMetaTag('meta[property="og:image"]', 'content', ogImage);
    setMetaTag('meta[property="og:locale"]', 'content', 'en_KE');

    // 5. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', ogImage);

    // 6. JSON-LD Structured Data for EducationalOrganization / School
    const schoolSchema = {
      '@context': 'https://schema.org',
      '@type': ['EducationalOrganization', 'School'],
      name: SCHOOL_INFO.name,
      alternateName: 'SGIS Nakuru',
      url: baseUrl,
      logo: `${baseUrl}/images/logo.png`,
      image: ogImage,
      description: SCHOOL_INFO.motto + ' - ' + description,
      telephone: SCHOOL_INFO.contacts.mainPhone,
      email: SCHOOL_INFO.contacts.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Lanet',
        addressLocality: 'Nakuru',
        addressRegion: 'Nakuru County',
        addressCountry: 'KE'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: SCHOOL_INFO.location.coordinates.lat,
        longitude: SCHOOL_INFO.location.coordinates.lng
      },
      hasEducationalCredential: [
        'Early Years Foundation Stage (EYFS)',
        'Cambridge IGCSE',
        'Cambridge A-Level'
      ],
      educationalLevel: [
        'Early Childhood Education',
        'Primary Education',
        'Secondary Education',
        'High School / Pre-University'
      ],
      offers: {
        '@type': 'Offer',
        category: 'Day & Boarding International Education'
      }
    };

    // BreadcrumbList Schema
    const breadcrumbSchema = breadcrumbs.length > 0 ? {
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
          item: `${baseUrl}${b.path}`
        }))
      ]
    } : null;

    // Inject Script tags
    const injectJsonLd = (id: string, schemaObj: object) => {
      let script = document.getElementById(id) as HTMLScriptElement;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(schemaObj);
    };

    injectJsonLd('school-jsonld', schoolSchema);
    if (breadcrumbSchema) {
      injectJsonLd('breadcrumb-jsonld', breadcrumbSchema);
    }

  }, [title, description, canonicalPath, ogType, ogImage, breadcrumbs, canonicalUrl, baseUrl]);

  return null;
};
