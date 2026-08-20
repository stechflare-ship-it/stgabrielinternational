import { GalleryItem } from '../types';

import galleryBg from '../../src/assets/images/studentlife/studentlifebackground.webp';

import mainquad from '../../src/assets/images/studentlife/mainacademicQuadrangle.webp';
import labaratory from '../../src/assets/images/studentlife/labaratory.webp';
import interschool from '../../src/assets/images/studentlife/interschoolAthletics.webp';
import annualprize from '../../src/assets/images/studentlife/AnnualPrizeGiving.webp';
import arts from '../../src/assets/images/studentlife/arts.webp';
import basketball from '../../src/assets/images/studentlife/basketBall.webp';
import champion from '../../src/assets/images/studentlife/championband.webp';
import interactiveBoard from '../../src/assets/images/studentlife/interactiveBoard.webp';
import robotics from '../../src/assets/images/studentlife/robotics.webp';
import residential from '../../src/assets/images/studentlife/residential.webp';
import sculpture from '../../src/assets/images/studentlife/sculpture.webp';
import transport from '../../src/assets/images/studentlife/transport.webp';
import computerscience from '../../src/assets/images/studentlife/computerScience.webp';
import biology from '../../src/assets/images/studentlife/biologyinvestigation.webp';




export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-campus-1',
    title: 'Main Academic Quadrangle & Administration',
    category: 'Campus',
    image: mainquad,
    caption: 'The serene, landscaped academic courtyard in Lanet providing open, peaceful spaces for collaborative study.'
  },
  {
    id: 'gal-stem-1',
    title: 'Advanced Science Laboratory Practical',
    category: 'Academics',
    image: labaratory,
    caption: 'Scholars conducting hands-on chemistry titration experiments under the guidance of specialist science faculty.'
  },
  {
    id: 'gal-sports-1',
    title: 'Inter-School Athletics & Track Championship',
    category: 'Sports',
    image: interschool,
    caption: 'St. Gabriel sprint champions competing on the modern athletics track during annual sports day.'
  },
  {
    id: 'gal-arts-1',
    title: 'Fine Arts Studio & Creative Painting',
    category: 'Arts & Drama',
    image: arts,
    caption: 'Visual arts students mastering oil and watercolor techniques in the naturally illuminated art studio.'
  },
  {
    id: 'gal-boarding-1',
    title: 'Lanet Residential Boarding Compound',
    category: 'Boarding',
    image: residential,
    caption: 'Spacious, secure, and modern dormitory blocks providing a warm home-away-from-home.'
  },
  {
    id: 'gal-event-1',
    title: 'Annual Graduation & Prize-Giving Gala',
    category: 'Events',
    image: annualprize,
    caption: 'Celebrating academic excellence, character achievements, and university transition for our graduating class.'
  },
  {
    id: 'gal-stem-2',
    title: 'Robotics & Microcontroller Engineering Lab',
    category: 'Academics',
    image: robotics,
    caption: 'Junior secondary scholars programming autonomous robots in the state-of-the-art makerspace.'
  },
  {
    id: 'gal-arts-2',
    title: 'St. Gabriel Championship Brass Band',
    category: 'Arts & Drama',
    image: champion,
    caption: 'The celebrated school brass band performing at regional and national music festivals.'
  },
  {
    id: 'gal-stem-3',
    title: 'Computer Science & Coding Studio',
    category: 'Academics',
    image: computerscience,
    caption: 'High-speed networked computing lab equipped with dual-boot workstations for software coding.'
  },
  {
    id: 'gal-sports-3',
    title: 'Football & Basketball Leagues',
    category: 'Sports',
    image: basketball,
    caption: 'St. Gabriel Hawks football squad executing team drills during the Nakuru County inter-school league.'
  },
  {
    id: 'gal-campus-3',
    title: 'School Transport Fleet',
    category: 'Campus',
    image: transport,
    caption: 'Modern, GPS-monitored school buses providing safe daily transit across Nakuru and surrounding areas.'
  },
  {
    id: 'gal-arts-3',
    title: 'Sculpture & Design Workshop',
    category: 'Arts & Drama',
    image: sculpture,
    caption: 'Ceramics, pottery, and structural design projects showcasing student craftsmanship.'
  },
  {
    id: 'gal-stem-4',
    title: 'Biology Microscopy Investigation',
    category: 'Academics',
    image: biology,
    caption: 'Senior school students observing cellular structures with high-precision optical microscopes.'
  },
  {
    id: 'gal-campus-4',
    title: 'Interactive Smart Board Classrooms',
    category: 'Campus',
    image: interactiveBoard,
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
