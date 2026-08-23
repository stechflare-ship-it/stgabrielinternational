import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const whatsappUrl = `https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`;

  return (
    <div
      className="fixed bottom-6 left-4 sm:left-6 z-40 flex flex-col items-start gap-2"
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      {showTooltip && (
        <div className="relative bg-[#0B1D33] text-white text-xs px-3 py-2 rounded-lg shadow-xl border border-[#C59B27]/40 max-w-[240px] animate-fade-in flex items-start gap-2">
          <div>
            <p className="font-semibold text-[#E0BA43] text-[11px] uppercase tracking-wider">
              Need Help / Enquiries?
            </p>
            <p className="text-[11px] text-gray-200 mt-0.5">
              Chat directly with St Gabriel's Admissions on WhatsApp!
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-gray-400 hover:text-white p-0.5 focus:outline-none"
            aria-label="Close WhatsApp tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          {/* Arrow */}
          <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-[#0B1D33] border-b border-r border-[#C59B27]/40 transform rotate-45"></div>
        </div>
      )}

      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/50"
        aria-label="Chat with St Gabriel\'s International School on WhatsApp"
        title="Chat on WhatsApp +254 724 694 554"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none"></span>

        {/* Hover label for desktop */}
        <span className="absolute left-16 bg-[#0B1D33] text-white text-xs font-semibold px-3 py-1.5 rounded-md shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none border border-[#C59B27]">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
