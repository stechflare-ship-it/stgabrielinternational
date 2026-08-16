import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  return (
    <footer className="bg-[#5CE1E6] text-[#0A192F] border-t-2 border-[#0A192F]/20 relative overflow-hidden">
      
      {/* Decorative Glow Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: School Identity & Social Media */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="footer" />
            <p className="text-sm text-[#0A192F]/90 font-medium leading-relaxed max-w-md">
              St. Gabriel International School delivers an inspiring British & Kenyan CBC dual-curriculum in Lanet, Nakuru County. We nurture academic rigor, holistic talents, Christian character, and leadership opportunities for day and boarding scholars.
            </p>

            <div className="p-4 rounded-sm bg-[#0A192F] text-white border border-[#5CE1E6]/40 space-y-2 shadow-md">
              <p className="text-xs font-bold text-[#5CE1E6] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#5CE1E6]" />
                <span>Day & Boarding Excellence</span>
              </p>
              <p className="text-xs text-gray-200">
                Offering separate, secure boys and girls boarding facilities in Lanet (~4 km apart).
              </p>
            </div>

            {/* Official Social Media Channels */}
            <div className="pt-2">
              <p className="text-xs font-extrabold uppercase tracking-wider text-[#0A192F] mb-3">
                Connect With Us On Social Media
              </p>
              <div className="flex items-center gap-3">
                {/* Facebook */}
                <a
                  href={SCHOOL_INFO.socialMedia.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit St. Gabriel on Facebook"
                  className="w-10 h-10 rounded-full bg-[#0A192F] text-white hover:bg-[#1877F2] flex items-center justify-center transition-all duration-200 shadow hover:scale-110 group"
                  title="Follow us on Facebook"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href={SCHOOL_INFO.socialMedia.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit St. Gabriel on Instagram"
                  className="w-10 h-10 rounded-full bg-[#0A192F] text-white hover:bg-gradient-to-tr hover:from-[#f09433] hover:via-[#dc2743] hover:to-[#bc1888] flex items-center justify-center transition-all duration-200 shadow hover:scale-110 group"
                  title="Follow @stgabrielgroupofschools on Instagram"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>

                {/* TikTok */}
                <a
                  href={SCHOOL_INFO.socialMedia.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit St. Gabriel on TikTok"
                  className="w-10 h-10 rounded-full bg-[#0A192F] text-white hover:bg-black flex items-center justify-center transition-all duration-200 shadow hover:scale-110 group"
                  title="Follow @st.gabrielsmissionschool on TikTok"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.3 6.3 0 0 0 1.86-4.49V8.58a8.28 8.28 0 0 0 4.91 1.63V6.75a4.87 4.87 0 0 1-1-.06z"/>
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href={SCHOOL_INFO.socialMedia.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit St. Gabriel on YouTube"
                  className="w-10 h-10 rounded-full bg-[#0A192F] text-white hover:bg-[#FF0000] flex items-center justify-center transition-all duration-200 shadow hover:scale-110 group"
                  title="Watch us on YouTube"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-[#0A192F] mb-4 border-b-2 border-[#0A192F]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              {[
                { label: 'About St. Gabriel', path: '/about' },
                { label: 'Academics & Curriculum', path: '/academics' },
                { label: 'Student Life', path: '/student-life' },
                { label: 'Boarding Experience', path: '/boarding' },
                { label: 'Admissions Process', path: '/admissions' },
                { label: 'Fees & Requirements', path: '/fees-and-requirements' },
                { label: 'Downloads & Forms', path: '/downloads' },
                { label: 'School News & Stories', path: '/news' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-[#0A192F]/90 hover:text-red-700 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0A192F] group-hover:translate-x-1 group-hover:text-red-700 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Curriculum Stages */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-[#0A192F] mb-4 border-b-2 border-[#0A192F]/30 pb-2 inline-block">
              Curriculum Stages
            </h3>
            <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider">
              {[
                { label: '🇰🇪 CBC Pre-Primary', path: '/academics/cbc-pre-primary' },
                { label: '🇰🇪 CBC Primary & KPSEA', path: '/academics/cbc-upper-primary' },
                { label: '🇰🇪 CBC Junior Secondary (JSS)', path: '/academics/cbc-junior-secondary' },
                { label: '🇰🇪 CBC Senior School (SSS)', path: '/academics/cbc-senior-school' },
                { label: '🇬🇧 EYFS (Playgroup–Reception)', path: '/academics/eyfs' },
                { label: '🇬🇧 Cambridge Primary (Y1–Y6)', path: '/academics/primary' },
                { label: '🇬🇧 Cambridge IGCSE (Y10–Y11)', path: '/academics/igcse' },
                { label: '🇬🇧 Cambridge A-Level (Y12–Y13)', path: '/academics/a-level' },
                { label: 'Photo Gallery', path: '/gallery' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-[#0A192F]/90 hover:text-red-700 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#0A192F] group-hover:translate-x-1 group-hover:text-red-700 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Admissions */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-[#0A192F] mb-4 border-b-2 border-[#0A192F]/30 pb-2 inline-block">
              Contact Admissions
            </h3>
            <ul className="space-y-3 text-xs font-bold uppercase tracking-wider text-[#0A192F]/90">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#0A192F] flex-shrink-0 mt-0.5" />
                <span className="normal-case text-[#0A192F] font-semibold">Lanet, Nakuru County, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A192F] flex-shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
                  className="hover:text-red-700 transition-colors font-semibold"
                >
                  {SCHOOL_INFO.contacts.mainPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#0A192F] flex-shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.contacts.enquiryPhoneRaw}`}
                  className="hover:text-red-700 transition-colors font-semibold"
                >
                  {SCHOOL_INFO.contacts.enquiryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-900 font-extrabold hover:underline"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#0A192F] flex-shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.contacts.email}`}
                  className="hover:text-red-700 transition-colors lowercase tracking-normal text-[#0A192F] font-semibold"
                >
                  {SCHOOL_INFO.contacts.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Developer Attribution & Copyright Bar */}
      <div className="bg-[#0A192F] text-white border-t border-[#0A192F]/20 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-300 text-center md:text-left">
          <div>
            <p className="tracking-wide">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">{SCHOOL_INFO.name}</span>. All Rights Reserved. Motto: &quot;{SCHOOL_INFO.motto}&quot;
            </p>
          </div>

          <div className="p-2 px-4 rounded-sm bg-[#071321] border border-[#5CE1E6]/30 text-gray-300">
            <p className="flex items-center justify-center md:justify-end gap-1.5 font-medium">
              <span>Website by:</span>
              <a
                href={SCHOOL_INFO.developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#5CE1E6] hover:underline inline-flex items-center gap-1"
              >
                <span>{SCHOOL_INFO.developer.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-[10px] text-[#5CE1E6] italic mt-0.5 tracking-wider">
              &quot;{SCHOOL_INFO.developer.tagline}&quot;
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};
