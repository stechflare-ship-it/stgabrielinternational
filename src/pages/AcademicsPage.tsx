import React from 'react';
import { Link } from 'react-router-dom';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { CurriculumTimeline } from '../components/CurriculumTimeline';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Button } from '../components/Button';
import {
  BookOpen,
  Sparkles,
  Award,
  GraduationCap,
  Microscope,
  Cpu,
  Palette,
  Globe2,
  Compass,
  CheckCircle2,
  ChevronRight,
  Download,
  Building2,
  Library,
  Target,
  ArrowRight
} from 'lucide-react';

import academicBg from '../../src/assets/images/academics/academicbackground.webp';
import complab from '../../src/assets/images/home/complabImg.webp';
import biology from '../../src/assets/images/studentlife/biologyinvestigation.webp';
import brassBand from '../../src/assets/images/blogs/brassBand.webp';



export const AcademicsPage: React.FC = () => {
  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Academics & Dual Curriculum Pathways | Kenya CBC & British | St. Gabriel's Mission Nakuru"
        description="Explore comprehensive Kenya CBC (PP1 through Senior School Grades 10–12) and British (EYFS through A-Levels) at St. Gabriel's Mission International School in Lanet, Nakuru."
        keywords="international school nakuru, kenya cbc, senior school kenya, junior secondary school, jss nakuru, British igcse, a-level, stem pathway, social sciences, arts pathway, st gabriel's Mission lanet, dual curriculum nakuru, British international kenya"
        canonicalPath="/academics"
        ogType="website"
        ogTitle="Dual-Curriculum Academic Pathways · Kenya CBC & British Curriculum"
        ogDescription="Providing tailored learning pathways from Early Childhood, Primary, JSS, Senior School STEM & Arts to British IGCSE and A-Level in Lanet, Nakuru."
        breadcrumbs={[{ name: 'Academics', path: '/academics' }]}
        course={{
          name: "St. Gabriel's Mission Dual-Curriculum Academic Program (Kenya CBC & British Curriculum)",
          description: 'Comprehensive academic framework spanning Kenya Competency-Based Curriculum and CAIE British International Curriculum with state-of-the-art STEM laboratories and arts conservatory.',
          educationalLevel: 'Early Childhood to High School (A-Level / Grade 12)',
          teaches: [
            'British IGCSE & A-Level Sciences, Mathematics & Humanities',
            'Kenya CBC STEM, Social Sciences & Arts Pathways',
            'Junior Secondary School (KJSEA) Core Competencies',
            'Computer Science, Coding & Digital Literacy',
            'Brass Band Orchestration, Creative Arts & Physical Education'
          ]
        }}
      />

      <Breadcrumbs items={[{ label: 'Academics & Curriculum', path: '/academics' }]} />

      {/* Hero Header */}
      <section className="relative text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b-2 border-[#C59B27] overflow-hidden bg-[#0B1D33]">
        <div className="absolute inset-0 z-0">
          <img
            src={academicBg}
            alt="St. Gabriel Academic Pathways & Classrooms"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D33]/95 via-[#0B1D33]/85 to-[#0B1D33]/75" />
          <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-10" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto text-center space-y-5">
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-600/30 backdrop-blur-sm text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/40">
              🇰🇪 Kenya CBC (PP1 – Senior Secondary Grade 12)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#C59B27]/20 backdrop-blur-sm text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
              🇬🇧 British Curriculum (EYFS – A-Level)
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-sm leading-tight">
            Academic Excellence & Dual Pathways
          </h1>
          <p className="max-w-3xl mx-auto text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-sm">
            Nurturing global thinkers and ethical leaders through Kenya’s Competency-Based Curriculum and the prestigious British International curriculum in a serene Lanet boarding environment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Button to="#curriculum-timeline" variant="primary" size="md">
              Explore Academic Stages
            </Button>
            <Button to="#senior-school-spotlight" variant="secondary" size="md">
              Senior School Specializations
            </Button>
          </div>
        </div>
      </section>

      {/* Dual Pathway Comparison Grid */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kenya CBC Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-emerald-50/70 via-white to-emerald-50/30 border-2 border-emerald-500/40 shadow-xl space-y-4 hover:border-emerald-600 transition-all">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider">
                  National Curriculum
                </span>
                <span className="text-xs font-semibold text-emerald-800">Accredited by MOE / KICD</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-emerald-950">
                Kenya Competency-Based Curriculum (CBC)
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Focuses on real-world problem-solving, digital literacy, ethical values, and hands-on skill development from Early Years through Senior Secondary School.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-emerald-200/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Pre-Primary (PP1 & PP2) • Lower & Upper Primary (Grades 1–6)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Junior Secondary School (JSS Grades 7–9) & KJSEA Assessment</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-900">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Senior Secondary School (Grades 10–12) in STEM, Social Sciences & Arts</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/academics/cbc-junior-secondary"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 uppercase tracking-wider group"
                >
                  <span>Explore CBC Syllabus Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* British Cambridge Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-sky-50/70 via-white to-sky-50/30 border-2 border-sky-500/40 shadow-xl space-y-4 hover:border-sky-600 transition-all">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-[#0B1D33] text-[#E0BA43] text-xs font-bold uppercase tracking-wider">
                  International Curriculum
                </span>
                <span className="text-xs font-semibold text-sky-900">British International Centre</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#0B1D33]">
                British International
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Globally recognized qualification framework renowned for critical inquiry, academic rigor, and seamless entry into premier universities worldwide.
              </p>
              
              <div className="space-y-2 pt-2 border-t border-sky-200/60">
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-950">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Early Years Foundation Stage (EYFS Playgroup to Reception)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-950">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>British Primary (Years 1–6) & Lower Secondary (Years 7–9)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-sky-950">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>British IGCSE (Years 10–11) & Advanced Level (A-Level Years 12–13)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/academics/igcse"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0B1D33] hover:text-[#C59B27] uppercase tracking-wider group"
                >
                  <span>Explore British International Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Senior School Spotlight Section */}
      <section
        id="senior-school-spotlight"
        className="py-16 sm:py-24 bg-gradient-to-b from-[#0B1D33] via-[#0E2644] to-[#0B1D33] text-white border-y-2 border-[#C59B27] relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-[#C59B27]/20 border border-[#C59B27]/50 text-[#E0BA43] text-xs font-bold uppercase tracking-widest inline-flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>Senior School & Pre-University Pathways</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
              CBC Senior Secondary & British Advanced Level
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Our Senior School provides high-rigor academic specialization tailored for direct university admission, competitive scholarships, and future career mastery.
            </p>
          </div>

          {/* Three CBC Senior Pathways Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pathway 1: STEM */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C59B27] transition-all space-y-4 hover:bg-white/10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#C59B27]/20 border border-[#C59B27]/40 flex items-center justify-center text-[#E0BA43]">
                  <Microscope className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  1. STEM Pathway
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Engineered for scholars aspiring towards Medicine, Software Engineering, Civil & Electrical Engineering, Biomedical Research, and Pure Mathematics.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase font-bold text-[#E0BA43] tracking-wider block">Key Tracks & Focus:</span>
                  <div className="text-xs text-gray-300 space-y-1">
                    <p>• Pure Sciences (Physics, Chemistry, Biology)</p>
                    <p>• Applied Sciences & Agriculture</p>
                    <p>• Computing, Coding & Artificial Intelligence</p>
                    <p>• Technical & Engineering Foundations</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/academics/cbc-senior-school"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E0BA43] hover:text-white"
                >
                  <span>Explore Senior STEM</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 2: Social Sciences */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C59B27] transition-all space-y-4 hover:bg-white/10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-sky-500/20 border border-sky-400/40 flex items-center justify-center text-sky-400">
                  <Globe2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  2. Social Sciences Pathway
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Tailored for future Legal Scholars, Corporate Economists, Diplomats, International Relations Specialists, and Business Executives.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase font-bold text-[#E0BA43] tracking-wider block">Key Tracks & Focus:</span>
                  <div className="text-xs text-gray-300 space-y-1">
                    <p>• Humanities (History & Geography)</p>
                    <p>• Economics, Accounting & Business Studies</p>
                    <p>• Advanced Languages & Literature in English</p>
                    <p>• Global Policy & Christian Ethics</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/academics/cbc-senior-school"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E0BA43] hover:text-white"
                >
                  <span>Explore Social Sciences</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Pathway 3: Arts & Sports Science */}
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-[#C59B27] transition-all space-y-4 hover:bg-white/10 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-400/40 flex items-center justify-center text-purple-400">
                  <Palette className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">
                  3. Arts & Sports Science Pathway
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Designed for creative innovators, orchestral musicians, fine artists, athletic champions, and sports management professionals.
                </p>
                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] uppercase font-bold text-[#E0BA43] tracking-wider block">Key Tracks & Focus:</span>
                  <div className="text-xs text-gray-300 space-y-1">
                    <p>• Performing Arts (Music & Drama)</p>
                    <p>• Visual & Digital Media Arts</p>
                    <p>• Sports Science & Physical Education</p>
                    <p>• Brass Band & Orchestral Mastery</p>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t border-white/10">
                <Link
                  to="/academics/cbc-senior-school"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#E0BA43] hover:text-white"
                >
                  <span>Explore Arts & Sports</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

          </div>

          {/* Pre-University Guidance & Placement Banner */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#C59B27]/20 via-white/5 to-[#C59B27]/20 border border-[#C59B27]/40 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#E0BA43] flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>University Advisory & Placement Desk</span>
              </span>
              <h3 className="font-serif text-2xl font-bold text-white">
                Guaranteed University Admissions Guidance
              </h3>
              <p className="text-xs sm:text-sm text-gray-300 max-w-2xl leading-relaxed">
                Every Senior School and A-Level scholar receives dedicated one-on-one counseling for Kenyan public/private universities (KUCCPS, Strathmore, UoN) and international admissions (UK UCAS, USA Common App, Canada).
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button to="/admissions" variant="primary" size="md">
                Senior School Admissions
              </Button>
              <Button to="/contact" variant="secondary" size="md">
                Consult Academic Dean
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* Progressive Curriculum Timeline & All Stages */}
      <section id="curriculum-timeline" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Curriculum Pathways"
          title="Progressive Learning Stages (PP1 – Senior School / A-Levels)"
          subtitle="Explore Kenya CBC and British Cambridge stages below to inspect subject lists, age brackets, learning outcomes, and assessment modes."
        />
        <CurriculumTimeline />
      </section>

      {/* Academic Facilities & Laboratories Showcase */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            badge="Infrastructure & Research"
            title="World-Class Academic & Laboratory Facilities"
            subtitle="Providing our scholars with modern scientific, digital, and artistic resources right on campus in Lanet, Nakuru."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="rounded-3xl overflow-hidden bg-[#F8F9FB] border border-gray-200 shadow-md group">
              <div className="h-48 overflow-hidden">
                <img
                  src={complab}
                  alt="St. Gabriel Computer & Coding Laboratory"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase">
                  <Cpu className="w-4 h-4" />
                  <span>Digital Innovation</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0B1D33]">
                  Advanced Computer & Robotics Lab
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Equipped with high-speed fiber internet, interactive monitors, coding environments for Python, Scratch, and web design, plus hardware robotics toolkits.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#F8F9FB] border border-gray-200 shadow-md group">
              <div className="h-48 overflow-hidden">
                <img
                  src={biology}
                  alt="Modern Science & Chemistry Labs"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase">
                  <Microscope className="w-4 h-4" />
                  <span>Practical Sciences</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0B1D33]">
                  Fully Fitted STEM Research Labs
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Dedicated Biology, Chemistry, and Physics laboratories providing hands-on apparatus for KJSEA practicals, KNEC assessments, and Cambridge IGCSE coursework.
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-[#F8F9FB] border border-gray-200 shadow-md group">
              <div className="h-48 overflow-hidden">
                <img
                  src={brassBand}
                  alt="Performing Arts & Brass Music Hall"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#C59B27] uppercase">
                  <Palette className="w-4 h-4" />
                  <span>Creative Mastery</span>
                </div>
                <h4 className="font-serif text-lg font-bold text-[#0B1D33]">
                  Brass Band & Creative Arts Studio
                </h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                  A dedicated acoustics hall for our championship brass band rehearsals, individual instrumental coaching, fine art easels, and drama staging.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Testimonials on Academic Journey */}
      <TestimonialSlider
        badge="Academic Endorsements"
        title="Scholars & Parents on Academic Life"
        subtitle="Hear first-hand experiences regarding teacher dedication, exam distinctions, and spiritual formation at St. Gabriel."
      />

      {/* Enrollment Call to Action */}
      <section className="bg-[#071321] text-white py-16 border-t-2 border-[#C59B27]">
        <div className="max-w-4xl mx-auto text-center px-4 space-y-6">
          <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40">
            Admissions Open for 2026 Academic Year
          </span>
          <h2 className="font-serif text-2xl sm:text-4xl font-extrabold text-white">
            Give Your Child the St. Gabriel's Mission Academic Advantage
          </h2>
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
            Our admissions and academic advisors in Lanet, Nakuru are available to guide you on CBC and British stream placements, scholarship criteria, and boarding enrollment.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button to="/admissions" variant="primary" size="lg">
              Apply for Admission
            </Button>
            <Button to="/contact" variant="secondary" size="lg">
              Book a School Tour
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
