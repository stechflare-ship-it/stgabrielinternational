import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MessageCircle,
  Menu,
  ChevronDown,
  GraduationCap,
  Sparkles,
  MapPin,
  Clock
} from 'lucide-react';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';
import { SCHOOL_INFO } from '../data/schoolData';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [academicsHover, setAcademicsHover] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Red Moving Ribbon Announcement Bar */}
      <Link 
        to="/admissions"
        className="block bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2 px-0 overflow-hidden border-b-2 border-[#D4AF37] shadow-md cursor-pointer hover:from-red-800 hover:to-red-800 transition-colors"
        title="Click to view admissions"
      >
        <div className="animate-ribbon-marquee text-xs sm:text-sm font-bold tracking-wide uppercase flex items-center gap-12 select-none">
          <span className="flex items-center gap-3">
            <span className="bg-[#D4AF37] text-red-950 text-[10px] sm:text-xs px-2 py-0.5 rounded font-black tracking-widest shadow">ANNOUNCEMENT</span>
            <span>🚨 OFFICIAL OPENING OF ST. GABRIEL INTERNATIONAL SCHOOL FROM SEPTEMBER 2026! 🎓 ENROLLING NOW FOR BRITISH CURRICULUM (EYFS, PRIMARY, LOWER SECONDARY, IGCSE & A-LEVEL) 📞 CALL ADMISSIONS: +254 724 694 554 · +254 720 349 748 🌟 HOPE TO THE WORLD 🌟</span>
          </span>
          <span className="flex items-center gap-3">
            <span className="bg-[#D4AF37] text-red-950 text-[10px] sm:text-xs px-2 py-0.5 rounded font-black tracking-widest shadow">ANNOUNCEMENT</span>
            <span>🚨 OFFICIAL OPENING OF ST. GABRIEL INTERNATIONAL SCHOOL FROM SEPTEMBER 2026! 🎓 ENROLLING NOW FOR BRITISH CURRICULUM (EYFS, PRIMARY, LOWER SECONDARY, IGCSE & A-LEVEL) 📞 CALL ADMISSIONS: +254 724 694 554 · +254 720 349 748 🌟 HOPE TO THE WORLD 🌟</span>
          </span>
        </div>
      </Link>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b border-[#0A192F]/15 shadow-sm ${
          scrolled
            ? 'bg-[#5CE1E6]/95 backdrop-blur-md shadow-md py-2'
            : 'bg-[#5CE1E6] py-3'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-1.5 text-[11px] font-bold uppercase tracking-wider">
            <Link
              to="/"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/about')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              About
            </Link>

            <Link
              to="/staff"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/staff')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Staff
            </Link>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicsHover(true)}
              onMouseLeave={() => setAcademicsHover(false)}
            >
              <Link
                to="/academics"
                className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                  location.pathname.startsWith('/academics')
                    ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                    : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
                }`}
              >
                <span>Academics</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#0A192F]" />
              </Link>

              {academicsHover && (
                <div className="absolute top-full left-0 w-80 bg-[#0A192F] border-2 border-[#5CE1E6] rounded-sm shadow-2xl py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-white/10 flex items-center justify-between">
                    <p className="text-[10px] uppercase tracking-widest text-[#5CE1E6] font-bold">
                      Academic Pathways
                    </p>
                    <span className="text-[9px] bg-[#5CE1E6]/20 text-[#5CE1E6] px-2 py-0.5 rounded font-bold">
                      Dual Syllabus
                    </span>
                  </div>
                  
                  <Link
                    to="/academics"
                    className="block px-4 py-2 text-xs text-white hover:bg-[#5CE1E6] hover:text-[#0A192F] font-bold transition-colors border-b border-white/5"
                  >
                    🎓 Academics Hub & Dual Matrix
                  </Link>

                  {/* Kenya CBC Group */}
                  <div className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-emerald-400 font-black">
                    🇰🇪 Kenya CBC Syllabus (PP1 – JSS)
                  </div>
                  <Link
                    to="/academics/cbc-pre-primary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-emerald-600 hover:text-white font-medium transition-colors"
                  >
                    CBC Pre-Primary (PP1 & PP2)
                  </Link>
                  <Link
                    to="/academics/cbc-lower-primary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-emerald-600 hover:text-white font-medium transition-colors"
                  >
                    CBC Lower Primary (Grades 1 – 3)
                  </Link>
                  <Link
                    to="/academics/cbc-upper-primary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-emerald-600 hover:text-white font-medium transition-colors"
                  >
                    CBC Upper Primary & KPSEA (Grades 4 – 6)
                  </Link>
                  <Link
                    to="/academics/cbc-junior-secondary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-emerald-600 hover:text-white font-medium transition-colors"
                  >
                    CBC Junior Secondary School (JSS Grades 7 – 9)
                  </Link>
                  <Link
                    to="/academics/cbc-senior-school"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-emerald-600 hover:text-white font-medium transition-colors"
                  >
                    CBC Senior Secondary School (SSS Grades 10 – 12)
                  </Link>

                  {/* British Cambridge Group */}
                  <div className="px-4 pt-2 pb-1 text-[10px] uppercase tracking-wider text-sky-400 font-black border-t border-white/10 mt-1">
                    🇬🇧 British Cambridge Pathway
                  </div>
                  <Link
                    to="/academics/eyfs"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-sky-600 hover:text-white font-medium transition-colors"
                  >
                    EYFS (Playgroup – Reception)
                  </Link>
                  <Link
                    to="/academics/primary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-sky-600 hover:text-white font-medium transition-colors"
                  >
                    Cambridge Primary (Years 1 – 6)
                  </Link>
                  <Link
                    to="/academics/lower-secondary"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-sky-600 hover:text-white font-medium transition-colors"
                  >
                    Lower Secondary (Years 7 – 9)
                  </Link>
                  <Link
                    to="/academics/igcse"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-sky-600 hover:text-white font-medium transition-colors"
                  >
                    Cambridge IGCSE (Years 10 – 11)
                  </Link>
                  <Link
                    to="/academics/a-level"
                    className="block px-4 py-1.5 text-xs text-gray-200 hover:bg-sky-600 hover:text-white font-medium transition-colors"
                  >
                    Advanced Level (A-Level Years 12 – 13)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/student-life"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/student-life')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Student Life
            </Link>

            <Link
              to="/boarding"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/boarding')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Boarding
            </Link>

            <Link
              to="/admissions"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/admissions')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Admissions
            </Link>

            <Link
              to="/fees-and-requirements"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/fees-and-requirements')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Fees & Requirements
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/gallery')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/news"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/news')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              News
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/blog')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/downloads"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/downloads')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Downloads
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/contact')
                  ? 'text-[#0A192F] border-[#0A192F] bg-white/30 rounded-t-sm'
                  : 'text-[#0A192F]/90 hover:text-[#0A192F] border-transparent hover:border-[#0A192F] hover:bg-white/20 rounded-t-sm'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/admissions"
              className="bg-[#0A192F] text-white px-6 py-2.5 font-bold text-[11px] uppercase tracking-widest hover:bg-red-700 transition-colors duration-300 rounded-sm flex items-center gap-2 shadow-md"
            >
              <GraduationCap className="w-4 h-4 text-[#5CE1E6]" />
              <span>ENROLL NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 bg-[#0A192F] hover:bg-[#0A192F]/80 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-[#0A192F]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 text-[#5CE1E6]" />
            </button>
          </div>

        </div>
      </nav>

      {/* Slide-over Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
};
