import React, { memo } from "react";
import { ABOUT_DATA } from "./aboutData";


const AboutHero = memo(function AboutHero() {
  const { hero } = ABOUT_DATA;

  return (
    <section 
      className="relative min-h-[60vh] md:min-h-[83vh] flex items-center overflow-hidden"
      aria-label="About St. Gabriel's Mission"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        
       
        <img
          src={hero.backgroundImage}
          alt="St. Gabriel's Mission International School Campus"
          className="w-full h-full object-cover object-center"
          loading="eager" // LCP image - load immediately
          decoding="async"
        />
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-950/80 to-transparent" />
        {/* Subtle pattern overlay for depth */}
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="max-w-3xl">
          {/* Breadcrumb / Tag */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-sm text-amber-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            EST. 1998 • 28 Years of Excellence
          </div>

          {/* H1 - Critical for SEO */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block">
        <div className="flex flex-col items-center text-gray-400 text-xs animate-bounce">
          <span className="mb-2">Scroll to explore</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
});

AboutHero.displayName = 'AboutHero';

export default AboutHero;