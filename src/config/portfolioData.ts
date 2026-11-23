export interface Project {
  id: string;
  title: string;
  category: string;
  year: string;
  image: string;
  description: string;
  tags: string[];
  client?: string;
  role: string;
  highlight?: string;
  link?: string;
  rotation?: string; // e.g. '-rotate-1', 'rotate-2' for collage tilt
}

export interface SkillItem {
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Engineering';
  level: string;
  iconName: string;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  highlights?: string[];
  badge?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
  details: string;
}

export const portfolioData = {
  personal: {
    name: "MOHAMED IRFAN S",
    role: "WEB DEVELOPER",
    tagline: "SPECIALIZING IN REACT.JS, NODE.JS, TAILWIND CSS & FULL-STACK DEVELOPMENT",
    bioIntro: "Hi, I'm Mohamed Irfan S.",
    bioParagraph1: "Web Developer with hands-on experience in designing and developing responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js, Express, and modern databases.",
    bioParagraph2: "Skilled in component-based architecture, API integration, state management with Redux, Prisma ORM, and performance optimization. Dedicated to crafting fluid user interfaces and scalable codebases.",
    bioParagraph3: "Currently working as a Software Developer at JAZ INFOTECH, delivering responsive business interfaces and optimizing frontend workflows.",
    bioShort: "Web Developer with hands-on experience in designing and developing responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js, Express, and modern databases.",
    bioLong: "Web Developer with hands-on experience in designing and developing responsive web applications using React.js, JavaScript, Tailwind CSS, Node.js, Express, and modern databases. Skilled in component-based architecture, API integration, Redux, Prisma, and performance optimization.",
    status: "OPEN FOR OPPORTUNITIES & FREELANCE",
    location: "MELAPALAYAM, TIRUNELVELI // INDIA",
    phone: "+91 6382682141",
    email: "mohamedirfans477@gmail.com",
    address: "55, Seikul Akbar Street, Melapalayam, Tirunelveli",
    year: "2026",
    issue: "VOL. 26 / ISSUE 01",
    edition: "PORTFOLIO EDITION 2026",
    portraitUrl: "/images/mockup/portrait_cutout_polished.png",
    standingUrl: "/images/mockup/sundar_inner.jpg",
  },

  education: [
    {
      degree: "Master's in Information Technology (M.Sc IT)",
      institution: "Mononmaniam Sundaranar University",
      year: "2023 - 2025",
      details: "Advanced study in modern web application engineering, component-based architectures, and relational database management."
    },
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "Sadakathullah Appa College",
      year: "2020 - 2023",
      details: "Comprehensive undergraduate foundation in computer applications, programming fundamentals, algorithms, and software development."
    }
  ] as EducationItem[],

  experience: [
    {
      period: "12/2025 - Present",
      role: "Software Developer",
      company: "Jaz Infotech",
      location: "Tirunelveli, India",
      description: "Building and shipping production web applications with React.js, Node.js, and Tailwind CSS. Owning frontend features, API integrations, bug fixes, and performance optimization across live client products.",
      highlights: [
        "Delivering production React.js features and reusable UI components",
        "Integrating APIs and resolving frontend/backend UI issues in real time",
        "Optimizing performance and mobile responsiveness with Tailwind CSS"
      ],
      badge: "CURRENT"
    },
    {
      period: "08/2025 - 11/2025",
      role: "Software Developer Intern",
      company: "Jaz Infotech",
      location: "Tirunelveli, India",
      description: "Built responsive React.js business UI using reusable components, fixed real-time frontend and API-related UI bugs, and optimized performance and mobile responsiveness with Tailwind CSS.",
      highlights: [
        "Built responsive React.js business UI using reusable components",
        "Fixed real-time frontend and API-related UI bugs",
        "Optimized performance and mobile responsiveness with Tailwind CSS"
      ],
      badge: "COMPLETED"
    },
    {
      period: "01/2025 - 03/2025",
      role: "Python Development Intern",
      company: "Iconix Software Solution",
      location: "India",
      description: "Developed Python backend logic for business workflows, managed SQL database operations and data validation, and debugged logical and validation errors to improve system accuracy.",
      highlights: [
        "Developed Python backend logic for business workflows",
        "Managed SQL database operations and data validation",
        "Debugged logical and validation errors to improve system accuracy"
      ],
      badge: "COMPLETED"
    }
  ] as ExperienceItem[],

  creativeTools: [
    { name: "HTML5", category: "Frontend", level: "SEMANTIC MARKUP // STRUCTURE", iconName: "Layout" },
    { name: "CSS3", category: "Frontend", level: "LAYOUTS // RESPONSIVE STYLING", iconName: "Palette" },
    { name: "Tailwind CSS", category: "Frontend", level: "RESPONSIVE UI // TOKENS", iconName: "Palette" },
    { name: "JavaScript", category: "Frontend", level: "ES6+ // ASYNC // DOM", iconName: "FileCode" },
    { name: "React.js", category: "Frontend", level: "COMPONENT ARCHITECTURE", iconName: "Code2" },
    { name: "Redux", category: "Frontend", level: "GLOBAL STATE MANAGEMENT", iconName: "Layers" },
    { name: "Node.js", category: "Backend", level: "RUNTIME // SERVER LOGIC", iconName: "Cpu" },
    { name: "Express", category: "Backend", level: "REST APIs // MIDDLEWARE", iconName: "Cpu" },
    { name: "MySQL", category: "Database", level: "RELATIONAL DATABASE", iconName: "Database" },
    { name: "PostgreSQL", category: "Database", level: "RELATIONAL DATABASE", iconName: "Database" },
    { name: "MongoDB", category: "Database", level: "NO SQL // DOCUMENT STORE", iconName: "Database" },
    { name: "Prisma", category: "Database", level: "ORM // TYPE-SAFE QUERIES", iconName: "Database" },
    { name: "GitHub", category: "Tools", level: "GIT // VERSION CONTROL", iconName: "GitBranch" },
  ] as SkillItem[],

  toolkitHighlights: [
    "React.js Web Apps",
    "Tailwind Responsive Design",
    "JavaScript (ES6+)",
    "Node.js & Express APIs",
    "MySQL / PostgreSQL / MongoDB",
    "Prisma ORM",
    "Redux State Architecture",
    "GitHub & Version Control"
  ],

  projects: [
    {
      id: "order4u",
      title: "ORDER4U",
      category: "COMMERCIAL // ORDER MANAGEMENT",
      year: "2026",
      image: "/images/project-order4u.svg",
      description: "End-to-end order management platform for businesses to track inventory, process customer orders, and manage dispatch workflows. Built with responsive React interfaces and real-time status updates for operational clarity.",
      tags: ["React.js", "Order Management", "Inventory", "Dashboard", "Tailwind CSS"],
      role: "Frontend Developer",
      highlight: "Live Order & Dispatch Workflows",
      link: "https://order4u.jazinfo.com/",
      rotation: "-rotate-1"
    },
    {
      id: "clubapp-aeroshuttle",
      title: "CLUBAPP",
      category: "MOBILE // MEMBERSHIP PLATFORM",
      year: "2026",
      image: "/images/project-clubapp.svg",
      description: "Club membership and AeroShuttle booking application with secure login, member access controls, and schedule-driven shuttle reservations. Focused on clean auth flows and mobile-first booking UX.",
      tags: ["React.js", "Auth Portal", "Booking System", "Membership", "Responsive UI"],
      role: "Frontend Developer",
      highlight: "Secure Member Booking Portal",
      link: "https://dev.aeroshuttlebc.com/login",
      rotation: "rotate-1"
    },
    {
      id: "salon-parlour",
      title: "SALON & PARLOUR",
      category: "SERVICE // BOOKING SYSTEM",
      year: "2026",
      image: "/images/project-salon.svg",
      description: "Salon and parlour service portal for browsing treatments, booking appointments, and managing client schedules. Designed for fast mobile booking with clear service hierarchy and conversion-focused UI.",
      tags: ["React.js", "Appointment Booking", "Service Catalog", "Tailwind CSS", "Mobile First"],
      role: "Web & UI Developer",
      highlight: "Online Appointment Booking",
      link: "https://salon.jazinfo.com/",
      rotation: "-rotate-2"
    },
    {
      id: "muthuvel-enterprises",
      title: "MUTHUVEL ENTERPRISES",
      category: "ENTERPRISE // ERP SYSTEM",
      year: "2026",
      image: "/images/project-muthuvel.svg",
      description: "Enterprise ERP platform for Muthuvel Enterprises covering stock, sales, accounts, and operational reporting. Structured module layout with ledger-driven workflows for day-to-day business operations.",
      tags: ["ERP", "React.js", "Business Modules", "Reports", "Operations"],
      role: "Software Developer",
      highlight: "Full ERP Operations Suite",
      link: "https://erp.muthuvelenterprises.com/",
      rotation: "rotate-2"
    },
    {
      id: "afzee-mosquito-nets",
      title: "AFZEE MOSQUITO NETS",
      category: "COMMERCIAL // BUSINESS WEBSITE",
      year: "2025",
      image: "/images/project-afzee.svg",
      description: "Commercial business website developed using React.js and Tailwind CSS. Features an interactive product showcase catalogue, mobile-responsive layout, and direct WhatsApp inquiry integration for rapid customer conversions.",
      tags: ["React.js", "Tailwind CSS", "WhatsApp Inquiry", "Product Showcase", "Responsive UI"],
      role: "Frontend Developer",
      highlight: "Direct WhatsApp Lead Generation",
      link: "https://afzeemosquitonet.in/",
      rotation: "-rotate-1"
    },
    {
      id: "royal-hospital",
      title: "ROYAL HOSPITAL",
      category: "HEALTHCARE // SERVICE WEBSITE",
      year: "2026",
      image: "/images/project-royal.svg",
      description: "Healthcare service portal designed for patients to explore medical specialties, view doctor schedules, and book appointments. Fully optimized for instant mobile loading and clean accessible typography.",
      tags: ["Hospital Portal", "Appointment Booking", "Mobile Optimized", "Fast Loading", "React"],
      role: "Web & UI Developer",
      highlight: "Optimized for Mobile & Fast Loading",
      link: "https://www.royalhospitals.in/",
      rotation: "rotate-1"
    },
    {
      id: "kr-power-manufacturing",
      title: "KR POWER MANUFACTURING",
      category: "INDUSTRIAL // COMPANY WEBSITE",
      year: "2025",
      image: "/images/project-krpower.svg",
      description: "Robust corporate website for an industrial manufacturing enterprise. Showcases heavy-duty products, engineering capabilities, service catalogs, and company background with structured layout.",
      tags: ["Industrial Website", "Product Catalog", "Company Profile", "Responsive Web"],
      role: "Web Developer",
      highlight: "Comprehensive Product Showcase",
      link: "https://www.krpower.in/",
      rotation: "-rotate-2"
    },
    {
      id: "jaz-infotech",
      title: "JAZ INFOTECH",
      category: "OFFICIAL WEBSITE // IT AGENCY",
      year: "2025",
      image: "/images/project-jazinfotech.svg",
      description: "Official agency website built from scratch using React.js and Tailwind CSS. Features sleek modern visual hierarchy, fluid page navigation, component modularity, and optimized performance metrics.",
      tags: ["React.js", "Tailwind CSS", "Modern UI", "Smooth Navigation", "Performance"],
      role: "Software Developer",
      highlight: "Official Agency Platform",
      link: "https://jazinfotech.com/",
      rotation: "rotate-2"
    }
  ] as Project[],

  contact: {
    heading: "LET'S BUILD SOMETHING GREAT.",
    subheading: "HAVE A WEB APPLICATION, BUSINESS WEBSITE, OR DEVELOPER ROLE IN MIND? LET'S CONNECT.",
    email: "mohamedirfans477@gmail.com",
    phone: "+91 6382682141",
    location: "55, Seikul Akbar Street, Melapalayam, Tirunelveli, India",
    socials: [
      { name: "GITHUB", url: "https://github.com/IrfanJaz", handle: "github.com/IrfanJaz" },
      { name: "LINKEDIN", url: "https://www.linkedin.com/in/mohamed-irfan-dev", handle: "linkedin.com/in/mohamed-irfan-dev" },
      { name: "WHATSAPP", url: "https://wa.me/916382682141", handle: "+91 6382682141" },
      { name: "EMAIL", url: "mailto:mohamedirfans477@gmail.com", handle: "mohamedirfans477@gmail.com" },
    ],
    footerText: "DESIGNED & DEVELOPED BY MOHAMED IRFAN S — 2026 EDITION — ALL RIGHTS RESERVED"
  }
};
