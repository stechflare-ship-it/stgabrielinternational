import blogCambridgeImg from '../assets/images/blogs/cambridge.webp';
import blogRoboticsImg from '../assets/images/blogs/robotics.webp';
import blogBoardingImg from '../assets/images/blogs/boardingLife.webp';
import blogMusicBandImg from '../assets/images/blogs/musicBand.webp';
import blogPlaygroupImg from '../assets/images/blogs/playgroup.webp';

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  image: string;
  content: string[];
  tags: string[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-cambridge-vs-cbc',
    title: 'Navigating Dual Curriculum: Choosing Between Cambridge and CBC for Your Child',
    slug: 'navigating-dual-curriculum-cambridge-vs-cbc',
    excerpt: 'A comprehensive guide for parents on how our synchronized pathways empower children to excel both locally and on the global stage.',
    category: 'Curriculum & Pedagogy',
    date: 'August 05, 2026',
    readTime: '6 min read',
    author: {
      name: 'Mr. Peter Mwangi',
      role: 'Vice Principal & Academic Dean'
    },
    image: blogCambridgeImg,
    content: [
      'Choosing the right educational curriculum is one of the most critical decisions parents make for their child’s future.',
      'At St. Gabriel International School, we offer both the Kenyan Competency-Based Curriculum (CBC) and the British Cambridge International curriculum under one roof.',
      'CBC excels at practical skill application, continuous formative evaluation, and nurturing innate talents through specialized pathways in STEM, Humanities, and the Arts.',
      'Cambridge International delivers globally standardized benchmarks, deep conceptual rigor, and direct credit portability to universities in over 160 countries.',
      'Our academic counselors work closely with each family to identify which learning style best matches your child’s temperament and long-term ambitions.'
    ],
    tags: ['Curriculum', 'Cambridge', 'CBC', 'Parenting']
  },
  {
    id: 'blog-stem-early-years',
    title: 'Igniting Future Engineers: Why Hands-On STEM Matters in Primary School',
    slug: 'hands-on-stem-in-primary-school',
    excerpt: 'How robotics, coding blocks, and practical inquiry transform abstract mathematics into tangible creative confidence.',
    category: 'STEM & Innovation',
    date: 'July 22, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. John Ochieng',
      role: 'Head of Science & Innovation'
    },
    image: blogRoboticsImg,
    content: [
      'Children are natural scientists—constantly testing boundaries, asking questions, and building structures.',
      'Introducing robotics kits, basic block programming, and simple machine mechanics as early as Grade 3 demystifies technology from a consumer mindset into a creator mindset.',
      'Scholars who engage in hands-on STEM demonstrate higher resilience when encountering difficult mathematical problems.'
    ],
    tags: ['STEM', 'Robotics', 'Coding', 'Innovation']
  },
  {
    id: 'blog-boarding-life-skills',
    title: 'Beyond the Dormitory: How Residential Boarding Cultivates Lifelong Character',
    slug: 'boarding-life-character-development',
    excerpt: 'Exploring the social, emotional, and organizational independence that boarding students develop in a supportive Christian environment.',
    category: 'Boarding & Pastoral Care',
    date: 'July 10, 2026',
    readTime: '5 min read',
    author: {
      name: 'Mr. Maina',
      role: 'Head of Boarding Welfare'
    },
    image: blogBoardingImg,
    content: [
      'Boarding school is far more than convenient accommodation—it is an immersive incubator of self-discipline, time management, and empathy.',
      'With structured morning devotionals, supervised evening prep, and collaborative weekend sports, boarders learn how to prioritize their time without constant parental oversight.',
      'Our separate boys and girls compounds in Lanet provide safe, tranquil spaces where lifelong friendships are forged.'
    ],
    tags: ['Boarding', 'Character', 'Discipline', 'Pastoral']
  },
  {
    id: 'blog-music-academic-growth',
    title: 'The Symphony of Learning: How Music and Brass Band Accelerate Cognitive Agility',
    slug: 'music-and-cognitive-agility',
    excerpt: 'The neurological and emotional benefits of instrumental music training in cultivating patience, teamwork, and mathematical reasoning.',
    category: 'Arts & Culture',
    date: 'June 28, 2026',
    readTime: '4 min read',
    author: {
      name: 'Mr. James Kiptoo',
      role: 'Director of Co-Curricular'
    },
    image: blogMusicBandImg,
    content: [
      'Learning to read musical notation and coordinate breath, finger placement, and tempo engages both cerebral hemispheres simultaneously.',
      'Members of the St. Gabriel Brass Band consistently achieve top-tier performance in mathematics and sciences.',
      'Performing in front of thousands builds unwavering public confidence and graceful composure under pressure.'
    ],
    tags: ['Music', 'Brass Band', 'Brain Development', 'Arts']
  },
  {
    id: 'blog-playgroup-foundation',
    title: 'The Magic of Early Childhood: Play-Based Literacy in the Foundation Stage',
    slug: 'play-based-literacy-foundation-stage',
    excerpt: 'Why imaginative play, storytelling circles, and sensory exploration build stronger reading foundations than rote memorization.',
    category: 'Early Years',
    date: 'June 14, 2026',
    readTime: '4 min read',
    author: {
      name: 'Mrs. Grace Wanjiru',
      role: 'Head of Early Childhood'
    },
    image: blogPlaygroupImg,
    content: [
      'In early years, play is the true work of childhood. Through sensory bins, puppet theater, and rhyming songs, young learners absorb complex phonemic awareness naturally.',
      'At St. Gabriel Kindergarten, our children learn joyfully without feeling pressured by rigid drills, fostering a lifelong appetite for reading.'
    ],
    tags: ['EYFS', 'Kindergarten', 'Literacy', 'Play']
  }
];
