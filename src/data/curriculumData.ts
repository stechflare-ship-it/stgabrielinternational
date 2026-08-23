import { CurriculumStage } from '../types';

import earlyYearImg from '../assets/images/academics/earlyYear.webp';
import lowerPrimaryImg from '../assets/images/academics/cbc.webp';
import upperPrimaryImg from '../assets/images/academics/cbcupperprimary.webp';
import juniorSecImg from '../assets/images/academics/cbcjuniorsec.webp';
import seniorSchoolImg from '../assets/images/academics/cbcseniorsec.webp';
import BritishPrimaryImg from '../assets/images/academics/BritishPrimary.webp';
import BritishLowerSecImg from '../assets/images/academics/Britishlowersec.webp';
import BritishIgcseImg from '../assets/images/academics/BritishIGCSE.webp';
import BritishAlevelImg from '../assets/images/academics/BritishAdvance.webp';

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    key: 'eyfs',
    title: 'Early Years Foundation Stage (EYFS)',
    subtitle: 'Nurturing curiosity, creativity, and foundational literacy in play-based environments',
    ageRange: '2 – 5 Years',
    years: 'Playgroup, Reception & Kindergarten',
    overview: 'The Early Years Foundation Stage at St Gabriel\'s establishes a loving, secure, and stimulating foundation for our youngest scholars. Through purposeful play, phonics, numeracy adventures, and creative exploration, children develop confidence, social grace, and an enduring love for learning.',
    highlights: [
      'Child-centered sensory and Montessori-inspired learning centers',
      'Jolly Phonics foundation with rich early multilingual vocabulary',
      'Dedicated safe soft-turf play gardens and splash exploration pools',
      'Qualified early childhood educators with 1:6 adult-to-child care ratio',
      'Daily expressive arts, music rhythm, and foundational motor development'
    ],
    subjects: [
      'Communication & Language Development',
      'Early Phonics, Literacy & Storytelling',
      'Foundational Mathematics & Number Sense',
      'Understanding the World & Nature Walks',
      'Physical Coordination, Swimming & Movement',
      'Expressive Arts, Music & Creative Crafts',
      'Personal, Social & Emotional Well-Being'
    ],
    path: '/academics/eyfs',
    image: earlyYearImg,
    curriculumSystem: 'british'
  },
  {
    key: 'primary',
    title: 'British Primary (Years 1 – 6)',
    subtitle: 'Building deep subject mastery, inquiry skills, and global perspectives',
    ageRange: '5 – 11 Years',
    years: 'Years 1 to 6 (Key Stages 1 & 2)',
    overview: 'British Primary delivers a world-class broad and balanced curriculum designed to help children develop first-class cognitive, creative, and physical capabilities. Regular British Primary Checkpoint assessments benchmark progress against international standards.',
    highlights: [
      'Rigorous British International curriculum benchmarked worldwide',
      'Interactive Smart Board classrooms with integrated digital learning',
      'British Primary Checkpoint examinations at Year 6',
      'Specialist subject teachers for French, Music, Computing, and Physical Education',
      'Hands-on science labs and dedicated junior makerspaces'
    ],
    subjects: [
      'British English First Language',
      'British Mathematics',
      'British Science & Environmental Inquiry',
      'Computing & Digital Literacy',
      'Global Perspectives',
      'French as a Foreign Language / Kiswahili',
      'Art & Design',
      'Music Theory & Instrumental Training',
      'Physical Education & Swimming'
    ],
    path: '/academics/primary',
    image: BritishPrimaryImg,
    curriculumSystem: 'british'
  },
  {
    key: 'lower-secondary',
    title: 'British Lower Secondary (Years 7 – 9)',
    subtitle: 'Fostering analytical rigor, independent research, and subject depth',
    ageRange: '11 – 14 Years',
    years: 'Years 7 to 9 (Key Stage 3)',
    overview: 'Lower Secondary bridges primary inquiry with specialized subject discipline. Scholars delve deeper into separate sciences, advanced mathematics, literature, and technology, preparing thoroughly for IGCSE course selection.',
    highlights: [
      'Subject-specialist faculty across all academic disciplines',
      'Separate Science laboratories (Biology, Chemistry, Physics)',
      'British Lower Secondary Checkpoint diagnostics in Year 9',
      'Career guidance and IGCSE subject option consultations',
      'Leadership opportunities, Debating Society, and Model United Nations'
    ],
    subjects: [
      'English Language & English Literature',
      'British Mathematics (Algebra, Geometry, Statistics)',
      'Biology, Chemistry & Physics (Separate Sciences)',
      'Computer Science & Coding Fundamentals',
      'History & Geography',
      'French / German / Kiswahili',
      'Business & Financial Literacy Foundations',
      'Art, Design & Technology',
      'Championship Brass Band & Music',
      'Physical Education & Competitive Athletics'
    ],
    path: '/academics/lower-secondary',
    image: BritishLowerSecImg,
    curriculumSystem: 'british'
  },
  {
    key: 'igcse',
    title: 'British IGCSE (Years 10 – 11)',
    subtitle: 'The world\'s most recognized international qualification for 14 to 16 year olds',
    ageRange: '14 – 16 Years',
    years: 'Years 10 & 11 (Key Stage 4)',
    overview: 'British IGCSE provides an internationally respected passport to advanced post-16 study worldwide. Scholars take 8–10 subjects blending core competencies with elective passions, examined by British Assessment International Education (CAIE).',
    highlights: [
      'Accredited British Assessment International Education (CAIE) centre',
      'Consistently achieving 92%+ A*–C grades across all subject entries',
      'State-of-the-art university-standard Science & STEM innovation labs',
      'Dedicated university prep, SAT guidance, and scholarship mentorship',
      'Intensive exam clinics and past paper masterclasses'
    ],
    subjects: [
      'English Language & World Literature',
      'Extended Mathematics & Additional Mathematics',
      'Physics, Chemistry & Biology (Separate Sciences)',
      'Computer Science & Information Technology',
      'Economics, Accounting & Business Studies',
      'Geography, History & Global Perspectives',
      'French / Kiswahili',
      'Art & Design / Music',
      'Physical Education'
    ],
    path: '/academics/igcse',
    image: BritishIgcseImg,
    curriculumSystem: 'british'
  },
  {
    key: 'a-level',
    title: 'British Advanced Level (A-Levels / Years 12 – 13)',
    subtitle: 'Elite university pre-collegiate qualification opening doors to top Ivy League, Russell Group & global universities',
    ageRange: '16 – 19 Years',
    years: 'Years 12 & 13 (Sixth Form / Key Stage 5)',
    overview: 'British International AS & A Levels represent the gold standard of secondary education. Scholars specialize in 3 to 4 subjects in exceptional depth, developing critical reasoning and academic independence.',
    highlights: [
      'Direct admissions pathway to Oxford, British, Harvard, MIT, and leading global universities',
      'Dedicated Sixth Form study suites, seminar rooms, and private research carrels',
      'One-on-one university guidance counseling, UCAS, and Common App support',
      'Distinguished guest lecture series and industry internships',
      'Senior leadership roles, prefect council, and peer mentoring'
    ],
    subjects: [
      'Pure Mathematics, Mechanics & Statistics',
      'Advanced Physics, Chemistry & Biology',
      'Advanced Computer Science & Data Systems',
      'Economics, Business & Accounting',
      'English Literature & Global Perspectives',
      'Psychology & Sociology',
      'Law & History'
    ],
    path: '/academics/a-level',
    image: BritishAlevelImg,
    curriculumSystem: 'british'
  },
  {
    key: 'cbc-pre-primary',
    title: 'CBC Pre-Primary (PP1 & PP2)',
    subtitle: 'Laying joyful foundations for lifelong curiosity and foundational literacy',
    ageRange: '4 – 5 Years',
    years: 'Pre-Primary 1 & Pre-Primary 2',
    overview: 'CBC Pre-Primary sparks intellectual curiosity through interactive learning corners, sensory discovery, phonics, numeracy games, and joyful physical coordination.',
    highlights: [
      'Nurturing environment with child-sized facilities and play stations',
      'Language activities building English and Kiswahili vocabulary',
      'Mathematical activities focusing on classification, numbers, and shapes',
      'Environmental and religious education instilling values and curiosity'
    ],
    subjects: [
      'Language Activities (Phonics & Expression)',
      'Mathematical Activities (Numeracy & Logic)',
      'Environmental Activities',
      'Psychomotor & Creative Arts Activities',
      'Religious Education & Moral Values'
    ],
    path: '/academics/cbc-pre-primary',
    image: earlyYearImg,
    curriculumSystem: 'cbc'
  },
  {
    key: 'cbc-lower-primary',
    title: 'CBC Lower Primary (Grades 1 – 3)',
    subtitle: 'Developing core literacy, numeracy, social skills, and creative confidence',
    ageRange: '6 – 8 Years',
    years: 'Grade 1, Grade 2 & Grade 3',
    overview: 'Lower Primary empowers young learners to read fluently, compute confidently, and understand their environment through interactive group projects, technology, and sports.',
    highlights: [
      'Comprehensive literacy in English, Kiswahili, and literacy activities',
      'Foundational STEM exploration with practical experiments',
      'Regular formative assessments monitoring individual milestones',
      'Inclusive co-curricular activities including music, swimming, and arts'
    ],
    subjects: [
      'Literacy & Indigenous Language',
      'English Language & Kiswahili Language',
      'Mathematics Activities',
      'Environmental Activities & Hygiene',
      'Movement & Creative Arts',
      'Christian Religious Education (CRE)'
    ],
    path: '/academics/cbc-lower-primary',
    image: lowerPrimaryImg,
    curriculumSystem: 'cbc'
  },
  {
    key: 'cbc-upper-primary',
    title: 'CBC Upper Primary (Grades 4 – 6 & KPSEA)',
    subtitle: 'Deepening academic inquiry and preparing for the KPSEA national milestone',
    ageRange: '9 – 11 Years',
    years: 'Grade 4, Grade 5 & Grade 6 (KPSEA Exam)',
    overview: 'Upper Primary expands conceptual depth in science, mathematics, and humanities. Scholars sit the Kenya Primary School Education Assessment (KPSEA) at Grade 6 with exemplary distinctions.',
    highlights: [
      'Dedicated KPSEA preparation with comprehensive formative profiling',
      'Science and Agriculture practical demonstrations on school farm plots',
      'Digital literacy lab integration with interactive coding tutorials',
      'Leadership training, scouting movement, and inter-house competitions'
    ],
    subjects: [
      'English & Kiswahili',
      'Mathematics',
      'Science & Technology',
      'Agriculture & Nutrition',
      'Social Studies & CRE',
      'Creative Arts (Art, Craft, Music & PE)'
    ],
    path: '/academics/cbc-upper-primary',
    image: upperPrimaryImg,
    curriculumSystem: 'cbc'
  },
  {
    key: 'cbc-junior-secondary',
    title: 'CBC Junior Secondary School (Grades 7 – 9 & KJSEA)',
    subtitle: 'Equipping adolescent scholars with rigorous technical, scientific, and leadership skills',
    ageRange: '12 – 14 Years',
    years: 'Grade 7, Grade 8 & Grade 9 (KJSEA Exam)',
    overview: 'Our state-of-the-art Junior Secondary School campus provides modern integrated laboratories, computer labs, home science kitchens, and workshops.',
    highlights: [
      'Modern Integrated Science, Pre-Technical & Computer Science laboratories',
      'Preparation for the Kenya Junior Secondary Education Assessment (KJSEA)',
      'Career discovery diagnostics guiding Senior School pathway selection',
      'Full boarding support with dedicated adolescent pastoral care teams'
    ],
    subjects: [
      'English & Kiswahili',
      'Mathematics',
      'Integrated Science (Biology, Chemistry, Physics)',
      'Pre-Technical Studies & Computer Science',
      'Agriculture & Nutrition',
      'Social Studies & Life Skills',
      'Christian Religious Education',
      'Visual Arts & Performing Arts (Music)',
      'Physical Education & Sports'
    ],
    path: '/academics/cbc-junior-secondary',
    image: juniorSecImg,
    curriculumSystem: 'cbc'
  },
  {
    key: 'cbc-senior-school',
    title: 'CBC Senior Secondary School (Grades 10 – 12)',
    subtitle: 'Specialized pre-university career pathways in STEM, Social Sciences, Arts & Sports',
    ageRange: '15 – 18 Years',
    years: 'Grade 10, Grade 11 & Grade 12',
    overview: 'Senior School delivers rigorous specialization across three distinct pathways designed to prepare scholars directly for university degrees and global professions.',
    highlights: [
      'Three accredited pathways: STEM, Social Sciences, and Arts & Sports',
      'Advanced robotics, coding suites, and research science laboratories',
      'Direct university admissions advisory and career internship links',
      'Leadership excellence, prefect bodies, and international exchange programs'
    ],
    subjects: [
      'Advanced Mathematics & Pure Sciences',
      'Engineering & Technical Studies',
      'Economics, Humanities & Foreign Languages',
      'Creative Arts, Music & Media Production',
      'Sports Science & Elite Physical Coaching'
    ],
    path: '/academics/cbc-senior-school',
    image: seniorSchoolImg,
    curriculumSystem: 'cbc'
  }
];

export const BRITISH_CURRICULUM_STAGES = CURRICULUM_STAGES.filter(
  (s) => s.curriculumSystem === 'british'
);

export const CBC_CURRICULUM_STAGES = CURRICULUM_STAGES.filter(
  (s) => s.curriculumSystem === 'cbc'
);

export const CBC_CORE_COMPETENCIES = [
  {
    name: 'Communication & Collaboration',
    description: 'Articulating ideas clearly in English and Kiswahili, working effectively in diverse teams.'
  },
  {
    name: 'Critical Thinking & Problem Solving',
    description: 'Analyzing situations, evaluating evidence, and generating innovative solutions.'
  },
  {
    name: 'Creativity & Imagination',
    description: 'Fostering original thought, design ingenuity, and artistic expression.'
  },
  {
    name: 'Citizenship',
    description: 'Understanding rights, civic responsibilities, cultural heritage, and patriotism.'
  },
  {
    name: 'Digital Literacy',
    description: 'Leveraging technology responsibly for research, computation, and creative output.'
  },
  {
    name: 'Learning to Learn',
    description: 'Developing independent study habits, curiosity, and adaptability for lifelong growth.'
  },
  {
    name: 'Self-Efficacy',
    description: 'Building confidence, resilience, emotional balance, and personal leadership.'
  }
];
