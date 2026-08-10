import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { Sparkles, CheckCircle2, Heart, BookOpen, Compass } from 'lucide-react';
import academicExplore from '../assets/images/academics/academicexplore.webp';

export const EYFSPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Early Years Foundation Stage (EYFS) | St. Gabriel Nakuru"
        description="Early Years Foundation Stage (EYFS) at St. Gabriel International School, Lanet, Nakuru. Playgroup (2-3 yrs), Nursery (3-4 yrs), Reception (4-5 yrs)."
        canonicalPath="/academics/eyfs"
        breadcrumbs={[
          { name: 'Academics', path: '/academics' },
          { name: 'EYFS', path: '/academics/eyfs' }
        ]}
      />

      <Breadcrumbs
        items={[
          { label: 'Academics', path: '/academics' },
          { label: 'Early Years (EYFS)', path: '/academics/eyfs' }
        ]}
      />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Ages 2 – 5 Years • Playgroup, Nursery & Reception
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            Early Years Foundation Stage (EYFS)
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Building joyful foundations of curiosity, creative exploration, communication, and foundational literacy in a loving Christian environment.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              badge="EYFS Structure"
              title="Joyful Learning Through Exploration & Discovery"
              align="left"
            />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Our Early Years Foundation Stage nurtures young learners during their most crucial developmental years. We balance structured play with sensory discovery, phonics, early numeracy, and social-emotional growth.
            </p>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  2-3
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1D33]">Playgroup (Ages 2–3 Years)</h4>
                  <p className="text-xs text-gray-600">Focus on speech, sensory play, motor development, and social interaction.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  3-4
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1D33]">Nursery (Ages 3–4 Years)</h4>
                  <p className="text-xs text-gray-600">Introducing Jolly Phonics, early counting, expressive arts, and storytelling.</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                <span className="w-8 h-8 rounded-full bg-[#C59B27] text-[#0B1D33] font-bold text-xs flex items-center justify-center flex-shrink-0">
                  4-5
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0B1D33]">Reception (Ages 4–5 Years)</h4>
                  <p className="text-xs text-gray-600">Preparing children for Primary entry with reading fluency, math, and independent problem-solving.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src={academicExplore}
              alt="St. Gabriel EYFS Class Activity"
              className="w-full h-full shadow-2xl object-cover border-4 rounded-3xl border-white"
              
            
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        {/* EYFS Core Focus Areas */}
        <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#0B1D33]">
            Key EYFS Learning Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              'Play & Exploration',
              'Active Discovery',
              'Communication & Language',
              'Early Literacy & Phonics',
              'Numeracy & Problem Solving',
              'Creativity & Expressive Arts',
              'Personal & Social Care',
              'Independent Learning'
            ].map((area) => (
              <div key={area} className="flex items-center gap-2 p-3 rounded-xl bg-gray-50 border border-gray-100 text-xs font-bold text-[#0B1D33]">
                <CheckCircle2 className="w-4 h-4 text-[#C59B27] flex-shrink-0" />
                <span>{area}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center pt-4">
          <Button to="/admissions" variant="primary" size="lg">
            Enroll Your Child in EYFS
          </Button>
        </div>
      </section>
    </div>
  );
};
