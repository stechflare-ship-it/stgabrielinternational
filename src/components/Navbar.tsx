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
      <div 
        className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white py-2 px-0 overflow-hidden border-b-2 border-[#D4AF37] shadow-md cursor-pointer"
        onClick={() => window.location.href = '/admissions'}
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
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full transition-all duration-300 border-b border-[#D4AF37]/30 ${
          scrolled
            ? 'bg-[#0A192F]/95 backdrop-blur-md shadow-2xl py-2.5'
            : 'bg-[#0A192F] py-3.5'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <Logo variant="light" />

          {/* Desktop Navigation Links */}
          <div className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-[11px] font-semibold uppercase tracking-wider">
            <Link
              to="/"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/about')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              About
            </Link>

            {/* Academics Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAcademicsHover(true)}
              onMouseLeave={() => setAcademicsHover(false)}
            >
              <Link
                to="/academics"
                className={`inline-flex items-center gap-1 px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                  location.pathname.startsWith('/academics')
                    ? 'text-[#D4AF37] border-[#D4AF37]'
                    : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
                }`}
              >
                <span>Academics</span>
                <ChevronDown className="w-3.5 h-3.5 text-[#D4AF37]" />
              </Link>

              {academicsHover && (
                <div className="absolute top-full left-0 w-64 bg-[#0A192F] border border-[#D4AF37]/40 rounded-sm shadow-2xl py-2 z-50 animate-fade-in">
                  <div className="px-4 py-2 border-b border-white/10">
                    <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">
                      Curriculum Stages
                    </p>
                  </div>
                  <Link
                    to="/academics"
                    className="block px-4 py-2 text-xs text-white hover:bg-[#D4AF37] hover:text-[#0A192F] font-semibold transition-colors"
                  >
                    Academics Overview
                  </Link>
                  <Link
                    to="/academics/eyfs"
                    className="block px-4 py-2 text-xs text-gray-200 hover:bg-[#D4AF37] hover:text-[#0A192F] font-medium transition-colors"
                  >
                    EYFS (Playgroup - Reception)
                  </Link>
                  <Link
                    to="/academics/primary"
                    className="block px-4 py-2 text-xs text-gray-200 hover:bg-[#D4AF37] hover:text-[#0A192F] font-medium transition-colors"
                  >
                    Primary (Years 1 - 6)
                  </Link>
                  <Link
                    to="/academics/lower-secondary"
                    className="block px-4 py-2 text-xs text-gray-200 hover:bg-[#D4AF37] hover:text-[#0A192F] font-medium transition-colors"
                  >
                    Lower Secondary (Years 7 - 9)
                  </Link>
                  <Link
                    to="/academics/igcse"
                    className="block px-4 py-2 text-xs text-gray-200 hover:bg-[#D4AF37] hover:text-[#0A192F] font-medium transition-colors"
                  >
                    Cambridge IGCSE (Years 10 - 11)
                  </Link>
                  <Link
                    to="/academics/a-level"
                    className="block px-4 py-2 text-xs text-gray-200 hover:bg-[#D4AF37] hover:text-[#0A192F] font-medium transition-colors"
                  >
                    A-Level (Years 12 - 13)
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/student-life"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/student-life')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Student Life
            </Link>

            <Link
              to="/boarding"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/boarding')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Boarding
            </Link>

            <Link
              to="/admissions"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/admissions')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Admissions
            </Link>

            <Link
              to="/fees-and-requirements"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/fees-and-requirements')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Fees & Requirements
            </Link>

            <Link
              to="/gallery"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/gallery')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Gallery
            </Link>

            <Link
              to="/news"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/news')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              News
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/blog')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Blog
            </Link>

            <Link
              to="/staff"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/staff')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Staff
            </Link>

            <Link
              to="/downloads"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/downloads')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Downloads
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 text-xs font-semibold uppercase tracking-wider transition-all border-b-2 ${
                isActive('/contact')
                  ? 'text-[#D4AF37] border-[#D4AF37]'
                  : 'text-white/80 hover:text-[#D4AF37] border-transparent hover:border-[#D4AF37]'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Primary Action Button */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link
              to="/admissions"
              className="bg-[#D4AF37] text-[#0A192F] px-6 py-2.5 font-bold text-[11px] uppercase tracking-widest hover:bg-white transition-colors duration-300 rounded-sm flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4" />
              <span>ENROLL NOW</span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center xl:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-sm focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6 text-[#D4AF37]" />
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
