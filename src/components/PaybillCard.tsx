import React from 'react';
import { Smartphone, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { CopyButton } from './CopyButton';
import { PAYMENT_METHODS } from '../data/schoolData';

export const PaybillCard: React.FC = () => {
  const { paybillNumber, accountFormat, accountExample, importantNote } = PAYMENT_METHODS.paybillDetails;

  return (
    <div className="bg-[#0B1D33] text-white rounded-2xl border-2 border-[#C59B27] shadow-xl p-6 flex flex-col justify-between space-y-5">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-700 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold">
              <Smartphone className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] text-[#E0BA43] font-bold uppercase tracking-wider">M-Pesa Mobile Payment</span>
              <h4 className="font-serif font-bold text-lg text-white">Equity Paybill 247247</h4>
            </div>
          </div>
          <span className="px-2.5 py-1 rounded-full bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/40 text-[10px] font-bold uppercase">
            Instant M-Pesa
          </span>
        </div>

        {/* Paybill Business Number */}
        <div className="bg-[#071321] p-3.5 rounded-xl border border-gray-700 flex items-center justify-between">
          <div>
            <span className="text-[10px] text-gray-400 uppercase block font-bold">Business Number (Paybill)</span>
            <span className="font-mono text-xl font-black text-[#E0BA43]">
              {paybillNumber}
            </span>
          </div>
          <CopyButton textToCopy={paybillNumber} label="Copy Paybill" />
        </div>

        {/* Account Number Format */}
        <div className="bg-[#071321] p-3.5 rounded-xl border-2 border-[#C59B27] space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] text-[#E0BA43] uppercase font-extrabold tracking-wider">
              Account Number Format
            </span>
            <CopyButton textToCopy="780824#" label="Copy 780824#" />
          </div>

          <div className="font-mono text-lg font-black text-white bg-[#162E4D] p-2.5 rounded-lg text-center tracking-wider border border-[#C59B27]/40">
            780824#NAME/CLASS
          </div>

          {/* CRITICAL WARNING FROM USER PROMPT */}
          <div className="p-2.5 rounded-lg bg-amber-950/80 border border-amber-500/50 text-amber-200 text-[11px] flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="font-medium">
              <strong className="text-amber-300 font-bold">CRITICAL:</strong> There must be <strong className="underline decoration-amber-400">NO SPACES</strong> in the account string. Enter <code className="bg-amber-900 px-1 py-0.5 rounded text-white font-mono">780824#</code> followed immediately by child&apos;s name and class.
            </p>
          </div>
        </div>

        {/* Step-by-Step Payment Instructions */}
        <div className="space-y-2 pt-1">
          <p className="text-xs font-bold text-[#E0BA43] uppercase tracking-wider">
            Step-by-Step Payment Instructions:
          </p>
          <ol className="space-y-1.5 text-xs text-gray-300 font-medium">
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-black flex items-center justify-center flex-shrink-0">1</span>
              <span>Go to M-Pesa menu and select <strong>Lipa na M-Pesa</strong> &gt; <strong>Paybill</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-black flex items-center justify-center flex-shrink-0">2</span>
              <span>Enter Business Number: <strong className="text-[#E0BA43] font-mono">247247</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-black flex items-center justify-center flex-shrink-0">3</span>
              <span>Enter Account Number: <strong className="text-white font-mono">780824#NAME/CLASS</strong></span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-black flex items-center justify-center flex-shrink-0">4</span>
              <span>Enter amount and your M-Pesa PIN</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-[#C59B27] text-[#0B1D33] text-[10px] font-black flex items-center justify-center flex-shrink-0">5</span>
              <span>Confirm payment details and press Send</span>
            </li>
          </ol>
        </div>
      </div>

      <div className="p-3 bg-[#162E4D] rounded-xl text-[11px] text-gray-200 flex items-center gap-2 border border-white/10">
        <CheckCircle2 className="w-4 h-4 text-[#25D366] flex-shrink-0" />
        <span>You will receive an instant M-Pesa confirmation SMS upon transaction completion.</span>
      </div>
    </div>
  );
};
