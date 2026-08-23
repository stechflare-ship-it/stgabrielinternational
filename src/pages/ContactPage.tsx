import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { SCHOOL_INFO } from '../data/schoolData';
import { MapPin, Phone, Mail, MessageCircle, Clock } from 'lucide-react';
import { ContactButtons } from '../components/ContactButtons';
import contactBG from '../assets/images/backgrounds/contactBG.webp';

export const ContactPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Contact Us, Campus Location & Campus Tours | St Gabriel's Mission Nakuru"
        description="Contact St Gabriel's Mission International School in Lanet, Nakuru, Kenya. Call +254 724 694 554, WhatsApp admissions, or schedule a campus tour along Transformer Road."
        keywords="contact St Gabriel\'s Mission, school location nakuru, transformer road lanet, call St Gabriel\'s Mission admissions, book school tour nakuru, international school phone number kenya"
        canonicalPath="/contact"
        ogType="website"
        ogTitle="Contact St Gabriel's Mission International School · Lanet, Nakuru"
        ogDescription="Connect with admissions, book a personalized campus tour, or reach our administrative offices along Transformer Road, Lanet."
        breadcrumbs={[{ name: 'Contact Us', path: '/contact' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          name: "Contact St Gabriel's Mission International School",
          description: "Official contact and location information for St Gabriel's Mission International School in Lanet, Nakuru.",
          mainEntity: {
            '@type': 'EducationalOrganization',
            name: SCHOOL_INFO.name,
            telephone: SCHOOL_INFO.contacts.mainPhone,
            email: SCHOOL_INFO.contacts.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Transformer Road, Lanet',
              addressLocality: 'Nakuru',
              addressRegion: 'Nakuru County',
              postalCode: '20100',
              addressCountry: 'KE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: SCHOOL_INFO.location.coordinates.lat,
              longitude: SCHOOL_INFO.location.coordinates.lng
            }
          }
        }}
      />

      <Breadcrumbs items={[{ label: 'Contact Us', path: '/contact' }]} />

      <section className="relative text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={contactBG}
            alt="St  Gabriel's Mission Campus Contact in Lanet Nakuru"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Lanet, Nakuru County, Kenya
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            Contact St Gabriel's Mission International School
          </h1>
          <p className="max-w-2xl mx-auto text-gray-200 text-sm sm:text-base leading-relaxed drop-shadow-sm">
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

          {/* Interactive Google Map Section */}
          <div className="bg-[#0B1D33] text-white p-6 sm:p-8 rounded-3xl border border-[#C59B27]/40 shadow-2xl flex flex-col justify-between space-y-6">
            <div>
              <span className="px-3 py-1 rounded bg-[#C59B27] text-[#0B1D33] text-[10px] font-extrabold uppercase">
                Visit Lanet Campus
              </span>
              <h3 className="font-serif font-bold text-2xl text-white mt-3">
                Exact Campus Location on Google Maps
              </h3>
              <p className="text-xs text-gray-300 mt-2 leading-relaxed">
                St Gabriel's Mission School, Transformer Rd, Lanet, Nakuru County, Kenya. Experience our state-of-the-art academic & boarding facilities.
              </p>
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#C59B27]/30 shadow-lg bg-[#162E4D] space-y-0">
              <iframe
                title="St  Gabriel's Mission School Exact Location Map"
                src={SCHOOL_INFO.location.embedMapUrl}
                width="100%"
                height="280"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 rounded-t-2xl"
              ></iframe>
              <div className="p-4 bg-[#162E4D] text-center space-y-2">
                <div className="flex items-center justify-center gap-2 text-[#E0BA43] text-sm font-bold">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>St  Gabriel's Mission School, Transformer Rd</span>
                </div>
                <p className="text-[11px] text-gray-300">
                  Coordinates: <span className="font-mono text-white">{SCHOOL_INFO.location.coordinates.lat}, {SCHOOL_INFO.location.coordinates.lng}</span>
                </p>
                <a
                  href={SCHOOL_INFO.location.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#C59B27] text-[#0B1D33] text-xs font-bold hover:bg-white transition-all shadow-md mt-1"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Open Exact Google Maps Directions</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};
