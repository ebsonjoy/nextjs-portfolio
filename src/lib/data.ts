export interface Project {
  id: string;
  title: string;
  category: string;
  categoryType: 'frontend' | 'backend' | 'fullstack' | 'cloud' | 'mobile';
  description: string;
  problem?: string;
  role?: string;
  technicalDecision?: string;
  outcome?: string;
  solution?: string;
  features: string[];
  tags: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  videoDemoUrl?: string;
  architectureHighlight?: string;
  isCaseStudy?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  type?: string;
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
  internationalExp: 'Dubai, UAE experience',
  website: 'https://www.ebson.online',
  github: 'https://github.com/ebsonjoy',
  linkedin: 'https://linkedin.com/in/ebson-joy',
  resumeUrl: '/Ebson_Joy.pdf',
  headline: 'Full-Stack Developer building scalable web applications, real-time backends, and cloud-deployed client portals.',
  summary:
    "I'm a Full-Stack Developer specializing in TypeScript, Next.js, Node.js/NestJS, and cloud infrastructure. Over the past 2+ years, I've built and delivered production software for UAE enterprises and international clients — including real-time communication backends, role-based visa portals, and secure payment workflows. I care deeply about clean modular architecture, API performance, and building interfaces that users genuinely enjoy using.",
};

export const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '6+', label: 'Production & Core Projects' },
  { value: '3+', label: 'Production Deployments' },
];

export const experiences: Experience[] = [
  {
    id: 'atr-group',
    role: 'Web Developer',
    company: 'ATR GROUP',
    period: 'Jan 2026 – Present',
    location: 'Remote / India',
    current: true,
    description:
      'Developing production full-stack web applications, custom internal tools, and client platforms with payment integrations.',
    highlights: [
      'Architected full-stack features using Next.js, React, Node.js, and TypeScript with focus on maintainability',
      'Built and integrated REST APIs, authentication flows, admin dashboards, and database schemas',
      'Integrated Stripe payment gateways, automated webhook event handlers, and transaction reconciliations',
      'Managed cloud deployments and monitoring on Vercel and AWS infrastructure',
    ],
    skills: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Stripe', 'AWS', 'Vercel', 'REST APIs'],
  },
  // {
  //   id: 'al-qoba',
  //   role: 'Web Developer',
  //   company: 'Al Qoba Al Zahabia Technology',
  //   period: 'Aug 2025 – Dec 2025',
  //   location: 'Dubai, UAE',
  //   current: false,
  //   description:
  //     'Engineered client management portals and production web platforms tailored for UAE enterprise operations.',
  //   highlights: [
  //     'Delivered full-stack applications using Next.js, NestJS, TypeScript, and React with responsive UI',
  //     'Implemented Supabase PostgreSQL schemas with Row-Level Security (RLS) and multi-tenant RBAC',
  //     'Engineered Stripe payment checkouts, webhook triggers, and automated document validation states',
  //     'Deployed production services across AWS and Vercel, proactively resolving performance bottlenecks',
  //   ],
  //   skills: ['Next.js', 'NestJS', 'TypeScript', 'React', 'Supabase', 'Stripe', 'PostgreSQL', 'AWS'],
  // },
  {
    id: 'brototype',
    role: 'Full-Stack Web Development',
    company: 'Brototype',
    period: 'Dec 2023 – Jul 2025',
    location: 'Kerala, India',
    current: false,
    description:
      'Completed intensive engineering program building hands-on production-grade distributed architectures and real-time platforms.',
    highlights: [
      'Constructed complete full-stack web applications using Node.js, Express.js, NestJS, React, and MongoDB',
      'Implemented robust authentication schemes (JWT, OAuth 2.0, refresh token rotations, and RBAC)',
      'Built low-latency real-time communication modules using Socket.IO, WebSockets, and WebRTC',
      'Configured production Linux deployments on AWS EC2 with Nginx reverse proxies and PM2 process management',
    ],
    skills: ['Node.js', 'Express.js', 'NestJS', 'React', 'MongoDB', 'Socket.IO', 'WebRTC', 'AWS'],
  },
];

export const projects: Project[] = [
  {
    id: 'mint-talk',
    title: 'Mint Talk',
    category: 'Real-Time SaaS',
    categoryType: 'backend',
    isCaseStudy: true,
    description:
      'Real-time communication and creator monetization platform featuring low-latency audio/video calling, live chat rooms, and a virtual points economy.',
    problem:
      'Users needed dependable, low-latency audio/video streaming paired with interactive live tipping and host monetization without stream interruptions during network spikes.',
    role: 'Full-Stack Developer & Backend Lead',
    technicalDecision:
      'Decoupled media transmission from app business logic by utilizing Agora RTC SDK for ultra-low latency streams, Redis pub/sub for instant room presence, and webhook-driven transaction reconciliation for virtual wallet balances.',
    outcome:
      'Achieved stable sub-200ms audio/video streams, zero-disruption live chat rooms, and secure multi-currency transaction processing with Stripe and Razorpay.',
    architectureHighlight:
      'Node.js & Express REST API with Agora RTC SDK for media routing, Redis pub/sub for real-time presence, and webhook-driven transaction reconciliation.',
    features: [
      'Sub-200ms real-time audio and video calling powered by Agora RTC SDK',
      'Instant messaging and interactive room chat using Socket.IO',
      'Virtual wallet and points system for tipping and creator payouts',
      'Multi-gateway payment support via Razorpay and Stripe with webhook listeners',
      'Comprehensive admin portal for monitoring user activity, stream health, and transactions',
    ],
    tags: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Socket.IO',
      'Agora RTC',
      'Redis',
      'Razorpay',
      'Stripe',
      'React',
    ],
    imageUrl: '/images/mint-talk.jpg',
     liveUrl: 'https://www.minttalk.app/',
    githubUrl: 'https://github.com/ebsonjoy',
  },
  {
    id: 'atr-dubai-visa',
    title: 'ATR Dubai Visa Platform',
    category: 'Enterprise Platform',
    categoryType: 'fullstack',
    isCaseStudy: true,
    description:
      'Production visa application portal for UAE travel applicants, featuring automated intake workflows, document review pipelines, and secure payment processing.',
    problem:
      'Manual visa application handling caused operational bottlenecks, lost document attachments, and high customer support volume due to lack of applicant tracking visibility.',
    role: 'Full-Stack Developer (ATR Group)',
    technicalDecision:
      'Built a Next.js App Router application backed by Supabase PostgreSQL with strict Row-Level Security (RLS) policies and Role-Based Access Control (RBAC) to isolate applicant data, paired with automated Stripe webhook listeners for instant lifecycle status updates.',
    outcome:
      'Eliminated manual spreadsheet tracking, cut document review turnaround time, and enabled applicants to track application status self-service in real time.',
    architectureHighlight:
      'Next.js App Router with Supabase PostgreSQL Row-Level Security (RLS), RBAC permissions, and automated Stripe webhooks for instant application status transitions.',
    features: [
      'Applicant intake portal with document uploads and client-side format validation',
      'Multi-tiered Role-Based Access Control (RBAC) for applicants, visa officers, and administrators',
      'Stripe payment gateway integration with real-time webhook status synchronization',
      'Live application status tracking timeline and automated email alerts',
      'Admin operations dashboard with search, filtering, and revenue reporting',
    ],
    tags: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Stripe', 'AWS', 'Tailwind CSS'],
    imageUrl: '/images/dubai-visa.jpg',
    githubUrl: 'https://github.com/ebsonjoy',
  },
  {
    id: 'imperial-avo',
    title: 'Imperial Avo',
    category: 'E-Commerce Platform',
    categoryType: 'fullstack',
    isCaseStudy: true,
    description:
      'Modern direct-to-consumer e-commerce storefront featuring instant search, Stripe checkout sessions, and automated SMS dispatch updates.',
    problem:
      'The client needed a custom digital storefront capable of handling surge sales without stock over-allocation, plus automated SMS dispatch notifications to reduce support tickets.',
    role: 'Full-Stack Developer',
    technicalDecision:
      'Constructed a Next.js store powered by Supabase PostgreSQL transactional inventory locking during checkout, integrated with Stripe Checkout sessions and Twilio SMS event webhooks.',
    outcome:
      'Zero inventory overselling during product drops and automated 100% order confirmation and shipping dispatch notifications sent directly to buyers via SMS.',
    architectureHighlight:
      'Next.js storefront with Supabase PostgreSQL inventory locks, Stripe payment intents, and Twilio event hooks for dispatch updates.',
    features: [
      'Product catalog with real-time search, category filtering, and accurate stock counts',
      'Optimized shopping cart and seamless Stripe checkout integration',
      'Automated SMS order dispatch and tracking notifications via Twilio API',
      'Admin management portal for order fulfillment, inventory adjustments, and sales summaries',
    ],
    tags: ['Next.js', 'TypeScript', 'Node.js', 'Supabase', 'Stripe', 'Twilio', 'Tailwind CSS'],
    imageUrl: '/images/imperial-avo.jpg',
    githubUrl: 'https://github.com/ebsonjoy',
  },
  {
id: 'alrukan',
title: 'Al Rukan',
category: 'Corporate & Product Platform',
categoryType: 'fullstack',
isCaseStudy: true,

description:
'Professional building materials website with product catalogs, service information, and customer enquiry flows.',

problem:
'The client needed a modern digital platform to showcase products and generate customer enquiries.',

role: 'Full-Stack Developer',

technicalDecision:
'Built a responsive Next.js platform with reusable components, structured product pages, and SEO-optimized content.',

outcome:
'Delivered a modern, mobile-friendly platform for product discovery and customer enquiries.',

architectureHighlight:
'Next.js-based responsive architecture with reusable UI components and optimized product content.',

features: [
'Product catalog and detailed product pages',
'Service and company information',
'Customer enquiry and contact flows',
'Responsive and SEO-friendly design'
],

tags: ['WordPress', 'Elementor', 'PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
imageUrl: '/images/alrukan.png',
liveUrl: 'https://alrukan.com/',
},
  {
    id: 'aadhaar-ocr',
    title: 'Aadhaar OCR Verification System',
    category: 'OCR & Document Processing',
    categoryType: 'frontend',
    isCaseStudy: false,
    description:
      'Automated document processing platform that extracts, cleans, and validates structured identity information from identity documents.',
    features: [
      'Front and back document upload with instantaneous client-side preview',
      'OCR processing pipeline with structured regex field extraction for Name, DOB, Gender, and ID number',
      'Confidence score verification and validation checks',
      'Clean data presentation with one-click copy-to-clipboard functionality',
    ],
    tags: ['Next.js', 'React', 'Node.js', 'Express.js', 'MongoDB', 'OCR Pipeline', 'Tailwind CSS'],
    imageUrl: '/images/Aadhaar OCR System.jpg',
    githubUrl: 'https://github.com/ebsonjoy/aadhaar-ocr-frontend.git',
  },
  {
    id: 'coupids-court',
    title: 'Coupids Court',
    category: 'Real-Time Social Platform',
    categoryType: 'backend',
    isCaseStudy: false,
    description:
      'Social networking platform featuring distance-based geospatial matchmaking queries, real-time messaging, and peer-to-peer video calling.',
    features: [
      'Geospatial distance-based matchmaking queries using MongoDB 2dsphere indexing',
      'Peer-to-peer WebRTC video and audio calling with custom signaling',
      'Real-time messaging with live delivery indicators via Socket.IO',
      'Secure authentication with JWT, bcrypt password hashing, and token refresh',
    ],
    tags: ['Node.js', 'Express.js', 'TypeScript', 'WebRTC', 'Socket.IO', 'MongoDB', 'React'],
    imageUrl: '/images/dating_web.png',
    githubUrl: 'https://github.com/ebsonjoy/Coupids_Court',
  },
  {
    id: 'read-realm',
    title: 'ReadRealm',
    category: 'Content Publishing Platform',
    categoryType: 'frontend',
    isCaseStudy: false,
    description:
      'Personalized article publishing platform with category-based content aggregation, reader bookmarks, and creator publishing workflows.',
    features: [
      'Personalized dynamic feed powered by MongoDB aggregation pipelines',
      'Full CRUD publishing tools with markdown authoring and image uploads',
      'Article bookmarking, likes, comments, and engagement tracking',
      'Client state synchronization with Redux Toolkit',
    ],
    tags: ['React', 'Redux Toolkit', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
    imageUrl: '/images/article_feeds.jpg',
    githubUrl: 'https://github.com/ebsonjoy/ReadRealm-.git',
  },
];

export const technicalStack = {
  frontend: {
    title: 'Frontend & UI',
    tag: 'Client-Side',
    skills: ['Next.js', 'React', 'TypeScript', 'JavaScript (ES6+)', 'Tailwind CSS', 'Redux Toolkit', 'HTML5 / CSS3'],
  },
  backend: {
    title: 'Backend & Real-Time',
    tag: 'Server & APIs',
    skills: ['Node.js', 'NestJS', 'Express.js', 'RESTful APIs', 'Socket.IO', 'WebRTC', 'JWT & OAuth'],
  },
  databaseCloud: {
    title: 'Database & Cloud',
    tag: 'Data & Infra',
    skills: ['Supabase', 'PostgreSQL', 'MongoDB', 'Redis', 'AWS (EC2/S3)', 'Docker', 'Vercel'],
  },
  paymentsIntegrations: {
    title: 'Integrations & Tools',
    tag: 'DevOps & Services',
    skills: ['Stripe', 'Razorpay', 'Twilio API', 'Agora RTC', 'Git & GitHub', 'Postman', 'Nginx & PM2'],
  },
};

export const engineeringPrinciples = [
  {
    number: '01',
    title: 'Clean Modular Architecture',
    description:
      'Maintainable codebases, strict TypeScript interfaces, reusable UI components, and decoupled backend services that scale predictably.',
  },
  {
    number: '02',
    title: 'Performance & Low Latency',
    description:
      'Optimized database queries, smart caching layers, low-latency real-time protocols (Socket.IO/WebRTC), and lightweight client bundles.',
  },
  {
    number: '03',
    title: 'Production Resilience',
    description:
      'Secure authentication, transactional payment webhooks, defensive error handling, and robust cloud deployments on AWS and Vercel.',
  },
];

export const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Kannur University',
    period: '2019 – 2023',
    location: 'Kannur, India',
  },
  {
    degree: 'Full-Stack Web Development',
    institution: 'Brototype',
    period: 'Dec 2023 – Jul 2025',
    location: 'Kerala, India',
  },
];