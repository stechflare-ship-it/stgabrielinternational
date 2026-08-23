// School General Information, Contacts, Location, and Social Media
import logoImg from '../assets/images/logo.webp';
import campusImg from '../assets/images/about/aboutusBackground.webp';

export const SCHOOL_INFO = {
  name: 'St Gabriel\'s International School',
  shortName: 'St Gabriel\'s International',
  tagline: 'HOPE TO THE WORLD',
  secondaryTagline: 'A Balanced Life & Real-Life Experience',
  motto: 'Hope to the World',
  established: 1998,
  legacyYears: 28,
  studentsCount: '1,250+',
  nationalitiesCount: '28+',
  universityPlacementRate: '98%',
  teacherRatio: '1:12',
  logo: logoImg,
  heroPoster: campusImg,
  whatsappPrefillMessage: 'Hello%2C%20I%20would%20like%20to%20enquire%20about%20admissions%20at%20St.%20Gabriel%20International%20School.',

  contacts: {
    mainPhone: '+254 711 000 000',
    mainPhoneRaw: '254711000000',
    enquiryPhone: '+254 722 000 000',
    enquiryPhoneRaw: '254722000000',
    whatsappPhone: '+254 700 000 000',
    whatsappPhoneRaw: '254700000000',
    email: 'admissions@stgabrielinternational.sc.ke',
    infoEmail: 'info@stgabrielinternational.sc.ke',
    principalEmail: 'principal@stgabrielinternational.sc.ke',
    officeHours: 'Monday – Friday: 7:30 AM – 5:00 PM | Saturday: 8:00 AM – 1:00 PM',
    visitingHours: 'Sundays (Visiting Days Only): 1:00 PM – 5:00 PM'
  },

  location: {
  address: 'Lanet, Off Nakuru-Dundori Road',
  fullAddress: 'Lanet, Nakuru County, Kenya',
  postalAddress: 'P.O. Box 12345 - 20100, Nakuru, Kenya',
  coordinates: {
    lat: '-0.3031',
    lng: '36.1425'
  },
  // Updated with exact Google Maps search query link
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=St.+Gabriel+Mission+School+Transformer+Rd+Lanet+Nakuru+Kenya',
  // Updated with reliable standard Google Maps embed URL
  embedMapUrl: 'https://maps.google.com/maps?q=-0.3031,36.1425(St.+Gabriel+Mission+School+Lanet)&t=&z=15&ie=UTF8&iwloc=&output=embed'
  },

  socialMedia: {
    facebook: 'https://www.facebook.com/share/1Keh3Dv62e/',
    instagram: 'https://www.instagram.com/stgabrielgroupofschools',
    tiktok: 'https://www.tiktok.com/@st.gabrielsmissionschool',
    youtube: 'https://www.youtube.com/@stgabrielschools'
  },

  // Alias for backward compatibility
  socialLinks: {
    facebook: 'https://www.facebook.com/share/1Keh3Dv62e/',
    instagram: 'https://www.instagram.com/stgabrielgroupofschools',
    tiktok: 'https://www.tiktok.com/@st.gabrielsmissionschool',
    youtube: 'https://www.youtube.com/@stgabrielschools',
    linkedin: 'https://www.linkedin.com/school/st-gabriel-international-school'
  },

  developer: {
    name: 'TechFlare Solutions',
    website: 'https://techflare.co.ke',
    tagline: 'Crafting Next-Generation Digital Experiences for Africa'
  },

  equityAccount: {
    accountNumber: '0310284759201',
    accountName: 'St Gabriel\'s International School Ltd',
    bank: 'Equity Bank Kenya',
    branch: 'Nakuru Gate House Branch',
    branchCode: '031',
    swiftCode: 'EQBLKENA'
  },

  mpesaPaybill: {
    businessNumber: '247247',
    accountFormat: '780824#STUDENT_NAME/CLASS',
    accountExample: '780824#JOHN_DOE_G7',
    note: 'Use Business No. 247247, followed by Account Number 780824# with your student name and class.'
  }
};

export const CORE_VALUES = [
  {
    title: 'Academic Distinction',
    description: 'Relentless pursuit of intellectual rigor through accredited CBC and British curriculum streams with world-class faculty.'
  },
  {
    title: 'Moral Integrity & Faith',
    description: 'Christian foundation and ethical discipline anchoring personal responsibility, empathy, and servant leadership.'
  },
  {
    title: 'Global Citizenship',
    description: 'Fostering cultural empathy, environmental stewardship, multilingual fluency, and international mindedness across 28+ nationalities.'
  },
  {
    title: 'Holistic Excellence',
    description: 'Developing balanced individuals through championship sports, championship brass band, STEM robotics, and creative arts.'
  }
];

export const SCHOOL_STATS = [
  { label: 'Years of Excellence', value: '28+' },
  { label: 'Scholars Enrolled', value: '1,250+' },
  { label: 'Global Nationalities', value: '28+' },
  { label: 'University Placement', value: '98%' },
  { label: 'Teacher-Student Ratio', value: '1:12' },
  { label: 'Sports & Clubs', value: '35+' }
];
