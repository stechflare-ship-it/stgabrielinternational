import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Sparkles, CheckCircle2, BookOpen, GraduationCap, Award, Compass } from 'lucide-react';
import { CURRICULUM_STAGES } from '../data/schoolData';

export const CurriculumTimeline: React.FC = () => {
  const getStageIcon = (key: string) => {
    switch (key) {
      case 'eyfs':
        return <Sparkles className="w-5 h-5 text-[#E0BA43]" />;
      case 'primary':
        return <BookOpen className="w-5 h-5 text-[#E0BA43]" />;
      case 'lower-secondary':
        return <Compass className="w-5 h-5 text-[#E0BA43]" />;
      case 'igcse':
        return <Award className="w-5 h-5 text-[#E0BA43]" />;
      case 'a-level':
        return <GraduationCap className="w-5 h-5 text-[#E0BA43]" />;
      default:
        return <BookOpen className="w-5 h-5 text-[#E0BA43]" />;
    }
  };

  return (
    <div className="w-full space-y-8 my-8">
      
      {/* Top Interactive Journey Indicator Bar */}
      <div className="hidden lg:flex items-center justify-between bg-[#0B1D33] p-4 rounded-2xl border border-[#C59B27]/40 shadow-xl overflow-x-auto">
        {CURRICULUM_STAGES.map((stage, idx) => (
          <React.Fragment key={stage.key}>
            <Link
              to={stage.path}
              className="group flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-white/10 transition-colors"
            >
              <div className="w-9 h-9 rounded-full bg-[#162E4D] border border-[#C59B27] flex items-center justify-center font-bold text-xs text-[#E0BA43]">
                {idx + 1}
              </div>
              <div>
                <span className="block text-xs font-bold text-white group-hover:text-[#E0BA43] transition-colors">
                  {stage.title.split(' ')[0]} {stage.key.toUpperCase()}
                </span>
                <span className="block text-[10px] text-gray-400">
                  {stage.ageRange}
                </span>
              </div>
            </Link>

            {idx < CURRICULUM_STAGES.length - 1 && (
              <ChevronRight className="w-5 h-5 text-[#C59B27] flex-shrink-0" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Cards List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CURRICULUM_STAGES.map((stage, idx) => (
          <div
            key={stage.key}
            className="group relative bg-white rounded-2xl border border-gray-200 hover:border-[#C59B27] shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Header Banner */}
            <div className="relative h-48 overflow-hidden bg-[#0B1D33]">
              <img
                src={stage.image}
                alt={stage.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-[#0B1D33]/40 to-transparent"></div>

              <div className="absolute top-3 left-3 bg-[#0B1D33]/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-[#E0BA43] border border-[#C59B27]/40 flex items-center gap-1.5">
                {getStageIcon(stage.key)}
                <span>Stage 0{idx + 1}</span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[10px] uppercase tracking-widest font-bold text-[#E0BA43]">
                  {stage.ageRange} • {stage.years}
                </span>
                <h3 className="font-serif font-bold text-lg leading-tight mt-0.5">
                  {stage.title}
                </h3>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <p className="text-sm text-gray-600 leading-relaxed">
                {stage.subtitle}
              </p>

              <div className="space-y-2 pt-2 border-t border-gray-100">
                <p className="text-xs font-bold text-[#0B1D33] uppercase tracking-wider">
                  Key Highlights:
                </p>
                <ul className="space-y-1.5 text-xs text-gray-700">
                  {stage.highlights.slice(0, 3).map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Link */}
              <div className="pt-4">
                <Link
                  to={stage.path}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#0B1D33] hover:text-[#C59B27] group-hover:translate-x-1 transition-all"
                >
                  <span>Explore {stage.title}</span>
                  <ChevronRight className="w-4 h-4 text-[#C59B27]" />
                </Link>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
};
