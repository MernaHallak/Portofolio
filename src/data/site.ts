export const navigationItems = [
  { label: 'Hero', id: 'hero' },
  { label: 'About', id: 'about' },
  { label: 'Education', id: 'education' },
  { label: 'Projects', id: 'projects' },
  { label: 'Contact', id: 'contact' },
] as const;

export const site = {
  name: 'Merna',
  title: 'Merna Portfollio',
  hero: {
    role: 'Frontend Developer • React',
    greeting: 'Hi, I’m',
    description:
      'I build clean, responsive, and user-friendly web interfaces with a soft, modern touch — focusing on clarity, accessibility, and delightful details.',
    chips: ['React', 'Tailwind', 'UI Refinement', 'Responsive Design'],
    availability: 'Available for opportunities',
  },
  about: {
    description:
      'I’m a Computer and Automation Engineering graduate, specializing in web application development. I work as a Frontend Developer using React, building modern, responsive, and user-friendly interfaces.',
    skills: [
      { name: 'HTML 5', rate: 90 },
      { name: 'CSS 3', rate: 80 },
      { name: 'JS', rate: 85 },
      { name: 'React', rate: 70 },
    ],
    chips: ['Clean UI', 'Responsive', 'Detail-oriented'],
  },
  experience: {
    items: [
      {
        title: 'React Developer (Professional Experience at VICA)',
        description:
          'I trained as a Front-End Developer at VICA using React.js for 3 months. Contributed to developing user interfaces for project management applications.',
      },
      {
        title: 'Graduation Project (Smart Home System)',
        description:
          'Developed a smart home system using IoT concepts, focusing on automation and user control via a web interface.',
      },
      {
        title: 'Education',
        description:
          'B.Sc. in Computer and Automation Engineering — focused on software fundamentals, automation, and modern web development.',
      },
    ],
    values:
      'I enjoy turning complex ideas into interfaces that feel simple, warm, and intuitive. I focus on spacing, hierarchy, and micro-interactions so the experience feels polished on every screen.',
  },
  contact: {
    phone: '+963 997 224 089',
    email: 'mernahalla@gmail.com',
    location: 'Damascus, Syria',
    tip: 'Share your goals, timeline, and links — I’ll respond faster and more accurately.',
  },
  socialLinks: [
    { label: 'Facebook', href: 'https://www.facebook.com/share/192XgVXPnw/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/merna-hallak-a633a636a/' },
    { label: 'Instagram', href: 'https://www.instagram.com/merna_hallak?igsh=cHNzNzdwb2t0a2Fy' },
  ],
} as const;
