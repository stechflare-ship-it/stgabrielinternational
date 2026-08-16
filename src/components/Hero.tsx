import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, GraduationCap, Compass, ArrowRight, Video, X, Volume2, VolumeX } from 'lucide-react';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';
import heroVideo from '../assets/hero.mp4';
import campusPosterImg from '../assets/images/about/campus.webp';

interface HeroProps {
  onOpenDirectorMessage?: () => void;
  onOpenPrincipalMessage?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDirectorMessage, onOpenPrincipalMessage }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);

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

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
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
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          poster={campusPosterImg}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onPlaying={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover scale-105 transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-60'}`}
          aria-label="St. Gabriel International School Campus Video"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        {/* Ambient Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-[#0A192F]/75 to-[#0A192F]/50"></div>
        <div className="absolute inset-0 bg-[#0A192F]/30 backdrop-blur-[0.5px]"></div>
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#0A192F]/90 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-xl">
          <div className="h-[1px] w-6 bg-[#D4AF37]"></div>
          <span>Dual Curriculum: Cambridge & CBC • Lanet, Nakuru</span>
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
        <p className="max-w-3xl text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed font-normal my-6 drop-shadow">
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
            onClick={() => setShowVideoModal(true)}
            className="w-full sm:w-auto px-6 py-3.5 bg-[#5CE1E6] hover:bg-[#4bc7cc] text-[#0A192F] font-bold text-xs uppercase tracking-widest transition-all shadow-lg cursor-pointer inline-flex items-center justify-center gap-2"
          >
            <Video className="w-4 h-4" />
            <span>WATCH CAMPUS VIDEO</span>
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
              onClick={onOpenDirectorMessage || onOpenPrincipalMessage}
              className="w-full sm:w-auto px-6 py-3.5 border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] font-bold text-xs uppercase tracking-widest transition-all cursor-pointer inline-flex items-center justify-center gap-2 shadow-lg"
            >
              <span>DIRECTOR&apos;S MESSAGE</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Key Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-6 mt-14 max-w-4xl w-full bg-[#0A192F]/90 backdrop-blur-md p-4 sm:p-6 rounded-sm border border-[#D4AF37]/30 shadow-2xl">
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

      {/* Floating Video Controls in Corner */}
      <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
        <button
          onClick={toggleSound}
          className="p-2.5 bg-[#0A192F]/90 hover:bg-[#5CE1E6] hover:text-[#0A192F] text-white border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          title={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-[#D4AF37]" /> : <Volume2 className="w-4 h-4 text-[#5CE1E6]" />}
        </button>

        <button
          onClick={togglePlay}
          className="flex items-center gap-2 px-3.5 py-2 bg-[#0A192F]/90 hover:bg-white hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/40 transition-all shadow-lg rounded-sm cursor-pointer"
          aria-label={isPlaying ? 'Pause hero video' : 'Play hero video'}
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
      </div>

      {/* Fullscreen Video Tour Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-5xl bg-[#0A192F] border border-[#D4AF37] rounded-lg overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-[#071321]">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#5CE1E6] animate-pulse"></div>
                <h3 className="font-serif font-bold text-white uppercase text-sm sm:text-base tracking-wider">
                  St. Gabriel International School • Campus Showcase Video
                </h3>
              </div>
              <button
                onClick={() => setShowVideoModal(false)}
                className="p-1 text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="relative aspect-video w-full bg-black">
              <video
                ref={modalVideoRef}
                controls
                autoPlay
                className="w-full h-full object-cover"
                poster={campusPosterImg}
              >
                <source src={heroVideo} type="video/mp4" />
                Your browser does not support HTML video.
              </video>
            </div>

            <div className="p-6 bg-[#0A192F] flex flex-col sm:flex-row items-center justify-between gap-4">
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
