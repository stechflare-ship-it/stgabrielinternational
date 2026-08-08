import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { AdmissionForm } from '../components/AdmissionForm';
import { SCHOOL_INFO } from '../data/schoolData';
import { CheckCircle2, Phone, MessageCircle, FileText, Calendar } from 'lucide-react';
import { Button } from '../components/Button';

export const AdmissionsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Admissions & Application Guide | St. Gabriel Nakuru"
        description="Apply for admission to St. Gabriel International School in Lanet, Nakuru. British & International Curriculum for Day and Boarding scholars."
        canonicalPath="/admissions"
        breadcrumbs={[{ name: 'Admissions', path: '/admissions' }]}
      />

      <Breadcrumbs items={[{ label: 'Admissions', path: '/admissions' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Admissions Open 2026/2027
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Join the St. Gabriel Family
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Enroll your child in EYFS, Primary, Lower Secondary, Cambridge IGCSE, or A-Level at our serene Lanet campus in Nakuru.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Left Column: Admission Process & Contacts */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-md space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#0B1D33] flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[#C59B27]" />
                <span>Admission Steps</span>
              </h3>
              <ol className="space-y-4 text-xs text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <strong className="text-[#0B1D33] block">Submit Application Form</strong>
                    Complete the online enquiry form or visit our admissions office in Lanet.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <strong className="text-[#0B1D33] block">Placement & Interaction</strong>
                    Learners participate in a friendly academic assessment and informal interview.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <strong className="text-[#0B1D33] block">Offer & Registration</strong>
                    Receive formal letter of admission and requirements checklist.
                  </div>
                </li>
              </ol>
            </div>

            <div className="bg-[#0B1D33] text-white p-6 rounded-2xl border border-[#C59B27]/40 space-y-4">
              <h3 className="font-serif font-bold text-xl text-[#E0BA43]">Direct Admissions Helpline</h3>
              <p className="text-xs text-gray-300">
                Our admissions officers are available to assist you with inquiries, campus visits, and fee breakdowns.
              </p>
              <div className="space-y-3 pt-2">
                <a
                  href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-bold text-white border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#C59B27]" />
                  <span>Main Line: {SCHOOL_INFO.contacts.mainPhone}</span>
                </a>
                <a
                  href={`tel:${SCHOOL_INFO.contacts.enquiryPhoneRaw}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-all text-xs font-bold text-white border border-white/20"
                >
                  <Phone className="w-4 h-4 text-[#C59B27]" />
                  <span>Enquiries: {SCHOOL_INFO.contacts.enquiryPhone}</span>
                </a>
                <a
                  href={`https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] transition-all text-xs font-bold text-white shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Admission Form */}
          <div className="lg:col-span-2">
            <AdmissionForm />
          </div>

        </div>
      </section>
    </div>
  );
};
