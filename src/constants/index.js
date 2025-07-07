import {
  profileimg,
  mobile,
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
  devspark,
  c,
  cpp,
  python,
  ar,
  django,
  git,
  langchain,
  ollama,
  chromaDB,
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
  codemaster,
  digifund,
  arBeats,
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
  upwork,
  cisco,
  cisco_certificate,
  exposys_certificate,
  devspark_certificate,
  arCard
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Engineer",
    icon: web,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "Fullstack Web Developer",
    icon: backend,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "AR Developer & Enthusiast",
    icon: arCard,
    url: "https://github.com/mishikaa/ARBeats"
  },
  {
    title: "UI / UX Designer",
    icon: mobile,
    url: "https://www.figma.com/@mishika"
  }
];

const technologies = [
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Django",
    icon: django,
  },
  {
    name: "Langchain",
    icon: langchain,
  },
  {
    name: "Ollama",
    icon: ollama,
  },
  {
    name: "ChromaDB",
    icon: chromaDB,
  },
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
    name: "AR.js",
    icon: ar,
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
  // {
  //   name: "Canva",
  //   icon: canva,
  // },
];

const experiences = [
  {
    title: "Software Engineering Intern",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#383E56",
    date: "January 2025 - July 2025",
    points: [
        "Built a multi-agent LLM diagnostic system using RAG for automated triage, root cause analysis, and error classification, streamlining QA and debugging.",
        "Developed a log retrieval agent to query ELK (Kibana) and Kubernetes metrics, aggregating system health into actionable insights.",
        "Optimized complex PostgreSQL queries for real-time analytics and anomaly detection, enhancing performance monitoring.",
        "Enhanced a Django Runstats Dashboard with advanced filters, interactive Chart.js visuals, and improved UI/UX for better user engagement."
    ],
    certificate: cisco_certificate
  },
  {
    title: "Web Development Intern",
    company_name: "Devspark",
    icon: devspark,
    iconBg: "#383E56",
    date: "May 13 - July 14, 2024",
    points: [
      "Built a full-stack MERN application for project management, enhancing team collaboration.",
      "Implemented Google OAuth 2.0 authentication with role-based access control for secure user access.",
      "Developed and optimized a React.js, Node.js, and MongoDB-based system with AWS S3, CDN, and pre-signed URLs for efficient file storage and retrieval."
    ],
    certificate: devspark_certificate
  },
  {
    title: "Web Development Intern",
    company_name: "Exposys Data Labs",
    icon: exposys,
    iconBg: "#383E56",
    date: "November 3 - December 2, 2023",
    points: [
      "Developed a web application for a startup business.",
      "Worked on both frontend and backend development tasks.",
      "Worked with Next.js, tailwindcss, MongoDB, and node.js tech stacks."
    ],
    certificate: exposys_certificate
  },
  {
    title: "Freelancer",
    company_name: "Upwork",
    icon: upwork, 
    iconBg: "#383E56",
    date: "December 10 - December 17, 2023",
    points: [
      "Created a portfolio website for the KKNNS organization. (LINK)",
      "Worked with Next.js, Tailwind CSS, and Node.js tech stacks."
    ],
    link: "https://www.sscnmodel.in/"
  }
];

const projects = {
  webDevelopment: [
    {
      name: "Code Master",
      description: "A powerful DSA problem search engine with BM25 and TF-IDF ranking algorithms.",
      tags: [
        { name: "EJS", color: "pink-text-gradient" },
        { name: "JavaScript", color: "blue-text-gradient" },
        { name: "Node.js", color: "yellow-text-gradient" },
        { name: "Express.js", color: "green-text-gradient" },
        { name: "BM25", color: "orange-text-gradient" },
        { name: "TF-IDF", color: "pink-text-gradient" }
      ],
      image: codemaster,
      live_link: "https://searchcodemaster.onrender.com/",
      source_code_link: "https://github.com/mishikaa/codeMaster"
    },
    {
      name: "Femme Cab",
      description: "A women-only cab booking system for safer travel.",
      tags: [
        { name: "React", color: "pink-text-gradient" },
        { name: "Node.js", color: "orange-text-gradient" },
        { name: "Express", color: "green-text-gradient" },
        { name: "MongoDB", color: "orange-text-gradient" },
        { name: "Flask", color: "green-text-gradient" },
        { name: "OpenCV", color: "blue-text-gradient" }
      ],
      image: femmecab,
      live_link: "https://femme-cab.vercel.app/",
      source_code_link: "https://github.com/mishikaa/femmeCab"
    },
    {
      name: "Belle Beauty",
      description: "A salon service booking platform.",
      tags: [
        { name: "Next.js", color: "pink-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "JavaScript", color: "blue-text-gradient" },
        { name: "TailwindCSS", color: "yellow-text-gradient" },
        { name: "Node.js", color: "orange-text-gradient" },
        { name: "MongoDB", color: "yellow-text-gradient" }
      ],
      image: belleBeauty,
      live_link: "https://belleBeauty.vercel.app/",
      source_code_link: "https://github.com/mishikaa/belleBeauty"
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
      source_code_link: "https://github.com/",
    },
    {
      name: "KKNNS",
      description:
        " National Network Services is committed to delivering reliable solutions and has a proven track record in the field. ",
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
      live_link:"https://www.kknns.com/",
      source_code_link: "https://github.com/mishikaa/kknns",
    }
  ],
  blockchain: [
    {
      name: "Digi Fund",
      description: "A decentralized crowdfunding platform leveraging blockchain.",
      tags: [
        { name: "Next.js", color: "pink-text-gradient" },
        { name: "TypeScript", color: "green-text-gradient" },
        { name: "Solidity", color: "blue-text-gradient" },
        { name: "ethers.js", color: "yellow-text-gradient" },
        { name: "Metamask", color: "orange-text-gradient" },
        { name: "IPFS", color: "pink-text-gradient" }
      ],
      image: digifund,
      live_link: "https://digifund.vercel.app/",
      source_code_link: "https://github.com/mishikaa/digiFund"
    }
  ],
  arDevelopment: [
    {
      name: "AR Beats",
      description: "An immersive AR music player with marker-based interactions.",
      tags: [
        { name: "A-Frame", color: "pink-text-gradient" },
        { name: "AR.js", color: "green-text-gradient" },
        { name: "Howler.js", color: "blue-text-gradient" },
        { name: "HTML5", color: "yellow-text-gradient" },
        { name: "CSS3", color: "orange-text-gradient" },
        { name: "JavaScript", color: "pink-text-gradient" }
      ],
      image: arBeats,
      live_link: "https://mishikaa.github.io/ARBeats/",
      source_code_link: "https://github.com/mishikaa/arBeats"
    }
  ]
};

export { services, technologies, experiences, projects };