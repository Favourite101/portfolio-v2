export const profile = {
  name: "Favour Oluwatunmibi",
  title: "Software Engineer",
  tagline:
    "Software engineer building intuitive, efficient, and scalable systems that turn real-world problems into clean code.",
  location: "Available for opportunities · Remote / Relocation",
  bio: "I'm a software engineer on a mission to solve real-world problems through code. Every system I design is driven by one question: how can technology make this better? For me, better means intuitive, efficient, and accessible solutions that meet the technical bar and deliver a seamless experience for the people who use them.",
  resumeUrl: "/resume.pdf",
  headshot: "/images/favour.jpg",
};

export const socials = {
  email: "favourtunmibi@gmail.com",
  github: "https://github.com/Favourite101",
  githubUser: "Favourite101",
  linkedin: "https://www.linkedin.com/in/favourtunmibi",
  linkedinUser: "favourtunmibi",
  medium: "https://medium.com/@favourwrites",
  twitter: "https://twitter.com/Fav_fantasy_",
};

export type Experience = {
  role: string;
  company: string;
  date: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Engineer",
    company: "Stalwart Crest Ltd",
    date: "Sep 2024 — Present",
    points: [
      "Built a comprehensive CRUD API for employee management with Spring Boot, integrating it with the frontend and cutting response times by 30% through query and caching optimizations.",
      "Implemented robust data validation, authentication, and security measures — mitigating vulnerabilities through regular audits and peer code reviews.",
      "Collaborated across functional teams in an agile environment, owning features end to end from design through deployment.",
    ],
    stack: ["Java", "Spring Boot", "REST APIs", "MySQL", "Agile"],
  },
  {
    role: "Web Developer",
    company: "UCCSchools",
    date: "Jun 2024 — Oct 2024",
    points: [
      "Designed, built, and launched a high-performing school website that drove a 45% increase in inquiries within the first two months.",
      "Owned the full lifecycle — design, development, cloud deployment on Azure, and ongoing maintenance.",
      "Applied SEO best practices that lifted the school's ranking from 3rd to 1st for target keywords, significantly boosting visibility and lead generation.",
    ],
    stack: ["Django", "JavaScript", "SCSS", "Bootstrap", "Azure"],
  },
  {
    role: "Software Developer",
    company: "Babcock University — Software Development Unit",
    date: "Sep 2023 — Dec 2023",
    points: [
      "Part of the team that migrated the official Babcock University website to a new platform, transitioning 15,000+ users (students, parents, staff, and external stakeholders).",
      "Led migration of the news section, managing image uploads, content updates, and information architecture for accurate, timely delivery.",
      "Revamped the postgraduate departmental section, improving information retrieval by 50% through streamlined data organization.",
    ],
    stack: ["CMS", "HTML", "CSS", "Content Migration"],
  },
];

export type Project = {
  title: string;
  description: string;
  tech: string[];
  url: string;
  live: boolean;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Student Room Booking System",
    description:
      "A full-stack room booking platform that streamlines student reservations, with image handling via Azure Blob Storage and a React frontend backed by a Spring Boot API.",
    tech: ["React", "Spring Boot", "Java", "MySQL", "Azure"],
    url: "https://student-room-booking-system-frontend.vercel.app/",
    live: true,
    featured: true,
  },
  {
    title: "UCCSchools Management System",
    description:
      "A robust school management system integrating student records with cloud deployment — designed, built, and shipped end to end on Microsoft Azure.",
    tech: ["Django", "JavaScript", "Bootstrap", "Azure"],
    url: "https://uccschools.azurewebsites.net",
    live: true,
    featured: true,
  },
  {
    title: "Kuda Bank Clone",
    description:
      "A faithful clone of the Kuda banking app implementing core flows for transactions and user profiles, backed by Supabase and a REST API.",
    tech: ["React", "TailwindCSS", "Supabase", "REST API"],
    url: "https://kuda-clone-9bzr.vercel.app/",
    live: true,
  },
  {
    title: "Movie Management API",
    description:
      "A high-performance RESTful API for managing movies with full CRUD operations and JWT-based authentication.",
    tech: ["Spring Boot", "Java", "MySQL", "JWT"],
    url: "https://github.com/Favourite101/springboot-movie-api",
    live: false,
  },
  {
    title: "Newsletter Management System",
    description:
      "A full-stack app for creating and managing email campaigns, featuring an admin dashboard for content creation, subscriber management, and dispatch tracking.",
    tech: ["PHP", "MySQL", "SCSS"],
    url: "https://tribblenews.000webhostapp.com/",
    live: true,
  },
  {
    title: "ToDo List API",
    description:
      "A comprehensive RESTful API powering a to-do application, with a full suite of CRUD endpoints and user authentication for data privacy.",
    tech: ["Python", "Django", "REST API"],
    url: "https://github.com/Favourite101/ToDo-List-API",
    live: false,
  },
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Java", "Python", "JavaScript", "TypeScript", "C#"] },
  { category: "Backend", items: ["Spring Boot", "Django", "Node.js", "REST APIs", "Microservices"] },
  { category: "Frontend", items: ["React", "Next.js", "Angular", "HTML5 & CSS3", "TailwindCSS"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "MongoDB"] },
  { category: "DevOps & Cloud", items: ["AWS", "Azure", "Docker", "CI/CD", "Git & GitHub"] },
  { category: "Foundations", items: ["Design Patterns", "Clean Code", "TDD", "Scalability"] },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
