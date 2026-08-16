import React, { useEffect } from 'react';
import {
  X,
  GraduationCap,
  Briefcase,
  Quote,
  Mail,
  Phone,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';
import { StaffMember } from '../types';

interface StaffModalProps {
  member: StaffMember | null;
  isOpen: boolean;
  onClose: () => void;
}

export const StaffModal: React.FC<StaffModalProps> = ({
  member,
  isOpen,
  onClose
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !member) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-[#071321]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 md:p-6 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="staff-modal-title"
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-[#D4AF37]/40 overflow-hidden my-6 transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-[#D4AF37]/20 text-[#D4AF37]">
              <ShieldCheck className="w-5 h-5" />
            </span>
            <div>
              <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-bold block">
                Executive Administration Profile
              </span>
              <h4 className="text-white font-serif text-sm font-semibold truncate max-w-xs sm:max-w-md">
                St. Gabriel International School
              </h4>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-[#D4AF37] text-white hover:text-[#0A192F] transition-all focus:outline-none focus:ring-2 focus:ring-[#D4AF37]"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body Content */}
        <div className="p-6 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {/* Profile Header (Photo + Name + Role + Dept) */}
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 rounded-2xl bg-gradient-to-br from-[#0B1D33]/5 to-[#D4AF37]/10 border border-gray-200">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-white flex-shrink-0 bg-slate-900">
              <img
                src={member.image}
                alt={member.name}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://placehold.co/400x400/0B1D33/E0BA43?text=${encodeURIComponent(member.name)}`;
                }}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-2xl"></div>
            </div>

            <div className="flex-1 text-center sm:text-left space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0B1D33] text-[#D4AF37] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3 h-3" />
                <span>{member.department}</span>
              </div>

              <h3
                id="staff-modal-title"
                className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D33]"
              >
                {member.name}
              </h3>

              <p className="text-sm sm:text-base font-semibold text-[#C59B27]">
                {member.role}
              </p>

              {member.welcomeMessage && (
                <div className="pt-2">
                  <div className="relative p-3.5 rounded-xl bg-white border border-[#D4AF37]/30 shadow-sm text-xs sm:text-sm text-gray-700 italic flex gap-2">
                    <Quote className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span>&quot;{member.welcomeMessage}&quot;</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Qualifications & Credentials Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-[#0B1D33] border-b border-gray-200 pb-2">
              <GraduationCap className="w-5 h-5 text-[#C59B27]" />
              <h4 className="font-serif font-bold text-base sm:text-lg">
                Academic Qualifications & Certifications
              </h4>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-800 leading-relaxed font-medium">
              {member.qualification}
            </div>
          </div>

          {/* Leadership Experience */}
          {member.experience && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#0B1D33] border-b border-gray-200 pb-2">
                <Briefcase className="w-5 h-5 text-[#C59B27]" />
                <h4 className="font-serif font-bold text-base sm:text-lg">
                  Leadership Background & Professional Experience
                </h4>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 leading-relaxed">
                {member.experience}
              </div>
            </div>
          )}

          {/* Full Welcome Message / Address to Parents & Scholars */}
          {member.detailedMessage && member.detailedMessage.length > 0 && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-[#0B1D33] border-b border-gray-200 pb-2">
                <Award className="w-5 h-5 text-[#C59B27]" />
                <h4 className="font-serif font-bold text-base sm:text-lg">
                  Executive Address & Vision
                </h4>
              </div>
              <div className="p-5 rounded-2xl bg-[#0A192F]/5 border border-[#D4AF37]/30 space-y-3 text-xs sm:text-sm text-gray-800 leading-relaxed">
                {member.detailedMessage.map((para, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}

          {/* Contact / Office Details */}
          {(member.email || member.phone) && (
            <div className="pt-2 border-t border-gray-200 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-600">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center gap-1.5 text-blue-900 hover:text-[#C59B27] transition-colors"
                  >
                    <Mail className="w-4 h-4 text-[#C59B27]" />
                    <span>{member.email}</span>
                  </a>
                )}
                {member.phone && (
                  <a
                    href={`tel:${member.phone}`}
                    className="inline-flex items-center gap-1.5 text-blue-900 hover:text-[#C59B27] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#C59B27]" />
                    <span>{member.phone}</span>
                  </a>
                )}
              </div>

              <button
                onClick={onClose}
                className="px-5 py-2 rounded-xl bg-[#0B1D33] text-white hover:bg-[#C59B27] hover:text-[#0B1D33] text-xs font-bold transition-all shadow"
              >
                Close Window
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
