import React from 'react';
import { AlertTriangle, Clock, Calendar, ShieldAlert } from 'lucide-react';

export const PaymentPolicy: React.FC = () => {
  return (
    <div className="w-full bg-[#071321] text-white rounded-3xl p-6 sm:p-8 border-2 border-[#C59B27] shadow-2xl my-8 space-y-6">
      
      {/* Strict Banner */}
      <div className="flex items-center gap-3 p-4 rounded-xl bg-red-950/80 border border-red-500/50 text-red-200">
        <ShieldAlert className="w-7 h-7 text-red-400 flex-shrink-0" />
        <div>
          <h4 className="font-serif font-extrabold text-base sm:text-lg tracking-wider text-red-300">
            STRICT POLICY: NO CASH PAYMENTS
          </h4>
          <p className="text-xs text-red-200 mt-0.5">
            For security and auditing compliance, all payments must be made strictly through Equity Bank deposit or M-Pesa Paybill. No staff member is authorized to accept cash.
          </p>
        </div>
      </div>

      {/* Two Installment Visual Timeline */}
      <div className="space-y-4">
        <h3 className="font-serif text-xl font-bold text-[#E0BA43] flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#C59B27]" />
          <span>Fee Installment Timeline</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
          
          {/* Installment 1 */}
          <div className="relative p-6 rounded-2xl bg-[#0B1D33] border-2 border-[#C59B27] space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#C59B27] text-[#0B1D33] font-extrabold text-xs uppercase tracking-wider">
                Installment 1
              </span>
              <span className="font-mono text-2xl font-black text-[#E0BA43]">
                75%
              </span>
            </div>

            <h4 className="font-bold text-base text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59B27]" />
              <span>Opening Day Payment</span>
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed">
              75% of total termly fees must be cleared on or before the official term opening day prior to student admission to dormitories and classes.
            </p>
          </div>

          {/* Installment 2 */}
          <div className="relative p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 space-y-3">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-white/10 text-gray-200 font-bold text-xs uppercase tracking-wider">
                Installment 2
              </span>
              <span className="font-mono text-2xl font-black text-white">
                25%
              </span>
            </div>

            <h4 className="font-bold text-base text-white flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#C59B27]" />
              <span>4th of Following Month</span>
            </h4>

            <p className="text-xs text-gray-300 leading-relaxed">
              The remaining 25% balance must be fully cleared strictly by the 4th day of the month following term opening.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
};
