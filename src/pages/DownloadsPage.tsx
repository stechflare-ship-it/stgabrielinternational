import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { DOWNLOAD_DOCUMENTS } from '../data/schoolData';
import { Download, FileText, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import libraryHeroWebp from '../assets/images/optimized/library.webp';
const libraryHeroImg = libraryHeroWebp;

export const DownloadsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Downloadable School Documents & Prospectus | St. Gabriel Nakuru"
        description="Download official St. Gabriel International School prospectus, term calendars, fee structures, boarding handbooks, and requirements checklists."
        canonicalPath="/downloads"
        breadcrumbs={[{ name: 'Downloads', path: '/downloads' }]}
      />

      <Breadcrumbs items={[{ label: 'Document Downloads', path: '/downloads' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={libraryHeroImg}
            alt="St. Gabriel School Library and Resources"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Download className="w-3.5 h-3.5" />
            <span>Official Resources & Guides</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Downloads & Documents Center
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Access downloadable PDF documents including our official prospectus, termly fee schedules, student requirements, and term calendar.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOWNLOAD_DOCUMENTS.map((doc) => (
            <div
              key={doc.id}
              className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded bg-[#0B1D33] text-[#E0BA43] text-[10px] font-extrabold uppercase">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-gray-500 font-mono">
                    {doc.format} • {doc.fileSize}
                  </span>
                </div>

                <h3 className="font-serif font-bold text-lg text-[#0B1D33]">
                  {doc.title}
                </h3>

                <p className="text-xs text-gray-600 leading-relaxed">
                  {doc.description}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-gray-100">
                <span className="text-[11px] text-gray-400">Updated: {doc.updatedDate}</span>
                <button
                  onClick={() => alert(`Downloading: ${doc.title}`)}
                  className="px-4 py-2 rounded-xl bg-[#0B1D33] hover:bg-[#C59B27] hover:text-[#0B1D33] text-white text-xs font-bold transition-all flex items-center gap-2 shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
