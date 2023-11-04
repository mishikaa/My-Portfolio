import {
  profileimg,
  mobile,
  creator,
  web,
  github,
  backend,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  metamask,
  expressjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  c,
  cpp,
  git,
  gitlab,
  bootstrap,
  canva,
  framermotion,
  materialui,
  postgresql,
  postman,
  socketio,
  solidity,
  figma,
  mysql,
  femmecab,
  readit,
  travelsync,
  taskit,
  threejs,
} from "../assets";

export const profileImg = profileimg;

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "works",
    title: "Works",
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
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "Backend Developer",
    icon: backend,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
    url: "https://www.figma.com/@mishika"
  },
  {
    title: "Canva Designer",
    icon: creator,
    url: "https://www.instagram.com/_canva_hacks/"
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
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Material UI",
    icon: materialui,
  },

  {
    name: "Framer Motion",
    icon: framermotion,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Expressjs",
    icon: expressjs,
  },
  {
    name: "socket io",
    icon: socketio,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "gitlab",
    icon: gitlab,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Canva",
    icon: canva,
  },
];

const experiences = [
  {
    title: "",
    company_name: "",
    icon: "",
    iconBg: "#383E56",
    date: "",
    points: [
      "",
    ],
  }
];

const projects = [
  {
    name: "Femme Cab",
    description:
      "A women-only cab booking system that is meticulously designed for the safe and comfortable travelling experience of the women in India.",
    tags: [
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      },
      {
        name: "opencv",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
    ],
    image: femmecab,
    live_link:"https://femme-cab.vercel.app/",
    source_code_link: "https://github.com/mishikaa/femmeCab",
  },
  {
    name: "Read It",
    description:
      "ReadIt is a blogging website designed to provide a platform for users to share and discover engaging content on a wide range of topics. ",
    tags: [
      {
        name: "EJS",
        color: "pink-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "orange-text-gradient",
      }
    ],
    image: readit,
    live_link:"https://readit-um3r.onrender.com",
    source_code_link: "https://github.com/mishikaa/ReadIt",
  },
  {
    name: "Travel Sync",
    description:
      "A chat application designed specifically for global travelers. It aims to connect the travel enthusiasts, share experiences, and seek advice from individuals planning to visit their destinations.",
    tags: [
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "yellow-text-gradient",
      },
      {
        name: "socket.io",
        color: "blue-text-gradient",
      },
    ],
    image: travelsync,
    live_link:"",
    source_code_link: "https://github.com/",
  },
  {
    name: "Task It",
    description:
      "A to-do web application to assist individuals in effectively organizing their daily responsibilities. It is designed to streamline task management, and increase productivity,",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "yellow-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: taskit,
    live_link:"",
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };