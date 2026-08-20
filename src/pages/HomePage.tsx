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
  Quote,
  Calendar,
  X,
  Share2
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
import { NewsModal } from '../components/NewsModal';
import { Button } from '../components/Button';
import { StaffModal } from '../components/StaffModal';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { SCHOOL_INFO, NEWS_ITEMS, STAFF_MEMBERS, DIRECTOR_MEMBER, LEADERSHIP_TEAM } from '../data/schoolData';
import { StaffMember, NewsItem } from '../types';

import campusImg from '../assets/images/about/aboutusBackground.webp';
import directorImg from '../assets/images/leadership/director.webp';
import principalImg from '../assets/images/leadership/nicholas.webp';
import claasroomImg from '../assets/images/home/classroomImg.webp';
import artsImg from '../assets/images/gallery/musicBand.webp';
import complabImg from '../assets/images/gallery/compLab.webp';
import graduationImg from '../assets/images/gallery/graduation.webp';
import sportsImg from '../assets/images/gallery/sports.webp';
import faithImg from '../assets/images/gallery/faith.webp';

const homeimg = campusImg;
const claasroom = claasroomImg;
const arts = artsImg;
const complab = complabImg;
const graduation = graduationImg;
const sports = sportsImg;
const faith = faithImg;

const PLACEHOLDER_CAMPUS = homeimg;
const PLACEHOLDER_CLASSROOM = claasroom;
const PLACEHOLDER_ARTS = arts;
const PLACEHOLDER_GRADUATION = graduation;
const PLACEHOLDER_ICT = complab;

export const HomePage: React.FC = () => {
  const [selectedLeader, setSelectedLeader] = useState<StaffMember | null>(null);
  const [activeStory, setActiveStory] = useState<NewsItem | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const openDirectorMessage = () => {
    const director = DIRECTOR_MEMBER || STAFF_MEMBERS.find((s) => s.id === 'director');
    if (director) {
      setSelectedLeader(director);
    }
  };

  const handleShareStory = (story: NewsItem) => {
    if (navigator.share) {
      navigator.share({
        title: story.title,
        text: story.summary,
        url: `${window.location.origin}/news#${story.slug}`,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/news#${story.slug}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="w-full bg-[#F8F9FB]">
      <SEOMetadata
        title="St. Gabriel International School | Kenya CBC & British Cambridge in Nakuru, Kenya"
        description="St. Gabriel International School in Lanet, Nakuru offers premier Kenya CBC (PP1–Senior School Grade 12) & British Cambridge (EYFS–A-Level) education with separate boys & girls boarding facilities."
        keywords="St Gabriel International School, international school nakuru, kenya cbc nakuru, senior school kenya, junior secondary school, jss nakuru, cambridge igcse, a-level, lanet boarding school, christian school nakuru, best school in nakuru, dual curriculum kenya"
        canonicalPath="/"
        ogType="website"
        ogTitle="St. Gabriel International School · Dual Curriculum & Boarding Excellence in Nakuru"
        ogDescription="Providing world-class Kenya CBC & British Cambridge International pathways, championship brass band, STEM laboratories, and separate residential boarding in Lanet, Nakuru."
        faqs={[
          {
            question: "What curricula are offered at St. Gabriel International School?",
            answer: "St. Gabriel International School offers a dual-curriculum structure: the Kenya Competency-Based Curriculum (CBC) from Pre-Primary (PP1/PP2) through Junior Secondary (JSS) and Senior School, alongside the British Cambridge International Pathway from Early Years Foundation Stage (EYFS), Cambridge Primary, Lower Secondary, IGCSE (O-Level) to Advanced Level (A-Level)."
          },
          {
            question: "Where is St. Gabriel International School located in Nakuru?",
            answer: "St. Gabriel International School is located along Transformer Road in Lanet, Nakuru County, Kenya, situated approximately 10 minutes from Nakuru City Centre in a serene, secure learning environment."
          },
          {
            question: "Does St. Gabriel offer boarding facilities?",
            answer: "Yes, St. Gabriel provides modern, secure, and separate boarding compounds for boys and girls located approximately 4 kilometers apart in Lanet, Nakuru with dedicated house parents, medical care, and balanced nutrition."
          },
          {
            question: "How do I apply for admission to St. Gabriel International School?",
            answer: "Admissions can be submitted online via our website application form, by calling admissions directly at +254 724 694 554 / +254 720 349 748, or by visiting our administration offices at the Lanet campus."
          }
        ]}
      />

      {/* 1. Cinematic Hero with hero.mp4 */}
      <Hero onOpenDirectorMessage={openDirectorMessage} />

      {/* 2. Welcome from the Director Highlight */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Director Image & Badge */}
          <div className="lg:col-span-5 relative">
            <div 
              onClick={openDirectorMessage}
              className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-[#C59B27]/40 bg-[#0B1D33] group cursor-pointer"
            >
              <img
                src={directorImg}
                alt="Mr. John Muira - Director & Founder of St. Gabriel International School"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = `https://placehold.co/600x750/0B1D33/E0BA43?text=Mr.+Anthony+Maina+(Director)`;
                }}
                className="w-full h-[450px] object-cover object-top group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33] via-transparent to-transparent opacity-90"></div>
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="px-3 py-1 rounded-full bg-[#C59B27] text-[#0B1D33] text-xs font-bold uppercase tracking-wider inline-block">
                  Director&apos;s Welcome
                </span>
                <h3 className="font-serif text-2xl font-bold text-white group-hover:text-[#E0BA43] transition-colors">Mr. Anthony Maina</h3>
                <p className="text-xs text-[#E0BA43] font-medium">Director & Founder • St. Gabriel Group of Schools</p>
                <p className="text-[11px] text-gray-300 underline pt-1 flex items-center gap-1 font-semibold">
                  <span>Click photo to read full message & biography &rarr;</span>
                </p>
              </div>
            </div>

            {/* Quick Stats Pill Floating */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#C59B27]/20 flex items-center justify-center text-[#C59B27]">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-bold text-[#0B1D33] font-serif block">28+ Years</span>
                <span className="text-[11px] text-gray-500 font-medium">Legacy of Excellence</span>
              </div>
            </div>
          </div>

          {/* Director Letter Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#0B1D33] text-xs font-extrabold uppercase tracking-widest border border-[#C59B27]/30 inline-block">
                Director&apos;s Welcome Address
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#0B1D33] leading-tight">
                Nurturing Visionary Leaders for Kenya and the World
              </h2>
            </div>

            <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed">
              <p className="italic border-l-4 border-[#C59B27] pl-4 text-gray-800 font-medium">
                &ldquo;At St. Gabriel International School, our vision is to ignite intellect, character, and lifelong purpose in every child under God&apos;s grace.&rdquo;
              </p>
              <p>
                Welcome to St. Gabriel International School, Lanet, Nakuru. For over 28 years, our institution has stood as a beacon of academic distinction and moral integrity in Kenya. We are proud to offer dual excellence: both the full <strong>Kenya Competency-Based Curriculum (CBC from PP1 to Senior School Grade 12)</strong> and the <strong>British Cambridge International Pathway (EYFS to A-Level)</strong>.
              </p>
              <p>
                Whether in our modern STEM robotics laboratories, on championship athletic fields, within our nationally acclaimed orchestral brass band, or across our separate serene boys and girls residential boarding compounds, we guide each young scholar toward a balanced, purposeful life.
              </p>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={openDirectorMessage}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B1D33] hover:bg-[#C59B27] hover:text-[#0B1D33] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md cursor-pointer"
              >
                <span>Read Full Director&apos;s Address</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Button to="/about" variant="outline">
                About Our 28-Year Heritage
              </Button>

              <Button to="/staff" variant="secondary">
                View Faculty & Staff
              </Button>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Why Choose St. Gabriel (6 Pillars) */}
      <section className="py-16 sm:py-24 bg-[#0B1D33] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-dots.svg')] opacity-5" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-xs font-bold uppercase tracking-widest border border-[#C59B27]/40 inline-block">
              Why Families Choose St. Gabriel
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Six Pillars of Academic & Personal Distinction
            </h2>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Designed to nurture balanced intellect, Christian character, and practical real-life skills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'Dual Pathways',
                title: 'Kenya CBC & British Cambridge',
                desc: 'Seamless choice between the national CBC stream (PP1 to Grade 12) and the British Cambridge International curriculum (EYFS to A-Level).'
              },
              {
                icon: <Heart className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'HOPE TO THE WORLD',
                title: 'Christian Moral Foundation & Values',
                desc: 'Rooted in faith, discipline, empathy, and integrity, preparing principled young men and women who serve their communities.'
              },
              {
                icon: <ShieldCheck className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'Separate 4km Compounds',
                title: 'Dedicated Boys & Girls Boarding',
                desc: 'Safe, serene residential campuses located ~4km apart in Lanet with 24/7 security, resident matrons, and dedicated houseparents.'
              },
              {
                icon: <Cpu className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'Hands-On Learning',
                title: 'Advanced STEM & Science Labs',
                desc: 'Cutting-edge Biology, Chemistry, Physics, and ICT Robotics suites that foster analytical curiosity and real scientific discovery.'
              },
              {
                icon: <Music className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'Champion Talent',
                title: 'Acclaimed Brass Band & Sports',
                desc: 'Nationally acclaimed brass band orchestral training, competitive football, basketball, swimming, athletics, drama theater, and Model UN delegations.'
              },
              {
                icon: <CheckCircle2 className="w-7 h-7 text-[#E0BA43]" />,
                badge: 'Since 1998',
                title: '28+ Years of Proven Excellence',
                desc: 'A trusted legacy in Nakuru County with 100% transition rates, top distinctions in KNEC & Cambridge exams, and alumni excelling in global universities.'
              }
            ].map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 hover:border-[#C59B27]/60 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C59B27]/20 text-[#E0BA43] text-[10px] font-bold uppercase tracking-wider border border-[#C59B27]/30">
                    {pillar.badge}
                  </span>
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{pillar.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Curriculum Journey (Kenya CBC + British Cambridge) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Dual Academic Pathways"
          title="Our Curriculum Journey"
          subtitle="Explore our dual pathways: Kenya Competency-Based Curriculum (PP1 to Senior School Grade 12) & British Cambridge International (EYFS to A-Level)."
        />
        <CurriculumTimeline />
      </section>

      {/* 5. Boarding Experience Spotlight */}
      <section className="bg-white border-y border-gray-200">
        <BoardingSection />
      </section>

      {/* 6. Fees, Payment Methods & Transparency */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <SectionHeading
          badge="Transparent Fee Structure"
          title="Boarding Fees & Payment Channels"
          subtitle="Clear, all-inclusive termly fee schedules and official cashless payment guidelines via Equity Bank and M-Pesa Paybill."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-xl space-y-6">
            <h3 className="font-serif text-xl font-bold text-[#0B1D33]">
              Termly Boarding Fee Breakdown (KES)
            </h3>
            <FeeTable />
            <div className="pt-4 text-center">
              <Button to="/fees-and-requirements" variant="outline" size="sm">
                View Full Requirements & Uniform List
              </Button>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <PaybillCard />
            <BankPaymentCard />
          </div>
        </div>
      </section>

      {/* 7. Campus & Student Life Gallery */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <SectionHeading
          badge="Life at St. Gabriel"
          title="Campus Life & Modern Facilities"
          subtitle="Explore our vibrant learning spaces, laboratories, athletics grounds, and dormitories in Lanet, Nakuru."
        />
        <Gallery limit={6} showFilter={false} />
        <div className="text-center pt-4">
          <Button to="/gallery" variant="outline" size="md">
            View Complete Photo Gallery & Virtual Tour
          </Button>
        </div>
      </section>

      {/* 9. Interactive Testimonials Slider */}
      <TestimonialSlider
        badge="Parent & Scholar Testimonials"
        title="What Families Say About St. Gabriel"
        subtitle="Read authentic reviews with verified 5-star ratings from current parents, scholars, and alumni across our Kenya CBC and British Cambridge streams."
      />

      {/* 10. News & Events */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Latest Updates"
          title="News & Events"
          subtitle="Stay updated with school announcements, Cambridge exam distinction achievements, and gala celebrations."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_ITEMS.map((news) => (
            <NewsCard 
              key={news.id} 
              news={news} 
              onReadMore={(item) => setActiveStory(item)} 
            />
          ))}
        </div>
      </section>

      {/* 11. Call to Action Banner */}
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

      {/* Interactive News Story Modal for Homepage */}
      <NewsModal
        news={activeStory}
        onClose={() => setActiveStory(null)}
        onSelectNews={(story) => setActiveStory(story)}
        allNews={NEWS_ITEMS}
      />

    </div>
  );
};
