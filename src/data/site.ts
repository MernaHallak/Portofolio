export const navigationItems = [
  { label: 'Home', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Experience', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

export const site = {
  name: 'Merna Hallak',
  title: 'Merna Hallak | Frontend Developer',
  url: 'https://merna-hallak-portfollio.vercel.app',
  hero: {
    role: 'Frontend Developer',
    greeting: 'Hi, I’m',
    description:
      'I build responsive web interfaces with React, Next.js, and Tailwind CSS, turning product requirements into clear, accessible experiences.',
    chips: ['React', 'Next.js', 'Tailwind CSS', 'REST APIs'],
    availability: 'Available for opportunities',
  },
  about: {
    description:
      'I’m a Frontend Developer and Computer and Automation Engineering graduate. I build responsive websites with React, Next.js, and Tailwind CSS, and support practical delivery work from interface updates to deployment.',
    skillGroups: [
      {
        title: 'Primary stack',
        skills: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'],
      },
      {
        title: 'APIs & frontend architecture',
        skills: ['REST APIs', 'Context API', 'Axios'],
      },
      {
        title: 'Tools & workflow',
        skills: ['Git', 'GitHub', 'GitHub Actions', 'Postman'],
      },
      {
        title: 'Supporting',
        skills: ['Bootstrap'],
      },
    ],
  },
  experience: {
    items: [
      {
        type: 'experience',
        title: 'Frontend Developer',
        organization: 'Freelancer',
        period: '10/2025 – Present',
        highlights: [
          'Develop responsive and professional e-commerce websites for local and outsourcing companies using Next.js, React, and Tailwind CSS.',
          'Handle practical frontend work such as UI updates, domain setup, deployment support, and website improvements.',
        ],
      },
      {
        type: 'experience',
        title: 'React Developer (Trainee)',
        organization: 'VICA',
        period: '04/07/2024 – 04/09/2024',
        highlights: [
          'Built and optimized responsive user interface components using React, JavaScript, and Tailwind CSS.',
          'Worked on real project scenarios, API integration, reusable components, debugging, and frontend performance improvements.',
          'Collaborated with team members using modern frontend development workflows.',
        ],
      },
      {
        type: 'education',
        title: 'Bachelor of Computer and Automation Engineering',
        organization: 'Damascus University',
        period: '02/09/2020 – 15/07/2025',
        highlights: [
          'Built foundations in software development, problem-solving, systems, and engineering principles.',
        ],
      },
    ],
    values:
      'I value clear component structure, responsive behavior, accessible interactions, and careful delivery across screen sizes.',
  },
  contact: {
    phone: '+963 997 224 089',
    email: 'mernahalla@gmail.com',
    location: 'Damascus, Syria',
    tip: 'Share your goals, timeline, and relevant links so I can respond with useful next steps.',
  },
  socialLinks: [
    { kind: 'github', label: 'GitHub', href: 'https://github.com/MernaHallak' },
    {
      kind: 'linkedin',
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/merna-hallak-a633a636a/',
    },
    { kind: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/share/192XgVXPnw/' },
    {
      kind: 'instagram',
      label: 'Instagram',
      href: 'https://www.instagram.com/merna_hallak?igsh=cHNzNzdwb2t0a2Fy',
    },
  ],
} as const;
