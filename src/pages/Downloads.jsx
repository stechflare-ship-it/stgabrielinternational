import React from 'react';
import SEO from '../components/SEO/SEO';
import libraryHeroImg from '../assets/images/optimized/library.webp';

export default function Downloads(){
  return (
    <div className="w-full">
      <SEO title="Downloads | St. Gabriel International School" description="Download forms, handbooks and school documents. Fee PDF available when uploaded." />

      {/* Hero Header */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-amber-400 overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={libraryHeroImg}
            alt="St. Gabriel School Library and Resources"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-bold uppercase tracking-widest border border-amber-400/40">
            Official Resources & Prospectus
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Downloads & School Documents
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Official documents, application forms, fee structures and handbooks for St. Gabriel International School in Lanet, Nakuru.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Fee Structure (PDF)</h4>
          <p className="text-sm text-gray-600 mt-2">Fee structure PDF coming soon. Please check back or contact admissions.</p>
        </div>

        <div className="bg-white p-4 rounded shadow">
          <h4 className="font-semibold">Admissions Form</h4>
          <p className="text-sm text-gray-600 mt-2">Download the admissions form when available.</p>
        </div>
      </div>
    </div>
  </div>
);
}
