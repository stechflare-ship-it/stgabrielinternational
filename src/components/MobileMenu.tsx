import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X, ChevronDown, Phone, MessageCircle, ArrowRight, ShieldCheck, Downloa} from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';
import { SCHOOL_INFO } from '../data/schoolData';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [academicsOpen, setAcademicsOpen] = useState(true);

  if (!isOpen) return null;

  const academicsSublinks = [
    { name: '🎓 Academics Hub & Comparison', path: '/academics' },
    { name: '🇰🇪 CBC Pre-Primary (PP1 & PP2)', path: '/academics/cbc-pre-primary' },
    { name: '🇰🇪 CBC Lower Primary (Grades 1-3)', path: '/academics/cbc-lower-primary' },
    { name: '🇰🇪 CBC Upper Primary & KPSEA (Grades 4-6)', path: '/academics/cbc-upper-primary' },
    { name: '🇰🇪 CBC Junior Secondary (JSS Grades 7-9)', path: '/academics/cbc-junior-secondary' },
    { name: '🇰🇪 CBC Senior Secondary (Grades 10-12)', path: '/academics/cbc-senior-school' },
    { name: '🇬🇧 EYFS (Playgroup - Reception)', path: '/academics/eyfs' },
    { name: '🇬🇧 British Primary (Years 1 - 6)', path: '/academics/primary' },
    { name: '🇬🇧 Lower Secondary (Years 7 - 9)', path: '/academics/lower-secondary' },
    { name: '🇬🇧 British IGCSE (Years 10 - 11)', path: '/academics/igcse' },
    { name: '🇬🇧 A-Level (Years 12 - 13)', path: '/academics/a-level' },
  ];

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Faculty & Staff', path: '/staff' },
    { name: 'Student Life', path: '/student-life' },
    { name: 'Boarding (Boys & Girls)', path: '/boarding' },
    { name: 'Admissions', path: '/admissions' },
    { name: 'Fees & Requirements', path: '/fees-and-requirements' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog & Articles', path: '/blog' },
  ];

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden bg-black/80 backdrop-blur-md transition-opacity duration-300"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10 w-full sm:max-w-md">
        <div className="w-full bg-[#071321] text-white shadow-2xl flex flex-col justify-between border-l border-[#C59B27]/30">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-gray-800 flex items-center bg-[#5CE1E6] justify-between">
            <Logo variant="light" showTagline={false} />
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-blue-600 hover:text-red-400 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#C59B27]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links Body */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 space-y-2">
            <Link
              to="/"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                location.pathname === '/' ? 'bg-[#C59B27] text-[#0B1D33]' : 'hover:bg-white/5 text-gray-200'
              }`}
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                location.pathname === '/about' ? 'bg-[#C59B27] text-[#0B1D33]' : 'hover:bg-white/5 text-gray-200'
              }`}
            >
              About St Gabriel\'s
            </Link>

            {/* Academics Accordion */}
            <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
              <button
                onClick={() => setAcademicsOpen(!academicsOpen)}
                className="w-full flex items-center justify-between px-3.5 py-3 text-base font-semibold text-[#E0BA43] hover:bg-white/5 focus:outline-none"
              >
                <span>Academics & Curriculum</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${academicsOpen ? 'transform rotate-180' : ''}`}
                />
              </button>

              {academicsOpen && (
                <div className="pl-4 pr-2 pb-3 space-y-1 bg-[#0B1D33]/60 border-t border-white/5">
                  {academicsSublinks.map((sub) => (
                    <Link
                      key={sub.path}
                      to={sub.path}
                      onClick={onClose}
                      className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                        location.pathname === sub.path ? 'text-[#C59B27] font-bold bg-white/10' : 'text-gray-300 hover:text-white'
                      }`}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {mainLinks.slice(2).map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className={`block px-3 py-2.5 rounded-lg text-base font-semibold transition-colors ${
                  location.pathname === link.path ? 'bg-[#C59B27] text-[#0B1D33]' : 'hover:bg-white/5 text-gray-200'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Quick Contact & Action Footer */}
          <div className="p-4 sm:p-6 border-t border-gray-800 bg-[#0B1D33] space-y-3">
            <Button
              to="/admissions"
              onClick={onClose}
              variant="primary"
              size="lg"
              className="w-full uppercase tracking-wider font-bold"
              icon={<ArrowRight className="w-5 h-5" />}
            >
              ENROLL NOW
            </Button>

            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#1E3A8A] text-white text-xs font-bold hover:bg-[#1d4ed8] transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba5a] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <p className="text-[10px] text-center text-gray-400 pt-2 flex items-center justify-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Lanet, Nakuru County, Kenya</span>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
