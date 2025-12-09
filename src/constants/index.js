import { meta, shopify, starbucks, bi,sih,logo1 } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
  {
    title: "Smart India Hackathon Participant",
    company_name: "Government of India (SIH 2023)",
    icon: sih,  // Replace with any icon you prefer
    iconBg: "#57cf77",
    date: "August 2023",
    points: [
      "Participated in Smart India Hackathon 2023, contributing to problem-solving at a national-level innovation event.",
      "Developed a working prototype of a Glass Cleaning Robot using hardware + software integration.",
      "Collaborated in a multidisciplinary team, gaining strong teamwork and project execution experience.",
      "Worked on brainstorming, prototyping, and presenting the final solution to evaluators.",
    ],
  },

  {
    title: "Full Stack Developer Intern",
    company_name: "Board Infinity",
    icon: bi,  // Replace icon if needed
    iconBg: "#FFFFFF",
    date: "June 2024 - July 2024",
    points: [
      "Completed summer training focused on MERN Stack (MongoDB, Express.js, React.js, Node.js).",
      "Built end-to-end full stack projects including authentication systems, dashboards, and APIs.",
      "Developed responsive UI components with React.js and integrated them with Node.js backend services.",
      "Gained experience with database modeling, REST APIs, JWT authentication, and deployment.",
      "Collaborated with peers and mentors, improving teamwork and problem-solving skills.",
    ],
  },

  {
    title: "Full Stack Developer (Self Projects)",
    company_name: "Independent / Freelance",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "2023 - Present",
    points: [
      "Built multiple full-stack applications using React.js, Node.js, Express.js, and MongoDB.",
      "Worked on real-world features such as user login, CRUD operations, admin dashboards, and API integration.",
      "Implemented responsive design, component reusability, and optimized performance.",
      "Actively improving skills through personal projects, online resources, and consistent learning.",
    ],
  },
];


export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl:threads ,
        theme: 'btn-back-red',
        name: '3-D Portfolio',
        description: 'Developed a 3D portfolio website built with modern technologies to showcase projects, interactive models, and personal work—optimised for responsive viewing and engaging user experience.',
        link: 'https://chandan-singh-chauhan-portfolio.vercel.app',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Resumind',
        description: 'AI-powered resume analyzer with real-time scoring, keyword insights, and improvement suggestions.',
        link: 'https://resumind-three-murex.vercel.app/auth?next=/',
    },
    /*{
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }*/
];