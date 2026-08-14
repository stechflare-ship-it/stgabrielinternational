import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Award, Heart, BookOpen, Users, Compass, CheckCircle2, GraduationCap, Quote, ArrowRight, Sparkles } from 'lucide-react';
import { SCHOOL_INFO, STAFF_MEMBERS } from '../data/schoolData';
import { Button } from '../components/Button';
import { StaffModal } from '../components/StaffModal';
import { StaffMember } from '../types';
import aboutBg from '../assets/images/about/campus.webp';

export const AboutPage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<StaffMember | null>(null);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const leaderId = params.get('leader');
    if (leaderId) {
      const match = STAFF_MEMBERS.find((s) => s.id === leaderId);
      if (match) {
        setSelectedLeader(match);
      }
    } else if (location.hash === '#leadership' || location.hash === '#principal') {
      const el = document.getElementById('leadership');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      if (location.hash === '#principal') {
        const principal = STAFF_MEMBERS.find((s) => s.id === 'mr-nicholas');
        if (principal) setSelectedLeader(principal);
      }
    }
  }, [location]);

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="About St. Gabriel International School | Best Education in Nakuru, Kenya"
        description="Learn about St. Gabriel International School in Lanet, Nakuru, Kenya. Delivering the best British Curriculum education, nurturing a balanced life and real-life learning experiences since 1998."
        keywords="international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, St. Gabriel International School, About St Gabriel, Mr Nicholas"
        canonicalPath="/about"
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
      />

      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />

      {/* Banner / Hero Header */}
      <section className="relative text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBg}
            alt="St. Gabriel Campus Grounds in Lanet Nakuru"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-4">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Est. 1998 • Lanet, Nakuru County
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-white drop-shadow-sm">
            About St. Gabriel International School
          </h1>
          <p className="font-serif italic text-[#E0BA43] text-lg sm:text-xl font-semibold drop-shadow-sm">
            &quot;{SCHOOL_INFO.motto}&quot;
          </p>
        </div>
      </section>

      {/* Core Narrative */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <SectionHeading
              badge="Our History & Identity"
              title="A Legacy of Academic Rigor and Moral Integrity"
              align="left"
            />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Founded in 1998 in Lanet, Nakuru County, St. Gabriel International School was established with a singular vision: to provide a world-class international education grounded in Christian values, holistic personal development, and intellectual curiosity.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Over the past two decades, St. Gabriel has grown into one of Nakuru County&apos;s most respected educational institutions, offering a seamless British International Curriculum path from Early Years Foundation Stage (EYFS) through Cambridge IGCSE and Advanced Level (A-Level).
            </p>

            <div className="p-5 rounded-2xl bg-[#0B1D33] text-white border border-[#C59B27]/40 space-y-2">
              <h4 className="font-bold text-sm text-[#E0BA43] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>Day & Separate Boarding Compounds</span>
              </h4>
              <p className="text-xs text-gray-300">
                Our campus offers Day School and separate boys and girls boarding facilities located approximately 4 km apart in Lanet to maintain distinct, focused living environments.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutBg}
              alt="St. Gabriel Campus Administration"
              className="rounded-3xl shadow-2xl border-4 border-white object-cover w-full h-[400px]"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values */}
      <section className="py-16 bg-[#071321] text-white border-y border-[#C59B27]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Vision, Mission & Core Values"
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#E0BA43]">Our Vision</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                To inspire students to exploit and achieve their maximum potential in life, developing confident scholars who illuminate the world with hope, knowledge, and ethical leadership.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#E0BA43]">Our Mission</h3>
              <p className="text-xs text-gray-300 leading-relaxed">
                To provide a transformative international education that nurtures academic distinction, critical thinking, creative expression, athletic mastery, and Christian moral character.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-xl text-[#E0BA43]">Core Values</h3>
              <ul className="text-xs text-gray-300 space-y-1.5">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" /> Integrity & Christian Faith</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" /> Academic Distinction</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" /> Discipline & Mutual Respect</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-3.5 h-3.5 text-[#C59B27]" /> Innovation & Global Outlook</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Administration Section */}
      <section id="leadership" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#C59B27]/15 text-[#C59B27] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Executive Leadership</span>
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1D33]">
            Meet Our Esteemed Executive Administration
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed pt-2">
            Meet our esteemed executive administration who are dedicated to serve and educate our scholars with academic distinction, moral integrity, and pastoral care.
          </p>
          <div className="w-24 h-1 bg-[#C59B27] mx-auto rounded-full mt-4" />
        </div>

        {/* 4 Executive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {STAFF_MEMBERS.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedLeader(member)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Photo Area */}
              <div className="relative h-72 w-full overflow-hidden bg-[#0A192F]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33]/90 via-[#0B1D33]/20 to-transparent"></div>
                
                {/* Department Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full bg-[#0A192F]/85 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider border border-[#D4AF37]/30 shadow">
                    {member.department}
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="text-[11px] text-[#D4AF37] font-semibold block truncate">
                    {member.role}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-serif text-xl font-bold text-[#0B1D33] group-hover:text-[#C59B27] transition-colors">
                    {member.name}
                  </h3>

                  {/* Qualifications */}
                  <div className="flex items-start gap-1.5 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <GraduationCap className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2 font-medium">{member.qualification}</span>
                  </div>

                  {/* Welcome message preview */}
                  {member.welcomeMessage && (
                    <p className="text-xs text-gray-600 line-clamp-3 italic leading-relaxed pt-1">
                      &quot;{member.welcomeMessage}&quot;
                    </p>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B1D33] group-hover:text-[#C59B27]">
                  <span>Read Full Profile & Message</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Staff Details Modal */}
      <StaffModal
        member={selectedLeader}
        isOpen={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

      {/* CTA */}
      <section className="py-16 text-center max-w-4xl mx-auto px-4">
        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D33]">
          Explore Academic & Boarding Life
        </h2>
        <p className="text-gray-600 text-sm my-4">
          Learn more about our curriculum stages or contact our admissions office in Lanet, Nakuru.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/academics" variant="primary" size="md">
            View Curriculum Stages
          </Button>
          <Button to="/admissions" variant="secondary" size="md">
            Admissions Enquiry
          </Button>
        </div>
      </section>
    </div>
  );
};

