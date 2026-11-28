export type ProjectImage = {
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  legacyId?: string;
  category?: string;
  location?: string;
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
  archived?: boolean;
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
    archived: true,
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
    archived: true,
  },
  {
    slug: 'schs',
    title: 'SCHS',
    category: 'Healthcare / Full-Stack Web Application',
    location: 'Damascus, Syria',
    summary: 'Specialized Clinic for Hearing and Speech',
    description:
      'An Arabic-first healthcare platform built with Next.js, featuring hearing and speech services, educational articles, a secure PostgreSQL-powered CMS, and SEO-friendly localized routing.',
    overview: `SCHS is a full-stack healthcare website developed for the Specialized Clinic for Hearing and Speech in Damascus, Syria.

The platform provides an Arabic-first, fully responsive experience where visitors can explore hearing and speech services, discover diagnostic tests, read educational articles, and contact the clinic.

Behind the public website is a custom administrative content management system built with Next.js, Prisma, and PostgreSQL. It enables secure article management, publishing workflows, image optimization, and content updates.

The project also implements RTL support, localized Arabic routes, SEO metadata, server-side rendering, ISR, and responsive design.`,
    role: 'Full-Stack Developer & UI/UX Designer',
    status: 'Live',
    tools: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma',
      'Framer Motion',
      'Sharp',
    ],
    features: [
      'Arabic-first RTL experience — Localized routes and responsive RTL layouts.',
      'Custom content management system — Secure article creation, editing, publishing, and organization.',
      'PostgreSQL and Prisma integration — Structured, database-backed article management.',
      'Secure admin authentication — Password verification, signed cookies, and protected admin routes.',
      'SEO and localized routing — Canonical Arabic URLs, metadata, sitemap, redirects, and article data.',
      'Optimized media management — Sharp processing, WebP optimization, cover images, and galleries.',
      'Performance and rendering — Server Components, ISR-backed article pages, and cache revalidation.',
      'Responsive user experience — Mobile navigation, galleries, and subtle interface animations.',
      'Patient communication — WhatsApp, telephone, embedded maps, and social channels.',
    ],
    images: [
      {
        src: '/images/projects/schs/schs-homepage.jpg',
        alt: 'SCHS Arabic homepage for the Specialized Clinic for Hearing and Speech',
      },
      {
        src: '/images/projects/schs/schs-articles.png',
        alt: 'SCHS Arabic articles listing',
      },
      {
        src: '/images/projects/schs/schs-article-detail.png',
        alt: 'SCHS Arabic article detail page',
      },
      {
        src: '/images/projects/schs/schs-hearing-test.png',
        alt: 'SCHS hearing tests page',
      },
      {
        src: '/images/projects/schs/schs-contact.png',
        alt: 'SCHS contact page with an embedded Damascus map',
      },
      {
        src: '/images/projects/schs/schs-admin-articles.png',
        alt: 'SCHS administrative article management screen',
      },
      {
        src: '/images/projects/schs/schs-admin-editor.png',
        alt: 'SCHS administrative article editor',
      },
    ],
    liveUrl: 'https://schs-sy.com/',
    order: 1,
  },
  {
    slug: 'portfolio',
    legacyId: '3',
    title: 'Portfolio',
    summary: 'React + Tailwind CSS',
    description:
      'A personal portfolio website to showcase projects and skills, built with modern tech like React.js and Tailwind CSS for full responsiveness. Features a sleek interface with project filtering by category.',
    date: '2-11-2024',
    tools: ['React.js', 'Tailwind.CSS'],
    features: [
      'Interactive project gallery',
      'Flawless cross-device browsing',
      'Easy content updates',
    ],
    images: [
      {
        src: '/images/projects/portfolio/cover.png',
        alt: 'Portfolio website interface preview',
      },
    ],
    liveUrl: 'merna-hallak-portfollio.vercel.app',
    githubUrl: 'https://github.com/MernaHallak',
    order: 2,
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
    archived: true,
  },
];
