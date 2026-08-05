export const identity = {
  name: 'NURUDDIN SATTAR',
  role: 'SOFTWARE ENGINEER',
  domain: 'FULL-STACK SYSTEMS // MOBILE + WEB',
  tagline: [
    'Mobile and web applications.',
    'Designed to specification.',
    'Built for production.',
  ],
  status: 'AVAILABLE FOR HIRE',
  email: 'nuruddinsattar@gmail.com',
  phone: '+90 551 004 17 36',
  linkedin: 'https://linkedin.com/in/nuruddin-sattar-608118251',
  linkedinLabel: 'linkedin.com/in/nuruddin-sattar-608118251',
  github: 'https://github.com/Xivlon',
  githubLabel: 'github.com/Xivlon',
};

export const summary = [
  'Full-stack software developer with 2 years of experience engineering end‑to‑end software solutions, specializing in React Native, Node.js, and cloud‑native backend architectures.',
  'Maintains system compliance with accessibility regulations.',
  'Delivers in fast environments with limited resources.',
];

export interface SkillGroup {
  id: string;
  label: string;
  items: { name: string; level: string }[];
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'LNG',
    label: 'LANGUAGES',
    items: [
      { name: 'TypeScript', level: 'ADVANCED' },
      { name: 'JavaScript', level: 'ADVANCED' },
      { name: 'HTML', level: 'ADVANCED' },
      { name: 'CSS', level: 'ADVANCED' },
      { name: 'C', level: 'INTERMEDIATE' },
      { name: 'Python', level: 'INTERMEDIATE' },
    ],
  },
  {
    id: 'MOB',
    label: 'MOBILE + WEB',
    items: [
      { name: 'React Native', level: 'ADVANCED' },
      { name: 'React', level: 'ADVANCED' },
      { name: 'WCAG / ADA Compliance', level: 'ADVANCED' },
      { name: 'Map Integration APIs', level: 'OPERATIONAL' },
    ],
  },
  {
    id: 'BCK',
    label: 'BACKEND + DATA',
    items: [
      { name: 'Node.js', level: 'ADVANCED' },
      { name: 'Firebase', level: 'ADVANCED' },
      { name: 'PostgreSQL', level: 'OPERATIONAL' },
      { name: 'REST API Design', level: 'OPERATIONAL' },
    ],
  },
  {
    id: 'OPS',
    label: 'DELIVERY',
    items: [
      { name: 'Systems Architecture', level: 'OPERATIONAL' },
      { name: 'Data Analysis', level: 'OPERATIONAL' },
      { name: 'Project Management', level: 'OPERATIONAL' },
    ],
  },
];

export interface Experience {
  ref: string;
  role: string;
  org: string;
  location: string;
  period: string;
  points: string[];
}

export const experience: Experience[] = [
  {
    ref: 'REC-01',
    role: 'Lead Mobile Application Developer',
    org: 'Hold My Luggage Inc',
    location: 'Miami, FL // Remote',
    period: '2025-08 — PRESENT',
    points: [
      'Designed and deployed Luggster, a luggage delivery application, within 6 months of contract signing. Built with React Native and Node.js.',
      'Engineered dynamic web customer intake forms with integrated interactive mapping APIs, streamlining routing accuracy and reducing risk of delivery cost calculation errors to 0% .',
      'Maintained the backend infrastructure and a central admin platform. Covers driver registration, order fulfillment, and secure data deletion.',
      'Kept the full system compliant with ADA and WCAG accessibility regulations.',
    ],
  },
  {
    ref: 'REC-02',
    role: 'Data Entry Clerk',
    org: 'Room and Course Scheduling Office, The University of Arizona',
    location: 'Tucson, AZ',
    period: '2023-03 — 2023-05',
    points: [
      'Applied data‑validation methods to review and correct conflicting records, improving data accuracy.',
      'Analyzed room capacities and course requirements to optimize space allocation, ensuring efficient use of university resources and minimizing scheduling conflicts.',
    ],
  },
  {
    ref: 'REC-03',
    role: 'Student Researcher',
    org: 'Biosystems Analytics and Technology, The University of Arizona',
    location: 'Tucson, AZ',
    period: '2022-09 — 2022-12',
    points: [
      'Performed bioinformatics research with Excel and web-based tools.',
      'Improved data entry processes. Reduced manual input time. Kept accuracy high in scientific databases.',
    ],
  },
];

export interface Project {
  ref: string;
  name: string;
  type: string;
  period: string;
  stack: string[];
  points: string[];
}

export const projects: Project[] = [
  {
    ref: 'PRJ-01',
    name: 'Luggster',
    type: 'PRODUCTION MOBILE APPLICATION',
    period: '2025 — PRESENT',
    stack: ['React Native', 'Node.js', 'PostgreSQL'],
    points: [
      'Full-stack luggage delivery application. Built from concept to production.',
      'Includes customer web forms, map routing, and cost calculation.',
      'Includes an admin platform for drivers, orders, and secure data deletion.',
    ],
  },
  {
    ref: 'PRJ-02',
    name: 'EnergyTechUp',
    type: 'DOE-SPONSORED CLEAN ENERGY PROGRAM',
    period: '2023-08 — 2024-03',
    stack: ['Research', 'Systems Design', 'Hydrogen Distribution'],
    points: [
      'Reached regional competition in a U.S. Department of Energy program.',
      'Designed a theoretical on-reactor hydrogen distribution system. Worked with a team from UT, Rice, FIU, and MNU.',
      'Verified system feasibility with national laboratories and industry experts.',
    ],
  },
];

export const education = [
  {
    ref: 'EDU-01',
    school: 'Bahcesehir University',
    degree: 'B.Sc. Electrical and Electronics Engineering',
    period: '2025-10 — PRESENT',
    note: 'Coursework: Robotics, AI Systems, Hardware-Software Integration.',
  },
  {
    ref: 'EDU-02',
    school: 'Florida International University',
    degree: 'Undergraduate Coursework, Computer Science (Transferred)',
    period: '— 2025-05',
    note: 'College of Engineering and Computing.',
  },
];

export interface Certification {
  ref: string;
  name: string;
  desc: string;
  issuer: string;
  status: 'COMPLETE' | 'PENDING';
}

export interface Deployment {
  ref: string;
  name: string;
  kind: string;
  link: string;
  thumb?: string; // image path. If empty, a "no signal" frame renders.
  note: string;
}

// Live work samples.
export const deployments: Deployment[] = [
  {
    ref: 'DPL-01',
    name: 'Luggster — Mobile Application',
    kind: 'MOBILE // PRODUCTION',
    link: '',
    thumb: '/images/luggster-app-icon.png',
    note: 'Full-stack luggage delivery application. Built with React Native, Node.js, PostgreSQL.',
  },
  {
    ref: 'DPL-02',
    name: 'Luggster — Customer Order Form',
    kind: 'WEB // LIVE',
    link: 'https://lugg-ster.com/',
    thumb: '/images/OrderFormMap.png',
    note: 'Customer order form. Map routing and delivery cost calculation included.',
  },
  {
    ref: 'DPL-03',
    name: 'Millimera',
    kind: 'WEB // DEMO',
    link: 'https://millimera.nuruddinsattar.workers.dev',
    thumb: '/images/millimera.png',
    note: 'Demo website with multipage navigation and embeded components',
  },
];

export interface ModuleDef {
  id: string;
  code: string;
  label: string;
  title: string;
  subtitle: string;
}

export const modules: ModuleDef[] = [
  { id: 'file', code: 'M.01', label: 'FILE', title: 'PERSONNEL FILE', subtitle: '// PROFESSIONAL SUMMARY' },
  { id: 'skills', code: 'M.02', label: 'SKILLS', title: 'CAPABILITY INDEX', subtitle: '// TECHNICAL SKILLS REGISTER' },
  { id: 'record', code: 'M.03', label: 'RECORD', title: 'SERVICE RECORD', subtitle: '// WORK EXPERIENCE LOG' },
  { id: 'projects', code: 'M.04', label: 'PROJ', title: 'PROJECT MANIFEST', subtitle: '// DEPLOYED + RESEARCH WORK' },
  { id: 'deploy', code: 'M.05', label: 'DEPLOY', title: 'DEPLOYMENT BAY', subtitle: '// LIVE WORK SAMPLES' },
  { id: 'education', code: 'M.06', label: 'EDU', title: 'TRAINING RECORD', subtitle: '// FORMAL EDUCATION' },
  { id: 'certs', code: 'M.07', label: 'CERTS', title: 'CERTIFICATION SYSTEM', subtitle: '// CREDENTIAL REGISTER + TRACKER' },
  { id: 'comm', code: 'M.08', label: 'COMM', title: 'COMM CHANNEL', subtitle: '// OPEN FOR SOFTWARE ENGINEER POSITIONS' },
];

// Completed certifications. Full color on the page.
// Add entries here when a certification is complete.
export const completedCertifications: Certification[] = [];

// Certification tracker. Pending items render greyed out.
export const pendingCertifications: Certification[] = [
  {
    ref: 'CERT-01',
    name: 'AWS Developer',
    desc: 'This learning plan teaches developers and anyone performing application development functions how to build, deploy, and operate cloud-native applications on AWS',
    issuer: 'Amazon Web Services',
    status: 'PENDING',
  },
  {
    ref: 'CERT-02',
    name: 'AWS Security Engineer-Advanced',
    desc: 'comprehensive learning plan covers crucial aspects of cloud security needed to perform a Security Engineer role using the AWS Cloud. The training focuses on 3 primary functions including, proactive planning, active monitoring and responsive action',
    issuer: 'Amazon Web Services',
    status: 'PENDING',
  },
  {
    ref: 'CERT-03',
    name: 'CompTIA CySA+ (Cyber+)',
    desc:'',
    issuer: 'CompTIA',
    status: 'PENDING',
  },
  {
    ref: 'CERT-04',
    name: 'Fundamentals of Deep Learning',
    desc:'',
    issuer: 'NVIDIA Deep Learning Institute',
    status: 'PENDING',
  },
  {
    ref: 'CERT-05',
    name: 'Certified Kubernetes Administrator (CKA)',
    desc:'',
    issuer: 'Cloud Native Computing Foundation',
    status: 'PENDING',
  },
];
