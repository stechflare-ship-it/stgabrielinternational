import React, { memo } from 'react';
import { ABOUT_DATA } from './aboutData';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';



const AboutValues = memo(function AboutValues() {
  const { values } = ABOUT_DATA;
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-8 md:py-12 bg-slate-900"
      aria-label="Our Core Values"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-950 text-amber-400 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4">
            {values.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {values.title}
          </h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/*  Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-6">
          {values.items.map((item, index) => {
            // Staggered animation delay
            const delay = index * 100;
            const isVisibleWithDelay = isVisible;
            
            return (
              <div
                key={item.number}
                className={`
                  group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                  transition-all duration-500 overflow-hidden
                  border border-gray-100 hover:border-amber-200
                  ${isVisibleWithDelay ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                `}
                style={{ 
                  transitionDelay: `${delay}ms`,
                  transitionProperty: 'all',
                }}
              >
                {/*  Number Badge */}
                <div className="absolute top-4 right-4 text-4xl font-bold text-blue-900 group-hover:text-amber-100 transition-colors">
                  {item.number}
                </div>

                <div className="p-8 pt-12">
                  {/*  Icon Placeholder */}
                  <div className="w-14 h-14 rounded-xl bg-blue-950 text-amber-400 flex items-center justify-center text-2xl mb-4 group-hover:bg-amber-500 group-hover:text-blue-950 transition-colors">
                    {['⚡', '⭐', '💡', '🌍', '🤝'][index] || '✨'}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-blue-950 mb-2">
                    {item.title}
                  </h3>

                  {/*  Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  {/*  Hover accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-amber-500 group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

AboutValues.displayName = 'AboutValues';

export default AboutValues;