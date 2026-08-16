import React from 'react';
import { Building2, CheckCircle, CreditCard } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { PAYMENT_METHODS } from '../data/schoolData';

export const BankPaymentCard: React.FC = () => {
  const { bankName, accountName, accountNumber, branch } = PAYMENT_METHODS.bankDetails;

  return (
    <div className="bg-white rounded-2xl border-2 border-[#C59B27]/40 shadow-xl p-6 flex flex-col justify-between space-y-4">
      <div className="space-y-3">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#0B1D33] text-[#E0BA43] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Direct Bank Deposit</span>
              <h4 className="font-serif font-bold text-lg text-[#0B1D33]">{bankName}</h4>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#FAF5E6] text-[#A27B13] text-[10px] font-bold uppercase">
            Official Account
          </span>
        </div>

        <div className="space-y-2 text-xs">
          <div className="flex justify-between py-1 border-b border-gray-100">
            <span className="text-gray-500">Account Name:</span>
            <span className="font-bold text-[#0B1D33]">{accountName}</span>
          </div>

          <div className="flex justify-between items-center py-1.5 bg-gray-50 p-2.5 rounded-lg border border-gray-200">
            <div>
              <span className="text-[10px] text-gray-500 uppercase block font-bold">Account Number</span>
              <span className="font-mono text-base font-extrabold text-[#0B1D33] tracking-wider">
                {accountNumber}
              </span>
            </div>
            <CopyButton textToCopy={accountNumber} label="Copy Account" />
          </div>

          <div className="flex justify-between py-1">
            <span className="text-gray-500">Branch:</span>
            <span className="font-semibold text-gray-700">{branch}</span>
          </div>
        </div>
      </div>

      <div className="p-3 bg-[#FAF5E6] rounded-xl text-[11px] text-[#A27B13] flex items-start gap-2 border border-[#C59B27]/30">
        <CheckCircle className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
        <span>Present the bank deposit slip at the school bursar office or email to admissions@stgabriel.ac.ke</span>
      </div>
    </div>
  );
};
