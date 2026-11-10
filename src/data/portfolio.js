/**
 * ─────────────────────────────────────────────────────────────
 *  PORTFOLIO CONTENT — edit this file to update the website.
 *  Anything left as an empty string ('') is treated as "not yet
 *  provided" and shown as a quiet placeholder, never a broken link.
 * ─────────────────────────────────────────────────────────────
 */

const A = (p) => `/assets/${p}`;

export const profile = {
  name: 'Alleshetti Asmitha',
  firstName: 'Asmitha',
  initials: 'AA',
  headline: ['Information Technology Student', 'Aspiring Software Developer', 'Technology Enthusiast'],
  intro:
    'An enthusiastic Information Technology student passionate about software development, emerging technologies, innovation and problem-solving. I enjoy transforming ideas into practical solutions, participating in technical events and taking leadership responsibilities that create meaningful experiences.',
  college: 'MVSR Engineering College, Hyderabad',
  department: 'Information Technology',
  location: 'Hyderabad, Telangana, India',
  portrait: A('profile/portrait-garden.jpg'),
  portraitAlt: 'Portrait of Alleshetti Asmitha',
  secondaryPortrait: A('profile/portrait-iei-entrance.jpg'),
  // Point this at a PDF (e.g. '/assets/resume/Alleshetti_Asmitha_Resume.pdf') once available.
  resumeUrl: '/resume.html',
};

/** Contact & social: fill these in to activate the links everywhere on the site. */
export const contact = {
  email: '', // e.g. 'name@example.com'
  linkedin: '', // e.g. 'https://www.linkedin.com/in/your-handle'
  github: '', // e.g. 'https://github.com/your-handle'
};

export const about = {
  bio:
    'I am an Information Technology engineering student who believes in continuous learning, practical innovation and personal growth. My interests include programming, frontend development, emerging technologies, technical presentations and collaborative problem-solving. Alongside academics, I actively participate in technical events, community initiatives and leadership activities.',
  interests: ['Programming', 'Frontend development', 'Emerging technologies', 'Technical presentations', 'Collaborative problem-solving'],
  family: [
    { relation: 'Father', name: 'Alleshetti Kiran Kumar' },
    { relation: 'Mother', name: 'Alleshetti Swathi' },
    { relation: 'Brother', name: 'Alleshetti Yashwanth' },
  ],
};

/** Education: leave a field as '' until the real value is known. Never guess scores. */
export const education = [
  {
    level: 'Undergraduate',
    title: 'B.Tech, Information Technology',
    institution: 'MVSR Engineering College, Hyderabad',
    note: 'UGC Autonomous · Affiliated to Osmania University',
    period: '', // e.g. '2024 – 2028'
    score: '', // e.g. '8.9 / 10'
    scoreLabel: 'CGPA',
    current: true,
  },
  {
    level: 'Intermediate',
    title: 'Intermediate Education',
    institution: '', // college name
    note: '',
    period: '',
    score: '',
    scoreLabel: 'Score',
  },
  {
    level: 'School',
    title: 'Secondary School Education',
    institution: '', // school name
    note: '',
    period: '',
    score: '',
    scoreLabel: 'Score',
  },
];

/**
 * Skills: `level` is optional. Use one of 'Learning', 'Intermediate', 'Proficient'.
 * Leave it as null to show the skill without a level indicator.
 */
export const skillLevels = ['Learning', 'Intermediate', 'Proficient'];

export const skills = [
  {
    group: 'Programming Languages',
    icon: 'Code2',
    items: [
      { name: 'Python', level: null },
      { name: 'C', level: null },
      { name: 'Java', level: null },
      { name: 'JavaScript', level: null },
    ],
  },
  {
    group: 'Frontend Technologies',
    icon: 'LayoutTemplate',
    items: [
      { name: 'HTML5', level: null },
      { name: 'CSS3', level: null },
      { name: 'React.js', level: null },
      { name: 'AngularJS', level: null },
    ],
  },
  {
    group: 'Professional Skills',
    icon: 'Users',
    items: [
      { name: 'Problem Solving', level: null },
      { name: 'Team Collaboration', level: null },
      { name: 'Communication', level: null },
      { name: 'Technical Presentation', level: null },
      { name: 'Leadership', level: null },
    ],
  },
];

export const featuredProject = {
  name: 'MediLink',
  tagline: 'AI-Driven Wearable Healthcare Platform',
  status: 'Research paper · Proposed system',
  description:
    'MediLink is an AI-driven wearable healthcare and emergency response platform designed to monitor health parameters and support autonomous emergency detection and patient rescue. The proposed solution integrates wearable health monitoring, Bluetooth and LoRa communication to help transmit emergency information to caregivers and emergency responders, including scenarios with limited conventional mobile connectivity.',
  problem:
    'In a medical emergency every minute matters, yet patients who are alone, elderly or in areas with weak mobile coverage may be unable to call for help. Conventional alert systems depend on the patient reacting in time and on a working cellular network.',
  solution:
    'A wearable that observes health parameters, uses AI to recognise emergency patterns without waiting for the patient to act, and relays alerts over a hybrid path: Bluetooth for nearby devices and long-range, low-power LoRa where conventional connectivity is limited, so caregivers and responders can still be reached.',
  stack: ['Wearable health sensors', 'AI-based emergency detection', 'Bluetooth', 'LoRa', 'Caregiver & responder alerts'],
  recognition:
    'Presented as a technical paper at the IEI Telangana State Centre One Day All India Seminar on “Sustainable Engineering Solutions to Production Systems”, 27 June 2026.',
  fullTitle:
    'MediLink: AI-Driven Wearable Healthcare Platform with Hybrid Bluetooth–LoRa Communication for Autonomous Emergency Detection & Patient Rescue',
  photos: [
    { src: A('events/iei-paper-presentation.jpg'), alt: 'The MediLink team presenting the paper at the IEI seminar in Khairatabad', caption: 'Presenting the paper at Visvesvaraya Bhavan, 27 June 2026' },
    { src: A('events/iei-team-photo.jpg'), alt: 'The MediLink team outside the Institution of Engineers (India), Telangana State Centre', caption: 'The team at IEI Telangana State Centre' },
    { src: A('events/iei-certificates-team.jpg'), alt: 'Team members holding their IEI paper presentation certificates', caption: 'Receiving the presentation certificates' },
  ],
  repoUrl: '', // GitHub repository URL once public
};

/** Add future projects here. Entries with `placeholder: true` render as "coming soon" cards. */
export const moreProjects = [
  { placeholder: true, title: 'Next project', note: 'A new build is on the way. Details will be added here soon.' },
  { placeholder: true, title: 'Open to collaborate', note: 'Interested in building something together? Reach out through the contact section.' },
];

/** Certificates: used by the gallery and referenced by achievements via `id`. */
export const certificates = [
  {
    id: 'yuva',
    title: 'Yuva Aapda Mitra Training Certificate',
    issuer: 'NDMA · SDMA Telangana · 1(T) EME Unit NCC',
    date: '24–30 Oct 2026',
    src: A('certificates/yuva-aapda-mitra.jpg'),
  },
  {
    id: 'iei',
    title: 'Technical Paper Presentation: MediLink',
    issuer: 'The Institution of Engineers (India), Telangana State Centre',
    date: '27 Jun 2026',
    src: A('certificates/iei-paper-presentation-certificate.jpg'),
  },
  {
    id: 'samavarthan',
    title: 'Certificate of Merit: 3rd Place, Codexa X Vibe Agent',
    issuer: 'SAMAVARTHAN 2K26 · MVSR Engineering College',
    date: '17–18 Apr 2026',
    src: A('certificates/samavarthan-2k26-merit.jpg'),
  },
  {
    id: 'ncc',
    title: 'NCC Annual Training Camp V (2025–26)',
    issuer: '2(T) Air Sqn (Tech) NCC · Secunderabad Group',
    date: '8–17 May 2025',
    src: A('certificates/ncc-atc-v-2025.jpg'),
  },
  {
    id: 'vbyld',
    title: 'Viksit Bharat Young Leaders Dialogue 2027: Online Quiz',
    issuer: 'Ministry of Youth Affairs & Sports · MY Bharat',
    date: '23 Sep 2026',
    src: A('certificates/viksit-bharat-vbyld-2027.jpg'),
  },
  {
    id: 'ncb',
    title: '“Say Yes to Life, No to Drugs” Pledge',
    issuer: 'Narcotics Control Bureau · Ministry of Home Affairs',
    date: '26 Jun 2025',
    src: A('certificates/ncb-say-yes-to-life.jpg'),
  },
];

/** Achievements: `certificateId` links to an entry above (or null if there is no certificate yet). */
export const achievements = [
  {
    featured: true,
    kicker: 'National Level Technical Fest',
    title: '3rd Place, Codexa X Vibe Agent',
    org: 'SAMAVARTHAN 2K26 · MVSR Engineering College',
    date: '17–18 April 2026',
    description:
      'Secured third place in the Codexa X Vibe Agent event at SAMAVARTHAN 2K26, the national level technical fest of MVSR Engineering College, and was awarded a Certificate of Merit.',
    icon: 'Trophy',
    certificateId: 'samavarthan',
  },
  {
    kicker: 'One Day All India Seminar',
    title: 'Technical Paper on MediLink',
    org: 'IEI Telangana State Centre',
    date: '27 June 2026',
    description:
      'Presented the MediLink paper at the seminar on “Sustainable Engineering Solutions to Production Systems”, Visvesvaraya Bhavan, Khairatabad, Hyderabad.',
    icon: 'Presentation',
    certificateId: 'iei',
  },
  {
    kicker: 'Disaster Management Training',
    title: 'Yuva Aapda Mitra Scheme',
    org: '1(T) EME Unit NCC · 1st BN TGSP, Yousufguda',
    date: '24–30 October 2026',
    description:
      'Completed a 7-day residential disaster management training programme under the Yuva Aapda Mitra Scheme, run under the aegis of the National Disaster Management Authority.',
    icon: 'LifeBuoy',
    certificateId: 'yuva',
  },
  {
    kicker: 'National Cadet Corps',
    title: 'Annual Training Camp V (2025–26)',
    org: '2(T) Air Squadron (Tech) NCC · Secunderabad Group',
    date: '8–17 May 2025',
    description:
      'Participated as a cadet in the Annual Training Camp V at Sujatha School, Moinabad, Telangana. Certificate of Participation.',
    icon: 'Medal',
    certificateId: 'ncc',
  },
  {
    kicker: 'Leadership',
    title: 'Event Coordinator, TECHDUO 2026',
    org: 'Department of IT · MVSR Engineering College',
    date: 'SAMAVARTHAN 2K26',
    description:
      'Served as an Event Coordinator for TECHDUO 2026, a technical event of the Department of Information Technology held as part of SAMAVARTHAN 2K26.',
    icon: 'Flag',
    certificateId: null,
  },
];

export const leadership = [
  {
    title: 'TECHDUO 2026, Event Coordinator',
    org: 'Department of Information Technology · SAMAVARTHAN 2K26',
    icon: 'Flag',
    points: [
      'Coordinated a departmental technical event within the college’s national level technical fest.',
      'Worked with faculty and fellow students to plan and run the event for participants.',
    ],
    image: null,
  },
  {
    title: 'National Cadet Corps',
    org: '2(T) Air Squadron (Tech) NCC · Secunderabad Group',
    icon: 'Shield',
    points: [
      'Cadet at the Annual Training Camp V, Moinabad (8–17 May 2025).',
      'Completed the Yuva Aapda Mitra 7-day residential disaster management training (24–30 Oct 2026).',
    ],
    image: { src: A('certificates/ncc-atc-v-2025.jpg'), alt: 'NCC Annual Training Camp V certificate' },
  },
  {
    title: 'Community & Civic Participation',
    org: 'Disaster preparedness · Awareness · Youth engagement',
    icon: 'HeartHandshake',
    points: [
      'Trained in disaster response and preparedness under the NDMA-backed Yuva Aapda Mitra Scheme.',
      'Took the Narcotics Control Bureau “Say Yes to Life, No to Drugs” pledge (June 2025).',
      'Took part in the Viksit Bharat Young Leaders Dialogue 2027 online quiz on MY Bharat (Sep 2026).',
    ],
    image: { src: A('certificates/yuva-aapda-mitra.jpg'), alt: 'Yuva Aapda Mitra training certificate' },
  },
];

export const news = {
  publication: 'Sakshi',
  edition: 'Hyderabad edition · Page 9',
  date: '31 October 2026',
  headline: 'NCC cadets complete training',
  caption:
    'Sakshi covered the completion ceremony for the first batch of 100 NCC cadets trained under the Yuva Aapda Mitra disaster management scheme at the 1st Battalion, Yousufguda, the programme Asmitha completed in October 2026. Officials presented certificates to the cadets and spoke about the role trained young people play in reducing the damage caused by disasters.',
  src: A('media/sakshi-31-oct-2026.jpg'),
  alt: 'Sakshi newspaper clipping from 31 October 2026 on NCC cadets completing Yuva Aapda Mitra training',
  source: 'https://epaper.sakshi.com/',
};

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'leadership', label: 'Leadership' },
  { id: 'contact', label: 'Contact' },
];

/** EmailJS: values come from a local .env file (see .env.example and README). */
export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
