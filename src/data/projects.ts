export type Project = {
  id: string;
  title: string;
  previewDescription: string;
  description: string;
  date: string;
  framework: string;
  technologies: string;
  image: string;
  demoUrl: string;
  githubUrl: string;
};

export const projects = [
  {
    id: '1',
    title: 'Dashstack',
    previewDescription: 'React + Tailwind CSS',
    description: `A responsive React + Tailwind CSS dashboard for stock management, built with Vite. Users can sign up/log in, add, edit, and track products with an intuitive UI. Pure vanilla JavaScript.
Clean, fast, and easy to navigate.`,
    date: '10-8-2024',
    framework: '',
    technologies: 'React.js Tailwind.CSS',
    image: '/images/projects/DashStack.jpg',
    demoUrl: 'https://dash-stack-delta.vercel.app/',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    id: '2',
    title: 'Edujar',
    previewDescription: 'React + Tailwind CSS',
    description: `A comprehensive e-learning website offering courses across various fields, featuring virtual classrooms, assessment tests, and progress tracking. Built with React.js and Tailwind CSS for a responsive, user-friendly design.
Key Features:
✅ Level-categorized courses ✅ Live lesson streaming ✅ Integrated student/teacher management system`,
    date: '10-9-2024',
    framework: '',
    technologies: 'React.js',
    image: '/images/projects/Edujar.jpg',
    demoUrl: 'https://edujar-merna.vercel.app',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    id: '3',
    title: 'Portfolio',
    previewDescription: 'React + Tailwind CSS',
    description: `A personal portfolio website to showcase projects and skills, built with modern tech like React.js and Tailwind CSS for full responsiveness. Features a sleek interface with project filtering by category.

Highlights:
✅ Interactive project gallery ✅ Flawless cross-device browsing ✅ Easy content updates`,
    date: '2-11-2024',
    framework: '',
    technologies: 'React.js Tailwind.CSS',
    image: '/images/projects/Portfolio.png',
    demoUrl: 'merna-hallak-portfollio.vercel.app',
    githubUrl: 'https://github.com/MernaHallak',
  },
  {
    id: '4',
    title: 'Products',
    previewDescription: 'React + Tailwind CSS',
    description: `A lightweight product management system built with core web technologies (HTML, CSS, JavaScript) without external libraries. Enables users to add new products, delete existing ones, and instantly search through items. Features a clean interface with local data storage for fast performance.`,
    date: '13-9-2024',
    framework: '',
    technologies: '',
    image: '/images/projects/Products.jpg',
    demoUrl: 'https://products-inky-pi.vercel.app/',
    githubUrl: 'https://github.com/MernaHallak',
  },
] as const satisfies readonly Project[];
