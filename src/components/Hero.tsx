import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, GraduationCap, Compass, ArrowRight, Video, X, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';

import heroImg from '../assets/images/about/administration.webp';
import heroVideo from '../assets/hero.webp';

interface HeroProps {
  onOpenDirectorMessage?: () => void;
  onOpenPrincipalMessage?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDirectorMessage, onOpenPrincipalMessage }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const modalVideoRef = useRef<HTMLVideoElement | null>(null);

  // Synchronize play/pause state with video element
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play().catch(() => {});
        setIsPlaying(true);
      }
    }
  };

  // Synchronize mute/unmute state with video element
  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  return (
    <section id="hero-section" className="relative w-full min-h-[92vh] md:min-h-screen flex items-center justify-center bg-[#0A192F] overflow-hidden select-none">
      
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={heroVideo}
          className="w-full h-full object-cover scale-105 transition-opacity duration-1000"
        >
          <source src={heroVideo} type="video/mp4" />
          <source src="/hero.mp4" type="video/mp4" />
          {/* Fallback image if video cannot be loaded */}
          <img
            src={heroImg}
            alt="St. Gabriel International School Campus"
            className="w-full h-full object-cover"
          />
        </video>

        {/* Cinematic Luxury Dark Overlays for pristine typography legibility */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/75 to-[#0A192F]/55"></div>
        <div className="absolute inset-0 z-10 bg-[#0A192F]/40 backdrop-blur-[0.5px]"></div>
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

        {/* Video Live Indicator */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-black/60 border border-white/20 rounded-full text-xs text-gray-200 my-2 backdrop-blur-md">
          <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-[#5CE1E6] animate-pulse' : 'bg-amber-400'}`}></span>
          <span className="font-semibold text-white">Campus Video Stream</span>
          <span className="text-gray-400 hidden sm:inline">• Lanet Academic Grounds</span>
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

      {/* Floating Video Controls in Bottom Corner */}
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
          aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
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
                  St. Gabriel International School • Campus Video Tour
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
              <video
                ref={modalVideoRef}
                autoPlay
                controls
                playsInline
                poster={heroImg}
                className="w-full h-full object-contain"
              >
                <source src={heroVideo} type="video/mp4" />
                <source src="/hero.mp4" type="video/mp4" />
                <img
                  src={heroImg}
                  alt="St. Gabriel International School Campus Tour"
                  className="w-full h-full object-cover"
                />
              </video>
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