import type { EarlierRole, Fact, Job, Link, Project, Qualification, Role, StackGroup } from './types.ts'
import myslates from '../assets/projects/myslates.png'
import paysadaqa from '../assets/projects/paysadaqa.png'

export const profile = {
  name: 'Al-Ameen Yahya Harande',
  shortName: 'Al-Ameen Yahya',
  initials: 'AY',
  title: 'Senior Software Engineer',
  location: 'Kano, Nigeria',
  availability: 'Open to senior engineering roles',
  summary:
    'I build and run production software end to end: web applications, large-scale data pipelines and the cloud infrastructure underneath them. For 8+ years I have worked across healthcare, logistics, education and enterprise services, owning systems from requirements and architecture through deployment and day-to-day support.',
  email: 'alameenyh321@gmail.com',
  github: 'https://github.com/AlameenYahya',
  linkedin: 'https://www.linkedin.com/in/alameen-yahya-a40365245',
  whatsapp: 'https://wa.me/2348165350095',
}

export const navLinks: Link[] = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
]

export const currentRoles: Role[] = [
  { title: 'Full Stack Software Engineer', org: 'Hayok Medicare' },
  { title: 'Chief Technology Officer', org: 'LoadWise Logistics' },
  { title: 'Senior Software Engineer', org: 'Asataura Technology Services' },
]

export const facts: Fact[] = [
  { value: '8+', label: 'years in software and IT' },
  { value: '700k+', label: 'health-insurance enrollee records processed by pipelines I built' },
  { value: '644+', label: 'healthcare facilities on an automated monthly register' },
  { value: '100+', label: 'Android tablets planned for kiosk-mode deployment' },
]

export const about: string[] = [
  'I care about the whole lifecycle of a system: understanding the problem, designing something that will still make sense a year later, shipping it, and keeping it healthy once real people depend on it.',
  "At **Hayok Medicare** I build the company's healthcare software, including data pipelines that turn 700,000+ enrollee records into monthly registers for 644+ facilities. As **CTO of LoadWise Logistics** I lead technology strategy and run the platform's Azure infrastructure and CI/CD. At **Asataura Technology Services** I build web applications for local and international clients and write the technical proposals and solution architecture behind new products.",
  'I started in IT support and networking, and that background still shapes how I work. I think about deployment, access control, data protection (NDPR) and the people who keep systems running, not just the code. I am currently going deeper into AI engineering: LLM APIs, RAG pipelines and vector databases.',
]

export const experience: Job[] = [
  {
    title: 'Full Stack Software Engineer',
    org: 'Hayok Medicare · Kano',
    period: '2026 – Present',
    highlights: [
      "Develop, deploy and maintain the company's healthcare software, owning features from requirements through production support.",
      'Built **Claimify**, a Python pipeline that generates the automated monthly register for 644+ facilities from 700,000+ health-insurance enrollee records, using streaming reads and writes to handle files of that size.',
      'Develop and maintain the **Digital Finance Hub (DFH)**, covering borrower onboarding, verification and business loans for community pharmacies, and the **ANC** antenatal care applications.',
      'Planned the kiosk-mode deployment of 100+ Samsung Android tablets locked to the KSCHMA portal with Samsung Knox, and supported the ICT WorkHub upgrade.',
    ],
    tags: ['Python', 'React', 'TypeScript', 'Vue / Nuxt', 'openpyxl', 'ReportLab', 'Samsung Knox'],
  },
  {
    title: 'Chief Technology Officer',
    org: 'LoadWise Logistics',
    period: '2025 – Present',
    highlights: [
      'Lead technology strategy, architecture and delivery for the LoadWise logistics platform.',
      'Run the Microsoft Azure infrastructure: the production virtual machine, service-principal–based CI/CD, and secure SSH access for DevOps collaborators.',
      'Platform built on Django REST Framework with real-time updates over WebSockets, and a React web app with map-based tracking.',
      'Own domain, DNS and hosting for loadwise.com.ng.',
    ],
    tags: ['Azure', 'CI/CD', 'Linux', 'Django', 'React', 'Docker'],
  },
  {
    title: 'Senior Software Engineer',
    org: 'Asataura Technology Services (ATS)',
    period: '2024 – Present',
    note: 'Joined as Web Developer & IT Officer',
    highlights: [
      'Build frontend and full stack applications with React, Next.js, Node.js and WordPress for internal and international clients, including MySlates, MySlates360, Melka, ASAT Academy and the SCMC school management system.',
      'Write technical proposals and solution architecture, for example a multi-service marketplace platform for Abuja: Supabase/PostgreSQL, Android and iOS apps, NDPR compliance and phased IP handover.',
      'Support ASAT Digital Academy tech bootcamps, including the Holiday Tech Bootcamp run with MySlates.',
      'Provide systems maintenance, troubleshooting and IT support.',
    ],
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'Supabase', 'WordPress'],
  },
  {
    title: 'IT Officer, Web Developer & COO',
    org: 'Salaam TV Nigeria / iHarande Global Services',
    period: '2020 – 2024',
    highlights: [
      'Oversaw IT infrastructure and web projects; managed operations and supervised media and tech teams.',
      'Delivered WordPress websites and business automation tools for clients across sectors.',
    ],
    tags: ['WordPress', 'IT Operations', 'Team Leadership'],
  },
]

export const earlierRoles: EarlierRole[] = [
  {
    title: 'E-Library & IT Support Officer',
    org: 'STEMLAB (NYSC)',
    period: '2022 – 2023',
    summary: 'Digitised library systems and supported ICT infrastructure.',
  },
  {
    title: 'IT Support, JAMB MIS Unit',
    org: 'Federal College of Education, Kano (SIWES)',
    period: '2017 – 2018',
    summary: 'Handled JAMB online registration and system management; supported MIS functions.',
  },
  {
    title: 'Computer Practical Instructor',
    org: 'Mediwat School of IT',
    period: '2014 – 2015',
    summary: 'Mentored students on software and hardware projects.',
  },
]

export const projects: Project[] = [
  {
    name: 'Claimify',
    meta: 'Healthcare data · Hayok Medicare',
    description:
      'Automated monthly register for 644+ healthcare facilities, generated from 700,000+ enrollee records. Built for files too large to load into memory, with de-duplication and data-quality checks.',
    tags: ['Python', 'openpyxl', 'ReportLab', 'PyMuPDF'],
    art: 'records',
    artLabel: 'Claimify',
  },
  {
    name: 'LoadWise Logistics Platform',
    meta: 'Logistics · CTO',
    description:
      'Logistics platform connecting shippers and carriers. I own the architecture, Azure hosting and CI/CD, and the platform provides real-time load tracking and map-based operations views.',
    tags: ['Azure', 'Django REST', 'WebSockets', 'React'],
    art: 'route',
    artLabel: 'LoadWise',
  },
  {
    name: 'Digital Finance Hub (DFH)',
    meta: 'Health fintech · Hayok Medicare',
    description:
      'Business loans for community pharmacies and patent medicine vendors, with sign-up, identity and business verification (KYC/KYB, licence checks), and an admin portal for loans and revenue.',
    tags: ['React', 'TypeScript', 'REST APIs'],
    art: 'finance',
    artLabel: 'DFH',
  },
  {
    name: 'MySlates',
    meta: 'EdTech · ATS client',
    description:
      'AI-personalised, gamified K-12 learning with student, teacher, parent and school-admin applications. I also worked on the MySlates360 LMS for higher education and training.',
    tags: ['React', 'TypeScript', 'Firebase'],
    href: 'https://myslates.com',
    image: myslates,
    imageAlt: 'MySlates homepage: Empower learning with AI-personalised, gamified education',
  },
  {
    name: 'PaySadaqa',
    meta: 'Fintech · Non-profit',
    description:
      'Digital donation platform for mosques, Ramadan initiatives and Islamic charities, with integrated online payments and a responsive, mobile-first donor experience.',
    tags: ['Payments', 'Web', 'Responsive UI'],
    href: 'https://paysadaqa.ng',
    image: paysadaqa,
    imageAlt: 'PaySadaqa homepage: Empowering masjids through digital donations',
  },
  {
    name: 'Hybrid AI Chatbot',
    meta: 'Open source · Python',
    description:
      'A chatbot engine that routes each query to rules, FAQ similarity matching or an LLM fallback, so answers stay predictable and the LLM is only called when needed.',
    tags: ['Python', 'NLP', 'LLM APIs'],
    href: 'https://github.com/AlameenYahya/AI_chatbot',
    art: 'chat',
    artLabel: 'AI Chatbot',
  },
]

export const stack: StackGroup[] = [
  { title: 'Languages', items: 'JavaScript, TypeScript, Python, SQL, HTML, CSS' },
  { title: 'Frontend', items: 'React, Next.js, Vue.js / Nuxt, Tailwind CSS, WordPress, UI/UX in Figma' },
  { title: 'Backend & Data', items: 'Node.js, Django & DRF, Laravel, PostgreSQL, Supabase, Firebase, REST APIs' },
  {
    title: 'Data Engineering',
    items: 'Python pipelines for 700k+ row files: openpyxl (streaming), python-calamine, PyMuPDF, ReportLab, pypdf, LibreOffice batch conversion',
  },
  {
    title: 'Cloud & DevOps',
    items: 'Microsoft Azure (VMs, service principals for CI/CD), AWS, Docker, Linux administration, SSH access management, Git, DNS & hosting',
  },
  {
    title: 'IT & Infrastructure',
    items: 'LAN/WAN setup, Android fleet & kiosk management (Samsung Knox), Starlink, hardware and software support',
  },
  {
    title: 'Practices',
    items: 'Solution architecture & technical proposals, data quality & de-duplication, NDPR data-protection compliance, team leadership',
  },
  { title: 'Currently Learning', items: 'AI engineering: LLM APIs, RAG pipelines, vector databases' },
  { title: 'Spoken Languages', items: 'English (fluent), Hausa (fluent), Arabic (conversational)' },
]

export const education: Qualification[] = [
  {
    title: 'B.Sc. Computer Science & Information Technology',
    institution: 'Bayero University Kano',
    detail: 'Second Class Honours',
    period: '2015 – 2019',
  },
  {
    title: 'Diploma in Computer Science & IT',
    institution: 'Bayero University Kano (ICE Programme)',
    detail: 'Second Class Honours',
    period: '2013 – 2015',
  },
  {
    title: 'Integrated Professional Diploma in IT',
    institution: 'Mediwat School of Computer Science, Kano',
    detail: 'First Class Honours',
    period: '2012 – 2013',
  },
]

export const certifications: Qualification[] = [
  { title: 'Data Analyst Certificate', institution: '', period: '2026' },
  { title: 'NYSC Discharge Certificate', institution: 'National Youth Service Corps', period: '2023' },
  { title: 'Professional IT Diploma', institution: 'Mediwat School of IT', period: '2013' },
]
