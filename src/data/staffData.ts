import { StaffMember } from '../types';

import directorImg from '../assets/images/leadership/director.webp';
import mdDirectorImg from '../assets/images/leadership/mddirector.webp';
import nicholasLeadershipImg from '../assets/images/leadership/nicholas.webp';
import payrick from '../assets/images/leadership/payrick.webp';
import edwinImg from '../assets/images/leadership/edwin.webp'
import zachary from '../assets/images/leadership/zachary.webp'

import aliciaStaffImg from '../assets/images/staff/alicia.webp';
import godfreyStaffImg from '../assets/images/staff/godfrey.webp';
import labanStaffImg from '../assets/images/staff/laban.webp';
import njorogeStaffImg from '../assets/images/staff/njoroge.webp';
import michael from '../assets/images/staff/michael.webp';
import lydia from '../assets/images/staff/lydia.webp';
import camila from '../../src/assets/images/staff/camila.webp';
import bosbori from '../../src/assets/images/staff/bosbori.webp';
import selina from '../../src/assets/images/staff/selina.webp';


// ---------------------------------------------------------------------------
// 5 EXECUTIVE LEADERSHIP MEMBERS (Featured on About Page & Director Welcome)
// 1. The Director
// 2. Vice Director
// 3. Chief Principal
// 4. Principal
// 5. School Manager
// ---------------------------------------------------------------------------
export const LEADERSHIP_TEAM: StaffMember[] = [
  {
    id: 'director',
    name: 'Mr. John Muira',
    role: 'Director & Founder',
    department: 'Board of Directors',
    qualification: 'M.Ed. Institutional Leadership & Management, B.Ed. (Hons)',
    bio: 'Visionary founder and Director of St Gabriel\'s Group of Schools. For over 28 years, Mr. Maina has spearheaded the strategic expansion, spiritual vision, infrastructure development, and dual-curriculum excellence of St Gabriel\'s in Lanet, Nakuru County.',
    welcomeMessage: 'At St Gabriel\'s International School, we nurture every child into a confident, ethically grounded, and intellectually formidable global citizen under God\'s grace.',
    experience: '28+ Years Visionary Leadership',
    image: directorImg,
    email: 'director@stgabrielinternational.sc.ke',
    phone: '+254 724 694 554',
    detailedMessage: [
      'Welcome to St Gabriel\'s International School. Since our founding in 1998 in Lanet, Nakuru, our guiding mission has remained uncompromising: to provide transformative education that speaks to both the mind and the heart.',
      'With our state-of-the-art international campus, we proudly offer dual academic distinction: the Kenyan Competency-Based Curriculum (CBC through Junior and Senior School) alongside the premier British International pathway (EYFS to A-Level).',
      'Our separate residential boarding compounds for boys and girls provide a disciplined, secure, and nurturing home-away-from-home.',
      'We warmly welcome all parents and guardians to visit us in Lanet and partner with us in shaping the leaders of tomorrow.'
    ]
  },
  {
    id: 'vice-director',
    name: 'Mrs. Margaret Maina',
    role: 'Vice Director & Managing Director',
    department: 'Board of Directors',
    qualification: 'M.A. Educational Planning & Administration, B.Ed. Early Childhood & Special Education',
    bio: 'Co-founder and Managing Executive directing institutional welfare, strategic operations, pastoral oversight, and quality assurance across all school divisions.',
    welcomeMessage: 'Every child in our institution is a precious trust, nurtured with Christian love, discipline, and world-class academic support.',
    experience: '26+ Years Experience',
    image: mdDirectorImg,
    email: 'mddirector@stgabrielinternational.sc.ke',
    phone: '+254 720 349 748',
    detailedMessage: [
      'Our commitment at St Gabriel\'s goes beyond classroom academics. We cultivate moral poise, empathetic character, and high aesthetic and athletic expression in every scholar.',
      'We ensure that every residential boarder and day scholar thrives within a safe, hygienic, and inspiring campus environment.'
    ]
  },
  {
    id: 'junior-School-principal',
    name: 'Mr. Nicholas Okeyo',
    role: 'Junior School Principal ',
    department: 'Executive Administration',
    qualification: 'Bachelor of Education Mathematics and Biology (MKU))',
    bio: 'Distinguished educator with over 24 years of executive leadership in leading national and international curriculum institutions. Oversees academic standards, faculty mentoring, and dual-curriculum execution.',
    welcomeMessage: 'We empower students to become critical thinkers, principled leaders, and innovative global problem solvers.',
    experience: '24+ Years Leadership',
    image: nicholasLeadershipImg,
    email: '',
    phone: '+254 706470471',
    detailedMessage: [
      'Education at St Gabriel\'s is an exhilarating journey of inquiry, discovery, and character building.',
      'Whether preparing for national KPSEA and KCSE milestones or sitting for British IGCSE and A-Level examinations, our learners achieve exemplary mastery.'
    ]
  },
  {
    id: 'principal-peter',
    name: 'Mr. Patrick Ouko',
    role: 'Boy\'s Principal',
    department: 'Academic Administration',
    qualification: 'Bachelor of Education Science Chemisrty/Physics MKU',
    bio: 'Coordinates dual-curriculum syllabus mapping, teacher professional development, STEM laboratory pedagogy, and international examination administration.',
    welcomeMessage: 'We design rigorous learning pathways that inspire scientific curiosity and lifelong intellectual mastery.',
    experience: '18+ Years Experience',
    image: payrick,
    email: ''
  },
  {
    id: 'school-manager',
    name: 'Mr. Paul Muira',
    role: 'School Manager & Operations Director',
    department: 'Operations & Institutional Management',
    qualification: 'B.Com. Operations Management, Certified Public Administrator',
    bio: 'Directs institutional logistics, campus security protocols, transportation fleets, boarding compound maintenance, and auxiliary services.',
    welcomeMessage: 'Ensuring seamless daily operations, supreme security, and world-class facilities for our day and boarding school community.',
    experience: '16+ Years Experience',
    image: camila,
    email: ''
  },
  {
    id: 'academic-principal',
    name: 'Mr. Edwin Werunga',
    role: 'Academic Principal',
    department: 'Academic',
    qualification: 'Bachelor of Education, Masters in Education (MMUST)',
    bio: 'Assisting prospective families with enrollment evaluations, campus tours, boarding registrations, and curriculum placement.',
    welcomeMessage: 'We are here to guide your family smoothly into the St Gabriel\'s community.',
    experience: '20+ Years Experience',
    image: edwinImg,
    email: ''
  },
  {
    id: 'deputy-mission',
    name: 'Mr. Zachary Gikonyo',
    role: 'Deputy Principal',
    department: 'Academic',
    qualification: 'Bachelor of Education Science (bio/chem) at Karatina University',
    bio: 'Assisting prospective families with enrollment evaluations, campus tours, boarding registrations, and curriculum placement.',
    welcomeMessage: 'We are here to guide your family smoothly into the St Gabriel\'s community.',
    experience: '20+ Years Experience',
    image: zachary,
    email: ''
  }

];

export const DIRECTOR_MEMBER = LEADERSHIP_TEAM[0];

// ---------------------------------------------------------------------------
// TEACHING FACULTY & DEPARTMENT HEADS (Featured on Dedicated Staff Page)
// ---------------------------------------------------------------------------
export const FACULTY_MEMBERS: StaffMember[] = [
  {
    id: 'hod-humanities',
    name: 'Md. Lydia  Bosibori',
    role: 'HOD Humanities',
    department: 'Academics',
    qualification: 'Bachelor of Education Kiswahili/CRE at Kenyatta University',
    bio: 'Overseeing the humanities Department to ensure student and teachers are interacting well. Aslo ensure the perfomance of the humanities course is met as expected.',
    welcomeMessage: 'Our boarding life is grounded in Christian brotherhood, holistic wellness, and strong academic discipline.',
    experience: '15+ Years Experience',
    image: bosbori,
    email: ''
  },
  {
    id: 'boarding-mistress',
    name: 'Md. Selina',
    role: 'Boarding Mistress',
    department: 'HOD Technicals and Applied sciences',
    qualification: 'Bachelor of education Egerton university',
    bio: 'She is a boarding mistress . she ensures boarding life is smooth. Also she is the HOD in Pure and Applied Sciences where she ensure sciences subjects are taught as expected in the curricullum and perfomance is met as expected in the school',
    experience: '12+ Years of expirience',
    image: selina,
    email: ''
  },
  {
    id: 'head-eyfs-grace',
    name: 'Mrs. Grace Wanjiru',
    role: 'Head of Early Years & British Primary',
    department: 'Early Years & Primary',
    qualification: 'B.Ed. Early Childhood Development (British Certified)',
    bio: 'Mrs. Wanjiru crafts joyful, sensory-rich playgroup and primary environments that develop foundational phonics, numeracy, and emotional intelligence.',
    welcomeMessage: 'Every child\'s early journey begins with love, wonder, and purposeful discovery.',
    experience: '12+ Years Experience',
    image: camila,
    email: ''
  },
  {
    id: 'pastoral-sarah',
    name: 'Ms. Sarah Chebet',
    role: 'Head of Girls\' Boarding & Counseling',
    department: 'Pastoral Care & Boarding',
    qualification: 'M.A. Counseling Psychology, B.Ed.',
    bio: 'Ms. Chebet provides compassionate mentorship and dedicated counseling support across the girls\' boarding compound, guiding adolescent scholars with empathy and dignity.',
    welcomeMessage: 'We nurture young women of exceptional poise, moral courage, and intellect.',
    experience: '11+ Years Experience',
    image: camila,
    email: 'counseling@stgabrielinternational.sc.ke'
  },
  {
    id: 'stem-john',
    name: 'Mr. Fredrick Were Otembo',
    role: 'Technology Officer',
    department: 'Technology',
    qualification: 'B.Arts in Literature at Pwani University',
    bio: 'Dr. Ochieng leads the high school science department, robotics club, and competitive STEM olympiad teams.',
    welcomeMessage: 'Science is about active discovery, experimentation, and solving real-world challenges.',
    experience: '16+ Years Experience',
    image: camila,
    email: ''
  },
  {
    id: 'languages-alicia',
    name: 'Mrs. Alice Wairimu',
    role: 'Head of Languages & Modern Foreign Languages',
    department: 'Languages & Humanities',
    qualification: 'M.A. French Linguistics, DELF/DALF Certified Examiner',
    bio: 'Spearheading multilingual fluency in English, French, and Kiswahili, preparing scholars for international diplomacy and global university study.',
    welcomeMessage: 'Languages open doors to understanding our diverse and interconnected world.',
    experience: '13+ Years Experience',
    image: aliciaStaffImg,
    email: ''
  },
  {
    id: 'mathematics-godfrey',
    name: 'Mr. Godfrey Wahungu',
    role: 'Senior British & CBC Mathematics Lead',
    department: 'Mathematics & Computing',
    qualification: 'B.Sc. Pure Mathematics & Statistics, Dip. Ed.',
    bio: 'Expert mathematics mentor celebrated for simplifying complex concepts and mentoring regional mathematics contest champions.',
    welcomeMessage: 'Mathematics is the foundational language of logical reasoning and universal truth.',
    experience: '14+ Years Experience',
    image: godfreyStaffImg,
    email: ''
  },
  {
    id: 'ict-laban',
    name: 'Mr. Laban Mbunya',
    role: 'Head of ICT & Computer Laboratories',
    department: 'Mathematics & Computing',
    qualification: 'B.Sc. Computer Science, CCNA, Microsoft Certified Educator',
    bio: 'Directs digital literacy, software programming, web development workshops, and campus-wide technological infrastructure.',
    welcomeMessage: 'Empowering future innovators with 21st-century coding and computational skills.',
    experience: '10+ Years Experience',
    image: labanStaffImg,
    email: ''
  },
  {
    id: 'humanities-njoroge',
    name: 'Mr. Njoroge Kariuki',
    role: 'Head of Humanities & Social Sciences',
    department: 'Languages & Humanities',
    qualification: 'B.Ed. Arts (History & Christian Religious Education)',
    bio: 'Inspires deep historical inquiry, ethical leadership, civic engagement, and community service projects.',
    welcomeMessage: 'Understanding our history guides us in shaping a more just and hopeful future.',
    experience: '27+ Years Experience',
    image: njorogeStaffImg,
    email: ''
  },
  {
    id: 'arts-camila',
    name: 'Mr. Michael Karanja',
    role: 'Exam Officer',
    department: 'Academics',
    qualification: 'Certificate in Primary Education',
    bio: 'Passionate visual artist cultivating student creativity through painting, sculpture, graphic design, and annual art exhibitions.',
    welcomeMessage: 'Art is where imagination transforms into lasting beauty and expression.',
    experience: '9+ Years Experience',
    image: michael,
    email: ''
  },
  {
    id: 'boarding-staff2',
    name: 'Mrs. Lydia Mwangi',
    role: 'Assistant Technology Officer',
    department: 'I.C.T',
    qualification: 'Bachelor of education science',
    bio: 'Oversees dormitory hygiene, balanced meal planning, and health clinic care for residential scholars.',
    welcomeMessage: 'Every boarder receives the warmth, care, and nutritional support of home.',
    experience: '5+ Years Experience',
    image: lydia,
    email: ''
  }
];

// Full combined list
export const STAFF_MEMBERS: StaffMember[] = [
  ...LEADERSHIP_TEAM,
  ...FACULTY_MEMBERS
];
