import React, { useState } from 'react';

const FAQ = [
  {q: "What curriculum does St. Gabriel offer?", a: "St. Gabriel offers an international programme structured around the British Curriculum, including EYFS → Primary → Lower Secondary → IGCSE → A-Level."},
  {q: "Is the school day and boarding?", a: "Yes — St. Gabriel offers both day and boarding options for boys and girls. Boarding arrangements are separate for boys and girls."},
  {q: "How do I contact admissions?", a: "Call +254 720 349 748 or WhatsApp +254 724 694 554. You can also use the Admissions page form."},
  {q: "What is the Paybill number?", a: "Paybill: 247247 and Account format: 780824#NAME/CLASS"}
];

export default function ChatbotFallback(){
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  return (
    <>
      <button
        aria-label="Open help chat"
        title="Help & FAQs"
        onClick={() => setOpen(v => !v)}
        className="fixed right-4 bottom-6 z-50 inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-900 text-white shadow-lg hover:bg-blue-800 focus:outline-none"
      >
        <span className="sr-only">Chat</span>
        {/* chat icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <div className="fixed right-4 bottom-20 z-50 w-80 max-w-full bg-white rounded shadow-lg border">
          <div className="p-3 border-b flex justify-between items-center">
            <strong>Help & FAQs</strong>
            <button onClick={() => setOpen(false)} aria-label="Close" className="text-gray-500">✕</button>
          </div>
          <div className="p-3 max-h-64 overflow-y-auto">
            {FAQ.map((f, idx) => (
              <div key={idx} className="mb-3">
                <button onClick={() => setSelected(idx)} className="text-left w-full">
                  <div className="font-medium">{f.q}</div>
                </button>
                {selected === idx && (
                  <div className="mt-1 text-sm text-gray-700">{f.a}</div>
                )}
              </div>
            ))}
          </div>
          <div className="p-3 border-t text-sm text-gray-600">
            For other enquiries, contact Admissions or WhatsApp us.
          </div>
        </div>
      )}
    </>
  );
}
