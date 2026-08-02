export const site = {
  name: 'Tarwinder Singh',
  role: 'Software Engineer | Full Stack',
  tagline:
    'Software developer with 3+ years of full-stack experience — Spring Boot, React, Kafka, and Docker. I build scalable systems, secure APIs, and product features that move engagement and operations metrics.',
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
    drive: 'https://drive.google.com/file/d/1L0k2dz9U4PlaWVSC2jjEKkAIQOJKjZ2T/view', // e.g. 'https://drive.google.com/file/d/YOUR_FILE_ID/view'
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
      'Software Developer with 3+ years of full-stack experience. I’ve led platform enhancements, security upgrades, and system migrations using Spring Boot, React.js, Kafka, and Docker — driving 20%+ higher user engagement and significantly reducing operational turnaround time.',
      'I’m skilled at building scalable applications with REST APIs, JWT authentication, and real-time data processing — and I care about clean architecture that teams can maintain under real production pressure.',
      'Currently at Reloy, I work across the stack on loyalty-platform features, rewards systems, event-driven flows, and infrastructure that makes shipping safer and faster.',
    ],
    traits: [
      'Spring Boot',
      'React.js',
      'Kafka',
      'Docker',
      'System Design',
      'Security & JWT',
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
      role: 'Software Developer (SDE)',
      company: 'Reloy',
      period: 'Oct 2023 — Present',
      bullets: [
        'Led end-to-end enhancements on the real estate loyalty platform — advanced analytics reports, external integrations (Webengage, Razorpay, LSQ), contest module with multi-media support, and TnC/Consent management — driving 20%+ higher user engagement and referral conversions.',
        'Spearheaded security and infrastructure upgrades including Spring Security with OTP/JWT, data encryption, service refactoring with transaction listeners & Spring Events, rate limiting on API gateway, distributed Excel processing, and Kafka-based labour payments — improving maintainability and reducing operational turnaround time by ~60%.',
        'Designed and scaled the Rewards system (ledger, delivery, redemption, bulk uploads, payment reconciliation, and affiliate automation), integrating events, Kafka real-time updates, and retry mechanisms for higher retention and smoother post-sale experiences.',
      ],
      concepts: [
        'Event-driven Architecture',
        'Distributed Systems',
        'Transaction Management',
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
        'Contributed to the cloud platform’s administrator and data integration services as part of the platform team — enhancing functionalities and resolving challenges to improve overall system performance.',
        'Played a vital role in migrating and transforming multiple components from JSP to React, improving performance and reducing debugging time by 20%.',
        'Revamped and maintained the administrator dashboard, led charting enhancements in metering, and built interactive popups and tables for metrics — contributing to a 5% increase in customer satisfaction and better data visibility.',
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
      summary:
        'Open-source feature flag platform with sticky percentage rollouts, SDK API keys, and dual authentication (JWT + API keys). Built with Spring Boot 4 and React, including CQRS, domain events, a real-time evaluation engine, and a React dashboard (Redux Toolkit + Tailwind) for managing flags and progressive rollouts. Docker, Redis caching, and Kafka support for flexible local and production deployments.',
      outcome: 'Open source',
      tags: [
        'Java 21',
        'Spring Boot',
        'CQRS',
        'React',
        'Redux Toolkit',
        'Tailwind',
        'Docker',
        'Redis',
        'Kafka',
      ],
      href: 'https://github.com/RAW85/flagforge',
      linkLabel: 'GitHub',
    },
  ],
  skills: {
    title: 'Tools I ship with',
    groups: [
      {
        label: 'Backend',
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
          'SASS',
        ],
      },
      {
        label: 'Infrastructure & data',
        items: ['Kafka', 'Docker', 'Redis', 'Git', 'SQL'],
      },
      {
        label: 'Foundations',
        items: ['DSA', 'System Design', 'Event-driven Architecture'],
      },
    ],
  },
} as const
