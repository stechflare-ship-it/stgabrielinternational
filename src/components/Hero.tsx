import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, GraduationCap, Compass, ArrowRight, Video, X, Volume2, VolumeX, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';

import campusImg from '../assets/images/about/aboutusBackground.webp';
import classroomImg from '../assets/images/home/classroomImg.webp';
import chemistryImg from '../assets/images/studentlife/labaratory.webp';
import complabImg from '../assets/images/home/complabImg.webp';
import bandImg from '../assets/images/blogs/boardingLife.webp';
import sportsImg from '../assets/images/home/sportsImg.webp';

import graduationImg from '../assets/images/home/graduationImg.webp';

interface HeroProps {
  onOpenDirectorMessage?: () => void;
  onOpenPrincipalMessage?: () => void;
}

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  image: string;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 'campus',
    title: 'Serene Modern Campus',
    subtitle: 'Safe, world-class academic environment in Lanet, Nakuru',
    image: campusImg,
  },
  {
    id: 'classroom',
    title: 'Interactive Academic Classrooms',
    subtitle: 'Low teacher-to-student ratio fostering individualized mentorship',
    image: classroomImg,
  },
  {
    id: 'chemistry',
    title: 'Advanced Science Laboratories',
    subtitle: 'Practical STEM exploration, physics, biology & chemistry research',
    image: chemistryImg,
  },
  {
    id: 'complab',
    title: 'Modern ICT & Robotics Lab',
    subtitle: 'High-speed coding suites, digital literacy, and computational thinking',
    image: complabImg,
  },
  {
    id: 'band',
    title: 'Renowned Brass Band & Arts',
    subtitle: 'National music champions, performing arts, and creative mastery',
    image: bandImg,
  },
  {
    id: 'sports',
    title: 'Olympic & Championship Sports',
    subtitle: 'Football, swimming, basketball, athletics & physical wellness',
    image: sportsImg,
  },
  {
    id: 'graduation',
    title: 'Celebrating Excellence',
    subtitle: 'Guiding global achievers to premier universities worldwide',
    image: graduationImg,
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenDirectorMessage, onOpenPrincipalMessage }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<number | null>(null);

  const SLIDE_DURATION = 4500; // 4.5 seconds per slide
  const TICK_INTERVAL = 50; // Update progress bar every 50ms

  // Advance to next slide
  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  };

  const selectSlide = (index: number) => {
    setCurrentSlideIndex(index);
    setProgress(0);
  };

  const togglePlay = () => {
    setIsPlaying((prev) => !prev);
  };

  const toggleSound = () => {
    setIsMuted((prev) => !prev);
  };

  // Continuous animation playback loop
  useEffect(() => {
    if (!isPlaying) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    setProgress(0);
    const step = (TICK_INTERVAL / SLIDE_DURATION) * 100;

    timerRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlideIndex((oldIndex) => (oldIndex + 1) % HERO_SLIDES.length);
          return 0;
        }
        return prev + step;
      });
    }, TICK_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, currentSlideIndex]);

  const activeSlide = HERO_SLIDES[currentSlideIndex];

  return (
    <section id="hero-section" className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden select-none">
      
      {/* Dynamic Animated Motion Background (Ken Burns Cinematic Video Effect) */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const isPrevious = index === (currentSlideIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length;

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : isPrevious ? 'opacity-0 z-5' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transform transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-110 translate-x-1 translate-y-1' : 'scale-100'
                }`}
                loading={index < 2 ? 'eager' : 'lazy'}
              />
            </div>
          );
        })}

        {/* Ambient Dark Overlays for pristine readability & luxury atmosphere */}
        <div className="absolute inset-0 z-15 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/60"></div>
        <div className="absolute inset-0 z-15 bg-[#0A192F]/35 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0A192F]/90 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-2xl backdrop-blur-sm">
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
          <span>Dual Curriculum: British & CBC • Lanet, Nakuru</span>
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
        </div>

        {/* Main Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-2xl">
          <span className="block text-white uppercase tracking-tight">ST. GABRIEL's Mission</span>
          <span className="block text-[#D4AF37] mt-2 font-serif uppercase tracking-tight">INTERNATIONAL SCHOOL</span>
        </h1>

        {/* Motto Badge */}
        <div className="flex items-center gap-4 my-3">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] tracking-[0.2em] uppercase font-medium">
            &quot;{SCHOOL_INFO.motto}&quot;
          </p>
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
        </div>

        {/* Dynamic Scene Caption */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/60 border border-white/20 rounded-full text-xs text-gray-200 my-2 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#5CE1E6] animate-pulse"></span>
          <span className="font-semibold text-white">{activeSlide.title}</span>
          <span className="text-gray-400 hidden sm:inline">• {activeSlide.subtitle}</span>
        </div>

        {/* Supporting Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal my-5 drop-shadow">
          An inspiring international education in Lanet, Nakuru, nurturing academic excellence, character, creativity, leadership and global opportunities for Day and Boarding scholars.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-3xl mt-4">
          <Button
            to="/admissions"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto uppercase tracking-widest font-bold shadow-xl text-xs"
            icon={<GraduationCap className="w-4 h-4" />}
          >
            ENROLL NOW
          </Button>

          <button
            id="watch-campus-video-btn"
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#5CE1E6] hover:bg-[#4bc7cc] text-[#0A192F] font-bold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Video className="w-4 h-4" />
            <span>CAMPUS VIDEO TOUR</span>
          </button>

          <Button
            to="/academics"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto uppercase tracking-widest text-xs"
            icon={<Compass className="w-4 h-4" />}
          >
            EXPLORE CURRICULUM
          </Button>

          {(onOpenDirectorMessage || onOpenPrincipalMessage) && (
            <button
              id="director-message-hero-btn"
              onClick={onOpenDirectorMessage || onOpenPrincipalMessage}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>DIRECTOR&apos;S MESSAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Interactive Scene Selector Pills */}
        <div className="hidden md:flex items-center justify-center gap-2 mt-8 max-w-4xl flex-wrap">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => selectSlide(idx)}
              className={`px-3 py-1 text-[11px] font-bold uppercase tracking-wider transition-all rounded-sm border cursor-pointer ${
                idx === currentSlideIndex
                  ? 'bg-[#D4AF37] text-[#0A192F] border-[#D4AF37] shadow-lg scale-105'
                  : 'bg-[#0A192F]/80 text-gray-300 border-gray-700/60 hover:border-[#D4AF37]/50 hover:text-white'
              }`}
            >
              {slide.id}
            </button>
          ))}
        </div>

        {/* Key Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mt-10 max-w-4xl w-full bg-[#0A192F]/90 backdrop-blur-md p-4 sm:p-6 rounded-sm border border-[#D4AF37]/30 shadow-2xl">
          <div className="text-center p-2">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Curriculum</span>
            <span className="block text-sm sm:text-base font-bold text-[#D4AF37] mt-1 uppercase tracking-wider">Cambridge & CBC</span>
          </div>
          <div className="text-center p-2 border-l border-[#D4AF37]/20">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Location</span>
            <span className="block text-sm sm:text-base font-bold text-white mt-1 uppercase tracking-wider">Lanet, Nakuru</span>
          </div>
          <div className="text-center p-2 border-l border-[#D4AF37]/20">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Boarding</span>
            <span className="block text-sm sm:text-base font-bold text-[#D4AF37] mt-1 uppercase tracking-wider">Separate Boys & Girls</span>
          </div>
          <div className="text-center p-2 border-l border-[#D4AF37]/20">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Legacy</span>
            <span className="block text-sm sm:text-base font-bold text-white mt-1 uppercase tracking-wider">28+ Years of Impact</span>
          </div>
        </div>

      </div>

      {/* Floating Video & Scene Controls in Bottom Corners */}
      <div className="absolute bottom-6 left-6 z-30 flex items-center gap-2">
        <button
          onClick={prevSlide}
          className="p-2.5 bg-[#0A192F]/90 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label="Previous scene"
          title="Previous scene"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <button
          onClick={nextSlide}
          className="p-2.5 bg-[#0A192F]/90 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label="Next scene"
          title="Next scene"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="hidden sm:flex flex-col gap-1 w-24 ml-2">
          <div className="flex justify-between text-[9px] text-gray-400 uppercase font-mono">
            <span>Scene</span>
            <span>{currentSlideIndex + 1}/{HERO_SLIDES.length}</span>
          </div>
          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-gray-700">
            <div
              className="h-full bg-[#5CE1E6] transition-all duration-75"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-2">
        <button
          onClick={toggleSound}
          className="p-2.5 bg-[#0A192F]/90 hover:bg-[#5CE1E6] hover:text-[#0A192F] text-white border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label={isMuted ? 'Unmute ambient sound' : 'Mute sound'}
          title={isMuted ? 'Unmute sound' : 'Mute sound'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-[#D4AF37]" /> : <Volume2 className="w-4 h-4 text-[#5CE1E6]" />}
        </button>

        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-3.5 py-2 bg-[#0A192F]/90 hover:bg-white hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label={isPlaying ? 'Pause video motion' : 'Play video motion'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Pause</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Play</span>
            </>
          )}
        </button>

        <button
          onClick={() => setShowVideoModal(true)}
          className="p-2.5 bg-[#0A192F]/90 hover:bg-[#5CE1E6] hover:text-[#0A192F] text-white border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label="Open Fullscreen Tour"
          title="Fullscreen Tour"
        >
          <Maximize2 className="w-4 h-4 text-[#D4AF37]" />
        </button>
      </div>

      {/* Fullscreen Video Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-5xl bg-[#0A192F] border border-[#D4AF37] rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#071321]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#5CE1E6] animate-pulse"></div>
                <h3 className="font-serif font-bold text-white uppercase text-sm sm:text-base tracking-wider">
                  St. Gabriel International School • Campus Tour Showcase
                </h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black overflow-hidden group">
              <img
                src={HERO_SLIDES[currentSlideIndex].image}
                alt={HERO_SLIDES[currentSlideIndex].title}
                className="w-full h-full object-cover animate-fade-in"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-[#5CE1E6] text-xs font-bold uppercase tracking-widest">
                  Featured Facility {currentSlideIndex + 1} of {HERO_SLIDES.length}
                </span>
                <h4 className="text-white text-xl sm:text-2xl font-serif font-bold mt-1">
                  {HERO_SLIDES[currentSlideIndex].title}
                </h4>
                <p className="text-gray-300 text-xs sm:text-sm mt-1 max-w-2xl">
                  {HERO_SLIDES[currentSlideIndex].subtitle}
                </p>
              </div>

              {/* Modal Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white rounded-full transition-all cursor-pointer"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-black/60 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white rounded-full transition-all cursor-pointer"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Bottom Gallery Thumbnails */}
            <div className="p-4 bg-[#071321] border-t border-gray-800">
              <div className="grid grid-cols-4 sm:grid-cols-8 gap-2">
                {HERO_SLIDES.map((slide, i) => (
                  <button
                    key={slide.id}
                    onClick={() => selectSlide(i)}
                    className={`relative rounded overflow-hidden aspect-video border-2 transition-all cursor-pointer ${
                      i === currentSlideIndex ? 'border-[#5CE1E6] scale-105 shadow-md' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                    <span className="absolute inset-0 bg-black/30 flex items-center justify-center text-[9px] font-bold text-white uppercase truncate px-1">
                      {slide.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-5 bg-[#0A192F] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-gray-800">
              <p className="text-xs text-gray-300">
                Experience world-class learning facilities, science & robotics labs, sports grounds, and separate boarding life at Lanet, Nakuru.
              </p>
              <Button
                to="/admissions"
                variant="primary"
                size="sm"
                onClick={() => setShowVideoModal(false)}
                className="whitespace-nowrap uppercase tracking-widest text-xs font-bold"
              >
                APPLY FOR ADMISSION
              </Button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
