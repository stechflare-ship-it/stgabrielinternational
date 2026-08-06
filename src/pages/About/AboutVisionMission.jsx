import React, { memo } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AboutVisionMission = memo(function AboutVisionMission({ data }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section 
      ref={ref}
      className="py-16 md:py-24 bg-blue-950"
      aria-label="Vision, Mission & Motto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* ✅ Vision */}
          <div className={`
            text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
            transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">👁️</span>
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">{data.vision.title}</h3>
            <p className="text-gray-300 leading-relaxed">{data.vision.text}</p>
          </div>

          {/* ✅ Mission */}
          <div className={`
            text-center p-8 rounded-2xl bg-amber-500/10 backdrop-blur-sm border border-amber-500/20
            transition-all duration-700 delay-100
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">{data.mission.title}</h3>
            <p className="text-gray-300 leading-relaxed">{data.mission.text}</p>
          </div>

          {/* ✅ Motto */}
          <div className={`
            text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10
            transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}>
            <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">💫</span>
            </div>
            <h3 className="text-xl font-bold text-amber-400 mb-4">{data.motto.title}</h3>
            <p className="text-2xl font-bold text-white mb-3">{data.motto.text}</p>
            <p className="text-gray-300 text-sm leading-relaxed">{data.motto.subtitle}</p>
          </div>

        </div>
      </div>
    </section>
  );
});

AboutVisionMission.displayName = 'AboutVisionMission';

export default AboutVisionMission;