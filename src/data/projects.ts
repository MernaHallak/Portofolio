export type ProjectImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  legacyId?: string;
  summary?: string;
  description?: string;
  overview?: string;
  role?: string;
  date?: string;
  year?: string;
  status?: string;
  tools?: readonly string[];
  tags?: readonly string[];
  features?: readonly string[];
  images?: readonly ProjectImage[];
  liveUrl?: string;
  githubUrl?: string;
  featured?: boolean;
  order?: number;
};

export const projects: readonly Project[] = [
  {
    slug: 'dashstack',
    legacyId: '1',
    title: 'Dashstack',
    summary: 'React + Tailwind CSS',
    description: `A responsive React + Tailwind CSS dashboard for stock management, built with Vite. Users can sign up/log in, add, edit, and track products with an intuitive UI. Pure vanilla JavaScript.
Clean, fast, and easy to navigate.`,
    date: '10-8-2024',
    tools: ['React.js', 'Tailwind.CSS'],
    images: [
      {
        src: '/images/projects/dashstack/cover.jpg',
        alt: 'Dashstack stock management dashboard interface',
      },
    ],
    liveUrl: 'https://dash-stack-delta.vercel.app/',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    slug: 'edujar',
    legacyId: '2',
    title: 'Edujar',
    summary: 'React + Tailwind CSS',
    description: `A comprehensive e-learning website offering courses across various fields, featuring virtual classrooms, assessment tests, and progress tracking. Built with React.js and Tailwind CSS for a responsive, user-friendly design.
Key Features:
✅ Level-categorized courses ✅ Live lesson streaming ✅ Integrated student/teacher management system`,
    date: '10-9-2024',
    tools: ['React.js'],
    images: [
      {
        src: '/images/projects/edujar/cover.jpg',
        alt: 'Edujar e-learning website interface',
      },
    ],
    liveUrl: 'https://edujar-merna.vercel.app',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    slug: 'portfolio',
    legacyId: '3',
    title: 'Portfolio',
    summary: 'React + Tailwind CSS',
    description: `A personal portfolio website to showcase projects and skills, built with modern tech like React.js and Tailwind CSS for full responsiveness. Features a sleek interface with project filtering by category.

Highlights:
✅ Interactive project gallery ✅ Flawless cross-device browsing ✅ Easy content updates`,
    date: '2-11-2024',
    tools: ['React.js', 'Tailwind.CSS'],
    images: [
      {
        src: '/images/projects/portfolio/cover.png',
        alt: 'Portfolio website interface preview',
      },
    ],
    liveUrl: 'merna-hallak-portfollio.vercel.app',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    slug: 'products',
    legacyId: '4',
    title: 'Products',
    summary: 'React + Tailwind CSS',
    description: `A lightweight product management system built with core web technologies (HTML, CSS, JavaScript) without external libraries. Enables users to add new products, delete existing ones, and instantly search through items. Features a clean interface with local data storage for fast performance.`,
    date: '13-9-2024',
    images: [
      {
        src: '/images/projects/products/cover.jpg',
        alt: 'Products web application interface',
      },
    ],
    liveUrl: 'https://products-inky-pi.vercel.app/',
    githubUrl: 'https://github.com/MernaHallak',
  },
];
