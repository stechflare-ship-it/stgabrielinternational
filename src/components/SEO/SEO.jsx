import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../data/navigationData';

export default function SEO({ title, description, keywords, url, image, structuredData }) {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const metaDescription = description || `St. Gabriel International School in Lanet, Nakuru, Kenya offers the best British Curriculum education, providing a balanced life and real-life experiences for day & boarding students.`;
  const metaKeywords = keywords || `international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, St. Gabriel International School, St Gabriels Mission School, Transformer Rd Nakuru, Cambridge IGCSE, A-Level, EYFS`;
  const metaUrl = url || (typeof window !== 'undefined' ? window.location.href : '/');
  const metaImage = image || `${metaUrl.replace(/\/$/, '')}/og-default.jpg`;

  const defaultStructured = structuredData || {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": SITE_CONFIG.name,
    "telephone": SITE_CONFIG.primaryPhoneDisplay,
    "email": SITE_CONFIG.email,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lanet",
      "addressRegion": "Nakuru County",
      "addressCountry": "Kenya"
    },
    "url": typeof window !== 'undefined' ? window.location.origin : ''
  };

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:url" content={metaUrl} />
      <meta property="og:type" content="website" />

      {/* Canonical */}
      <link rel="canonical" href={metaUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">{JSON.stringify(defaultStructured)}</script>

    </Helmet>
  );
}
