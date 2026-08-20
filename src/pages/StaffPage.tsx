import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Search,
  GraduationCap,
  Mail,
  Phone,
  ArrowRight,
  Sparkles,
  BookOpen,
  Heart,
  ShieldCheck,
  Award,
  Filter,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { SEOMetadata } from '../components/SEOMetadata';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SectionHeading } from '../components/SectionHeading';
import { Button } from '../components/Button';
import { StaffModal } from '../components/StaffModal';
import { FACULTY_MEMBERS, LEADERSHIP_TEAM, STAFF_MEMBERS, SCHOOL_INFO } from '../data/schoolData';
import { StaffMember } from '../types';
import heroBgImg from '../assets/images/staff/staffbackground.webp';

const DEPARTMENTS = [
  'All Faculty & Staff',
  'Executive Leadership',
  'Sciences & STEM',
  'Languages & Humanities',
  'Mathematics & Computing',
  'Early Years & Primary',
  'Pastoral Care & Boarding',
  'Sports & Creative Arts',
  'Academic Administration',
];

export const StaffPage: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<string>('All Faculty & Staff');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedMember, setSelectedMember] = useState<StaffMember | null>(null);

  // Filter staff members based on category and search query
  const filteredFaculty = useMemo(() => {
    return STAFF_MEMBERS.filter((member) => {
      const matchesDept =
        selectedDept === 'All Faculty & Staff' ||
        member.department.toLowerCase().includes(selectedDept.toLowerCase()) ||
        (selectedDept === 'Executive Leadership' && (member.department.includes('Board') || member.department.includes('Executive') || member.department.includes('Operations'))) ||
        (selectedDept === 'Sciences & STEM' && member.department.includes('Science')) ||
        (selectedDept === 'Languages & Humanities' && (member.department.includes('Languages') || member.department.includes('Humanities'))) ||
        (selectedDept === 'Mathematics & Computing' && (member.department.includes('Mathematics') || member.department.includes('Computing') || member.department.includes('ICT'))) ||
        (selectedDept === 'Pastoral Care & Boarding' && (member.department.includes('Pastoral') || member.department.includes('Boarding'))) ||
        (selectedDept === 'Sports & Creative Arts' && (member.department.includes('Sports') || member.department.includes('Arts'))) ||
        (selectedDept === 'Academic Administration' && (member.department.includes('Administration') || member.department.includes('Academic')));

      const matchesSearch =
        searchQuery.trim() === '' ||
        member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.qualification.toLowerCase().includes(searchQuery.toLowerCase()) ||
        member.bio.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesDept && matchesSearch;
    });
  }, [selectedDept, searchQuery]);

  return (
    <div className="w-full bg-[#F8F9FB] min-h-screen">
      <SEOMetadata
        title="Faculty & Teaching Staff | St. Gabriel International School, Nakuru"
        description="Meet the dedicated, internationally certified educators, STEM specialists, department heads, and pastoral mentors at St. Gabriel International School in Lanet, Nakuru."
        keywords="St Gabriel teachers, international school faculty nakuru, cambridge teachers kenya, cbc educators, nakuru boarding school staff, science teachers nakuru, brass band director"
        canonicalPath="/staff"
        ogType="website"
        ogTitle="Faculty & Teaching Staff · St. Gabriel International School"
        ogDescription="World-class educators and compassionate mentors empowering academic excellence and Christian character in Lanet, Nakuru."
        breadcrumbs={[{ name: 'Faculty & Staff', path: '/staff' }]}
        customSchema={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          name: 'Faculty & Staff Directory - St. Gabriel International School',
          description: 'Meet our academic leadership, department heads, certified Cambridge educators, and pastoral mentors.',
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: STAFF_MEMBERS.map((member, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              item: {
                '@type': 'Person',
                name: member.name,
                jobTitle: member.role,
                worksFor: {
                  '@type': 'EducationalOrganization',
                  name: SCHOOL_INFO.name
                },
                description: member.bio
              }
            }))
          }
        }}
      />

      {/* Hero Banner with backgroundleadership.webp */}
      <section className="relative bg-[#0A192F] text-white py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBgImg}
            alt="St. Gabriel Faculty Background"
            className="w-full h-full object-cover opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#071321] via-[#0A192F]/90 to-[#0A192F]/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: 'About', path: '/about' },
              { label: 'Faculty & Staff', path: '/staff' },
            ]}
          />

          <div className="max-w-3xl mt-6 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest border border-[#D4AF37]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inspiring Educators & Mentors</span>
            </span>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Distinguished <span className="text-[#D4AF37]">Faculty & Staff</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-200 leading-relaxed font-normal">
              Meet our passionate team of Cambridge International certified tutors, Kenya CBC specialists, STEM researchers, language experts, and compassionate pastoral caregivers dedicated to bringing out the genius in every scholar.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Link
                to="/about#leadership"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white text-xs font-bold uppercase tracking-wider transition-all border border-white/20"
              >
                <span>View 5-Member Executive Directorate</span>
                <ChevronRight className="w-4 h-4" />
              </Link>

              <Link
                to="/admissions"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#5CE1E6] hover:bg-[#4bc7cc] text-[#0A192F] text-xs font-bold uppercase tracking-wider transition-all shadow"
              >
                <span>Enroll Your Child</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Faculty Content */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Search & Filter Controls */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-200 shadow-sm mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="space-y-1 w-full md:w-auto">
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0B1D33] flex items-center gap-2">
                <Users className="w-6 h-6 text-[#C59B27]" />
                <span>Faculty Directory</span>
              </h2>
              <p className="text-xs text-gray-500">
                Showing {filteredFaculty.length} educators across departments
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search faculty by name, role, subject..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#C59B27] focus:bg-white transition-all text-gray-800"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-400 hover:text-gray-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Department Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {DEPARTMENTS.map((dept) => {
              const active = selectedDept === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    active
                      ? 'bg-[#0B1D33] text-[#E0BA43] shadow-md border border-[#C59B27]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-transparent'
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </div>

        {/* Faculty Cards Grid */}
        {filteredFaculty.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredFaculty.map((member) => (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member)}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Photo Header */}
                <div className="relative h-full w-full overflow-hidden bg-[#0A192F]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1D33]/90 via-[#0B1D33]/20 to-transparent"></div>

                  {/* Department Tag */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0A192F]/90 backdrop-blur-md text-[#D4AF37] text-[10px] font-bold uppercase tracking-wider border border-[#D4AF37]/30 shadow">
                      {member.department}
                    </span>
                  </div>

                  {/* Experience Badge */}
                  {member.experience && (
                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-0.5 rounded-full bg-white/90 text-[#0B1D33] text-[10px] font-extrabold shadow">
                        {member.experience}
                      </span>
                    </div>
                  )}

                  {/* Role Label */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <span className="text-xs text-[#D4AF37] font-semibold block truncate">
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-[#0B1D33] group-hover:text-[#C59B27] transition-colors leading-tight">
                      {member.name}
                    </h3>

                    {/* Qualifications */}
                    <div className="flex items-start gap-1.5 text-xs text-gray-700 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                      <GraduationCap className="w-4 h-4 text-[#C59B27] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2 font-medium text-[11px]">{member.qualification}</span>
                    </div>

                    {/* Bio Snippet */}
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed pt-1">
                      {member.bio}
                    </p>
                  </div>

                  {/* Card Bottom / Action */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs font-bold text-[#0B1D33] group-hover:text-[#C59B27]">
                    <span>View Bio & Qualifications</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-200 p-8 space-y-4">
            <Users className="w-12 h-12 text-gray-400 mx-auto" />
            <h3 className="font-serif text-xl font-bold text-gray-700">No staff members found</h3>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              No faculty matching &quot;{searchQuery}&quot; in {selectedDept}. Try adjusting your search query or selecting &quot;All Faculty & Staff&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedDept('All Faculty & Staff');
                setSearchQuery('');
              }}
              className="px-5 py-2 rounded-xl bg-[#0B1D33] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C59B27] hover:text-[#0B1D33] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Executive Directorate Spotlight Card */}
        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border-2 border-[#C59B27]/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left max-w-2xl">
            <span className="px-3.5 py-1 rounded-full bg-[#C59B27]/20 text-[#0B1D33] text-xs font-bold uppercase tracking-widest inline-block border border-[#C59B27]/40">
              Institutional Governance
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0B1D33]">
              Executive Directorate & Board of Management
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Discover our 5-member executive governance team: The Director, Vice Director, Chief Principal, Principal & Academic Dean, and School Operations Manager on our About Us page.
            </p>
          </div>
          <Button
            to="/about#leadership"
            variant="primary"
            size="lg"
            className="whitespace-nowrap uppercase tracking-wider font-bold"
            icon={<ArrowRight className="w-5 h-5" />}
          >
            MEET EXECUTIVE LEADERSHIP
          </Button>
        </div>

      </section>

      {/* Staff Profile Modal */}
      <StaffModal
        member={selectedMember}
        isOpen={!!selectedMember}
        onClose={() => setSelectedMember(null)}
      />
    </div>
  );
};

export default StaffPage;
