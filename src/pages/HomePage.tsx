import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  GraduationCap,
  Sparkles,
  BookOpen,
  Award,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  Trophy,
  Music,
  Tv,
  Users,
  Heart,
  Cpu,
  ArrowRight,
  Phone,
  MessageCircle,
  HelpCircle,
  Quote
} from 'lucide-react';

import { SEOMetadata } from '../components/SEOMetadata';
import { Hero } from '../components/Hero';
import { SectionHeading } from '../components/SectionHeading';
import { CurriculumTimeline } from '../components/CurriculumTimeline';
import { BoardingSection } from '../components/BoardingSection';
import { FeeTable } from '../components/FeeTable';
import { BankPaymentCard } from '../components/BankPaymentCard';
import { PaybillCard } from '../components/PaybillCard';
import { Gallery } from '../components/Gallery';
import { NewsCard } from '../components/NewsCard';
import { Button } from '../components/Button';
import { StaffModal } from '../components/StaffModal';
import { SCHOOL_INFO, NEWS_ITEMS, STAFF_MEMBERS } from '../data/schoolData';
import { StaffMember } from '../types';

import homeimg from '../assets/images/about/campus.webp';

import claasroom from '../assets/images/gallery/classroom.webp';
import arts from '../assets/images/gallery/artsClub.webp';
import complab from '../assets/images/gallery/compLab.webp';
import graduation from '../assets/images/gallery/graduation.webp';
import sports from '../assets/images/gallery/sports.webp';
import faith from '../assets/images/gallery/faith.webp';


const PLACEHOLDER_CAMPUS = 'https://placehold.co/800x600/0b1d33/e0ba43?text=St.+Gabriel+Campus';
const PLACEHOLDER_CLASSROOM = 'https://placehold.co/800x600/0b1d33/ffffff?text=Classroom+Study';
const PLACEHOLDER_ARTS = 'https://placehold.co/800x600/0b1d33/ffffff?text=Performing+Arts';
const PLACEHOLDER_GRADUATION = 'https://placehold.co/800x600/0b1d33/ffffff?text=Graduation+%26+Distinctions';
const PLACEHOLDER_ICT = 'https://placehold.co/800x600/0b1d33/ffffff?text=STEM+%26+Computer+Lab';

export const HomePage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<StaffMember | null>(null);

  const openPrincipalMessage = () => {
    const principal = STAFF_MEMBERS.find((s) => s.id === 'mr-nicholas') || STAFF_MEMBERS[0];
    setSelectedLeader(principal);
  };

  const principal = STAFF_MEMBERS.find((s) => s.id === 'mr-nicholas') || STAFF_MEMBERS[0];

  return (
    <div className="w-full bg-[#F8F9FB]">
      <SEOMetadata
        title="St. Gabriel International School | Best British Curriculum Education in Nakuru, Kenya"
        description="St. Gabriel International School in Lanet, Nakuru, Kenya offers the best British Curriculum education (EYFS, Cambridge IGCSE & A-Level), promoting a balanced life and real-life experiences in day and boarding environments."
        keywords="international, nakuru, kenya, british curriculum, best education, balanced life, real life experience, St. Gabriel International School, Cambridge school Nakuru, boarding school Kenya, Mr Nicholas"
        canonicalPath="/"
      />

      {/* 1. Cinematic Hero */}
      <Hero />

      {/* 2. Welcome to St. Gabriel */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C59B27]/15 text-[#C59B27] text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Welcome to St. Gabriel</span>
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0B1D33] leading-tight">
              Shaping Future Leaders with World-Class <span className="text-[#C59B27]">British Education</span>
            </h2>

            <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
              Located in Lanet, Nakuru County, St. Gabriel International School stands as a beacon of academic excellence and holistic character formation. Under our motto, <em className="text-[#0B1D33] font-serif font-bold">&quot;HOPE TO THE WORLD&quot;</em>, we empower students from Playgroup through A-Level with critical thinking, moral integrity, and global perspectives.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1D33]">Cambridge Accreditation</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Rigorous IGCSE & A-Level pre-university qualifications.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-white border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-[#C59B27] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#0B1D33]">Holistic Development</h4>
                  <p className="text-xs text-gray-600 mt-0.5">Integrating sports, music, drama, leadership & STEM.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                onClick={openPrincipalMessage}
                variant="secondary"
                size="md"
              >
                Read Principal&apos;s Welcome
              </Button>
              <Button to="/admissions" variant="primary" size="md">
                Admissions Guide
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img
                src={homeimg}
                alt="St. Gabriel International School Campus"
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33]/80 via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#0B1D33]/90 backdrop-blur-md text-white border border-[#C59B27]/40">
                <span className="text-[10px] text-[#E0BA43] uppercase font-bold tracking-wider block">
                  Established 1998 • Lanet, Nakuru
                </span>
                <p className="font-serif font-bold text-base mt-0.5">
                  &quot;Nurturing disciplined scholars who bring hope to the world.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dedicated Principal Message Spotlight Banner */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#0A192F] via-[#0B1D33] to-[#162E4D] text-white border-2 border-[#D4AF37]/40 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Principal Photo */}
            <div className="lg:col-span-4 flex flex-col items-center text-center sm:text-left sm:flex-row lg:flex-col lg:items-center gap-5">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden shadow-2xl border-4 border-[#D4AF37] flex-shrink-0 bg-slate-900">
                <img
                  src={principal.image}
                  alt={principal.name}
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="space-y-1 text-center">
                <h3 className="font-serif text-2xl font-bold text-white">
                  {principal.name}
                </h3>
                <p className="text-xs text-[#E0BA43] font-bold uppercase tracking-wider">
                  {principal.role}
                </p>
                <p className="text-[11px] text-gray-300">
                  {principal.department}
                </p>
              </div>
            </div>

            {/* Principal Message Excerpt */}
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
                <Quote className="w-3.5 h-3.5" />
                <span>Executive Principal&apos;s Welcome</span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                &quot;Every child is endowed with unique potential that flourishes when nurtured with rigor, love, and high moral standards.&quot;
              </h3>

              <p className="text-sm text-gray-300 leading-relaxed">
                {principal.welcomeMessage}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={openPrincipalMessage}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#D4AF37] text-[#0A192F] font-bold text-xs uppercase tracking-wider hover:bg-white transition-colors duration-300 shadow-lg cursor-pointer"
                >
                  <span>Read Mr. Nicholas&apos; Full Message & Experience</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                
                <Link
                  to="/about#leadership"
                  className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#E0BA43] font-semibold underline underline-offset-4 transition-colors"
                >
                  <span>Meet All Executive Administration</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Why Choose St. Gabriel */}
      <section className="py-16 bg-[#0B1D33] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pillars of Excellence"
            title="Why Choose St. Gabriel International School?"
            subtitle="Providing a transformative educational journey that balances academic distinction with moral purpose."
            theme="dark"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <GraduationCap className="w-8 h-8 text-[#E0BA43]" />,
                title: 'International Curriculum',
                desc: 'British learning pathway from Early Years Foundation Stage (EYFS) to Cambridge IGCSE and Advanced Level (A-Level).'
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-[#E0BA43]" />,
                title: 'Christian Values',
                desc: 'Instilling spiritual discipline, moral ethics, kindness, respect, and servant leadership grounded in faith.'
              },
              {
                icon: <Users className="w-8 h-8 text-[#E0BA43]" />,
                title: 'Separate Boarding Compounds',
                desc: 'Dedicated boys and girls boarding facilities located ~4 km apart in Lanet, ensuring safe and focused pastoral care.'
              },
              {
                icon: <Trophy className="w-8 h-8 text-[#E0BA43]" />,
                title: 'Co-Curricular Mastery',
                desc: 'Competitive sports leagues, orchestral music instruction, drama theater, debating, and robotics labs.'
              }
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-[#162E4D] border border-[#C59B27]/30 hover:border-[#C59B27] transition-all space-y-4"
              >
                <div className="w-14 h-14 rounded-xl bg-[#0B1D33] border border-[#C59B27]/50 flex items-center justify-center">
                  {card.icon}
                </div>
                <h3 className="font-serif font-bold text-lg text-white">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Curriculum Journey */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Academic Pathway"
          title="Our Curriculum Journey"
          subtitle="From early childhood exploration to pre-university specialization, explore our structured British educational stages."
        />
        <CurriculumTimeline />
      </section>

      {/* 5. SIGNATURE SECTION: WHERE ACADEMIC EXCELLENCE MEETS HOLISTIC DEVELOPMENT */}
      <section className="py-20 bg-gradient-to-r from-[#071321] via-[#0B1D33] to-[#162E4D] text-white my-12 border-y-2 border-[#C59B27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto space-y-4 mb-16">
            <span className="px-4 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#E0BA43] text-xs font-bold uppercase tracking-widest inline-block">
              Signature Holistic Education
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white">
              WHERE ACADEMIC EXCELLENCE MEETS <span className="text-[#E0BA43]">HOLISTIC DEVELOPMENT</span>
            </h2>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
              We believe true education develops both the intellect and the human spirit. Our students excel in national and international examinations while discovering lifelong passions in the arts, sports, and technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Academics */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={claasroom} alt="Classroom learning at St. Gabriel" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">Academics</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">ACADEMICS</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Rigorous classroom instruction, well-equipped science laboratories, independent research, and tailored exam preparation.
                </p>
              </div>
            </div>

            {/* Music & Drama */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={arts} alt="Performing arts students" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">Performing Arts</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <Music className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">MUSIC & DRAMA</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Vocal choir, orchestral instruments (brass, strings & woodwind), theatrical play production, and public presentation galas.
                </p>
              </div>
            </div>

            {/* Technology */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={complab} alt="Computer Lab at St. Gabriel" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">STEM & ICT</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">TECHNOLOGY & INNOVATION</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Modern ICT laboratories, coding suites, digital literacy, and environmental science projects under faculty mentorship.
                </p>
              </div>
            </div>

            {/* Graduation & Leadership */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={graduation} alt="Graduation ceremony" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">Excellence</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">GRADUATION & DISTINCTIONS</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Annual distinction honors celebrating scholars transitioning to secondary, IGCSE, A-Levels, and university pathways.
                </p>
              </div>
            </div>

            {/* Sports */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative h-44 rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={sports} alt="St. Gabriel Scholars Active & Athletic" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">Athletics</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <Trophy className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">SPORTS & ATHLETICS</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Football, basketball, athletics, track & field, and swimming, fostering teamwork, physical fitness, and resilience.
                </p>
              </div>
            </div>

            {/* Christian Values */}
            <div className="p-6 rounded-2xl bg-[#0B1D33] border border-[#C59B27]/40 hover:border-[#C59B27] transition-all space-y-4 flex flex-col justify-between">
              <div>
                <div className="relative  rounded-xl overflow-hidden mb-4 border border-[#C59B27]/30">
                  <img src={faith} alt="Scholars in uniform" className="w-full h-full object-cover" />
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B1D33]/80 text-[#E0BA43] text-[10px] font-bold">Faith & Values</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-lg bg-[#C59B27] text-[#0B1D33] flex items-center justify-center font-bold">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-white">CHARACTER & FAITH</h3>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Daily devotions, spiritual guidance, moral accountability, and compassionate fellowship grounded in Christian values.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 6. Day & Boarding Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BoardingSection />
      </div>

      {/* 7. Fees Preview & Payment Methods */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Transparent Billing"
          title="School Fees & Payment Options"
          subtitle="Explore termly boarding fees and official cashless payment channels."
        />

        <FeeTable />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <BankPaymentCard />
          <PaybillCard />
        </div>

        <div className="text-center pt-4">
          <Button to="/fees-and-requirements" variant="primary" size="lg">
            View Complete Requirements & Fee Guidelines
          </Button>
        </div>
      </section>

      {/* 8. Gallery Highlights */}
      <section className="py-16 bg-gray-100 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Campus Showcase"
            title="Life at St. Gabriel International School"
            subtitle="Moments of academic inquiry, athletic triumph, artistic creation, and boarding fellowship."
          />
          <Gallery />
        </div>
      </section>

      {/* 9. News & Events */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Latest Updates"
          title="News & Events"
          subtitle="Stay updated with school announcements, Cambridge exam distinction achievements, and gala celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </section>

      {/* 10. Call to Action Banner */}
      <section className="bg-[#0B1D33] text-white py-16 px-4 sm:px-6 border-t-2 border-[#C59B27]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Join St. Gabriel Family
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold leading-tight">
            Ready to Give Your Child a Premier International Education?
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Admissions are open for EYFS, Primary, Secondary, IGCSE, and A-Level. Contact our team in Lanet, Nakuru today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button to="/admissions" variant="primary" size="lg">
              Enroll Now
            </Button>
            <Button
              href={`tel:${SCHOOL_INFO.contacts.mainPhoneRaw}`}
              variant="phone"
              size="lg"
              icon={<Phone className="w-4 h-4" />}
            >
              Call Admissions: {SCHOOL_INFO.contacts.mainPhone}
            </Button>
            <Button
              href={`https://wa.me/${SCHOOL_INFO.contacts.whatsappPhoneRaw}?text=${SCHOOL_INFO.whatsappPrefillMessage}`}
              variant="whatsapp"
              size="lg"
              external
              icon={<MessageCircle className="w-4 h-4" />}
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </section>

      {/* Staff / Principal Message Modal */}
      <StaffModal
        member={selectedLeader}
        isOpen={!!selectedLeader}
        onClose={() => setSelectedLeader(null)}
      />

    </div>
  );
};
