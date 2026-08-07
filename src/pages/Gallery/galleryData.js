// galleryData.js - Clean separation of concerns

import { SITE_CONFIG } from '../../data/navigationData';
import backgroundImg from '../../assets/images/gallery-optimized/background.webp';

// Campus Images
import campus1 from '../../assets/images/gallery-optimized/campus/campus1.webp';
import campus2 from '../../assets/images/gallery-optimized/campus/campus2.webp';
import campus3 from '../../assets/images/gallery-optimized/campus/campus3.webp';
import campus4 from '../../assets/images/gallery-optimized/campus/campus4.webp';
import campus5 from '../../assets/images/gallery-optimized/campus/campus5.webp';
import campus6 from '../../assets/images/gallery-optimized/campus/campus6.webp';

// STEM
import stem1 from '../../assets/images/gallery-optimized/stem/stem1.webp';
import stem2 from '../../assets/images/gallery-optimized/stem/stem2.webp';
import stem3 from '../../assets/images/gallery-optimized/stem/stem3.webp';
import stem4 from '../../assets/images/gallery-optimized/stem/stem4.webp';
import stem5 from '../../assets/images/gallery-optimized/stem/stem5.webp';
import stem6 from '../../assets/images/gallery-optimized/stem/stem6.webp';

// Sports
import sport1 from '../../assets/images/gallery-optimized/sports/sport1.webp';
import sport2 from '../../assets/images/gallery-optimized/sports/sport2.webp';
import sport3 from '../../assets/images/gallery-optimized/sports/sport3.webp';
import sport4 from '../../assets/images/gallery-optimized/sports/sport4.webp';
import sport5 from '../../assets/images/gallery-optimized/sports/sport5.webp';
import sport6 from '../../assets/images/gallery-optimized/sports/sport6.webp';

// Arts
import art1 from '../../assets/images/gallery-optimized/art/art1.webp';
import art2 from '../../assets/images/gallery-optimized/art/art2.webp';
import art3 from '../../assets/images/gallery-optimized/art/art3.webp';
import art4 from '../../assets/images/gallery-optimized/art/art4.webp';
import art5 from '../../assets/images/gallery-optimized/art/art5.webp';

// Events
import event1 from '../../assets/images/gallery-optimized/events/event1.webp';
import event2 from '../../assets/images/gallery-optimized/events/event2.webp';
import event3 from '../../assets/images/gallery-optimized/events/event3.webp';
import event4 from '../../assets/images/gallery-optimized/events/event4.webp';

const imageRegistry = [
  {
    id: 'campus-001',
    category: 'campus',
    image: campus1,
    title: 'Aerial View of St. Gabriel\'s Green Campus',
    description: 'Spacious architectural grounds with football pitch, athletics track, and modern academic blocks.',
    date: '2026',
    location: 'Lanet, Nakuru',
    featured: true,
  },
  {
    id: 'campus-002',
    category: 'campus',
    image: campus2,
    title: 'Lush Green Campus',
    description: 'Beautiful gardens creating an ideal learning environment.',
    date: '2026',
    location: 'Main Campus',
  },
  {
    id: 'campus-003',
    category: 'campus',
    image: campus3,
    title: 'Modern Academic Blocks',
    description: 'State-of-the-art classrooms with smart learning technology.',
    date: '2026',
    location: 'Academic Wing',
  },
  {
    id: 'campus-004',
    category: 'campus',
    image: campus4,
    title: 'Digital Resource Library',
    description: '25,000+ volumes with international research databases.',
    date: '2026',
    location: 'Library Complex',
  },
  {
    id: 'campus-005',
    category: 'campus',
    image: campus5,
    title: 'St. Gabriel\'s Chapel',
    description: 'A place of worship and spiritual growth.',
    date: '2026',
    location: 'Spiritual Center',
  },
  {
    id: 'campus-006',
    category: 'campus',
    image: campus6,
    title: 'Modern Dining Facilities',
    description: 'Nutritious meals prepared daily for students.',
    date: '2026',
    location: 'Dining Hall',
  },
  {
    id: 'stem-001',
    category: 'stem',
    image: stem1,
    title: 'High-Tech STEM & Robotics Innovation Center',
    description: 'Students experimenting with 3D printers, microcontrollers, and automation equipment.',
    date: '2026',
    location: 'STEM Center',
    featured: true,
  },
  {
    id: 'stem-002',
    category: 'stem',
    image: stem2,
    title: 'STEM Students in Action',
    description: 'Hands-on learning with cutting-edge technology.',
    date: '2026',
    location: 'Innovation Lab',
  },
  {
    id: 'stem-003',
    category: 'stem',
    image: stem3,
    title: 'Robotics Competition',
    description: 'Students showcasing robotics projects at inter-school competitions.',
    date: '2026',
    location: 'STEM Arena',
  },
  {
    id: 'stem-004',
    category: 'stem',
    image: stem4,
    title: 'STEM Classroom',
    description: 'Interactive learning with smart boards and collaborative tools.',
    date: '2026',
    location: 'STEM Wing',
  },
  {
    id: 'stem-005',
    category: 'stem',
    image: stem5,
    title: 'Robotics Workshop',
    description: 'Building and programming robots for competitions.',
    date: '2026',
    location: 'Innovation Hub',
  },
  {
    id: 'stem-006',
    category: 'stem',
    image: stem6,
    title: 'Robotics Workshop',
    description: 'Building and programming robots for competitions.',
    date: '2026',
    location: 'Innovation Hub',
  },
  {
    id: 'sports-001',
    category: 'sports',
    image: sport1,
    title: 'Olympic Standard Swimming Pool',
    description: 'Heated 25m semi-Olympic pool for competitive swimming.',
    date: '2026',
    location: 'Aquatic Center',
  },
  {
    id: 'sports-002',
    category: 'sports',
    image: sport2,
    title: 'Inter-House Swimming Competition',
    description: 'Athletes competing in our heated 25m semi-Olympic pool.',
    date: '2026',
    location: 'Aquatic Center',
    featured: true,
  },
  {
    id: 'sports-003',
    category: 'sports',
    image: sport3,
    title: 'Athletics Track Events',
    description: 'Students competing in track and field events.',
    date: '2026',
    location: 'Sports Ground',
  },
  {
    id: 'sports-004',
    category: 'sports',
    image: sport4,
    title: 'Football Matches',
    description: 'Inter-house and inter-school football competitions.',
    date: '2026',
    location: 'Football Pitch',
  },
  {
    id: 'sports-005',
    category: 'sports',
    image: sport5,
    title: 'Basketball Court',
    description: 'Indoor basketball facilities for training and matches.',
    date: '2026',
    location: 'Sports Complex',
  },
  {
    id: 'arts-001',
    category: 'arts',
    image: art1,
    title: 'Drama & Music Orchestra Gala',
    description: 'Student symphony orchestra performing at the annual creative showcase.',
    date: '2026',
    location: 'Auditorium',
    featured: true,
  },
  {
    id: 'arts-002',
    category: 'arts',
    image: art2,
    title: 'Music Orchestra Performance',
    description: 'Talented students showcasing their musical abilities.',
    date: '2026',
    location: 'Music Hall',
  },
  {
    id: 'arts-003',
    category: 'arts',
    image: art3,
    title: 'International Cultural Parade',
    description: 'Celebrating heritage and unity across 28 global nationalities.',
    date: '2026',
    location: 'Main Grounds',
  },
  {
    id: 'arts-004',
    category: 'arts',
    image: art4,
    title: 'Art Exhibition',
    description: 'Student artwork displayed at annual exhibitions.',
    date: '2026',
    location: 'Art Gallery',
  },
  {
    id: 'arts-005',
    category: 'arts',
    image: art5,
    title: 'Dance Performances',
    description: 'Cultural and contemporary dance performances.',
    date: '2026',
    location: 'Auditorium',
  },
  {
    id: 'events-001',
    category: 'events',
    image: event1,
    title: 'Headteacher Welcoming New Students',
    description: 'Principal Dr. Vance sharing inspirational guidance during school tour.',
    date: '2026',
    location: 'Welcome Hall',
  },
  {
    id: 'events-002',
    category: 'events',
    image: event2,
    title: 'Vibrant Student Life',
    description: 'Students engaged in various extracurricular activities.',
    date: '2026',
    location: 'Campus Life',
  },
  {
    id: 'events-003',
    category: 'events',
    image: event3,
    title: 'Graduation Ceremony',
    description: 'Celebrating academic achievements and new beginnings.',
    date: '2026',
    location: 'Main Hall',
    featured: true,
  },
  {
    id: 'events-004',
    category: 'events',
    image: event4,
    title: 'Parent-Teacher Engagement',
    description: 'Building strong partnerships between parents and teachers.',
    date: '2026',
    location: 'Conference Hall',
  },
];



const getDescription = (category) => {
  const descriptions = {
    campus: 'Explore our beautiful campus and facilities',
    stem: 'Cutting-edge technology and robotics education',
    sports: 'Excellence in sports and physical education',
    arts: 'Creative expression through music, drama, and art',
    events: 'Memorable moments and celebrations',
  };
  return descriptions[category] || '';
};

const buildGroups = () => {
  const groups = {};

  ['campus', 'stem', 'sports', 'arts', 'events'].forEach((category) => {
    const images = imageRegistry.filter((img) => img.category === category);

    groups[category] = {
      id: category,
      title: category.charAt(0).toUpperCase() + category.slice(1),
      description: getDescription(category),
      coverImage: images[0]?.image || null,
      images,
    };
  });

  return Object.freeze(groups);
};

const groups = buildGroups();

const allImages = Object.freeze(
  Object.values(groups).flatMap((group) =>
    group.images.map((img) => ({
      ...img,
      groupId: group.id,
      groupTitle: group.title,
    }))
  )
);

const imagesByCategory = Object.freeze(
  Object.fromEntries(
    Object.entries(groups).map(([categoryId, group]) => [
      categoryId,
      Object.freeze(
        group.images.map((img) => ({
          ...img,
          groupId: group.id,
          groupTitle: group.title,
        }))
      ),
    ])
  )
);

const galleryData = {
  hero: {
    title: "Visual Campus Tour",
    subtitle: "Explore everyday life, academic innovation, sporting triumphs, and cultural celebrations at St. Gabriel's Mission.",
    backgroundImage: backgroundImg,
  },

  categories: Object.freeze([
    { id: 'all', label: 'All',  },
    { id: 'campus', label: 'Campus', },
    { id: 'sports', label: 'Sports',  },
    { id: 'stem', label: 'STEM',},
    { id: 'arts', label: 'Arts',},
    { id: 'events', label: 'Events', },
  ]),

  groups,
  allImages,
  totalImages: allImages.length,
  categoryCount: Object.keys(groups).length,
  imagesByCategory: Object.freeze({
    ...imagesByCategory,
    all: allImages,
  }),

  getAllImages: () => allImages,
  getImagesByCategory: (categoryId) => galleryData.imagesByCategory[categoryId] || [],
  getGroupById: (groupId) => galleryData.groups[groupId] || null,
};

export const GALLERY_DATA = Object.freeze(galleryData);

export const getImageCount = () => imageRegistry.length;
