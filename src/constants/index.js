import {
  profileimg,
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  c,
  cpp,
  git,
  bootstrap,
  canva,
  framermotion,
  materialui,
  postgresql,
  postman,
  socketio,
  solidity,
  figma,
  
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
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
  },
  {
    title: "Canva Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  // {
  //   name: "CSS 3",
  //   icon: css,
  // },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgre SQL",
    icon: postgresql,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  // {
  //   name: "Tailwind CSS",
  //   icon: tailwind,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  // {
  //   name: "Material UI",
  //   icon: materialui,
  // },

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
  // {
  //   name: "socket io",
  //   icon: socketio,
  // },
  // {
  //   name: "C",
  //   icon: c,
  // },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  // {
  //   name: "Canva",
  //   icon: canva,
  // },
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