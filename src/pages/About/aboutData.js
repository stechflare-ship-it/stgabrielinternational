import { SITE_CONFIG } from '../../data/navigationData';

//background
import aboutImg from "../../assets/images/optimized/aboutus.webp";
import legacyImg from '../../assets/images/optimized/legacy.webp';

//facilities
import roboticsImg from '../../assets/images/optimized/robotics.webp';
import olympicImg from '../../assets/images/optimized/olympic.webp';
import libraryImg from '../../assets/images/optimized/library.webp';

//leadership
import graceImg from '../../assets/images/optimized/grace.webp';
import jamesImg from '../../assets/images/optimized/james.webp';
import peterImg from '../../assets/images/optimized/peter.webp';
import sarahImg from '../../assets/images/optimized/sarah.webp';




export const ABOUT_DATA = Object.freeze({

  // HERO SECTION - Background image, title, subtitle only

  hero: {
    title: "About St. Gabriel's Mission",
    subtitle: `"Hope to the World" — Nurturing moral discipline, intellectual vigor, and global leadership.`,
    backgroundImage: aboutImg,
    
  },


  // FOUNDING LEGACY SECTION - With stats

  legacy: {
    title: "Our Founding Legacy",
    subtitle: "28 Years of Academic & Spiritual Dedication",
    description: `Founded in 1998, St. Gabriel's Mission International School began as a visionary educational initiative dedicated to providing high-quality, holistic instruction grounded in strong moral values. Over the past 28 years, the school has evolved into a premier international institution welcoming 1,250+ students across 28 global nationalities. Our alumni study at top universities across Europe, North America, Asia, and Africa.`,
    image: legacyImg,
    imageAlt: "St. Gabriel's Campus - Aerial view of the school",
    stats: [
      { value: "28", label: "Years of Excellence", icon: "🎓" },
      { value: "1,250+", label: "Students Enrolled", icon: "👨‍🎓" },
      { value: "28+", label: "Global Nations", icon: "🌍" },
      { value: "1998", label: "Year Established", icon: "📅" },
    ],
  },


  // CORE VALUES SECTION

  values: {
    title: "Our 5 Core Values",
    subtitle: "MORAL COMPASS",
    items: [
      {
        number: "01",
        title: "Integrity",
        description:
          "Honesty and moral uprightness in all academic and personal pursuits.",
      },
      {
        number: "02",
        title: "Excellence",
        description:
          "Uncompromising pursuit of the highest standards in academics and sports.",
      },
      {
        number: "03",
        title: "Innovation",
        description:
          "Embracing robotics, research, and critical thinking for future readiness.",
      },
      {
        number: "04",
        title: "Diversity",
        description:
          "Celebrating 28+ global cultures with mutual respect and harmony.",
      },
      {
        number: "05",
        title: "Community",
        description:
          "Living out 'Hope to the World' through active community outreach.",
      },
    ],
  },


  // VISION & MISSION SECTION

  visionMission: {
    vision: {
      title: "Our Vision",
      text: "To be a premier international center of academic excellence, moral integrity, and technological innovation, raising ethical leaders who bring hope to a changing world.",
    },
    mission: {
      title: "Our Mission",
      text: "To provide a transformative international education that blends rigorous curriculum, character discipline, STEM innovation, and cultural diversity to empower well-rounded global citizens.",
    },
    motto: {
      title: "Our Motto",
      text: '"Hope to the World"',
      subtitle:
        "Inspiring every student to embody compassion, service, and excellence in their families and global societies.",
    },
  },

  // LEADERSHIP SECTION - With experience

  leadership: {
    title: "Executive Guidance",
    subtitle: "Leadership Team",
    description:
      "Guided by distinguished educators with international experience.",
    members: [
      {
        name: "Dr. Sarah Mwangi",
        role: "Principal & CEO",
        image:sarahImg,
        bio: "25+ years in international education. PhD in Educational Leadership.",
        experience: "25+ years in international education, PhD in Educational Leadership, Former Director at Cambridge International Schools.",
      },
      {
        name: "Mr. James Ochieng",
        role: "Head of Academics",
        image: jamesImg,
        bio: "PhD in Curriculum Development. 20 years of teaching experience.",
        experience: "PhD in Curriculum Development, 20 years teaching experience, Published author in educational research.",
      },
      {
        name: "Ms. Grace Wanjiru",
        role: "Head of Student Affairs",
        image: graceImg,
        experience: "MA in Counseling Psychology, 15 years in student welfare, Certified Child Psychologist.",
      },
      {
        name: "Mr. Peter Kamau",
        role: "Head of STEM",
        image: peterImg,
        experience: "Robotics & AI Specialist, 12 years in STEM education, Founded the school's robotics program.",
      },
    ],
  },

  // FACILITIES SECTION - With images

  facilities: {
    title: "Modern Infrastructure",
    subtitle: "World-Class Campus Facilities",
    items: [
      {
        title: "STEM & Robotics Laboratory",
        description:
          "Equipped with 3D printers, electronics workbenches, and robotics testing arena. Students engage in hands-on learning with cutting-edge technology.",
        image: roboticsImg,
        imageAlt: "STEM & Robotics Laboratory at St. Gabriel's",
      },
      {
        title: "Olympic Aquatic Complex",
        description:
          "Heated 25-meter swimming pool with certified lifesaving instructors. Students participate in competitive swimming and water safety programs.",
        image: olympicImg,
        imageAlt: "Olympic Aquatic Complex at St. Gabriel's",
      },
      {
        title: "Digital Resource Library",
        description:
          "25,000+ print volumes alongside international academic online research databases. A hub for research, study, and intellectual growth.",
        image: libraryImg,
        imageAlt: "Digital Resource Library at St. Gabriel's",
      },
    ],
  },
});