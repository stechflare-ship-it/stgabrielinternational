import {
  BoardingFee,
  AdditionalCharge,
  CurriculumStage,
  FAQItem,
  NewsItem,
  GalleryItem,
  StaffMember,
  DownloadDocument,
  RequirementCategory
} from '../types';

import advanceLevel from '../assets/images/academics/advanceLevel.webp';
import cambridgeLevel from '../assets/images/academics/cambridge.webp';
import earlyYearLevel from '../assets/images/academics/earlyYear.webp';
import internationalLevel from '../assets/images/academics/international.webp';
import lowerSecondarLevel from '../assets/images/academics/lowerSec.webp';
import compLab from '../assets/images/gallery/compLab.webp';
import classroom from '../assets/images/gallery/classroom.webp';


//gallery pages images

import artsClub from '../assets/images/gallery/artsClub.webp';
import athletics from '../assets/images/gallery/athletics.webp';
import graduation from '../assets/images/gallery/graduation.webp';
import musicBand from '../assets/images/gallery/musicBand.webp';
import schoolBus from '../assets/images/gallery/schoolBus.webp';
import schoolUniform from '../assets/images/gallery/schoolUniform.webp';
import sereneSpace from '../assets/images/gallery/sereneSpace.webp';
import sports from '../assets/images/gallery/sports.webp';

//staff
import peter from '../assets/images/staff/peter.webp';
import john from '../assets/images/staff/john.webp';
import maina from '../assets/images/staff/maina.webp';



const PLACEHOLDER_IMAGE = 'https://placehold.co/800x600/0b1d33/e0ba43?text=St.+Gabriel+International+School';
const PLACEHOLDER_CLASSROOM = 'https://placehold.co/800x600/0b1d33/ffffff?text=Classroom+Study';
const PLACEHOLDER_ARTS = 'https://placehold.co/800x600/0b1d33/ffffff?text=Performing+Arts';
const PLACEHOLDER_GRADUATION = 'https://placehold.co/800x600/0b1d33/ffffff?text=Graduation+%26+Distinctions';
const PLACEHOLDER_ICT = 'https://placehold.co/800x600/0b1d33/ffffff?text=STEM+%26+Computer+Lab';





export const SCHOOL_INFO = {
  name: 'St. Gabriel International School',
  shortName: 'St. Gabriel',
  motto: 'HOPE TO THE WORLD',
  establishedYear: 1998,
  location: {
    area: 'Lanet',
    county: 'Nakuru County',
    country: 'Kenya',
    fullAddress: 'St. Gabriel\'s Mission School, Transformer Rd, Lanet, Nakuru, Kenya',
    coordinates: { lat: -0.2718165, lng: 36.1815519 },
    googleMapsUrl: 'https://www.google.com/maps/place/St.+gabriels+mission+school/@-0.2718165,36.1815519,17z/data=!3m1!4b1!4m6!3m5!1s0x18299487536a1161:0x8e6768382a603db5!8m2!3d-0.2718165!4d36.1815519',
    embedMapUrl: 'https://maps.google.com/maps?q=-0.2718165,36.1815519+(St.+Gabriel%27s+Mission+School)&t=&z=16&ie=UTF8&iwloc=B&output=embed'
  },
  contacts: {
    mainPhone: '+254 724 694 554',
    mainPhoneRaw: '+254724694554',
    enquiryPhone: '+254 720 349 748',
    enquiryPhoneRaw: '+254720349748',
    whatsappPhone: '+254 724 694 554',
    whatsappPhoneRaw: '254724694554',
    email: 'admissions@stgabriel.ac.ke',
    infoEmail: 'info@stgabriel.ac.ke'
  },
  developer: {
    name: 'TECHFLARE SOLUTIONS',
    tagline: 'Igniting Innovations · Delivering Solutions',
    website: 'https://techflare-solutions.com'
  },
  whatsappPrefillMessage: encodeURIComponent(
    'Hello St. Gabriel International School. I would like to enquire about admission, fees and school programmes.'
  ),
  socialLinks: {
    facebook: 'https://facebook.com/stgabrielinternationalschool',
    instagram: 'https://instagram.com/stgabrielinternationalschool',
    youtube: 'https://youtube.com/stgabrielinternationalschool',
    linkedin: 'https://linkedin.com/company/stgabrielinternationalschool'
  }
};

export const CURRICULUM_STAGES: CurriculumStage[] = [
  {
    key: 'eyfs',
    title: 'Early Years Foundation Stage (EYFS)',
    subtitle: 'Building joyful foundations of curiosity, play, and foundational literacy.',
    ageRange: '2 – 5 Years',
    years: 'Playgroup, Nursery & Reception',
    overview: 'Our Early Years Foundation Stage nurtures young minds through structured play, exploration, active discovery, and early literacy in a secure, loving environment.',
    highlights: [
      'Playgroup (2–3 years), Nursery (3–4 years), Reception (4–5 years)',
      'Play-based experiential discovery learning',
      'Phonics, early numeracy, and expressive arts',
      'Social emotional development and independence',
      'Safe, supportive, and engaging learning spaces'
    ],
    subjects: [
      'Communication & Language',
      'Physical Development',
      'Personal, Social & Emotional Development',
      'Literacy & Phonics',
      'Mathematics & Problem Solving',
      'Understanding the World',
      'Expressive Arts & Design'
    ],
    path: '/academics/eyfs',
    image: earlyYearLevel
  },
  {
    key: 'primary',
    title: 'International Primary Education',
    subtitle: 'Cultivating critical thinking, core academic mastery, and co-curricular confidence.',
    ageRange: '5 – 11 Years',
    years: 'Years 1 – 6 (Grades 1 – 6)',
    overview: 'Primary education at St. Gabriel combines rigorous British International curriculum standards with holistic development in sports, arts, STEM, and moral character.',
    highlights: [
      'Structured literacy and mathematical mastery',
      'Hands-on scientific inquiry and computing labs',
      'Integrated physical education, music, and drama',
      'Character development grounded in Christian values',
      'Interactive collaboration and presentation skills'
    ],
    subjects: [
      'English Language & Literature',
      'Mathematics',
      'Science (Biology, Physics, Chemistry foundations)',
      'Computing & Digital Literacy',
      'Art & Design',
      'Music & Performing Arts',
      'Physical Education & Sports',
      'Global Perspectives & Social Studies'
    ],
    path: '/academics/primary',
    image: internationalLevel
  },
  {
    key: 'lower-secondary',
    title: 'Lower Secondary',
    subtitle: 'Fostering academic independence, analytical research, and leadership potential.',
    ageRange: '11 – 14 Years',
    years: 'Years 7 – 9',
    overview: 'Lower Secondary bridges primary foundational learning with specialized secondary disciplines, encouraging analytical research, creative expression, and collaborative inquiry.',
    highlights: [
      'Academic independence and research skills',
      'In-depth scientific experiments and coding projects',
      'Debating, public speaking, and leadership opportunities',
      'Co-curricular excellence in sports leagues, music, and drama',
      'Preparation for Cambridge IGCSE subject selections'
    ],
    subjects: [
      'English Language',
      'Mathematics',
      'Combined Science',
      'Computer Science',
      'History & Geography',
      'French & Swahili',
      'Art, Craft & Design',
      'Music & Drama',
      'Physical Education'
    ],
    path: '/academics/lower-secondary',
    image: lowerSecondarLevel
  },
  {
    key: 'igcse',
    title: 'Cambridge IGCSE',
    subtitle: 'World-recognized international qualification opening global academic pathways.',
    ageRange: '14 – 16 Years',
    years: 'Years 10 – 11',
    overview: 'The Cambridge IGCSE programme delivers rigorous subject specializations, rigorous scientific inquiry, and critical analysis recognized by top universities worldwide.',
    highlights: [
      'Internationally benchmarked Cambridge examination curriculum',
      'Comprehensive lab research, coursework, and problem solving',
      'One-on-one academic mentoring and university path planning',
      'Community service, athletics, and model United Nations',
      'Proven academic track record with outstanding distinction rates'
    ],
    subjects: [
      'Mathematics & Additional Mathematics',
      'English Language & Literature',
      'Physics, Chemistry, Biology',
      'Computer Science & ICT',
      'Business Studies & Economics',
      'Geography & History',
      'Art & Design / Drama',
      'Foreign Languages'
    ],
    path: '/academics/igcse',
    image: cambridgeLevel
  },
  {
    key: 'a-level',
    title: 'Advanced Level (A-Level)',
    subtitle: 'Pre-university specialization shaping leaders, scholars, and global innovators.',
    ageRange: '16 – 18 Years',
    years: 'Years 12 – 13 (AS & A2 Level)',
    overview: 'Our A-Level programme provides rigorous pre-university preparation, empowering students to master subject specializations and secure entry to leading global universities.',
    highlights: [
      'Specialized subject choices suited for STEM, Medicine, Business, and Humanities',
      'Independent research projects and university entry guidance',
      'Senior student leadership roles and mentorship programs',
      'Global competition participation and career internships',
      'Dedicated silent study suites and academic advisory'
    ],
    subjects: [
      'Pure Mathematics & Statistics',
      'Physics, Chemistry, Biology',
      'Computer Science',
      'Economics & Business',
      'English Literature & History',
      'Psychology & Sociology',
      'Art & Design'
    ],
    path: '/academics/a-level',
    image: advanceLevel
  }
];

export const BOARDING_FEES: BoardingFee[] = [
  {
    gradeGroup: 'GRADES 1, 2 & 3',
    term1: 20100,
    term2: 20500,
    term3: 20100,
    totalAnnual: 60700
  },
  {
    gradeGroup: 'GRADES 4 & 5',
    term1: 21400,
    term2: 21700,
    term3: 21400,
    totalAnnual: 64500
  },
  {
    gradeGroup: 'GRADE 6',
    term1: 23500,
    term2: 23800,
    term3: 23500,
    totalAnnual: 70800
  }
];

export const OTHER_CHARGES: AdditionalCharge[] = [
  { item: 'Admission Fee', amount: 2000, frequency: 'One-time upon admission' },
  { item: 'School Uniform Set', amount: 13000, frequency: 'One-time / as needed' },
  { item: 'Passport Photos', amount: 250, frequency: 'One-time' },
  { item: 'Text Books / Library Access', amount: 7350, frequency: 'Annual' }
];

export const PAYMENT_METHODS = {
  policyNote: 'STRICT POLICY: NO CASH PAYMENTS. All school fees are payable strictly through bank deposit or official M-Pesa Paybill.',
  installmentPlan: [
    { portion: '75%', timing: 'Payable on Opening Day of each term', highlight: true },
    { portion: '25%', timing: 'To be cleared by the 4th of the following month', highlight: false }
  ],
  bankDetails: {
    bankName: 'Equity Bank',
    accountName: 'St. Gabriel International School',
    accountNumber: '1460285830194',
    branch: 'Nakuru Branch'
  },
  paybillDetails: {
    paybillNumber: '247247',
    accountFormat: '780824#NAME/CLASS',
    accountExample: '780824#JOHN DOE/GRADE 4',
    importantNote: 'IMPORTANT: There must be NO SPACES in the account string. Enter 780824# followed immediately by child\'s name and class.'
  }
};

export const JUNIOR_REQUIREMENTS: RequirementCategory[] = [
  {
    category: 'Spiritual & Reference Books',
    items: [
      'Golden Bells',
      'Good News Bible',
      'Dictionary',
      'Kamusi Sanifu',
      'Atlas (Moran)'
    ]
  },
  {
    category: 'Stationery & Academic Tools',
    items: [
      'Geometric Set',
      'Pencils',
      'Biros (Blue/Black)',
      'Erasers & Sharpeners'
    ]
  },
  {
    category: 'Dining Essentials',
    items: [
      'Plate (Durable)',
      'Cup',
      'Spoon'
    ]
  },
  {
    category: 'Footwear & Uniform Accessories',
    items: [
      'Black Leather Shoes',
      'White Sports Shoes',
      'Slippers',
      'Shoe Polish & Brush',
      'Handkerchief'
    ]
  },
  {
    category: 'Personal Hygiene & Grooming',
    items: [
      'Toothpaste',
      'Toothbrush',
      'Body Oil',
      'Bar Soap',
      'Omo Laundry Soap',
      'Toilet Paper',
      'Sanitary Pads for Girls'
    ]
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Is St. Gabriel an international school?',
    answer: 'Yes. St. Gabriel International School is a premier day and boarding international school in Lanet, Nakuru County, Kenya, delivering a world-class British and International Curriculum.',
    category: 'Curriculum',
    tags: ['international', 'curriculum', 'about']
  },
  {
    id: 'faq-2',
    question: 'Does the school offer British Curriculum?',
    answer: 'Yes! We offer a full British International Curriculum path encompassing Early Years Foundation Stage (EYFS), Primary (Years 1–6), Lower Secondary (Years 7–9), Cambridge IGCSE (Years 10–11), and Advanced Level A-Level (Years 12–13).',
    category: 'Curriculum',
    tags: ['british', 'cambridge', 'igcse', 'a-level']
  },
  {
    id: 'faq-3',
    question: 'Which grades and levels are available?',
    answer: 'We offer education from Playgroup (age 2) through A-Level (age 18), including EYFS, Primary Grades 1 to 6, Lower Secondary Years 7–9, IGCSE Years 10–11, and A-Levels Years 12–13.',
    category: 'Curriculum',
    tags: ['grades', 'levels', 'eyfs', 'primary', 'igcse', 'a-level']
  },
  {
    id: 'faq-4',
    question: 'Does the school offer boarding and day school options?',
    answer: 'Yes, St. Gabriel offers both Day School and full Boarding facilities for boys and girls.',
    category: 'Boarding',
    tags: ['boarding', 'day school', 'accommodation']
  },
  {
    id: 'faq-5',
    question: 'Are boys and girls accommodated separately in boarding?',
    answer: 'Yes. Boys and girls have completely separate, dedicated boarding compounds with full security, house parents, and pastoral care.',
    category: 'Boarding',
    tags: ['boarding', 'boys', 'girls', 'separate']
  },
  {
    id: 'faq-6',
    question: 'How far apart are the boys and girls boarding locations?',
    answer: 'The separate boys’ and girls’ boarding compounds are located approximately 4 kilometers apart in Lanet, Nakuru, ensuring distinct, safe, and focused living environments.',
    category: 'Boarding',
    tags: ['boarding', 'location', 'distance', '4km']
  },
  {
    id: 'faq-7',
    question: 'What are the boarding fees per term?',
    answer: 'For Grades 1, 2 & 3: Term 1 is KSh 20,100, Term 2 is KSh 20,500, and Term 3 is KSh 20,100. For Grades 4 & 5: Term 1 is KSh 21,400, Term 2 is KSh 21,700, and Term 3 is KSh 21,400. For Grade 6: Term 1 is KSh 23,500, Term 2 is KSh 23,800, and Term 3 is KSh 23,500.',
    category: 'Fees',
    tags: ['fees', 'boarding fees', 'cost', 'payment']
  },
  {
    id: 'faq-8',
    question: 'What are the official payment options?',
    answer: 'We accept payments strictly via Equity Bank direct deposit/transfer (Account 1460285830194) or M-Pesa Paybill Business Number 247247. NO CASH PAYMENTS ARE ACCEPTED.',
    category: 'Fees',
    tags: ['paybill', 'bank', 'payment', 'cashless']
  },
  {
    id: 'faq-9',
    question: 'What is the M-Pesa Paybill number and account format?',
    answer: 'Paybill Business Number is 247247. Account Number format is 780824#NAME/CLASS (e.g., 780824#JOHNDOE/GRADE4). Ensure there are NO SPACES in the account number string.',
    category: 'Fees',
    tags: ['paybill', 'mpesa', 'account number']
  },
  {
    id: 'faq-10',
    question: 'What is the Equity Bank account number?',
    answer: 'Equity Bank, Account Name: St. Gabriel International School, Account Number: 1460285830194.',
    category: 'Fees',
    tags: ['equity bank', 'account number', 'bank transfer']
  },
  {
    id: 'faq-11',
    question: 'What are the junior section student requirements?',
    answer: 'Junior section requirements include Golden Bells, Good News Bible, Dictionary, Kamusi Sanifu, Moran Atlas, Geometric Set, Plate, Cup, Spoon, Slippers, Body Oil, Shoe Polish & Brush, Toothpaste, Toothbrush, Pencils, Biros, Toilet Paper, Sanitary Pads for Girls, Bar Soap, Omo, Black Leather Shoes, White Sports Shoes, and Handkerchief.',
    category: 'Admissions',
    tags: ['requirements', 'junior', 'checklist', 'supplies']
  },
  {
    id: 'faq-12',
    question: 'How do I contact admissions or connect on WhatsApp?',
    answer: 'Call our main telephone at +254 724 694 554 or enquiries at +254 720 349 748. You can also chat directly on WhatsApp at +254 724 694 554 using our floating button or direct WhatsApp link.',
    category: 'General',
    tags: ['contact', 'whatsapp', 'phone', 'admissions']
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'St. Gabriel Students Achieve Outstanding Cambridge Exam Distinction Results',
    slug: 'outstanding-cambridge-exam-results',
    category: 'Academic',
    date: 'August 2, 2026',
    summary: 'St. Gabriel International School students recorded exceptional performance in the Cambridge IGCSE and A-Level examinations, topping regional rankings in Nakuru County.',
    content: [
      'St. Gabriel International School is proud to announce another landmark academic milestone. Our Cambridge IGCSE and A-Level candidates achieved top tier distinctions across Science, Mathematics, English Literature, and Humanities.',
      'Our holistic approach combining disciplined study, personalized faculty mentoring, and modern laboratory resources has continued to yield global academic excellence.',
      'Congratulations to all candidates, parents, and dedicated faculty members whose tireless effort made this achievement possible.'
    ],
    image: graduation,
    featured: true
  },
  {
    id: 'news-2',
    title: 'Annual Co-Curricular Gala: Celebrating Music, Drama, and Athletics Excellence',
    slug: 'annual-co-curricular-gala',
    category: 'Arts',
    date: 'July 20, 2026',
    summary: 'A vibrant showcase of talent where students captivated parents and guests with theatrical drama performances, orchestral symphonies, and athletic achievements.',
    content: [
      'The St. Gabriel Annual Cultural & Arts Festival brought together students from EYFS through A-Level for an inspiring day of musical, theatrical, and artistic performances.',
      'Highlights included original student-scripted drama pieces, choir renditions of traditional and international classics, and an interactive digital art exhibition.'
    ],
    image: musicBand
  },
  {
    id: 'news-3',
    title: 'Expansion of Robotics & STEM Innovation Center at Lanet Campus',
    slug: 'robotics-stem-center-expansion',
    category: 'Academic',
    date: 'June 15, 2026',
    summary: 'New state-of-the-art computing laboratories equipped with coding suites, 3D printers, and robotics toolkits inaugurated for secondary learners.',
    content: [
      'As part of our commitment to technology and future-proof learning, St. Gabriel has unveiled its expanded STEM & Robotics Innovation Hub.',
      'Students will participate in competitive robotics challenges, software programming, and environmental engineering projects.'
    ],
    image: compLab
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-uniform',
    title: 'St. Gabriel Secondary Scholars in Official Uniform',
    category: 'Campus',
    image: schoolUniform,
    caption: 'Scholars wearing the official St. Gabriel navy blue blazers with gold trim, maroon ties, and school badge at Lanet campus.'
  },
  {
    id: 'gal-classroom',
    title: 'Classroom Concentration & Focused Study',
    category: 'Academics',
    image: classroom,
    caption: 'Students engaged in interactive academic writing and problem solving in their classroom.'
  },
  {
    id: 'gal-brass',
    title: 'Orchestral Brass Band & Performing Arts',
    category: 'Arts & Drama',
    image: musicBand,
    caption: 'Talented scholars showcasing brass musical instruments (trombone, euphonium, tuba) during music instruction.'
  },
  {
    id: 'gal-graduation',
    title: 'Annual Graduation & Distinction Award Ceremony',
    category: 'Academics',
    image: graduation,
    caption: 'Scholars wearing black and gold graduation gowns and mortarboards celebrating academic achievements.'
  },
  {
    id: 'gal-computer',
    title: 'Computer & Digital Literacy Laboratory',
    category: 'Academics',
    image: compLab,
    caption: 'Hands-on ICT and computing laboratory where students master digital literacy under faculty mentorship.'
  },
  {
    id: 'gal-1',
    title: 'Modern Learning Facilities & School Bus Fleet',
    category: 'Campus',
    image: schoolBus,
    caption: 'St. Gabriel International School scholars standing beside the official school transport bus at Lanet, Nakuru.'
  },
  {
    id: 'gal-4',
    title: 'Serene Boarding Living Space & Brotherhood',
    category: 'Boarding',
    image: sereneSpace,
    caption: 'Spacious, well-ventilated boarding accommodations and distinction celebrations fostering brotherhood and sisterhood in Lanet.'
  },
  {
    id: 'gal-5',
    title: 'Athletics & Co-Curricular Groups',
    category: 'Sports',
    image: athletics,
    caption: 'Co-curricular sports and brass band performers representing St. Gabriel at Lanet.'
  }
];

export const STAFF_MEMBERS: StaffMember[] = [
  {
    id: 'staff-1',
    name: 'Dr. Elizabeth Mwangi',
    role: 'Principal & Head of School',
    department: 'Executive Leadership',
    qualification: 'Ph.D. Educational Leadership (Univ. of Sussex), M.Ed. International Education',
    bio: 'Over 20 years of experience leading international British curriculum schools across East Africa with a vision for academic rigor and Christian character leadership.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 'staff-2',
    name: 'Mr. Peter Mwangi',
    role: 'Vice Principal & Head of Academics',
    department: 'Academic Directorate',
    qualification: 'M.Sc. Physics (UoN), B.Ed. Science (Kenyatta Univ.)',
    bio: 'Specialist in Cambridge IGCSE and A-Level curriculum design with a passion for STEM innovation, research projects, and university placement excellence.',
    image: peter
  },
  {
    id: 'staff-3',
    name: 'Mr Maina',
    role: 'Head of Boarding & Pastoral Care',
    department: 'Student Affairs & Boarding',
    qualification: 'B.A. Counseling Psychology, Higher Dip. Child Development',
    bio: 'Dedicated to providing a warm, nurturing home-away-from-home atmosphere across our separate boys and girls boarding facilities in Lanet.',
    image: maina
  },
  {
    id: 'staff-4',
    name: 'Mr. James Kiptoo',
    role: 'Head of Co-Curricular & Sports Director',
    department: 'Sports & Creative Arts',
    qualification: 'B.Sc. Sports Science & Physical Education',
    bio: 'Championing athletic development, sportsmanship, and teamwork across soccer, basketball, athletics, and swimming.',
    image:john
  }
];

export const DOWNLOAD_DOCUMENTS: DownloadDocument[] = [
  {
    id: 'doc-1',
    title: 'St. Gabriel International School Prospectus 2026/2027',
    category: 'Admissions',
    fileSize: '3.4 MB',
    format: 'PDF',
    description: 'Comprehensive guide to our British curriculum, boarding life, facilities, and Christian holistic values.',
    updatedDate: 'January 2026'
  },
  {
    id: 'doc-2',
    title: 'Official School Fees Structure & Fee Payment Policy',
    category: 'Fees & Policies',
    fileSize: '1.2 MB',
    format: 'PDF',
    description: 'Detailed termly boarding breakdown, bank deposit account details, M-Pesa Paybill guide, and payment policies.',
    updatedDate: 'January 2026'
  },
  {
    id: 'doc-3',
    title: 'Junior Section Student Requirements Checklist',
    category: 'Admissions',
    fileSize: '850 KB',
    format: 'PDF',
    description: 'Complete checklist of books, stationery, personal hygiene items, and footwear required for junior boarding students.',
    updatedDate: 'January 2026'
  },
  {
    id: 'doc-4',
    title: 'Academic Term Calendar 2026',
    category: 'Academic Calendar',
    fileSize: '950 KB',
    format: 'PDF',
    description: 'Term opening dates, mid-term breaks, examination schedules, co-curricular galas, and holiday schedules.',
    updatedDate: 'January 2026'
  },
  {
    id: 'doc-5',
    title: 'Boarding Life & Student Code of Conduct Handbook',
    category: 'Student Handbooks',
    fileSize: '2.1 MB',
    format: 'PDF',
    description: 'Guidelines on pastoral care, separate boys and girls boarding regulations, health services, and prep hours.',
    updatedDate: 'January 2026'
  }
];
