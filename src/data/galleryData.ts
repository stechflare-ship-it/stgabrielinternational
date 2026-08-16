import { GalleryItem } from '../types';

import campus1Img from '../assets/images/gallery-optimized/campus/campus1.webp';
import campus2Img from '../assets/images/gallery-optimized/campus/campus2.webp';
import campus3Img from '../assets/images/gallery-optimized/campus/campus3.webp';
import campus4Img from '../assets/images/gallery-optimized/campus/campus4.webp';
import campus5Img from '../assets/images/gallery-optimized/campus/campus5.webp';
import campus6Img from '../assets/images/gallery-optimized/campus/campus6.webp';

import stem1Img from '../assets/images/gallery-optimized/stem/stem1.webp';
import stem2Img from '../assets/images/gallery-optimized/stem/stem2.webp';
import stem3Img from '../assets/images/gallery-optimized/stem/stem3.webp';
import stem4Img from '../assets/images/gallery-optimized/stem/stem4.webp';
import stem5Img from '../assets/images/gallery-optimized/stem/stem5.webp';
import stem6Img from '../assets/images/gallery-optimized/stem/stem6.webp';

import sport1Img from '../assets/images/gallery-optimized/sports/sport1.webp';
import sport2Img from '../assets/images/gallery-optimized/sports/sport2.webp';
import sport3Img from '../assets/images/gallery-optimized/sports/sport3.webp';
import sport4Img from '../assets/images/gallery-optimized/sports/sport4.webp';
import sport5Img from '../assets/images/gallery-optimized/sports/sport5.webp';
import sport6Img from '../assets/images/gallery-optimized/sports/sport6.webp';

import art1Img from '../assets/images/gallery-optimized/art/art1.webp';
import art2Img from '../assets/images/gallery-optimized/art/art2.webp';
import art3Img from '../assets/images/gallery-optimized/art/art3.webp';
import art4Img from '../assets/images/gallery-optimized/art/art4.webp';
import art5Img from '../assets/images/gallery-optimized/art/art5.webp';

import event1Img from '../assets/images/gallery-optimized/events/event1.webp';
import event2Img from '../assets/images/gallery-optimized/events/event2.webp';
import event3Img from '../assets/images/gallery-optimized/events/event3.webp';
import event4Img from '../assets/images/gallery-optimized/events/event4.webp';

import bandImg from '../assets/images/studentlife/band.webp';
import boardingCompoundImg from '../assets/images/studentlife/boardingCompound.webp';
import libraryImg from '../assets/images/studentlife/library.webp';
import chemistryImg from '../assets/images/studentlife/chemistry.webp';
import graduationImg from '../assets/images/gallery/graduation.webp';
import busImg from '../assets/images/gallery/schoolBus.webp';
import faithImg from '../assets/images/gallery/faith.webp';
import athleticsImg from '../assets/images/gallery/athletics.webp';
import compLabImg from '../assets/images/gallery/compLab.webp';
import classroomImg from '../assets/images/gallery/classroom.webp';

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-campus-1',
    title: 'Main Academic Quadrangle & Administration',
    category: 'Campus',
    image: campus1Img,
    caption: 'The serene, landscaped academic courtyard in Lanet providing open, peaceful spaces for collaborative study.'
  },
  {
    id: 'gal-stem-1',
    title: 'Advanced Science Laboratory Practical',
    category: 'Academics',
    image: stem1Img,
    caption: 'Scholars conducting hands-on chemistry titration experiments under the guidance of specialist science faculty.'
  },
  {
    id: 'gal-sports-1',
    title: 'Inter-School Athletics & Track Championship',
    category: 'Sports',
    image: sport1Img,
    caption: 'St. Gabriel sprint champions competing on the modern athletics track during annual sports day.'
  },
  {
    id: 'gal-arts-1',
    title: 'Fine Arts Studio & Creative Painting',
    category: 'Arts & Drama',
    image: art1Img,
    caption: 'Visual arts students mastering oil and watercolor techniques in the naturally illuminated art studio.'
  },
  {
    id: 'gal-boarding-1',
    title: 'Lanet Residential Boarding Compound',
    category: 'Boarding',
    image: boardingCompoundImg,
    caption: 'Spacious, secure, and modern dormitory blocks providing a warm home-away-from-home.'
  },
  {
    id: 'gal-event-1',
    title: 'Annual Graduation & Prize-Giving Gala',
    category: 'Events',
    image: graduationImg,
    caption: 'Celebrating academic excellence, character achievements, and university transition for our graduating class.'
  },
  {
    id: 'gal-stem-2',
    title: 'Robotics & Microcontroller Engineering Lab',
    category: 'Academics',
    image: stem2Img,
    caption: 'Junior secondary scholars programming autonomous robots in the state-of-the-art makerspace.'
  },
  {
    id: 'gal-sports-2',
    title: 'Championship Swimming Gala',
    category: 'Sports',
    image: sport2Img,
    caption: 'Scholars training in the semi-Olympic swimming pool under qualified aquatic coaches.'
  },
  {
    id: 'gal-arts-2',
    title: 'St. Gabriel Championship Brass Band',
    category: 'Arts & Drama',
    image: bandImg,
    caption: 'The celebrated school brass band performing at regional and national music festivals.'
  },
  {
    id: 'gal-stem-3',
    title: 'Computer Science & Coding Studio',
    category: 'Academics',
    image: compLabImg,
    caption: 'High-speed networked computing lab equipped with dual-boot workstations for software coding.'
  },
  {
    id: 'gal-campus-2',
    title: 'Modern Library & Resource Center',
    category: 'Campus',
    image: libraryImg,
    caption: 'Extensive multi-tier library stocking over 15,000 reference volumes and digital research terminals.'
  },
  {
    id: 'gal-sports-3',
    title: 'Football & Basketball Leagues',
    category: 'Sports',
    image: sport3Img,
    caption: 'St. Gabriel Hawks football squad executing team drills during the Nakuru County inter-school league.'
  },
  {
    id: 'gal-campus-3',
    title: 'School Transport Fleet',
    category: 'Campus',
    image: busImg,
    caption: 'Modern, GPS-monitored school buses providing safe daily transit across Nakuru and surrounding areas.'
  },
  {
    id: 'gal-event-2',
    title: 'Spiritual Devotional & Sunday Chapel',
    category: 'Events',
    image: faithImg,
    caption: 'Sunday fellowship and morning devotionals nurturing Christian moral values and empathy.'
  },
  {
    id: 'gal-sports-4',
    title: 'Taekwondo & Martial Arts Dojo',
    category: 'Sports',
    image: sport4Img,
    caption: 'Scholars training in self-defense, discipline, and focus under certified black-belt instructors.'
  },
  {
    id: 'gal-arts-3',
    title: 'Sculpture & Design Workshop',
    category: 'Arts & Drama',
    image: art3Img,
    caption: 'Ceramics, pottery, and structural design projects showcasing student craftsmanship.'
  },
  {
    id: 'gal-stem-4',
    title: 'Biology Microscopy Investigation',
    category: 'Academics',
    image: chemistryImg,
    caption: 'Senior school students observing cellular structures with high-precision optical microscopes.'
  },
  {
    id: 'gal-campus-4',
    title: 'Interactive Smart Board Classrooms',
    category: 'Campus',
    image: classroomImg,
    caption: 'Spacious, well-ventilated classrooms with digital interactive displays and ergonomic seating.'
  }
];

export const GALLERY_CATEGORIES = [
  'All',
  'Campus',
  'Academics',
  'Sports',
  'Boarding',
  'Arts & Drama',
  'Events'
] as const;
