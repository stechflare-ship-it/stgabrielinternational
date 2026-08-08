import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SITE_CONFIG } from '../../data/navigationData';

export default function SEO({ title, description, url, image, structuredData }) {
  const metaTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const metaDescription = description || `St. Gabriel International School in Lanet, Nakuru — British Curriculum, day & boarding education for boys and girls.`;
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
