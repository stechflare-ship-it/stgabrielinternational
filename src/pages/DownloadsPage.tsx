import React, { useState } from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DOWNLOAD_DOCUMENTS } from '../data/schoolData';
import { Download, ExternalLink, CheckCircle2, ShieldCheck } from 'lucide-react';
import downloadBg from '../assets/images/backgrounds/download.webp';
import { generateAndDownloadPDF, openPDFPreview } from '../utils/pdfGenerator';

export const DownloadsPage: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = async (doc: typeof DOWNLOAD_DOCUMENTS[0]) => {
    setDownloadingId(doc.id);
    try {
      await generateAndDownloadPDF(doc.id);
    } catch (e) {
      console.error('PDF generation error:', e);
    } finally {
      setTimeout(() => {
        setDownloadingId(null);
      }, 1200);
    }
  };

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Downloadable School Documents & Prospectus | St Gabriel\'s Nakuru"
        description="Download official St Gabriel\'s International School prospectus, term calendars, fee structures, boarding handbooks, and requirements checklists."
        keywords="school prospectus download, st gabriel forms, fee structure pdf, term dates calendar nakuru, boarding checklist download"
        canonicalPath="/downloads"
        ogType="website"
        ogTitle="Official School Documents & Prospectus Downloads · St Gabriel\'s"
        ogDescription="Download official PDF school documents including prospectus, term calendars, fees breakdowns, and boarding requirements."
        breadcrumbs={[{ name: 'Downloads', path: '/downloads' }]}
      />

      <Breadcrumbs items={[{ label: 'Document Downloads', path: '/downloads' }]} />

      {/* Hero Header */}
      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={downloadBg}
            alt="St Gabriel\'s School Library and Resources"
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

      {/* Documents Grid */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOWNLOAD_DOCUMENTS.map((doc) => {
            const isDownloading = downloadingId === doc.id;

            return (
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

                <div className="pt-3 flex items-center justify-between border-t border-gray-100 flex-wrap gap-2">
                  <span className="text-[11px] text-gray-400">Updated: {doc.updatedDate}</span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => openPDFPreview(doc.id)}
                      className="px-3 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-[#0B1D33] text-xs font-semibold transition-all inline-flex items-center gap-1.5 cursor-pointer"
                      title="Open in new tab to read or print"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-gray-600" />
                      <span>View</span>
                    </button>

                    <button
                      onClick={() => handleDownload(doc)}
                      className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-2 shadow-sm cursor-pointer ${
                        isDownloading
                          ? 'bg-emerald-600 text-white'
                          : 'bg-[#0B1D33] hover:bg-[#C59B27] hover:text-[#0B1D33] text-white'
                      }`}
                      aria-label={`Download ${doc.title}`}
                    >
                      {isDownloading ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5 animate-bounce" />
                          <span>Downloading...</span>
                        </>
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          <span>Download PDF</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Security & Verification Guarantee Box */}
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Official Verification Notice:</strong> All downloadable documents are digitally certified by the St Gabriel\'s International School Registrar and Board of Management for the 2026/2027 academic session.
          </span>
        </div>
      </section>
    </div>
  );
};