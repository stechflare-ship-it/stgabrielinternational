import React,{memo} from "react";
import useIntersectionObserver from '../../hooks/useIntersectionObserver';


const AboutLegacy = memo(function AboutLegacy({ data }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-6 md:py-8 bg-gray-50"
      aria-label="Our Founding Legacy"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left: Text Content */}
          <div>
            <div className="inline-block bg-blue-950 text-amber-400 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4">
              EST. 1998
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-2">
              {data.title}
            </h2>
            <p className="text-lg text-amber-600 font-medium mb-6">
              {data.subtitle}
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              {data.description}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {data.stats.map((stat) => (
                <div key={stat.label} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-1">
                    {stat.value}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <span>{stat.icon}</span>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className={`
            relative overflow-hidden rounded-2xl shadow-2xl
            transition-all duration-700
            ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          `}>
            <img 
              src={data.image}
              alt={data.imageAlt}
              className="w-full h-[400px] object-cover"
              loading="lazy"
              decoding="async"
            />

            {/* Overlay badge */}
            <div className="absolute bottom-4 right-4 bg-blue-950/90 backdrop-blur-sm text-white px-6 py-3 rounded-lg border border-amber-500/20">
              <div className="text-sm font-bold text-amber-400">OUR LEGACY</div>
              <div className="text-xs text-gray-400">St. Gabriel's Campus</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
});

AboutLegacy.displayName = 'AboutLegacy';

export default AboutLegacy;