import residenceImg from '../assets/images/boarding/residence.webp';
import boardingCompoundImg from '../assets/images/studentlife/boardingCompound.webp';
import boysCompoundImg from '../assets/images/studentlife/boys.webp';
import girlsCompoundImg from '../assets/images/studentlife/girls.webp';
import facilitiesImg from '../assets/images/boardinglife/facilities.webp';

export interface BoardingCompound {
  name: string;
  type: 'Boys' | 'Girls';
  location: string;
  distance: string;
  dormitories: string[];
  capacity: string;
  features: string[];
  image: string;
}

export const BOARDING_COMPOUNDS: BoardingCompound[] = [
  {
    name: 'St. Gabriel Boys\' Residential Campus',
    type: 'Boys',
    location: 'Lanet North Compound, Nakuru',
    distance: 'Main Lanet Campus',
    dormitories: ['Seraphim House', 'Cherubim House', 'Gabriel House', 'Michael House'],
    capacity: '400+ Boarders',
    features: [
      'Hot water solar heating systems across all washroom blocks',
      'Spacious double-decker cubicle dormitories with personal wardrobes & study desks',
      'Supervised evening prep halls with high-speed reference terminals',
      'On-site grass soccer pitch, basketball court, and table tennis tables',
      'Resident housemasters, matrons, and 24/7 biometric security guards'
    ],
    image: boysCompoundImg
  },
  {
    name: 'St. Gabriel Girls\' Residential Campus',
    type: 'Girls',
    location: 'Lanet South Green Compound, Nakuru',
    distance: '4 km from Boys\' Compound in Lanet',
    dormitories: ['Grace House', 'Faith House', 'Joy House', 'Peace House'],
    capacity: '380+ Boarders',
    features: [
      'Gated, secure 8-acre dedicated compound with manicured gardens',
      'Spacious ensuite washrooms with solar and backup electric water heating',
      'Private lockers, reading carrels, and cozy communal common rooms',
      'Dedicated pastoral counseling suite and full-time resident nurse',
      'Volleyball court, badminton lawn, and outdoor gazebo reading circles'
    ],
    image: girlsCompoundImg
  }
];

export const BOARDING_SCHEDULE = [
  { time: '5:30 AM', activity: 'Rising Bell, Morning Wash & Personal Devotion' },
  { time: '6:15 AM', activity: 'Dormitory Inspection & Room Tidy-Up' },
  { time: '6:45 AM', activity: 'Nutritious Hot Breakfast in Dining Hall' },
  { time: '7:30 AM', activity: 'Morning Assembly & Academic Classes Commence' },
  { time: '1:00 PM', activity: 'Three-Course Balanced Lunch & Midday Rest' },
  { time: '2:00 PM', activity: 'Afternoon Academic Lessons & Practical Labs' },
  { time: '4:00 PM', activity: 'Games, Swimming, Clubs & Brass Band Rehearsals' },
  { time: '5:45 PM', activity: 'Shower & Evening Uniform Change' },
  { time: '6:30 PM', activity: 'Hot Dinner & Fruit Refreshments' },
  { time: '7:15 PM – 9:00 PM', activity: 'Supervised Evening Prep & Silent Study' },
  { time: '9:00 PM', activity: 'Evening Prayers, Milk/Cocoa Beverage & Light Social' },
  { time: '9:30 PM – 10:00 PM', activity: 'Lights Out & Rest (Staggered by Grade Level)' }
];

export const BOARDING_FACILITIES = [
  {
    title: 'Modern Dormitories & Living Spaces',
    description: 'Well-ventilated cubicles equipped with posture-support mattresses, personal lockable storage, and warm ambient lighting.',
    image: facilitiesImg
  },
  {
    title: 'Balanced Nutrition Dining Halls',
    description: 'Nutritious, diverse 5-meal daily menu prepared by professional chefs, catering to growing children with fresh local produce.',
    image: residenceImg
  },
  {
    title: '24/7 Medical Clinic & Resident Nurse',
    description: 'Fully stocked campus dispensary with qualified medical personnel on duty around the clock, partnered with top Nakuru hospitals.',
    image: boardingCompoundImg
  }
];
