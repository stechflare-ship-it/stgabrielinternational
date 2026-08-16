import React, { useState, useEffect, useRef } from 'react';
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Pause,
  Play,
  Award,
  Users,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Building2,
  MapPin
} from 'lucide-react';
import { TESTIMONIALS } from '../data/schoolData';
import { Testimonial } from '../types';

interface TestimonialSliderProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  limitCategory?: 'parent' | 'student' | 'alumni';
}

export const TestimonialSlider: React.FC<TestimonialSliderProps> = ({
  title = 'Voices of the St. Gabriel Community',
  subtitle = 'Discover why parents, scholars, and alumni trust St. Gabriel for Kenya CBC and British Cambridge excellence.',
  badge = 'Community Reviews & Testimonials',
  limitCategory
}) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'parent' | 'student' | 'alumni'>(
    limitCategory || 'all'
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const autoSlideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = TESTIMONIALS.filter((t) => {
    if (activeCategory === 'all') return true;
    return t.category === activeCategory;
  });

  const total = filteredTestimonials.length;

  // Reset index when changing category
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeCategory]);

  // Autoplay handler
  useEffect(() => {
    if (isPlaying && !isHovered && total > 1) {
      autoSlideTimerRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % total);
      }, 6500);
    } else {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    }

    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current);
      }
    };
  }, [isPlaying, isHovered, total, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const currentItem: Testimonial | undefined = filteredTestimonials[currentIndex];

  if (!currentItem) return null;

  return (
    <section
      id="testimonials-section"
      className="py-16 sm:py-24 bg-gradient-to-b from-[#0A192F] via-[#0B1D33] to-[#071321] text-white relative overflow-hidden border-y-2 border-[#C59B27]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient background glow elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#0052CC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#E0BA43] text-xs font-bold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{badge}</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            {title}
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </div>

        {/* Filter Tabs */}
        {!limitCategory && (
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-xl mx-auto p-1.5 bg-[#162E4D]/80 rounded-2xl border border-[#C59B27]/30 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Reviews', icon: <Users className="w-3.5 h-3.5" />, count: TESTIMONIALS.length },
              { id: 'parent', label: 'Parents', icon: <HeartHandshake className="w-3.5 h-3.5" />, count: TESTIMONIALS.filter(t => t.category === 'parent').length },
              { id: 'student', label: 'Scholars', icon: <GraduationCap className="w-3.5 h-3.5" />, count: TESTIMONIALS.filter(t => t.category === 'student').length },
              { id: 'alumni', label: 'Alumni', icon: <Award className="w-3.5 h-3.5" />, count: TESTIMONIALS.filter(t => t.category === 'alumni').length }
            ].map((tab) => {
              const active = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id as any)}
                  className={`flex-1 min-w-[100px] py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    active
                      ? 'bg-[#C59B27] text-[#0B1D33] shadow-md scale-102'
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${active ? 'bg-[#0B1D33] text-[#E0BA43]' : 'bg-black/30 text-gray-400'}`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Main Testimonial Stage Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-[#0F2744] via-[#0B1D33] to-[#12243A] rounded-3xl p-6 sm:p-10 md:p-12 border-2 border-[#C59B27]/40 shadow-2xl overflow-hidden min-h-[380px] flex flex-col justify-between">
            
            {/* Top Row: Category Tag, Highlight Tag & Star Rating */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
              <div className="flex flex-wrap items-center gap-2">
                {currentItem.highlightTag && (
                  <span className="px-3 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#E0BA43] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    <span>{currentItem.highlightTag}</span>
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-gray-300 text-[11px] font-semibold">
                  {currentItem.curriculum === 'cbc'
                    ? '🇰🇪 Kenya CBC Stream'
                    : currentItem.curriculum === 'british'
                    ? '🇬🇧 Cambridge British Stream'
                    : '🌐 Dual CBC & Cambridge'}
                </span>
              </div>

              {/* 5-Star Rating */}
              <div className="flex items-center gap-1 bg-[#0A192F] px-3 py-1 rounded-xl border border-[#C59B27]/30">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < currentItem.rating
                        ? 'text-[#E0BA43] fill-[#E0BA43]'
                        : 'text-gray-600'
                    }`}
                  />
                ))}
                <span className="text-xs font-bold text-white ml-1.5">5.0</span>
              </div>
            </div>

            {/* Quote Body with large decorative icon */}
            <div className="my-6 space-y-4 relative">
              <Quote className="w-12 h-12 text-[#C59B27]/20 absolute -top-4 -left-2 pointer-events-none" />
              
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-white leading-relaxed tracking-wide italic pl-4 sm:pl-6 border-l-4 border-[#C59B27]">
                &ldquo;{currentItem.quote}&rdquo;
              </blockquote>

              {currentItem.detail && (
                <p className="text-sm sm:text-base text-gray-300 leading-relaxed pl-4 sm:pl-6">
                  {currentItem.detail}
                </p>
              )}
            </div>

            {/* Author Metadata Bar */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                {/* Author Avatar with Initials */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-tr from-[#C59B27] to-[#F3D368] text-[#0B1D33] font-serif font-black text-lg sm:text-xl flex items-center justify-center shadow-lg flex-shrink-0 border-2 border-white">
                  {currentItem.author
                    .split(' ')
                    .filter((n) => !n.startsWith('Dr.') && !n.startsWith('Eng.') && !n.startsWith('Mrs.') && !n.startsWith('Pastor') && !n.startsWith('Arch.'))
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join('') || currentItem.author.substring(0, 2).toUpperCase()}
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <h3 className="font-serif text-base sm:text-lg font-bold text-white">
                      {currentItem.author}
                    </h3>
                    {currentItem.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/40 px-2 py-0.5 rounded-full font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-[#E0BA43] font-semibold">
                    {currentItem.role}
                  </p>
                  <p className="text-[11px] text-gray-400 flex items-center gap-2">
                    <span>{currentItem.gradeOrYear}</span>
                    {currentItem.location && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-0.5">
                          <MapPin className="w-2.5 h-2.5" />
                          {currentItem.location}
                        </span>
                      </>
                    )}
                  </p>
                </div>
              </div>

              {/* Slide Counter & Play/Pause */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="text-xs text-gray-400 font-mono">
                  <strong className="text-white">{currentIndex + 1}</strong> of {total}
                </span>

                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  title={isPlaying ? 'Pause auto-slide' : 'Resume auto-slide'}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors cursor-pointer"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

          </div>

          {/* Previous / Next Arrow Controls */}
          <button
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="absolute left-0 sm:-left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C59B27] text-[#0B1D33] hover:bg-white flex items-center justify-center shadow-2xl transition-all cursor-pointer z-20"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            aria-label="Next testimonial"
            className="absolute right-0 sm:-right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#C59B27] text-[#0B1D33] hover:bg-white flex items-center justify-center shadow-2xl transition-all cursor-pointer z-20"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Slide Pagination Dots */}
        <div className="flex items-center justify-center gap-2 pt-2">
          {filteredTestimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                idx === currentIndex
                  ? 'w-8 bg-[#C59B27]'
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Bottom Trust & Satisfaction Strip */}
        <div className="pt-6 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA43] block">
              4.95 / 5.0
            </span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
              Parent Satisfaction
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA43] block">
              100%
            </span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
              Transition & Placement
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA43] block">
              28+ Years
            </span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
              Proven Heritage in Lanet
            </span>
          </div>

          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <span className="font-serif text-2xl sm:text-3xl font-extrabold text-[#E0BA43] block">
              1 : 15
            </span>
            <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold">
              Teacher-Student Ratio
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
