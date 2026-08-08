import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  MessageCircle,
  Mail,
  ChevronRight,
  ShieldCheck,
  Heart,
  ExternalLink
} from 'lucide-react';
import { Logo } from './Logo';
import { SCHOOL_INFO } from '../data/schoolData';

export const Footer: React.FC = () => {
  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  return (
    <footer className="bg-[#0A192F] text-gray-300 border-t border-[#D4AF37]/30 relative overflow-hidden">
      
      {/* Decorative Gold Glow Background Accent */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Col 1: School Identity */}
          <div className="lg:col-span-2 space-y-5">
            <Logo variant="footer" showTagline={true} />

            <p className="text-sm text-gray-300 leading-relaxed max-w-md">
              St. Gabriel International School delivers an inspiring British & International Curriculum in Lanet, Nakuru County. We nurture academic rigor, holistic talents, Christian character, and leadership opportunities for day and boarding scholars.
            </p>

            <div className="p-4 rounded-sm bg-[#071321] border border-[#D4AF37]/30 space-y-2">
              <p className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>Day & Boarding Excellence</span>
              </p>
              <p className="text-xs text-gray-300">
                Offering separate, secure boys and girls boarding facilities in Lanet (~4 km apart).
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {[
                { label: 'About St. Gabriel', path: '/about' },
                { label: 'Academics & Curriculum', path: '/academics' },
                { label: 'Student Life', path: '/student-life' },
                { label: 'Boarding Experience', path: '/boarding' },
                { label: 'Admissions Process', path: '/admissions' },
                { label: 'Fees & Requirements', path: '/fees-and-requirements' },
                { label: 'Downloads & Forms', path: '/downloads' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Curriculum Stages */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              Curriculum Stages
            </h3>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider">
              {[
                { label: 'EYFS (Ages 2–5)', path: '/academics/eyfs' },
                { label: 'Primary (Years 1–6)', path: '/academics/primary' },
                { label: 'Lower Secondary (Years 7–9)', path: '/academics/lower-secondary' },
                { label: 'Cambridge IGCSE (Years 10–11)', path: '/academics/igcse' },
                { label: 'A-Level (Years 12–13)', path: '/academics/a-level' },
                { label: 'Photo Gallery', path: '/gallery' },
                { label: 'News & Events', path: '/news' }
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="group inline-flex items-center gap-1.5 text-gray-300 hover:text-[#D4AF37] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#D4AF37] group-hover:translate-x-1 transition-transform" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Admissions */}
          <div>
            <h3 className="font-serif text-base font-bold uppercase tracking-wider text-white mb-4 border-b border-[#D4AF37]/30 pb-2 inline-block">
              Contact Admissions
            </h3>
            <ul className="space-y-3 text-xs uppercase tracking-wider">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                <span className="normal-case text-gray-300">Lanet, Nakuru County, Kenya</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors font-mono"
                >
                  {SCHOOL_INFO.contacts.mainPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.contacts.enquiryPhoneRaw}`}
                  className="hover:text-[#D4AF37] transition-colors font-mono"
                >
                  {SCHOOL_INFO.contacts.enquiryPhone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#25D366] font-semibold hover:underline"
                >
                  WhatsApp Us
                </a>
              </li>
              <li className="flex items-center gap-2.5 pt-2">
                <Mail className="w-4 h-4 text-[#D4AF37] flex-shrink-0" />
                <a
                  href={`mailto:${SCHOOL_INFO.contacts.email}`}
                  className="hover:text-[#D4AF37] transition-colors lowercase tracking-normal text-gray-300"
                >
                  {SCHOOL_INFO.contacts.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Developer Attribution & Copyright Bar */}
      <div className="bg-[#071321] border-t border-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center md:text-left">
          <div>
            <p className="tracking-wide">
              &copy; {new Date().getFullYear()} <span className="text-white font-semibold">{SCHOOL_INFO.name}</span>. All Rights Reserved. Motto: &quot;{SCHOOL_INFO.motto}&quot;
            </p>
          </div>

          <div className="p-2 px-4 rounded-sm bg-[#0A192F] border border-[#D4AF37]/30 text-gray-300">
            <p className="flex items-center justify-center md:justify-end gap-1.5 font-medium">
              <span>Website by:</span>
              <a
                href={SCHOOL_INFO.developer.website}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-[#D4AF37] hover:underline inline-flex items-center gap-1"
              >
                <span>{SCHOOL_INFO.developer.name}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
            <p className="text-[10px] text-[#D4AF37] italic mt-0.5 tracking-wider">
              &quot;{SCHOOL_INFO.developer.tagline}&quot;
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
};
