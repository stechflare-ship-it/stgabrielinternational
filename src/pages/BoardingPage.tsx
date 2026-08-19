import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { BoardingSection } from '../components/BoardingSection';
import { FeeTable } from '../components/FeeTable';
import { RequirementsChecklist } from '../components/RequirementsChecklist';
import boardingbackground from '../assets/images/boardinglife/boardingbackground.webp ';
const boardingbackground = boardingFacilitiesWebp;

export const BoardingPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Boarding Facilities & Pastoral Care | St. Gabriel Nakuru"
        description="Separate boys and girls boarding facilities located ~4km apart in Lanet, Nakuru. Pastoral care, home-away-from-home environment, and disciplined study routines."
        keywords="boarding school nakuru, separate boys girls boarding kenya, primary boarding school, junior secondary boarding, lanet dormitories, christian boarding school nakuru"
        canonicalPath="/boarding"
        ogType="website"
        ogTitle="Modern Boarding Facilities & Pastoral Care · St. Gabriel Nakuru"
        ogDescription="Secure, nurturing, home-away-from-home residential life in Lanet, Nakuru with dedicated house parents, nutritious dining, and evening prep."
        breadcrumbs={[{ name: 'Boarding', path: '/boarding' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Boarding Life & Facilities at St. Gabriel',
          description: 'Comprehensive overview of separate residential compounds, safety, nutritional meal planning, evening prep routines, and medical care.'
        }}
      />

      <Breadcrumbs items={[{ label: 'Boarding Life', path: '/boarding' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={boardingbackground}
            alt="St. Gabriel Boarding Facilities"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Separate Compounds ~4km Apart • Lanet, Nakuru
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Boarding Life & Pastoral Care
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Providing a secure, loving, home-away-from-home living environment for boys and girls with dedicated house parents, nutritious meals, and structured evening prep.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <BoardingSection />

        <div className="space-y-6">
          <SectionHeading
            badge="Boarding Tariffs"
            title="Boarding Fees Structure"
            subtitle="Clear, transparent termly fee schedules for Grades 1 through 6."
          />
          <FeeTable />
        </div>

        <RequirementsChecklist />
      </section>
    </div>
  );
};
