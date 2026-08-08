import React from 'react';
import { SITE_CONFIG } from '../../data/navigationData';

export default function WhatsAppButton(){
  const message = encodeURIComponent(
    "Hello St. Gabriel International School. I would like to make an enquiry about admission and would like more information."
  );

  const href = `${SITE_CONFIG.whatsapp}?text=${message}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact St. Gabriel on WhatsApp"
      title="Chat with us on WhatsApp"
      className={
        "fixed left-4 bottom-6 z-50 inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-600 text-white shadow-lg hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition-transform motion-safe:transform-gpu motion-safe:duration-200 motion-safe:hover:scale-105"
      }
      style={{
        // Respect safe-area insets on mobile
        paddingBottom: 'env(safe-area-inset-bottom, 6px)'
      }}
    >
      {/* WhatsApp icon (simple SVG) */}
      <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12 .5 11.8 11.8 0 0 0 .5 12c0 2.07.54 3.99 1.5 5.7L0 24l6.9-1.77A11.8 11.8 0 0 0 12 23.5c6.3 0 11.5-5.2 11.5-11.5 0-3.07-1.2-5.86-3.0-7.72z" fill="#25D366" opacity="0.0"/>
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.672.149s-.768.967-.942 1.167c-.173.199-.347.224-.644.075-.297-.149-1.255-.462-2.39-1.475-.885-.788-1.48-1.761-1.653-2.059-.173-.298-.018-.459.13-.607.133-.132.297-.347.446-.52.149-.173.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.672-1.618-.921-2.214-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.794.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487 0 0 .0.0.0.0.476.206.848.329 1.14.422.478.153.913.132 1.257.08.383-.057 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.123-.272-.198-.57-.347z" fill="white"/>
      </svg>

      <span className="sr-only">WhatsApp</span>
    </a>
  );
}
