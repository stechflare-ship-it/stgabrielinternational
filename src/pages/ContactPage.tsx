import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { ContactButtons } from '../components/ContactButtons';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Contact Us & Visit Lanet Campus | St. Gabriel Nakuru"
        description="Contact St. Gabriel International School in Lanet, Nakuru County, Kenya. Phone numbers, WhatsApp, email, and campus directions."
        canonicalPath="/contact"
        breadcrumbs={[{ name: 'Contact', path: '/contact' }]}
      />

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Lanet, Nakuru County, Kenya
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Contact St. Gabriel International School
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            We welcome parents, guardians, and visitors. Get in touch with our administration or schedule a personal campus tour in Lanet.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div className="space-y-6">
            <SectionHeading
              badge="Get in Touch"
              title="Campus Address & Contact Details"
              align="left"
            />

            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0B1D33]">Physical Location</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    {SCHOOL_INFO.location.fullAddress}
                  </p>
                  <p className="text-[11px] text-[#C59B27] font-semibold mt-1">
                    Separate Boys & Girls Boarding Compounds (~4km apart)
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0B1D33]">Telephone & Admissions</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Main Office: <a href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`} className="font-mono text-[#0B1D33] font-bold hover:underline">{SCHOOL_INFO.contacts.mainPhone}</a>
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Enquiries: <a href={`tel:${SCHOOL_INFO.contacts.enquiryPhoneRaw}`} className="font-mono text-[#0B1D33] font-bold hover:underline">{SCHOOL_INFO.contacts.enquiryPhone}</a>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0B1D33]">Email Contacts</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Admissions: <a href={`mailto:${SCHOOL_INFO.contacts.email}`} className="text-[#0B1D33] font-bold hover:underline">{SCHOOL_INFO.contacts.email}</a>
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    General Info: <a href={`mailto:${SCHOOL_INFO.contacts.infoEmail}`} className="text-[#0B1D33] font-bold hover:underline">{SCHOOL_INFO.contacts.infoEmail}</a>
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#0B1D33] text-[#C59B27] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-[#0B1D33]">Office Hours</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Monday – Friday: 8:00 AM – 5:00 PM
                  </p>
                  <p className="text-xs text-gray-600 mt-0.5">
                    Saturday: 9:00 AM – 1:00 PM (By Appointment)
                  </p>
                </div>
              </div>
            </div>

            <ContactButtons />
          </div>

          {/* Interactive Map Placeholder */}
          <div className="bg-[#0B1D33] text-white p-8 rounded-3xl border border-[#C59B27]/40 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <span className="px-3 py-1 rounded bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold uppercase">
                Visit Lanet Campus
              </span>
              <h3 className="font-serif font-bold text-2xl text-white mt-3">
                Schedule a Personal Campus Tour
              </h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                Experience our state-of-the-art classroom spaces, science and computer laboratories, boarding facilities, and athletic grounds firsthand.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#162E4D] border border-[#C59B27]/30 text-center space-y-3">
              <MapPin className="w-8 h-8 text-[#E0BA43] mx-auto" />
              <h4 className="font-serif font-bold text-base text-white">Lanet, Nakuru County</h4>
              <p className="text-xs text-gray-300">
                Located conveniently in Lanet, Nakuru with separate 4km boys & girls boarding compounds.
              </p>
              <a
                href={`https://maps.google.com/?q=${SCHOOL_INFO.location.coordinates.lat},${SCHOOL_INFO.location.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 rounded-xl bg-[#C59B27] text-[#0B1D33] text-xs font-bold hover:bg-white transition-all shadow-md mt-2"
              >
                Open Google Maps Directions
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
