import ImageProject from "../assets/projects.png";
import dashSTack from "../assets/projects Images/DashStack.jpg";
import Edujar from "../assets/projects Images/Edujar.jpg";
import Portfolio from "../assets/projects Images/Portfolio.jpg";
import Products from "../assets/projects Images/Products.jpg";
export const projects = [
  {
    image: dashSTack,
    title: "Dashstack",
    previewDesc: "Html-Css3-Vanilla javscript",
    desc: `A responsive React + Tailwind CSS dashboard for stock management, built with Vite. Users can sign up/log in, add, edit, and track products with an intuitive UI. Pure vanilla JavaScript.
Clean, fast, and easy to navigate.`,
    date: "10-8-2024",
    frameWork: "",
    libraries: "React.js Tailwind.css",
    id: 1,
    demo: "https://dash-stack-delta.vercel.app/",
    github: "https://github.com/MernaHallak",
  },
  {
    image: Edujar,
    title: "Edujar",
    previewDesc: "RHtml-Css3-Vanilla javscript",
    desc: `A comprehensive e-learning website offering courses across various fields, featuring virtual classrooms, assessment tests, and progress tracking. Built with React.js and Tailwind CSS for a responsive, user-friendly design.
Key Features:
✅ Level-categorized courses ✅ Live lesson streaming ✅ Integrated student/teacher management system`,
    date: "10-9-2024",
    frameWork: "",
    libraries: "React.js",
    id: 2,
    demo: "https://edujar-merna.vercel.app",
    github: "https://github.com/MernaHallak",
  },
  {
    image: Portfolio,
    title: "Portfolio",
    previewDesc: "Html-Css3-Vanilla javscript",
    desc: `A personal portfolio website to showcase projects and skills, built with modern tech like React.js and Tailwind CSS for full responsiveness. Features a sleek interface with project filtering by category.

Highlights:
✅ Interactive project gallery ✅ Flawless cross-device browsing ✅ Easy content updates`,
    date: "2-11-2024",
    frameWork: "",
    libraries: "React.js Tailwind.css",
    id: 3,
    demo: "/",
    github: "https://github.com/MernaHallak",
  },
  {
    image: Products,
    title: "Products",
    previewDesc: "Html-Css3-Vanilla javscript",
    desc: `A lightweight product management system built with core web technologies (HTML, CSS, JavaScript) without external libraries. Enables users to add new products, delete existing ones, and instantly search through items. Features a clean interface with local data storage for fast performance.`,
    date: "13-9-2024",
    frameWork: "",
    libraries: "",
    id: 4,
    demo: "https://products-inky-pi.vercel.app/",
    github: "https://github.com/MernaHallak",
  },
];
