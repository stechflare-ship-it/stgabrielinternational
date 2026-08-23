import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Home, Heart, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import facilitiesImg from '../assets/images/boardinglife/boardingfacility.webp';
import boardingCompoundImg from '../assets/images/boardinglife/boardingbackground.webp';

const facilities = facilitiesImg;
const PLACEHOLDER_BOARDING = boardingCompoundImg;

export const BoardingSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-[#0B1D33] via-[#071321] to-[#162E4D] text-white py-16 sm:py-24 relative overflow-hidden rounded-3xl my-12 border border-[#C59B27]/30 shadow-2xl">
      
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#C59B27]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Column 1: Editorial Information */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/40 text-[#E0BA43] text-xs font-bold uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
              <span>Day & Boarding Options</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
              A Safe, Nurturing & Dedicated <span className="text-[#E0BA43]">Boarding Experience</span>
            </h2>

            <p className="text-gray-300 text-base leading-relaxed">
              At St Gabriel\'s International School, we provide both Day School options and structured Boarding programs for boys and girls in Lanet, Nakuru County.
            </p>

            {/* CRITICAL PROMPT HIGHLIGHT: Separate Boarding ~4 km apart */}
            <div className="p-5 rounded-2xl bg-[#071321]/90 border-2 border-[#C59B27] shadow-xl space-y-3">
              <div className="flex items-center gap-2 text-[#E0BA43] font-bold text-sm uppercase tracking-wider">
                <MapPin className="w-5 h-5 text-[#C59B27]" />
                <span>Distinct Separate Boarding Compounds</span>
              </div>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                <strong className="text-white font-semibold">Important Notice for Parents:</strong> Our boys and girls have completely separate boarding arrangements located approximately <strong className="text-[#E0BA43] font-bold">4 kilometers apart in Lanet</strong>. This provides secure, focused, and tailored pastoral care environments for both young men and ladies.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Home className="w-5 h-5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white uppercase tracking-wider">Supervised Study Prep</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Dedicated evening academic prep guided by resident teachers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
                <Heart className="w-5 h-5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-xs text-white uppercase tracking-wider">Pastoral & Health Care</h4>
                  <p className="text-xs text-gray-300 mt-0.5">Experienced house parents and round-the-clock medical care.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Button
                to="/boarding"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Learn More About Boarding
              </Button>

              <Button
                to="/fees-and-requirements"
                variant="secondary"
                size="md"
              >
                View Boarding Fees
              </Button>
            </div>
          </div>

          {/* Column 2: Visual Media Grid */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40">
              <img
                src={facilities}
                alt="St Gabriel\'s Boarding Facilities in Lanet"
                className="w-full h-80 sm:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#071321] via-transparent to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-[#0B1D33]/90 backdrop-blur-md p-4 rounded-xl border border-[#C59B27]/30">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-[#E0BA43] font-bold uppercase tracking-wider">
                      Boarding Facilities • Lanet, Nakuru
                    </span>
                    <h4 className="font-serif font-bold text-sm text-white">
                      Holistic Discipline & Christian Character
                    </h4>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold uppercase">
                    4 km Apart
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
