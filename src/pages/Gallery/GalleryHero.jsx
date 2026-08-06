import React, { memo } from 'react';
import { GALLERY_DATA } from './galleryData';

const GalleryHero = memo(function GalleryHero() {
  if (!GALLERY_DATA || !GALLERY_DATA.hero) {
    return (
      <section className="min-h-[50vh] flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-900/20 border-t-blue-900 rounded-full animate-spin mx-auto" />
          <p className="mt-4 text-gray-500">Loading gallery...</p>
        </div>
      </section>
    );
  }

  const { hero } = GALLERY_DATA;

  return (
    <section 
      /* Fix: items-start aligns text block to the top area across all viewports */
      className="relative h-[80vh] min-h-[550px] max-h-[750px] flex items-start overflow-hidden bg-slate-950"
      aria-label="Gallery Hero"
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={hero.backgroundImage}
          alt="St. Gabriel's Mission International School Campus"
          /* Fix: object-[center_15%] anchors framing to upper roofline, keeping faces low */
          className="w-full h-full object-cover object-[center_15%] md:object-[center_25%]"
          loading="eager"
          decoding="async"
        />
        
        {/* Top Scrim Gradient - Guarantees 100% text readability over sky/roof on mobile & desktop */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10 z-10" />
      </div>

      {/* Hero Content Block */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 md:pt-12 pb-16">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/20 backdrop-blur-md border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            VISUAL CAMPUS TOUR
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-3 drop-shadow-sm">
            {hero.title}
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 leading-relaxed max-w-2xl drop-shadow-sm font-light">
            {hero.subtitle}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center text-slate-300 text-xs animate-bounce">
          <span className="mb-2 font-medium tracking-wide">Explore gallery</span>
          <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
});

GalleryHero.displayName = 'GalleryHero';

export default GalleryHero;