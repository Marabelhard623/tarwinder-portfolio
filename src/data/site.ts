export const site = {
  name: 'Tarwinder Singh',
  role: 'Software Engineer | Full Stack',
  tagline:
    'Building scalable systems with Spring Boot, React, and event-driven architecture.',
  location: 'Kolkata, India',
  email: 'tarwinder303@gmail.com',
  phone: '+91 9007421542',
  phoneHref: 'tel:+919007421542',
  links: {
    github: 'https://github.com/RAW85',
    linkedin: 'http://linkedin.com/in/tarwinder-singh-50675b199/',
    // Same Drive file — keep this file & use "Manage versions" so the link never changes
    resume: {
      view: 'https://drive.google.com/file/d/1vEbJ9e3nOPn6LzjBYvtsREAC2tXzgALA/view',
      download:
        'https://drive.google.com/uc?export=download&id=1vEbJ9e3nOPn6LzjBYvtsREAC2tXzgALA',
    },
  },
  /**
   * About portrait — Google Drive image (Anyone with the link → Viewer).
   * Paste the file share link (…/file/d/FILE_ID/view). On load failure, monogram shows.
   * Update via Manage versions on the same file so this URL never needs changing.
   */
  profile: {
    drive: 'https://drive.google.com/file/d/1L0k2dz9U4PlaWVSC2jjEKkAIQOJKjZ2T/view',
    alt: 'Tarwinder Singh',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
  ],
  about: {
    title: 'Full-stack engineer focused on scale, security, and delivery',
    paragraphs: [
      'Software Engineer with 3+ years of full-stack experience building scalable applications using Spring Boot, React, Kafka, and Docker. Led platform enhancements, security upgrades, and system migrations that improved user engagement and reduced operational turnaround time.',
      'Strong in designing REST APIs, event-driven systems, authentication, and performance optimization — and I care about shipping systems teams can maintain under real production pressure.',
      'Currently at Reloy as an SDE, I work across the stack on loyalty-platform features, rewards systems, security hardening, and event-driven infrastructure that makes shipping safer and faster.',
    ],
    traits: [
      'Spring Boot',
      'React.js',
      'Kafka',
      'Docker',
      'REST APIs',
      'Event-driven systems',
      'Authentication',
      'Performance',
    ],
    highlights: [
      { label: 'Experience', value: '3+' },
      { label: 'Engagement lift', value: '20%+' },
      { label: 'Ops turnaround', value: '−60%' },
    ],
    focus:
      'Platform enhancements, security upgrades, event-driven systems, and full-stack product delivery.',
    education:
      'BTech in CSE — Techno Main Salt Lake (MAKAUT), Kolkata · Graduated 2023',
  },
  experience: [
    {
      role: 'Software Development Engineer (SDE)',
      company: 'Reloy',
      period: 'Oct 2023 — Present',
      bullets: [
        'Led end-to-end enhancements on the real estate loyalty platform, including advanced analytics, external integrations (Webengage, Razorpay, LSQ), and a contest module — driving 20%+ higher user engagement and referral conversions.',
        'Spearheaded security and infrastructure upgrades (Spring Security with OTP/JWT, data encryption, rate limiting, Kafka-based payments), improving maintainability and reducing operational turnaround time by ~60%.',
        'Designed and scaled the Rewards system (ledger, delivery, redemption, bulk uploads, payment reconciliation) with event-driven updates and retry mechanisms, improving customer retention and post-sale experience.',
      ],
      concepts: [
        'Event-driven Architecture',
        'Distributed Systems',
        'API Design',
        'Security & Authentication',
        'Performance Optimization',
      ],
    },
    {
      role: 'Software Engineer Intern',
      company: 'Informatica',
      period: 'Jul 2022 — Jul 2023',
      bullets: [
        'Contributed to the cloud platform’s administrator and data integration services, enhancing functionality and resolving performance challenges.',
        'Played a key role in migrating multiple components from JSP to React, improving performance and reducing debugging time by 20%.',
        'Revamped the administrator dashboard with improved charting, interactive popups, and metrics tables — increasing customer satisfaction and data visibility.',
      ],
      concepts: [
        'Frontend Migration',
        'Performance Optimization',
        'Dashboard Development',
        'Component Architecture',
        'Data Visualization',
      ],
    },
  ],
  projects: [
    {
      title: 'FlagForge',
      subtitle: 'Open Source Feature Flag Platform',
      problem:
        'Shipping features behind full deploys is slow and risky. Teams need progressive rollouts, sticky targeting, and a safe way for client apps to evaluate flags without rebuilding for every change.',
      solution:
        'Built an end-to-end feature flag platform: sticky percentage and multivariate evaluation, progressive rollout sagas, dual auth (JWT dashboard + SDK API keys), CQRS with domain events, and a React operator dashboard. Supports in-memory or Redis eval cache and optional Kafka event publishing, with Docker modes from local H2 to full stack.',
      tech: [
        'Java 21',
        'Spring Boot',
        'CQRS',
        'React',
        'Redux Toolkit',
        'Tailwind CSS',
        'TypeScript',
        'Docker',
        'Redis',
        'Kafka',
      ],
      outcome:
        'Demonstrates full-stack product design: evaluation correctness (sticky buckets), dual authentication, event-driven writes, and production-minded deploy modes — not just a UI mock.',
      badge: 'Primary · Open source',
      href: 'https://github.com/RAW85/flagforge',
      linkLabel: 'GitHub',
    },
    {
      title: 'Suberscribe',
      subtitle: 'Subscription-based Article Platform',
      problem:
        'Content products need a clean path from signup to paid access: one-month plans, tiered libraries, and secure unlocks without overbuilding billing infrastructure.',
      solution:
        'Developed a MERN subscription app where users purchase one-month Basic / Standard / Premium plans via Stripe Checkout and unlock matching articles for 30 days with no auto-renew. Higher plans include lower-tier content. JWT auth, plan-gated access control, and a modern React + Tailwind UI for landing, plans, and library.',
      tech: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Node.js',
        'Express',
        'MongoDB',
        'JWT',
        'Stripe',
      ],
      outcome:
        'Demonstrates product-minded full-stack delivery: payments, auth, tiered authorization, and a polished subscription UX end to end.',
      badge: 'Full-stack · MERN',
      href: 'https://github.com/RAW85/Suberscribe',
      linkLabel: 'GitHub',
    },
  ],
  skills: {
    title: 'Tools I ship with',
    groups: [
      {
        label: 'Java & Spring',
        items: [
          'Java',
          'Spring Boot',
          'REST APIs',
          'Spring Security',
          'JWT',
          'JUnit',
          'TestNG',
        ],
      },
      {
        label: 'Frontend',
        items: [
          'React.js',
          'Redux Toolkit',
          'TypeScript',
          'JavaScript',
          'HTML',
          'CSS',
          'Tailwind CSS',
        ],
      },
      {
        label: 'Node & data',
        items: [
          'Node.js',
          'Express.js',
          'MongoDB',
          'SQL',
          'Redis',
          'Kafka',
        ],
      },
      {
        label: 'Tooling & foundations',
        items: [
          'Docker',
          'Git',
          'DSA',
          'System Design',
          'Event-Driven Architecture',
        ],
      },
    ],
  },
} as const
