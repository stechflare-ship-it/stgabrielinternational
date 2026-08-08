import React, { memo, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import StaffHero from './StaffHero';
import { STAFF_MEMBERS, STAFF_CATEGORIES } from './staffData';
import { SITE_CONFIG } from '../../data/navigationData';

// Lazy load the filterable grid — not needed for first paint, keeps the
// hero's LCP/TTI small the same way About.jsx defers its heavy sections.
const StaffDirectory = lazy(() => import('./StaffDirectory'));

function Staff() {
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  // JSON-LD: lets search engines understand this is a staff/faculty list
  // and can enable rich results for individual staff searches.
  const staffSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${SITE_CONFIG.name} Staff Directory`,
    itemListElement: STAFF_MEMBERS.map((member, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Person',
        name: member.name,
        jobTitle: member.role,
        worksFor: {
          '@type': 'EducationalOrganization',
          name: SITE_CONFIG.name,
        },
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>Staff Directory - {SITE_CONFIG.name}</title>
        <meta
          name="description"
          content={`Meet the experienced educators and administrators leading ${SITE_CONFIG.name}, across leadership, academics, STEM, and student life.`}
        />
        <meta
          name="keywords"
          content="staff directory, teachers, faculty, leadership team, school staff, Nairobi, Kenya"
        />
        <meta property="og:title" content={`Staff Directory - ${SITE_CONFIG.name}`} />
        <meta property="og:description" content={`Meet the educators and leadership team at ${SITE_CONFIG.name}.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={pageUrl} />
        <script type="application/ld+json">
          {JSON.stringify(staffSchema)}
        </script>
      </Helmet>

      <main className="min-h-screen" role="main">
        {/* Hero - Critical (loaded immediately) */}
        <StaffHero />

        {/* Filterable directory - lazy loaded (performance) */}
        <Suspense fallback={<SectionLoader />}>
          <StaffDirectory members={STAFF_MEMBERS} categories={STAFF_CATEGORIES} />
        </Suspense>
      </main>
    </>
  );
}

function SectionLoader() {
  return (
    <div className="py-20 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-gray-500 text-sm">Loading...</p>
      </div>
    </div>
  );
}

export default memo(Staff);
