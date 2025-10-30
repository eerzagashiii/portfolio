import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  php,
  reactjs,
  wordpress,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  ick,
  roi,
  starlabs,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "UI-UX Designer",
    icon: backend,
  },
   {
    title: "Project Management",
    icon: creator,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "wordpress",
    icon: wordpress,
  },
];

const experiences = [
  
  {
    title: "Java Developer",
    company_name: "Roi Academy",
    icon: roi,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - April 2021",
    points: [
      "I learned the fundamentals of Java programming, including variables, data types, and control structures.",
      "I gained knowledge of object-oriented programming concepts, such as classes, objects, inheritance, and polymorphism.",
      "I practiced building console-based Java applications to solve real-world problems.",
      "The course helped me strengthen my programming logic and problem-solving skills.",
      
    ],
  },
  {
    title: "JavaScript Developer",
    company_name: "ICK training",
    icon: ick,
    iconBg: "#383E56",
    date: "Nov 2021 - Feb 2022",
    points: [
      "I completed an intensive 3-month JavaScript development course.",
      "I learned comprehensive JavaScript concepts, including HTML, CSS, and modern web development techniques.",
      "I gained knowledge of basic programming principles as well as advanced topics like DOM manipulation and asynchronous programming.",
      "During the course, I built a fully functional e-commerce application.",
      "The application allows users to browse products, add items to a cart, and complete purchases online.",
      "This project helped me apply my skills in real-world scenarios and improve my problem-solving abilities.",
    ],
  },
  {
    title: "ICK TechTrack",
    company_name: "ICK TechTrack Prishtina",
    icon: ick,
    iconBg: "#E6DEDD",
    date: "Jan 2023",
    points: [
      "During the program, I learned about cybersecurity, marketing, artificial intelligence, and other IT topics.",
      "The course provided a broad understanding of modern technology trends and IT practices.",
      "I gained practical insights into how IT, marketing, and design concepts are applied in real-world projects.",
      "The certification helped me expand my knowledge across multiple areas of technology, design, and digital strategy.",
    ],
  },

  {
    title: "Web Developer",
    company_name: "StarLabs",
    icon: starlabs,
    iconBg: "#383E56",
    date: "May 2024 - Sep 2024",
    points: [
      "Write custom HTML, PHP, CSS and JavaScript for existing websites and applications.",
      "Assist in troubleshooting issues on web-based systems.",
      "Update and edit website content, posts and pages. ",
      "Create prototypes and experiment with new technologies and features as assigned",
      "Provide technical support related to web-based systems to internal teams."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };