import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { ShieldCheck, Award, Heart, BookOpen, Users, Compass, CheckCircle2, GraduationCap, Quote, ArrowRight, Sparkles, History, Calendar, Flag, Globe } from 'lucide-react';
import { SCHOOL_INFO, LEADERSHIP_TEAM, STAFF_MEMBERS, SCHOOL_HISTORY_MILESTONES } from '../data/schoolData';
import { Button } from '../components/Button';
import { StaffModal } from '../components/StaffModal';
import { StaffMember } from '../types';
import aboutBgImg from '../assets/images/about/aboutusBackground.webp';


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
        const leader = LEADERSHIP_TEAM.find((s) => s.id === 'chief-principal' || s.id === 'director');
        if (leader) setSelectedLeader(leader);
      }
    }
  }, [location]);

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="About Us & School History | Kenya CBC & British Cambridge | St. Gabriel Nakuru"
        description="Discover the 28-year history of St. Gabriel in Lanet, Nakuru. From foundational mission school and KCPE/KPSEA champions to premier dual-curriculum Kenya CBC and British Cambridge institution."
        keywords="about st gabriel, school history, lanet, nakuru, kenya, cbc, kenya syllabus, kpsea, junior secondary, british curriculum, cambridge, mr nicholas, st gabriel leadership, mission school lanet"
        canonicalPath="/about"
        ogType="website"
        ogTitle="About St. Gabriel International School · 28 Years of Educational Distinction"
        ogDescription="Explore our heritage of holistic Christian character development, academic championships, and seamless dual-curriculum pathways in Lanet, Nakuru."
        breadcrumbs={[{ name: 'About Us', path: '/about' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'About St. Gabriel International School',
          description: 'The official history, mission, core values, and executive leadership of St. Gabriel International School in Lanet, Nakuru, Kenya.',
          mainEntity: {
            '@type': 'EducationalOrganization',
            name: SCHOOL_INFO.name,
            foundingDate: '1998',
            motto: SCHOOL_INFO.motto,
            founder: {
              '@type': 'Person',
              name: 'Nicholas & Leadership Board'
            }
          }
        }}
      />

      <Breadcrumbs items={[{ label: 'About Us', path: '/about' }]} />

      {/* Banner / Hero Header */}
      <section className="relative text-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        {/* Background Hero Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={aboutBgImg}
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
              badge="Our Heritage & Evolution"
              title="A 28-Year Legacy of Academic Rigor and Moral Integrity"
              align="left"
            />
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              Founded in 1998 in Lanet, Nakuru County, St. Gabriel was established with a singular mission: to provide high-quality, holistic education grounded in Christian values, self-discipline, and intellectual curiosity.
            </p>
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              For nearly three decades, St. Gabriel has stood as a bastion of academic excellence in Kenya, pioneering the national Competency-Based Curriculum (CBC) through KPSEA Grade 6 and accredited Junior Secondary School (JSS Grades 7–9), alongside our premier British Cambridge International pathway.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-emerald-900/10 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase">
                  <Flag className="w-4 h-4 text-emerald-600" />
                  <span>Kenya CBC Pathway</span>
                </div>
                <p className="text-xs text-gray-700">
                  Pre-Primary, Lower Primary, Upper Primary (KPSEA Grade 6), accredited Junior Secondary School (JSS Grades 7–9) & Senior Secondary School (Grades 10–12 in STEM, Social Sciences & Arts).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-sky-900/10 border border-sky-500/30 space-y-1.5">
                <div className="flex items-center gap-2 text-sky-800 font-bold text-xs uppercase">
                  <Globe className="w-4 h-4 text-sky-600" />
                  <span>British Cambridge</span>
                </div>
                <p className="text-xs text-gray-700">
                  EYFS (Playgroup to Reception), Cambridge Primary, Lower Secondary, IGCSE & Advanced Level (A-Level).
                </p>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#0B1D33] text-white border border-[#C59B27]/40 space-y-2">
              <h4 className="font-bold text-sm text-[#E0BA43] uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C59B27]" />
                <span>Day & Separate Boarding Compounds</span>
              </h4>
              <p className="text-xs text-gray-300">
                Our campus offers Day School and separate boys and girls boarding facilities located approximately 4 km apart in Lanet to maintain distinct, secure, and focused living environments.
              </p>
            </div>
          </div>

          <div className="relative">
            <img
              src={aboutBgImg}
              alt="St. Gabriel Campus Administration"
              className="rounded-3xl shadow-2xl border-4 border-white object-cover w-full h-[450px]"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-4 -right-4 bg-[#C59B27] text-[#0B1D33] p-4 rounded-2xl font-serif font-bold text-xs sm:text-sm shadow-xl max-w-xs border border-white">
              ⭐ 28+ Years of Nurturing Confident Leaders in Nakuru County
            </div>
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            badge="Our Historical Journey"
            title="School History & Academic Evolution"
            subtitle="From our founding in Lanet to pioneering Kenya's CBC curriculum and expanding into dual international pathways."
          />

          <div className="relative border-l-2 border-[#C59B27]/40 ml-4 md:ml-32 space-y-10 pl-6 md:pl-10">
            {SCHOOL_HISTORY_MILESTONES.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker Pin */}
                <div className="absolute -left-[35px] md:-left-[51px] top-1.5 w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0B1D33] border-2 border-[#C59B27] flex items-center justify-center text-[10px] md:text-xs font-bold text-[#E0BA43] shadow-md group-hover:scale-110 transition-transform">
                  {idx + 1}
                </div>

                {/* Milestone Content Card */}
                <div className="p-6 rounded-2xl bg-gray-50 hover:bg-white border border-gray-200 hover:border-[#C59B27] shadow-sm hover:shadow-xl transition-all space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#0B1D33] text-[#E0BA43] text-xs font-black tracking-wider flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{milestone.year}</span>
                    </span>
                    <span className="text-xs font-bold text-[#C59B27] uppercase tracking-wide">
                      {milestone.subtitle}
                    </span>
                  </div>

                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#0B1D33]">
                    {milestone.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
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

        {/* 5 Executive Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {LEADERSHIP_TEAM.map((member) => (
            <div
              key={member.id}
              onClick={() => setSelectedLeader(member)}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
            >
              {/* Photo Area */}
              <div className="relative h-100 w-full overflow-hidden bg-[#0A192F]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33]/90 via-[#0B1D33]/20 to-transparent"></div>
                
                {/* Department Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#0A192F]/85 backdrop-blur-md text-[#D4AF37] text-[9px] font-bold uppercase tracking-wider border border-[#D4AF37]/30 shadow">
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
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div className="space-y-2">
                  <h3 className="font-serif text-lg font-bold text-[#0B1D33] group-hover:text-[#C59B27] transition-colors leading-tight">
                    {member.name}
                  </h3>

                  {/* Qualifications */}
                  <div className="flex items-start gap-1.5 text-[11px] text-gray-700 bg-gray-50 p-2 rounded-xl border border-gray-100">
                    <GraduationCap className="w-3.5 h-3.5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                    <span className="line-clamp-2 font-medium">{member.qualification}</span>
                  </div>

                  {/* Welcome message preview */}
                  {member.welcomeMessage && (
                    <p className="text-[11px] text-gray-600 line-clamp-2 italic leading-relaxed pt-0.5">
                      &quot;{member.welcomeMessage}&quot;
                    </p>
                  )}
                </div>

                {/* Card Action */}
                <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold text-[#0B1D33] group-hover:text-[#C59B27]">
                  <span>View Bio</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Dedicated Staff Page */}
        <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-[#0A192F] to-[#1E3A8A] text-white border border-[#C59B27]/40 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-serif text-2xl font-bold text-white">
              Meet Our Inspiring Faculty & Department Leads
            </h3>
            <p className="text-sm text-gray-200 max-w-2xl">
              Explore our full staff directory of Cambridge and CBC certified educators, STEM researchers, language specialists, sports coaches, and pastoral caregivers.
            </p>
          </div>
          <Button
            to="/staff"
            variant="primary"
            size="lg"
            className="whitespace-nowrap uppercase tracking-wider font-bold"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            EXPLORE ALL FACULTY & STAFF
          </Button>
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
          Learn more about our Kenya CBC and British Cambridge curriculum stages or contact our admissions office in Lanet, Nakuru.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/academics" variant="primary" size="md">
            View Curriculum Pathways
          </Button>
          <Button to="/admissions" variant="secondary" size="md">
            Admissions Enquiry
          </Button>
        </div>
      </section>
    </div>
  );
};

