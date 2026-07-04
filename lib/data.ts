export const profile = {
  name: "Favour Oluwatunmibi",
  title: "Backend Software Engineer",
  tagline:
    "Backend software engineer building resilient, event-driven systems — and applied ML that reaches real users. I like owning systems end to end, from schema to production.",
  location: "Nigeria · Open to remote & relocation",
  bio: "I'm a backend software engineer who likes owning systems end to end — from schema design and API architecture to the event-driven plumbing that keeps them resilient under load. As Founding Engineer at CSG Development, I lead the technical direction for Resov, a grant-management platform. I graduated from Babcock University as Best Graduating Student in Software Engineering (4.89/5.00), and my award-winning thesis took applied machine learning into healthcare — a hybrid CNN–Vision Transformer for multi-disease detection from retinal images. I care about work that's both technically rigorous and genuinely useful to the people who rely on it.",
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

export const heroRoles = [
  "Backend Software Engineer.",
  "Systems & API Architect.",
  "Event-Driven Backend Builder.",
  "Applied ML in Healthcare.",
];

export const highlights = [
  "Best Graduating Student, B.Sc. Software Engineering — 4.89/5.00",
  "Founding Engineer at CSG · 161-endpoint Spring Boot platform on RabbitMQ",
  "Best HealthTech Award · hybrid CNN–ViT, 0.8869 AUC-ROC on ODIR-5K",
  "Production experience across Java/Spring Boot, Python/FastAPI, and C#/.NET",
];

export type Experience = {
  role: string;
  company: string;
  date: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    role: "Founding Engineer — Backend & Platform Architecture",
    company: "Resov (CSG Development)",
    date: "Oct 2025 — Present",
    points: [
      "Own end-to-end technical direction for Resov, a grant-management platform connecting donors with grant applicants — from requirements through architecture and deployment.",
      "Built a Spring Boot 4 / Java 21 backend exposing 161 REST endpoints over PostgreSQL: 49 entities across 9 domain-separated schemas, 47 Flyway migrations, and JWT + Google OAuth2 role-based access control.",
      "Designed a RabbitMQ event-driven layer with per-workflow retry/dead-letter queues across 9 queue configs, keeping email, payment, and AI processing resilient to downstream failures — plus a token-isolated proxy keeping auth credentials off the client.",
      "Advise the founding team on technical feasibility and architecture trade-offs.",
    ],
    stack: ["Java 21", "Spring Boot 4", "PostgreSQL", "RabbitMQ", "Flyway", "OAuth2", "Docker"],
  },
  {
    role: "Full-Stack Engineer (Contract)",
    company: "Brandaly",
    date: "Apr 2025 — Oct 2025",
    points: [
      "Architected Python/FastAPI backends for two products for one client — a Slack-integrated brand-monitoring dashboard and a customer-intelligence platform — using async SQLAlchemy over PostgreSQL, Alembic, Pydantic, and a layered repository-service architecture; also owned select React/Next.js frontend work including the public landing page.",
      "Designed OAuth 2.0 integrations unifying customer data from Salesforce, Shopify, and HubSpot into a single normalized profile model, with encrypted token storage and JWT auth.",
      "Built the LLM pipeline with an AI engineer — Google Gemini for sentiment analysis and response generation, and a LangChain + OpenAI agentic RAG layer over a Supabase vector store — owning prompt engineering and structured-output parsing.",
      "Led technical research on digital-twin and privacy-preserving analytics to shape product direction.",
    ],
    stack: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "LangChain", "Gemini", "Next.js"],
  },
  {
    role: "Software Engineer",
    company: "Halogen Group",
    date: "Jan 2025 — Jun 2025",
    points: [
      "Diagnosed maintainability issues in legacy backend code causing recurring defects; led a refactor to a modular architecture and introduced xUnit coverage to prevent regressions.",
      "Developed backend modules for an incident-management system in C#/.NET with Entity Framework Core, reducing system downtime by 25%.",
      "Collaborated with senior engineers in an agile environment on high-stakes security solutions for enterprise clients.",
    ],
    stack: ["C#", ".NET", "Entity Framework Core", "xUnit"],
  },
  {
    role: "Software Engineer (Part-time)",
    company: "Stalwart Crest Ltd",
    date: "Sep 2024 — Sep 2025",
    points: [
      "Led a team of 4 engineers building a digital banking platform clone — authentication, transaction flows, and account management — delivered 2 weeks ahead of schedule.",
      "Partnered with Babcock University's Software Development Unit (facilitated through Stalwart Crest) to migrate and maintain the school website, managing content and structure through the CMS.",
    ],
    stack: ["React", "Spring Boot", "Java", "MySQL"],
  },
  {
    role: "Web Developer",
    company: "UCCSchools",
    date: "Jun 2024 — Oct 2024",
    points: [
      "Developed and deployed a high-performing K-12 school website with Django, PostgreSQL, SCSS, and Bootstrap on Microsoft Azure — 99.9% uptime and a 45% rise in inquiries within two months.",
      "Implemented SEO and performance tuning: 60% faster page loads and search rankings lifted from 3rd to 1st for 15+ keywords.",
      "Owned end-to-end delivery — requirements gathering, architecture, Azure deployment, and ongoing maintenance.",
    ],
    stack: ["Django", "PostgreSQL", "SCSS", "Bootstrap", "Azure"],
  },
];

export type Project = {
  title: string;
  org?: string;
  description: string;
  tech: string[];
  url?: string;
  live: boolean;
  featured?: boolean;
  award?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    title: "Resov — Grant-Management Platform",
    org: "CSG Development",
    description:
      "Founding-engineer backend for a platform connecting donors with grant applicants. A Spring Boot 4 / Java 21 service exposing 161 REST endpoints over PostgreSQL — 49 entities across 9 domain-separated schemas, 47 Flyway migrations, and JWT + Google OAuth2 RBAC — with a RabbitMQ event-driven layer (per-workflow retry/dead-letter queues) keeping email, payment, and AI processing resilient to downstream failures.",
    tech: ["Java 21", "Spring Boot 4", "PostgreSQL", "RabbitMQ", "Flyway", "OAuth2", "Docker"],
    live: false,
    featured: true,
    status: "Private · walkthrough on request",
  },
  {
    title: "Brand Monitoring & Customer Intelligence",
    org: "Brandaly",
    description:
      "Two Python/FastAPI products for one client: a Slack-integrated brand-monitoring dashboard and a customer-intelligence platform. Async SQLAlchemy over PostgreSQL in a layered repository-service architecture; OAuth 2.0 integrations normalizing Salesforce, Shopify, and HubSpot into one profile model; and an LLM pipeline — Gemini for sentiment/response plus a LangChain + OpenAI agentic RAG layer over a Supabase vector store.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "LangChain", "Gemini", "Next.js"],
    live: false,
    featured: true,
    status: "Private · walkthrough on request",
  },
  {
    title: "Retinal Fundus Multi-Disease Detection",
    org: "Thesis · Best HealthTech Award",
    description:
      "Award-winning hybrid CNN–Vision Transformer detecting diabetic retinopathy, glaucoma, cataract, and AMD from retinal fundus images — 0.8869 AUC-ROC and 85.3% accuracy on ODIR-5K, clinically validated at Babcock University Teaching Hospital. Solo-built FastAPI backend and model-serving API with tiered clinician/user/admin access; presented and won Best HealthTech at a Paystack-sponsored ideathon.",
    tech: ["PyTorch", "Vision Transformers", "CNN", "FastAPI", "Python", "React"],
    url: "https://retinal-detection-frontend.vercel.app/",
    live: true,
    featured: true,
    award: "Best HealthTech",
  },
  {
    title: "Student Room Booking System",
    description:
      "A full-stack room booking platform that streamlines student reservations, with image handling via Azure Blob Storage and a React frontend backed by a Spring Boot API.",
    tech: ["React", "Spring Boot", "Java", "MySQL", "Azure"],
    url: "https://student-room-booking-system-frontend.vercel.app/",
    live: true,
  },
  {
    title: "UCCSchools Management System",
    description:
      "A robust K-12 school management system integrating student records with cloud deployment — designed, built, and shipped end to end on Microsoft Azure. 99.9% uptime and a 45% rise in inquiries.",
    tech: ["Django", "PostgreSQL", "Bootstrap", "Azure"],
    url: "https://uccschools.com.ng",
    live: true,
  },
  {
    title: "Kuda Bank Clone",
    org: "Stalwart Crest",
    description:
      "A digital banking platform clone built while leading a team of 4 — authentication, transaction flows, account management, and a responsive dashboard with 15+ interactive components.",
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
];

export type SkillGroup = {
  category: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  { category: "Languages", items: ["Java", "Python", "C#", "TypeScript", "JavaScript"] },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring Security", "Hibernate / JPA", "FastAPI", "Django", "ASP.NET / EF Core", "Node.js"],
  },
  {
    category: "AI / ML",
    items: ["PyTorch", "CNNs", "Vision Transformers", "LangChain", "OpenAI", "Google Gemini", "RAG"],
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "RabbitMQ", "Flyway"],
  },
  { category: "Architecture & Security", items: ["REST APIs", "Microservices", "JWT", "OAuth 2.0"] },
  {
    category: "DevOps & Tools",
    items: ["Docker", "Azure", "GitHub Actions", "Azure DevOps", "Linux", "Maven", "Git", "CI/CD"],
  },
  { category: "Frontend", items: ["React", "Next.js"] },
];

export const education = {
  degree: "B.Sc. Software Engineering",
  school: "Babcock University",
  location: "Ogun State, Nigeria",
  date: "Oct 2022 — Jul 2026",
  gpa: "4.89 / 5.00",
  honor: "Best Graduating Student",
  thesis:
    "Retinal Fundus Multi-Disease Detection System Using a Hybrid CNN–Vision Transformer Model",
};

export type Involvement = {
  role: string;
  org: string;
  date: string;
  detail: string;
};

export const leadership: Involvement[] = [
  {
    role: "Technical Lead",
    org: "Google Developers Group (GDG) Babcock",
    date: "Sep 2025 — Present",
    detail:
      "Led GDG Babcock's Hacktoberfest 2025 dev team of 36 contributors, managing the repo and mentoring members. As a former core team member (Data Science/ML/AI track, 2023–2025), facilitated bootcamp training for 30+ students on building RAG applications with LangChain and the Gemini API.",
  },
  {
    role: "Backend Developer",
    org: "Babcock University Computer Club — Dev Team",
    date: "Jun 2024 — Present",
    detail:
      "Diagnosed a platform-wide login outage caused by a failed school email server; redesigned authentication to accept any email with an alternate student-verification step, restoring access for 3,000+ students without depending on the school's server.",
  },
  {
    role: "Microsoft Learn Student Ambassador (Beta)",
    org: "Microsoft",
    date: "Jan 2024 — Present",
    detail:
      "Hosted hands-on workshops for 100+ students on Azure, including computer-vision model deployment, guiding participants through building and deploying working projects.",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
