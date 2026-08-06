import React, { memo, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import AboutHero from './AboutHero';
import AboutValue from './AboutValue';
import { ABOUT_DATA } from './aboutData';
import { SITE_CONFIG } from '../../data/navigationData';

// Lazy load heavy sections for performance
const AboutVisionMission = lazy(() => import('./AboutVisionMission'));
const AboutLegacy = lazy(() => import('./AboutLegacy'));
const AboutLeadership = lazy(() => import('./AboutLeadership'));
const AboutFacilities = lazy(() => import('./AboutFacilities'));

/**
 * 🏗️ ABOUT PAGE
 * 
 * Features:
 * - SEO-optimized with meta tags
 * - Lazy loading for non-critical sections
 * - Performance focused
 * - Mobile-first responsive
 * - Accessibility compliant
 */

function About() {
  const { legacy, visionMission, leadership, facilities } = ABOUT_DATA;

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>About Us - {SITE_CONFIG.name}</title>
        <meta 
          name="description" 
          content={`Learn about ${SITE_CONFIG.name}'s 28-year legacy of academic excellence, moral integrity, and global leadership. Hope to the World.`} 
        />
        <meta 
          name="keywords" 
          content="about us, school history, mission, vision, core values, leadership, facilities, Nairobi, Kenya" 
        />
        <meta property="og:title" content={`About ${SITE_CONFIG.name} - 28 Years of Excellence`} />
        <meta property="og:description" content={`Discover ${SITE_CONFIG.name}'s legacy of academic excellence and moral integrity since 1998.`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href={typeof window !== 'undefined' ? window.location.href : ''} />
      </Helmet>

      <main className="min-h-screen" role="main">
        {/* Hero Section - Critical (loaded immediately) */}
        <AboutHero />
        
        

        {/* Lazy Loaded Sections (performance) */}
        <Suspense fallback={<SectionLoader />}>

        {/* Legacy Section with Stats */}
        <AboutLegacy data={legacy} />
          {/* Values Section - Critical (loaded immediately) */}
          <AboutValue />
          {/* Vision & Mission */}
          <AboutVisionMission data={visionMission} />
          
          
          
          {/* Leadership Team */}
          <AboutLeadership data={leadership} />
          
          {/* Facilities */}
          <AboutFacilities data={facilities} />
        </Suspense>
      </main>
    </>
  );
}

// Loading fallback for lazy sections
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

export default memo(About);