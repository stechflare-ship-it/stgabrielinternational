import React, { memo } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AboutFacilities = memo(function AboutFacilities({ data }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-8 md:py-12 bg-slate-950 border-b-4 border-red-500"
      aria-label="Campus Facilities"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-950 text-amber-400 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4">
            CAMPUS
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {data.title}
          </h2>
          <p className="text-white mt-4">
            {data.subtitle}
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.items.map((facility, index) => {
            const delay = index * 150;
            
            return (
              <div
                key={facility.title}
                className={`
                  group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl 
                  transition-all duration-500
                  border border-gray-100 hover:border-amber-200
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ transitionDelay: `${delay}ms` }}
              >
                {/* Image */}
                
                <div className=''>
                  <div className="relative w-full aspect-[4/3] bg-slate-900 overflow-hidden rounded-2xl flex items-center justify-center">
                  

                    {/* 2. Main crisp image - Fits naturally with 0% forced cropping or pixel zooming */}
                    <img
                      src={facility.image}
                      alt={facility.imageAlt || facility.title}
                      className="relative z-10 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      style={{
                        imageRendering: 'high-quality',
                        WebkitBackfaceVisibility: 'hidden'
                      }}
                      loading="lazy"
                      decoding="async"
                    />

                    {/* 3. Subtle inner shadow overlay for depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent z-20 pointer-events-none" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-950 mb-3 group-hover:text-amber-600 transition-colors">
                    {facility.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {facility.description}
                  </p>

                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

AboutFacilities.displayName = 'AboutFacilities';

export default AboutFacilities;