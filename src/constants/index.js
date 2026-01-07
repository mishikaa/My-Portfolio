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
    title: "Software Engineer @ Cisco",
    icon: web,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "AI/LLM & RAG Systems Developer",
    icon: backend,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "Enterprise Automation Engineer",
    icon: arCard,
    url: "https://github.com/mishikaa?tab=repositories"
  },
  {
    title: "Full Stack Web Developer",
    icon: mobile,
    url: "https://github.com/mishikaa?tab=repositories"
  }
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "C/C++",
    icon: cpp,
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
    name: "LangChain",
    icon: langchain,
  },
  {
    name: "ChromaDB",
    icon: chromaDB,
  },
  {
    name: "Ollama",
    icon: ollama,
  },
  {
    name: "Django",
    icon: django,
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
    name: "Node.js",
    icon: nodejs,
  },
  {
    name: "Express.js",
    icon: expressjs,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "HTML5",
    icon: html,
  },
  {
    name: "CSS3",
    icon: css,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Socket.io",
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
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Redis",
    icon: redis,
  },
  {
    name: "Three.js",
    icon: threejs,
  },
  {
    name: "AR.js",
    icon: ar,
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
    name: "Git",
    icon: git,
  },
  {
    name: "GitLab",
    icon: gitlab,
  },
  {
    name: "GitHub",
    icon: github,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Vercel",
    icon: vercel,
  },
  {
    name: "Netlify",
    icon: netlify,
  },
  {
    name: "Figma",
    icon: figma,
  },
  {
    name: "Bootstrap",
    icon: bootstrap,
  },
  // Add icons for these technologies for complete resume representation:
  // Kubernetes, Docker, Selenium, AWS S3, HuggingFace, QLoRA, Celery, Ethers.js, Chart.js
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#383E56",
    date: "August 2025 - Present",
    points: [
        "Engineered an enterprise UI automation framework for Cisco Intersight using Selenium abstractions for Shadow DOM, automating 1500+ test cases and significantly reducing manual testing effort.",
        "Architected a dynamic OpenShift Console plugin integrating Cisco Intersight with Red Hat OpenShift, enabling real-time hardware inventory, monitoring, and seamless hybrid cloud management.",
        "Developed robust test execution engine integrating with CI/CD pipelines for continuous quality assurance and rapid deployment cycles.",
        "Enhanced automation framework with advanced error handling and reporting mechanisms, improving debugging efficiency and test reliability."
    ]
  },
  {
    title: "Software Engineer Intern",
    company_name: "Cisco Systems",
    icon: cisco,
    iconBg: "#383E56",
    date: "January 2025 - July 2025",
    points: [
        "Designed a multi-agent system for automated error triage and root-cause analysis using RAG + ChromaDB + Kibana logs, accelerating debugging and improving system reliability.",
        "Delivered a full-stack Django Runstats Dashboard with real-time analytics, custom PostgreSQL queries, dynamic filters, and Chart.js visualizations for enhanced performance monitoring.",
        "Implemented LangChain-based agents for intelligent log analysis and pattern recognition, reducing mean time to resolution (MTTR) for critical issues.",
        "Optimized database queries and indexing strategies, improving dashboard response time by 40% and enabling real-time anomaly detection."
    ],
    certificate: cisco_certificate
  },
  {
    title: "Web Developer Intern",
    company_name: "Devspark",
    icon: devspark,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Built a full-stack MERN project-management system, improving team collaboration by 30% through streamlined workflows and real-time updates.",
      "Implemented Google OAuth 2.0 authentication with Role-Based Access Control (RBAC) for secure, scalable user access management.",
      "Developed React-Node-MongoDB system utilizing AWS S3, CloudFront CDN, and presigned URLs for efficient, secure file storage and retrieval.",
      "Optimized application performance with lazy loading, code splitting, and caching strategies, reducing page load time by 25%."
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
      description: "DSA problem search engine scraping 3,000+ problems using Selenium. Enhanced search precision by 35% with BM25 and TF-IDF algorithms. Optimized RAM-based indexing, reducing latency by 20%.",
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
      description: "Women-centric ride-booking platform with real-time threat detection powered by OpenCV and TensorFlow. Integrated Mapbox for navigation, improving route accuracy by 15%. Enhanced safety features with secure authentication and emergency alerts.",
      tags: [
        { name: "React", color: "pink-text-gradient" },
        { name: "Node.js", color: "orange-text-gradient" },
        { name: "MongoDB", color: "yellow-text-gradient" },
        { name: "TensorFlow", color: "blue-text-gradient" },
        { name: "OpenCV", color: "green-text-gradient" },
        { name: "Mapbox", color: "pink-text-gradient" }
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
      description: "Decentralized crowdfunding platform built with Next.js and TypeScript. Implemented Metamask for Web3 authentication and leveraged IPFS for decentralized storage, ensuring secure, transparent blockchain transactions.",
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
      description: "Augmented Reality music player featuring marker detection and intuitive playback controls. Incorporated Howler.js for advanced audio management, improving sound clarity by 25% and delivering immersive AR experiences.",
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