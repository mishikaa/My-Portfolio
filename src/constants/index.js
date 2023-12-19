import {
  profileimg,
  mobile,
  creator,
  web,
  github,
  redis,
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
  hardhat,
  nextjs,
  vuejs,
  sass,
  netlify,
  vercel,
  firebase,
  belleBeauty,
  kknns,
  exposys,
  exposys_certificate,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Sass",
    icon: sass,
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
    name: "Redis",
    icon: redis,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "Vue.js",
    icon: vuejs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Metamask",
    icon: metamask,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Firebase",
    icon: firebase,
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
    name: "github",
    icon: github,
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
    title: "Web Developer Intern",
    company_name: "Exposys Data Labs",
    icon: exposys,
    iconBg: "#383E56",
    date: "Nov-Dec 2023",
    points: [
      "Developed a web application for a startup business.",
      "Worked on both frontend and backend development tasks.",
      "Worked with Next.js, tailwindcss, MongoDB, and node.js tech stacks."
    ],
    certificate: exposys_certificate
  }
];

const projects = [
  {
    name: "Belle Beauty",
    description:
      "Belle Beauty envisions a seamless and interactive experience for its customers, allowing them to effortlessly browse services, book appointments, and engage with the salon’s offerings from the comfort of their homes.",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
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
        name: "mongodb",
        color: "yellow-text-gradient",
      },
    ],
    image: belleBeauty,
    live_link:"https://belleBeauty.vercel.app/",
    source_code_link: "https://github.com/mishikaa/belleBeauty",
  },
  {
    name: "KKNNS",
    description:
      " National Network Services is committed to delivering reliable solutions and has a proven track record in the field. National Network Services is home to a highly skilled team of professionals with extensive expertise in optical fiber and coaxial cable systems' operational and maintenance aspects. ",
    tags: [
      {
        name: "next.js",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "yellow-text-gradient",
      }
    ],
    image: kknns,
    live_link:"https://kknns.vercel.app/",
    source_code_link: "https://github.com/mishikaa/kknns",
  },
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