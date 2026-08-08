import React from 'react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { STAFF_MEMBERS } from '../data/schoolData';
import { Users, Award, BookOpen } from 'lucide-react';

export const StaffPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Our Faculty & Leadership Team | St. Gabriel Nakuru"
        description="Meet the dedicated leadership, principal, academic heads, and pastoral staff at St. Gabriel International School in Lanet, Nakuru."
        canonicalPath="/staff"
        breadcrumbs={[{ name: 'Faculty & Leadership', path: '/staff' }]}
      />

      <Breadcrumbs items={[{ label: 'Faculty & Leadership', path: '/staff' }]} />

      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            <span>Dedicated Educators & Mentors</span>
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white">
            School Leadership & Staff
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-sm sm:text-base">
            Our qualified international educators combine academic mastery with pastoral warmth to mentor students toward excellence.
          </p>
        </div>
      </section>

      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Executive Leadership"
          title="Meet Our Faculty Directorate"
          subtitle="Passionate leaders bringing decades of experience in British International education and student care."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAFF_MEMBERS.map((staff) => (
            <div
              key={staff.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-md hover:shadow-xl transition-all space-y-4 p-5 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="relative h-56 rounded-xl overflow-hidden bg-gray-100">
                  <img
                    src={staff.image}
                    alt={staff.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-2 left-2 px-2.5 py-1 rounded bg-[#0B1D33]/90 text-[#E0BA43] text-[10px] font-bold border border-[#C59B27]/40">
                    {staff.department}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif font-bold text-lg text-[#0B1D33]">
                    {staff.name}
                  </h3>
                  <p className="text-xs font-bold text-[#C59B27] mt-0.5">
                    {staff.role}
                  </p>
                  <p className="text-[11px] text-gray-500 font-semibold mt-1 italic">
                    {staff.qualification}
                  </p>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {staff.bio}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
