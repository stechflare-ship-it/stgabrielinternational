import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FeeTable } from '../components/FeeTable';
import { BankPaymentCard } from '../components/BankPaymentCard';
import { PaybillCard } from '../components/PaybillCard';
import { PaymentPolicy } from '../components/PaymentPolicy';
import { RequirementsChecklist } from '../components/RequirementsChecklist';
import feesBg from '../../src/assets/images/backgrounds/feespageBg.webp';

export const FeesPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Fees Structure & Boarding Requirements 2026 | St. Gabriel's Mission Nakuru"
        description="Official school fee structure, Equity Bank account details, M-Pesa Paybill payment instructions, and junior boarding requirements for St. Gabriel's Mission International School."
        keywords="school fees nakuru, st gabriel's Mission fee structure, boarding fees kenya, equity bank school account, mpesa paybill school fees, boarding requirements list"
        canonicalPath="/fees-and-requirements"
        ogType="website"
        ogTitle="Official Fee Structure & Payment Policies · St. Gabriel Nakuru"
        ogDescription="Clear, transparent termly tuition and boarding tariffs with secure cashless banking and M-Pesa Paybill options."
        breadcrumbs={[{ name: 'Fees & Requirements', path: '/fees-and-requirements' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Fees and Requirements at St. Gabriel's Mission International School',
          description: 'Official schedule of tuition and boarding fees, payment methods, bank accounts, and student supplies requirements.'
        }}
      />

      <Breadcrumbs items={[{ label: 'Fees & Requirements', path: '/fees-and-requirements' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={feesBg}
            alt="St. Gabriel Classroom Facilities"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Cashless Payment Policy • Equity Bank & M-Pesa Paybill
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            School Fees & Requirements Guide
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
            Transparent termly boarding fees, cashless payment options, installment timelines, and junior section student boarding checklists.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <FeeTable />

        <div className="space-y-6">
          <SectionHeading
            badge="Official Payment Channels"
            title="Equity Bank & M-Pesa Paybill"
            subtitle="STRICT POLICY: NO CASH PAYMENTS AT SCHOOL OFFICE. Payments must be deposited via Bank or Paybill."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BankPaymentCard />
            <PaybillCard />
          </div>
        </div>

        <PaymentPolicy />

        <RequirementsChecklist />
      </section>
    </div>
  );
};
