import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { FeeTable } from '../components/FeeTable';
import { BankPaymentCard } from '../components/BankPaymentCard';
import { PaybillCard } from '../components/PaybillCard';
import { PaymentPolicy } from '../components/PaymentPolicy';
import { RequirementsChecklist } from '../components/RequirementsChecklist';

export const FeesPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Fees Structure & Junior Requirements | St. Gabriel Nakuru"
        description="Official school fee structure, Equity Bank details, M-Pesa Paybill payment instructions, and junior boarding requirements for St. Gabriel International School."
        canonicalPath="/fees-and-requirements"
        breadcrumbs={[{ name: 'Fees & Requirements', path: '/fees-and-requirements' }]}
      />

      <Breadcrumbs items={[{ label: 'Fees & Requirements', path: '/fees-and-requirements' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Cashless Payment Policy • Equity Bank & M-Pesa Paybill
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            School Fees & Requirements Guide
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
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
