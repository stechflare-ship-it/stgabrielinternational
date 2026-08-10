import React, { memo, useState } from 'react';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';

const AboutLeadership = memo(function AboutLeadership({ data }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const [expandedMember, setExpandedMember] = useState(null);

  const toggleExpand = (name) => {
    setExpandedMember(expandedMember === name ? null : name);
  };

  return (
    <section 
      ref={ref}
      className="py-8 md:py-12 bg-white"
      aria-label="Leadership Team"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-950 text-amber-400 text-xs font-bold tracking-widest px-4 py-2 rounded-full mb-4">
            {data.subtitle}
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950">
            {data.title}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {data.description}
          </p>
          <div className="w-20 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {data.members.map((member, index) => {
            const delay = index * 150;
            const experience = member.experience || member.credentials || '';

            return (
              <div
                key={member.id || member.name}
                className={`
                  group bg-gray-50 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl 
                  transition-all duration-500 cursor-pointer
                  
                  
                `}
                style={{ transitionDelay: `${delay}ms` }}
                onClick={() => toggleExpand(member.name)}
              >
                {/* Image */}
                <div className="relative w-full h-[280px] sm:h-[280px] md:h-[280px] lg:h-[280px] bg-slate-900 overflow-hidden rounded-t-3xl">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent p-3 z-10">
                    <div className="text-[11px] text-amber-400 font-semibold tracking-wide truncate">
                      {experience.split(',')[0]}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-blue-950 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-amber-600 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {member.bio}
                  </p>

                  {/* Experience - Show on click/expand */}
                  <div className={`
                    mt-4 overflow-hidden transition-all duration-300
                    '}
                  `}>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {experience}
                      </p>
                    </div>
                  </div>

                  {/* Click hint */}
                  

                  {/* Hover indicator */}
                  <div className="mt-2 w-12 h-0.5 bg-gray-200 mx-auto group-hover:bg-amber-500 transition-colors" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
});

AboutLeadership.displayName = 'AboutLeadership';

export default AboutLeadership;