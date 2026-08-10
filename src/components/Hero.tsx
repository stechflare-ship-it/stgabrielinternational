import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, GraduationCap, Compass, ArrowRight, ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';
import heroVideo from '../assets/hero.mp4';
import campusHeroImg from '../assets/images/about/campus.webp';

const HERO_POSTER = campusHeroImg;

export const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setVideoLoaded(true);
          })
          .catch((err) => {
            console.log('Autoplay deferred or awaiting user gesture:', err);
          });
      }
    }
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] md:min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden">
      
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
        {!videoError ? (
          <video
            ref={videoRef}
            poster={HERO_POSTER}
            autoPlay
            muted
            loop
            playsInline
            onLoadedData={() => setVideoLoaded(true)}
            onCanPlay={() => setVideoLoaded(true)}
            onError={(e) => {
              console.error("Video error on element:", (e.target as HTMLVideoElement | HTMLSourceElement)?.tagName);
              setVideoError(true);
            }}
            className="w-full h-full object-cover scale-105 transition-opacity duration-1000"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
            <source src="/videos/hero.mp4" type="video/mp4" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        ) : null}

        {/* Fallback Poster & Cinematic Background Image if Video Not Present */}
        {(videoError || !videoLoaded) && (
          <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#071321] via-[#0A192F] to-[#162E4D]">
            <img
              src={HERO_POSTER}
              alt="St. Gabriel International School Campus Scholars"
              className="w-full h-full object-cover opacity-40 mix-blend-overlay scale-105"
            />
            {/* Ambient Particle Gold Mesh Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Dark Editorial Overlay for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/80 to-[#0A192F]/60"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0A192F] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xl animate-fade-in">
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
          <span>British & International Curriculum • Lanet, Nakuru</span>
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
        </div>

        {/* Main Headings */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-none mb-4 drop-shadow-2xl">
          <span className="block text-white uppercase tracking-tight">ST. GABRIEL</span>
          <span className="block text-[#D4AF37] mt-2 font-serif uppercase tracking-tight">INTERNATIONAL SCHOOL</span>
        </h1>

        {/* Motto Badge */}
        <div className="flex items-center gap-4 my-4">
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
          <p className="font-serif italic text-lg sm:text-2xl text-[#D4AF37] tracking-[0.2em] uppercase font-medium">
            &quot;{SCHOOL_INFO.motto}&quot;
          </p>
          <div className="h-[1px] w-12 bg-[#D4AF37]"></div>
        </div>

        {/* Supporting Paragraph */}
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed font-normal my-6 drop-shadow">
          An inspiring international education in Lanet, Nakuru, nurturing academic excellence, character, creativity, leadership and global opportunities for Day and Boarding scholars.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-2xl mt-4">
          <Button
            to="/admissions"
            variant="primary"
            size="lg"
            className="w-full sm:w-auto uppercase tracking-widest font-bold shadow-xl text-xs"
            icon={<GraduationCap className="w-4 h-4" />}
          >
            ENROLL NOW
          </Button>

          <Button
            to="/academics"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto uppercase tracking-widest text-xs"
            icon={<Compass className="w-4 h-4" />}
          >
            EXPLORE OUR CURRICULUM
          </Button>

          <Button
            to="/contact"
            variant="outline"
            size="lg"
            className="w-full sm:w-auto uppercase tracking-widest text-xs"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            CONTACT ADMISSIONS
          </Button>
        </div>

        {/* Key Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mt-14 max-w-4xl w-full bg-[#0A192F]/90 backdrop-blur-md p-4 sm:p-6 rounded-sm border border-[#D4AF37]/30 shadow-2xl">
          <div className="text-center p-2">
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Curriculum</span>
            <span className="block text-sm sm:text-base font-bold text-[#D4AF37] mt-1 uppercase tracking-wider">British / Cambridge</span>
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
            <span className="block text-[10px] uppercase tracking-[0.2em] text-gray-400 font-medium">Education</span>
            <span className="block text-sm sm:text-base font-bold text-white mt-1 uppercase tracking-wider">Holistic & Christian</span>
          </div>
        </div>

      </div>

      {/* Video Play / Pause Toggle Button */}
      {!videoError && videoLoaded && (
        <button
          onClick={togglePlay}
          className="absolute bottom-6 right-6 z-20 flex items-center gap-2 px-3.5 py-2 bg-[#0A192F] hover:bg-white hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40 transition-all shadow-lg focus:outline-none rounded-sm"
          aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
        >
          {isPlaying ? (
            <>
              <Pause className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Pause Video</span>
            </>
          ) : (
            <>
              <Play className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="hidden sm:inline">Play Video</span>
            </>
          )}
        </button>
      )}

    </section>
  );
};
