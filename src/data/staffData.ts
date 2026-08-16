import { StaffMember } from '../types';

import nicholasLeadershipImg from '../assets/images/leadership/nicholas.webp';
import peterStaffImg from '../assets/images/staff/peter.webp';
import mainaStaffImg from '../assets/images/staff/maina.webp';
import jamesLeadershipImg from '../assets/images/leadership/james.webp';
import graceLeadershipImg from '../assets/images/leadership/grace.webp';
import sarahLeadershipImg from '../assets/images/leadership/sarah.webp';
import johnStaffImg from '../assets/images/staff/john.webp';
import aliciaStaffImg from '../assets/images/staff/alicia.webp';
import camilaStaffImg from '../assets/images/staff/camila.webp';
import godfreyStaffImg from '../assets/images/staff/godfrey.webp';
import labanStaffImg from '../assets/images/staff/laban.webp';
import njorogeStaffImg from '../assets/images/staff/njoroge.webp';
import staff2Img from '../assets/images/staff/staff2.webp';
import directorImg from '../assets/images/leadership/director.webp';
import mdDirectorImg from '../assets/images/leadership/mddirector.webp';
import edwinImg from '../assets/images/leadership/edwin.webp';
import patrickImg from '../assets/images/leadership/patrick.webp';

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'principal-nicholas',
    name: 'Mr. Nicholas Okeyo',
    role: 'Executive Principal & Head of School',
    department: 'Executive Administration',
    qualification: 'M.Ed. Educational Leadership (Univ. of London), B.Ed. Science (Kenyatta Univ.)',
    bio: 'With over 24 years of distinguished leadership across premier national and international schools, Mr. Nicholas oversees the strategic academic vision, character formation, and institutional excellence at St. Gabriel International School.',
    welcomeMessage: 'Welcome to St. Gabriel International School. Here, every child is nurtured into a confident, ethically grounded, and intellectually formidable global citizen.',
    experience: '24+ Years Leadership',
    image: nicholasLeadershipImg,
    email: 'principal@stgabrielinternational.sc.ke',
    detailedMessage: [
      'At St. Gabriel International School, we believe that education must speak to both the mind and the heart.',
      'Our dual-curriculum structure allows parents the unique flexibility to choose between the Kenyan CBC and the British Cambridge International pathway.',
      'We welcome you to visit our campuses in Lanet and experience our vibrant learning community firsthand.'
    ]
  },
  {
    id: 'deputy-peter',
    name: 'Mr. Peter Mwangi',
    role: 'Vice Principal & Academic Dean',
    department: 'Academic Administration',
    qualification: 'M.Sc. Curriculum Development (UoN), B.Ed. (Hons)',
    bio: 'Mr. Mwangi coordinates the dual-curriculum syllabus mapping, teacher professional development, and rigorous national and international assessment frameworks across all grades.',
    welcomeMessage: 'We design learning pathways that inspire critical inquiry and ignite lifelong curiosity.',
    experience: '18+ Years Experience',
    image: peterStaffImg,
    email: 'academics@stgabrielinternational.sc.ke'
  },
  {
    id: 'boarding-maina',
    name: 'Mr. Maina',
    role: 'Head of Boarding & Pastoral Welfare',
    department: 'Pastoral & Student Welfare',
    qualification: 'B.A. Psychology & Counseling, Higher Dip. Child Welfare',
    bio: 'Overseeing both residential compounds in Lanet, Mr. Maina ensures a safe, warm, disciplined home-away-from-home where boarders cultivate self-reliance, leadership, and camaraderie.',
    welcomeMessage: 'Our boarding life is grounded in Christian brotherhood, holistic wellness, and strong academic discipline.',
    experience: '15+ Years Experience',
    image: mainaStaffImg,
    email: 'boarding@stgabrielinternational.sc.ke'
  },
  {
    id: 'co-curricular-james',
    name: 'Mr. James Kiptoo',
    role: 'Director of Co-Curricular & Sports',
    department: 'Physical Education & Performing Arts',
    qualification: 'B.Sc. Sports Science, Certified IAAF Coach, Level 3 Brass Band Instructor',
    bio: 'Director James spearheads our championship brass band, regional football teams, Taekwondo dojo, and international sports tournaments, instilling sportsmanship and resilience.',
    welcomeMessage: 'Discipline on the field translates directly into excellence in the classroom.',
    experience: '14+ Years Coaching',
    image: jamesLeadershipImg,
    email: 'sports@stgabrielinternational.sc.ke'
  },
  {
    id: 'head-eyfs-grace',
    name: 'Mrs. Grace Wanjiru',
    role: 'Head of Early Years & Cambridge Primary',
    department: 'Early Childhood & Primary',
    qualification: 'B.Ed. Early Childhood Development (Cambridge Certified)',
    bio: 'Mrs. Wanjiru crafts joyful, sensory-rich playgroup and primary environments that develop foundational phonics, numeracy, and emotional intelligence.',
    welcomeMessage: 'Every child\'s early journey begins with love, wonder, and purposeful discovery.',
    experience: '12+ Years Experience',
    image: graceLeadershipImg,
    email: 'eyfs@stgabrielinternational.sc.ke'
  },
  {
    id: 'pastoral-sarah',
    name: 'Ms. Sarah Chebet',
    role: 'Head of Girls\' Boarding & Counseling',
    department: 'Pastoral Care & Counseling',
    qualification: 'M.A. Counseling Psychology, B.Ed.',
    bio: 'Ms. Chebet provides compassionate mentorship and dedicated counseling support across the girls\' boarding compound, guiding adolescent scholars with empathy and dignity.',
    welcomeMessage: 'We nurture young women of exceptional poise, moral courage, and intellect.',
    experience: '11+ Years Experience',
    image: sarahLeadershipImg,
    email: 'counseling@stgabrielinternational.sc.ke'
  },
  {
    id: 'stem-john',
    name: 'Dr. John Ochieng',
    role: 'Head of STEM & Science Laboratories',
    department: 'Science & Technology',
    qualification: 'Ph.D. Applied Physics, B.Ed. Science',
    bio: 'Dr. Ochieng leads the high school science department, robotics club, and competitive STEM olympiad teams.',
    welcomeMessage: 'Science is about active discovery, experimentation, and solving real-world challenges.',
    experience: '16+ Years Experience',
    image: johnStaffImg,
    email: 'stem@stgabrielinternational.sc.ke'
  },
  {
    id: 'languages-alicia',
    name: 'Mme. Alicia Nduta',
    role: 'Head of Languages & Modern Foreign Languages',
    department: 'Languages & Humanities',
    qualification: 'M.A. French Linguistics, DELF/DALF Certified Examiner',
    bio: 'Spearheading multilingual fluency in English, French, and Kiswahili, preparing scholars for international diplomacy and global university study.',
    welcomeMessage: 'Languages open doors to understanding our diverse and interconnected world.',
    experience: '13+ Years Experience',
    image: aliciaStaffImg,
    email: 'languages@stgabrielinternational.sc.ke'
  },
  {
    id: 'mathematics-godfrey',
    name: 'Mr. Godfrey Kiprono',
    role: 'Senior Cambridge & CBC Mathematics Lead',
    department: 'Mathematics & Computing',
    qualification: 'B.Sc. Pure Mathematics & Statistics, Dip. Ed.',
    bio: 'Expert mathematics mentor celebrated for simplifying complex concepts and mentoring regional mathematics contest champions.',
    welcomeMessage: 'Mathematics is the foundational language of logical reasoning and universal truth.',
    experience: '14+ Years Experience',
    image: godfreyStaffImg,
    email: 'maths@stgabrielinternational.sc.ke'
  },
  {
    id: 'ict-laban',
    name: 'Mr. Laban Otieno',
    role: 'Head of ICT & Computer Laboratories',
    department: 'Information & Communications Technology',
    qualification: 'B.Sc. Computer Science, CCNA, Microsoft Certified Educator',
    bio: 'Directs digital literacy, software programming, web development workshops, and campus-wide technological infrastructure.',
    welcomeMessage: 'Empowering future innovators with 21st-century coding and computational skills.',
    experience: '10+ Years Experience',
    image: labanStaffImg,
    email: 'ict@stgabrielinternational.sc.ke'
  },
  {
    id: 'humanities-njoroge',
    name: 'Mr. Njoroge Kariuki',
    role: 'Head of Humanities & Social Sciences',
    department: 'Social Sciences & CRE',
    qualification: 'B.Ed. Arts (History & Christian Religious Education)',
    bio: 'Inspires deep historical inquiry, ethical leadership, civic engagement, and community service projects.',
    welcomeMessage: 'Understanding our history guides us in shaping a more just and hopeful future.',
    experience: '15+ Years Experience',
    image: njorogeStaffImg,
    email: 'humanities@stgabrielinternational.sc.ke'
  },
  {
    id: 'arts-camila',
    name: 'Ms. Camila Achieng',
    role: 'Head of Creative Arts & Design',
    department: 'Visual & Performing Arts',
    qualification: 'B.A. Fine Art & Design, Dip. Music Production',
    bio: 'Passionate visual artist cultivating student creativity through painting, sculpture, graphic design, and annual art exhibitions.',
    welcomeMessage: 'Art is where imagination transforms into lasting beauty and expression.',
    experience: '9+ Years Experience',
    image: camilaStaffImg,
    email: 'arts@stgabrielinternational.sc.ke'
  },
  {
    id: 'boarding-staff2',
    name: 'Mrs. Beatrice Kemunto',
    role: 'Resident Housemistress & Nutritionist',
    department: 'Boarding & Health Services',
    qualification: 'Dip. Clinical Nutrition & Hospitality Management',
    bio: 'Oversees dormitory hygiene, balanced meal planning, and health clinic care for residential scholars.',
    welcomeMessage: 'Every boarder receives the warmth, care, and nutritional support of home.',
    experience: '12+ Years Experience',
    image: staff2Img,
    email: 'welfare@stgabrielinternational.sc.ke'
  }
];

export const LEADERSHIP_TEAM = STAFF_MEMBERS.slice(0, 6);
export const TEACHING_FACULTY = STAFF_MEMBERS.slice(6);
