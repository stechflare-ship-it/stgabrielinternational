import React from 'react';
import { BOARDING_FEES, OTHER_CHARGES } from '../data/schoolData';
import { CreditCard, ShieldAlert } from 'lucide-react';

export const FeeTable: React.FC = () => {
  return (
    <div className="w-full space-y-10 my-8">
      
      {/* Boarding Fees Table Header */}
      <div className="border border-gray-200 rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="bg-[#0B1D33] text-white p-5 sm:p-6 border-b border-[#C59B27]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-[#E0BA43]">
              Official Schedule
            </span>
            <h3 className="font-serif text-xl sm:text-2xl font-bold">
              Boarding Fees Breakdown (KSh)
            </h3>
          </div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] border border-[#C59B27]/40 text-xs font-bold w-fit">
            <CreditCard className="w-3.5 h-3.5 text-[#C59B27]" />
            <span>Per Term Billing</span>
          </span>
        </div>

        {/* Desktop Table View (md and up) */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#162E4D] text-white text-xs uppercase tracking-wider font-semibold border-b border-gray-700">
                <th className="py-4 px-6">Grade / Level</th>
                <th className="py-4 px-6 text-right">Term 1 (KSh)</th>
                <th className="py-4 px-6 text-right">Term 2 (KSh)</th>
                <th className="py-4 px-6 text-right">Term 3 (KSh)</th>
                <th className="py-4 px-6 text-right text-[#E0BA43] font-bold">Annual Total (KSh)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-sm font-medium text-gray-800">
              {BOARDING_FEES.map((row) => (
                <tr key={row.gradeGroup} className="hover:bg-[#FAF5E6] transition-colors">
                  <td className="py-4 px-6 font-bold text-[#0B1D33]">{row.gradeGroup}</td>
                  <td className="py-4 px-6 text-right font-mono">{row.term1.toLocaleString()}</td>
                  <td className="py-4 px-6 text-right font-mono">{row.term2.toLocaleString()}</td>
                  <td className="py-4 px-6 text-right font-mono">{row.term3.toLocaleString()}</td>
                  <td className="py-4 px-6 text-right font-mono font-bold text-[#C59B27]">
                    KSh {row.totalAnnual.toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Stacked Cards View (< md) */}
        <div className="block md:hidden p-4 space-y-4 bg-gray-50">
          {BOARDING_FEES.map((row) => (
            <div key={row.gradeGroup} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                <span className="font-bold text-[#0B1D33] text-sm">{row.gradeGroup}</span>
                <span className="text-xs font-bold text-[#C59B27] bg-[#FAF5E6] px-2 py-0.5 rounded">
                  Annual: KSh {row.totalAnnual.toLocaleString()}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="p-2 bg-gray-50 rounded">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Term 1</span>
                  <span className="font-mono font-bold text-[#0B1D33] mt-0.5 block">KSh {row.term1.toLocaleString()}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Term 2</span>
                  <span className="font-mono font-bold text-[#0B1D33] mt-0.5 block">KSh {row.term2.toLocaleString()}</span>
                </div>
                <div className="p-2 bg-gray-50 rounded">
                  <span className="block text-[10px] text-gray-500 uppercase font-bold">Term 3</span>
                  <span className="font-mono font-bold text-[#0B1D33] mt-0.5 block">KSh {row.term3.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other School Charges Section */}
      <div className="border border-gray-200 rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="bg-[#162E4D] text-white p-5 border-b border-[#C59B27]/40">
          <h3 className="font-serif text-lg font-bold text-white">
            Other School Charges & Statutory Fees
          </h3>
          <p className="text-xs text-gray-300 mt-0.5">
            Applicable upon admission and annual commencement.
          </p>
        </div>

        <div className="p-4 sm:p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {OTHER_CHARGES.map((charge) => (
            <div
              key={charge.item}
              className="p-4 rounded-xl bg-gray-50 border border-gray-200 hover:border-[#C59B27] transition-colors"
            >
              <span className="text-[11px] uppercase tracking-wider font-bold text-gray-500 block">
                {charge.frequency}
              </span>
              <h4 className="font-bold text-sm text-[#0B1D33] my-1">
                {charge.item}
              </h4>
              <p className="font-mono text-lg font-extrabold text-[#C59B27]">
                KSh {charge.amount.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
