import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { BoardingSection } from '../components/BoardingSection';
import { FeeTable } from '../components/FeeTable';
import { RequirementsChecklist } from '../components/RequirementsChecklist';

export const BoardingPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Boarding Facilities & Pastoral Care | St. Gabriel Nakuru"
        description="Separate boys and girls boarding facilities located ~4km apart in Lanet, Nakuru. Pastoral care, home-away-from-home environment, and disciplined study routines."
        canonicalPath="/boarding"
        breadcrumbs={[{ name: 'Boarding', path: '/boarding' }]}
      />

      <Breadcrumbs items={[{ label: 'Boarding Life', path: '/boarding' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Separate Compounds ~4km Apart • Lanet, Nakuru
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Boarding Life & Pastoral Care
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
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
