export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
  videoDemoUrl?: string;
  architectureHighlight?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string;
  highlights: string[];
  skills: string[];
  current?: boolean;
}

export const personalInfo = {
  name: 'Ebson Joy',
  role: 'Full-Stack Developer',
  email: 'ebsonjoy721@gmail.com',
  phone: '+91 9747277851',
  location: 'Kerala, India',
  internationalExp: 'Dubai, UAE Experience',
  website: 'https://www.ebson.online',
  github: 'https://github.com/ebsonjoy',
  linkedin: 'https://linkedin.com/in/ebson-joy',
  resumeUrl: '/Ebson_Joy.pdf',
  summary:
    'Full-Stack Developer with 2+ years of experience building scalable, secure, high-performance web applications. Proficient in Next.js, React, Node.js, NestJS, and Supabase, with focus on clean architecture, REST API design, authentication and payment integration, cloud deployment, and real-time features.',
  shortBio:
    'Full-stack engineer specialized in crafting high-performance digital architectures with Next.js, Node.js, NestJS, and Supabase. Experienced in UAE enterprise solutions, real-time communication systems, and scalable payment workflows.',
};

export const experiences: Experience[] = [
  {
    id: 'atr-group',
    role: 'Web Developer',
    company: 'ATR GROUP',
    period: 'Jan 2026 - Present',
    location: 'Remote / India',
    type: 'Full-time',
    current: true,
    description:
      'Leading full-stack development of enterprise web applications and customer-facing digital portals using Next.js and Node.js.',
    highlights: [
      'Architected scalable web applications using Next.js, React.js, Node.js, and TypeScript',
      'Built high-performance REST APIs, authentication pipelines, analytical dashboards, and database integrations',
      'Integrated Stripe and third-party payment workflows and webhook automation',
      'Orchestrated cloud deployments and continuous delivery pipelines on Vercel and AWS',
    ],
    skills: ['Next.js', 'React.js', 'Node.js', 'TypeScript', 'Stripe', 'AWS', 'Vercel', 'REST APIs'],
  },
  {
    id: 'al-qoba',
    role: 'Web Developer',
    company: 'Al Qoba Al Zahabia Technology',
    period: 'Aug 2025 - Dec 2025',
    location: 'Dubai, UAE',
    type: 'Full-time',
    current: false,
    description:
      'Developed high-availability production applications and SaaS portals for clients in the UAE market.',
    highlights: [
      'Developed production applications using Next.js, NestJS, TypeScript, and React.js',
      'Engineered normalized database schemas, secure REST APIs, and granular Role-Based Access Control (RBAC)',
      'Integrated Supabase and Stripe including end-to-end payment workflows, webhooks, and subscription triggers',
      'Deployed applications using Vercel and AWS, proactively monitoring and resolving production issues',
    ],
    skills: ['Next.js', 'NestJS', 'TypeScript', 'React.js', 'Supabase', 'Stripe', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'brototype',
    role: 'Full-Stack Web Development',
    company: 'Brototype (Training & Projects)',
    period: 'Dec 2023 - Jul 2025',
    location: 'Kerala, India',
    type: 'Intensive Training',
    current: false,
    description:
      'Completed comprehensive full-stack software development training with intensive hands-on production project architecture.',
    highlights: [
      'Engineered end-to-end projects with Node.js, Express.js, NestJS, React.js, and MongoDB',
      'Built robust REST APIs with JWT, OAuth 2.0, and Role-Based Access Control (RBAC)',
      'Developed low-latency real-time communication features using Socket.IO and WebRTC',
      'Deployed production projects on AWS EC2 with Nginx reverse proxy and PM2 process management',
    ],
    skills: ['Node.js', 'Express.js', 'NestJS', 'React.js', 'MongoDB', 'WebSockets', 'WebRTC', 'AWS', 'Docker'],
  },
];

export const projects: Project[] = [
  {
    id: 'mint-talk',
    title: 'Mint Talk',
    category: 'Real-Time & SaaS',
    description:
      'A high-performance real-time communication and monetization platform featuring audio/video calling, live interactive chat, wallet/points economy, and a comprehensive admin management dashboard.',
    architectureHighlight:
      'Event-driven Node.js & Socket.IO backend with Agora RTC for ultra-low latency audio/video streams, Redis pub/sub caching, and dual-gateway payment reconciliation.',
    features: [
      'Real-time audio & video calling powered by Agora RTC SDK',
      'Low-latency interactive chat and presence tracking with Socket.IO',
      'Virtual wallet and points monetization mechanism for host tipping & services',
      'Dual payment integration with Stripe and Razorpay',
      'Complete admin dashboard for monitoring users, hosts, call quality, and financial transactions',
    ],
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Redis',
      'Socket.IO',
      'Agora RTC',
      'Stripe',
      'Razorpay',
      'React.js',
      'Tailwind CSS',
    ],
    imageUrl: '/images/mint-talk.jpg',
    githubUrl: 'https://github.com/ebsonjoy',
    liveUrl: 'https://www.ebson.online',
  },
  {
    id: 'atr-dubai-visa',
    title: 'ATR Dubai Visa Platform',
    category: 'Full Stack Enterprise',
    description:
      'A production-ready visa application and management platform engineered for a UAE client with multi-tier staff roles, live applicant pipelines, document verification, and automated payments.',
    architectureHighlight:
      'Next.js App Router with Supabase PostgreSQL, Row-Level Security (RLS), RBAC permissions, and automated Stripe webhooks for instant status transitions.',
    features: [
      'Automated visa applicant intake and document verification pipeline',
      'Staff Role-Based Access Control (RBAC) for agents, reviewers, and admins',
      'Seamless Stripe payment workflows with real-time webhook handlers',
      'Interactive application tracking system with automated applicant email notifications',
      'Executive analytics on application volumes, approvals, and transaction logs',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Vercel'],
    imageUrl: '/images/dubai-visa.jpg',
    githubUrl: 'https://github.com/ebsonjoy',
    liveUrl: 'https://www.ebson.online',
  },
  {
    id: 'imperial-avo',
    title: 'Imperial Avo',
    category: 'E-Commerce',
    description:
      'A bespoke e-commerce platform delivering high-speed product discovery, seamless checkout, automated SMS order updates via Twilio, and centralized inventory management.',
    architectureHighlight:
      'Next.js frontend with Supabase database, Stripe checkout integration, and Twilio event triggers for real-time dispatch and delivery updates.',
    features: [
      'Catalog management with instant search, filtering, and stock synchronization',
      'Frictionless cart, checkout, and secure Stripe payment processing',
      'Automated SMS order updates and tracking notifications via Twilio API',
      'Administrative fulfillment dashboard for orders, sales analytics, and catalog updates',
      'Fully responsive, mobile-first luxury e-commerce interface',
    ],
    tags: ['Next.js', 'Node.js', 'Supabase', 'Stripe', 'Twilio', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/images/imperial-avo.jpg',
    githubUrl: 'https://github.com/ebsonjoy',
    liveUrl: 'https://www.ebson.online',
  },
  {
    id: 'aadhaar-ocr',
    title: 'Aadhaar OCR System',
    category: 'OCR & AI',
    description:
      'An automated OCR document processing application built with the MERN stack that accurately extracts, validates, and displays user identity details from Aadhaar card images.',
    architectureHighlight:
      'Computer vision text extraction pipeline integrated with Express.js REST API and reactive client-side preview in Next.js/React.',
    features: [
      'Front and back document upload with instant browser preview',
      'Automated OCR processing pipeline with structured regex data extraction',
      'Extraction of Name, DOB, Gender, and Aadhaar identification numbers',
      'Clean data presentation layout with copy-to-clipboard and export tools',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'OCR', 'Tailwind CSS', 'Vite'],
    imageUrl: '/images/Aadhaar OCR System.jpg',
    githubUrl: 'https://github.com/ebsonjoy/aadhaar-ocr-frontend.git',
    liveUrl: 'https://www.ebson.online',
  },
  {
    id: 'coupids-court',
    title: 'Coupids Court',
    category: 'Real-Time',
    description:
      'A feature-rich dating and networking platform with distance-based matchmaking, real-time messaging, WebRTC video calling, and premium monetization.',
    architectureHighlight:
      'Clean Repository Pattern backend in TypeScript & Node.js, MongoDB geospatial indexing for distance queries, and WebRTC peer negotiation.',
    features: [
      'Geospatial distance-based matchmaking algorithm',
      'Direct real-time chat and WebRTC audio/video calling',
      'Premium subscription plans and Razorpay payment integration',
      'Secure JWT authentication, bcrypt password hashing, and profile verification',
    ],
    tags: ['Node.js', 'Express.js', 'TypeScript', 'MongoDB', 'React', 'WebRTC', 'Socket.IO', 'Tailwind CSS'],
    imageUrl: '/images/dating_web.png',
    githubUrl: 'https://github.com/ebsonjoy/Coupids_Court',
  },
  {
    id: 'read-realm',
    title: 'ReadRealm Article Feeds',
    category: 'Full Stack',
    description:
      'A personalized content publishing platform where readers subscribe to custom categories (tech, science, politics) and creators publish rich articles.',
    architectureHighlight:
      'Full REST API architecture with MongoDB aggregation for customized feed rankings and Redux Toolkit state synchronization.',
    features: [
      'Personalized dynamic feed based on selected topic preferences',
      'Full CRUD publishing tools with markdown and image hosting support',
      'Interactive like, dislike, bookmark, and content blocking controls',
      'User authentication with email and phone verification',
    ],
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Vite'],
    imageUrl: '/images/article_feeds.jpg',
    githubUrl: 'https://github.com/ebsonjoy/ReadRealm-.git',
  },
];

export const skillCategories = [
  {
    title: 'Languages & Frontend',
    description: 'Modern, reactive client-side technologies & typed systems',
    skills: [
      { name: 'TypeScript', level: 92 },
      { name: 'JavaScript', level: 95 },
      { name: 'Next.js', level: 92 },
      { name: 'React.js', level: 94 },
      { name: 'Tailwind CSS', level: 94 },
      { name: 'Redux Toolkit', level: 86 },
      { name: 'HTML5 / CSS3', level: 96 },
      { name: 'Framer Motion', level: 84 },
    ],
  },
  {
    title: 'Backend & Architecture',
    description: 'Scalable server-side frameworks, microservices & APIs',
    skills: [
      { name: 'Node.js', level: 92 },
      { name: 'NestJS', level: 86 },
      { name: 'Express.js', level: 92 },
      { name: 'RESTful API Design', level: 96 },
      { name: 'Socket.IO', level: 90 },
      { name: 'WebSockets', level: 88 },
      { name: 'WebRTC', level: 82 },
      { name: 'Clean Architecture', level: 90 },
    ],
  },
  {
    title: 'Databases & Cloud',
    description: 'Data persistence, cloud infrastructure & containerization',
    skills: [
      { name: 'MongoDB', level: 90 },
      { name: 'PostgreSQL', level: 86 },
      { name: 'Supabase', level: 90 },
      { name: 'SQL', level: 86 },
      { name: 'AWS (S3 / EC2)', level: 80 },
      { name: 'Docker', level: 80 },
      { name: 'Vercel', level: 92 },
      { name: 'Linux / PM2 / Nginx', level: 84 },
    ],
  },
  {
    title: 'Security, Payments & Tools',
    description: 'Authentication, payment gateways, RTC & developer tooling',
    skills: [
      { name: 'JWT & OAuth', level: 92 },
      { name: 'RBAC Access Control', level: 92 },
      { name: 'Stripe Payments & Webhooks', level: 92 },
      { name: 'Razorpay Integration', level: 90 },
      { name: 'Agora RTC SDK', level: 84 },
      { name: 'Twilio API', level: 84 },
      { name: 'Git & GitHub', level: 94 },
      { name: 'Postman & Testing', level: 90 },
    ],
  },
];

// Backwards-compatible skills object for existing imports
export const skills = {
  frontend: [
    { name: 'Next.js', level: 92 },
    { name: 'React', level: 94 },
    { name: 'TypeScript', level: 92 },
    { name: 'JavaScript', level: 95 },
    { name: 'Tailwind CSS', level: 94 },
    { name: 'Redux Toolkit', level: 86 },
    { name: 'HTML', level: 96 },
    { name: 'CSS', level: 90 },
    { name: 'Framer Motion', level: 84 },
  ],
  backend: [
    { name: 'Node.js', level: 92 },
    { name: 'NestJS', level: 86 },
    { name: 'Express', level: 92 },
    { name: 'REST API', level: 96 },
    { name: 'MongoDB', level: 90 },
    { name: 'PostgreSQL', level: 86 },
    { name: 'Supabase', level: 90 },
    { name: 'SQL', level: 86 },
    { name: 'Stripe', level: 92 },
    { name: 'Razorpay', level: 90 },
    { name: 'JWT', level: 92 },
    { name: 'Socket.io', level: 90 },
    { name: 'WebSockets', level: 88 },
  ],
  tools: [
    { name: 'AWS', level: 80 },
    { name: 'Docker', level: 80 },
    { name: 'Git', level: 94 },
    { name: 'Vercel', level: 92 },
    { name: 'Postman', level: 90 },
    { name: 'VS Code', level: 95 },
  ],
};

export const education = {
  degree: 'Bachelor of Science, Computer Science',
  institution: 'Kannur University',
  period: 'Jan 2019 - Jan 2023',
  location: 'Kannur, India',
  description:
    'Studied core computer science principles including algorithms, data structures, relational database management, operating systems, and object-oriented software engineering.',
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '10+', label: 'Full-Stack Projects' },
  { value: '3+', label: 'Production Deployments' },
  { value: '100%', label: 'Delivery & Reliability' },
];

export const achievements = [
  'Architected enterprise-grade UAE Visa Application platform with granular RBAC and Stripe webhooks.',
  'Engineered low-latency real-time audio/video communication platform with Agora RTC and Socket.IO.',
  'Built robust RESTful architectures with NestJS, Node.js, Express, and Supabase RLS policies.',
  'Integrated multi-gateway payment processing (Stripe & Razorpay) with resilient webhook error handling.',
  'Deployed and optimized scalable production applications across Vercel and AWS environments.',
];