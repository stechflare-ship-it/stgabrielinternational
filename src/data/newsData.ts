import { NewsItem } from '../types';

import newsGraduationImg from '../assets/images/newsAndEvent/graduation.webp';
import newsCompLabImg from '../assets/images/newsAndEvent/complab.webp';
import newsDanceImg from '../assets/images/newsAndEvent/dance.webp';
import newsSportsImg from '../assets/images/studentlife/sports.webp';
import newsBandImg from '../assets/images/blogs/musicBand.webp';

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-admissions-2026',
    title: 'Admissions Open for 2026/2027 Academic Year: Dual-Curriculum Intake',
    slug: 'admissions-open-2026-2027-intake',
    category: 'Academic',
    date: 'August 10, 2026',
    summary: 'St. Gabriel International School welcomes prospective families to apply for limited vacancies across CBC (PP1–Grade 10) and Cambridge (EYFS–Year 12).',
    content: [
      'We are pleased to announce that official enrollment for the 2026/2027 academic session is now active.',
      'Prospective parents are invited to schedule campus tours across our Lanet campuses to experience our world-class science laboratories, digital learning studios, and boarding residences.',
      'Assessment dates are scheduled on rolling weekdays. Early application is advised due to capped class sizes of 20–24 learners.'
    ],
    image: newsGraduationImg,
    featured: true,
    author: 'Admissions Directorate',
    readTime: '3 min read',
    tags: ['Admissions', 'Cambridge', 'CBC', 'Enrollment']
  },
  {
    id: 'news-stem-lab-expansion',
    title: 'Commissioning of Ultra-Modern Artificial Intelligence & STEM Innovation Hub',
    slug: 'commissioning-ai-stem-hub',
    category: 'Academic',
    date: 'July 28, 2026',
    summary: 'The new wing features 3D prototyping printers, advanced robotics kits, and high-performance computing units for Cambridge and CBC computing curricula.',
    content: [
      'St. Gabriel has officially unveiled its newly expanded STEM Innovation Center.',
      'The multi-million shilling facility empowers learners from Grade 4 upwards to program microcontrollers, design algorithmic solutions, and explore machine learning principles.',
      'Special guest speakers from leading tech firms commended the school for pioneering practical technology integration at the secondary level.'
    ],
    image: newsCompLabImg,
    featured: false,
    author: 'Department of Computing',
    readTime: '4 min read',
    tags: ['STEM', 'Robotics', 'Innovation', 'Technology']
  },
  {
    id: 'news-music-festival-glory',
    title: 'St. Gabriel Brass Band & Dance Troupe Clinches First Place in Regional Arts Gala',
    slug: 'brass-band-regional-champions',
    category: 'Arts',
    date: 'July 15, 2026',
    summary: 'Our championship marching band and traditional folk dance ensemble took top honors at the Rift Valley Inter-School Music Festival.',
    content: [
      'In a stirring display of precision, rhythm, and musical mastery, the St. Gabriel Brass Band captured 1st position across the Senior Brass Ensemble category.',
      'The traditional dance troupe also earned a standing ovation with their energetic Kenyan cultural arrangement.',
      'Both ensembles now proceed to the National Music Festival scheduled for later this term.'
    ],
    image: newsDanceImg,
    featured: false,
    author: 'Department of Performing Arts',
    readTime: '3 min read',
    tags: ['Music', 'Brass Band', 'Arts', 'Awards']
  },
  {
    id: 'news-athletics-gala',
    title: 'Annual Inter-House Sports Gala: Cheetah House Triumphs in Track & Field',
    slug: 'inter-house-sports-gala-2026',
    category: 'Sports',
    date: 'June 30, 2026',
    summary: 'Over 800 scholars participated in sprinting, relays, long jump, swimming, and football in a spirited day of athletic excellence.',
    content: [
      'The Lanet sports grounds came alive with cheering as Cheetah House edged out Eagle and Lion Houses to claim the coveted 2026 Overall Champions Trophy.',
      'Individual awards for Best Junior Athlete and Victor Ludorum were presented during the closing ceremony by Executive Principal Nicholas Okeyo.'
    ],
    image: newsSportsImg,
    featured: false,
    author: 'Physical Education Directorate',
    readTime: '2 min read',
    tags: ['Sports', 'Athletics', 'Inter-House', 'Swimming']
  }
];
