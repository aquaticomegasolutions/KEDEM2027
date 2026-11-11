export const SUMMIT = {
  name: "KEDEM",
  full: "Global Technology & Innovation Summit 2027",
  theme: "QUANTUM • AI • MINDSET",
  tagline: "FROM VIZAG TO THE WORLD",
  statement: "New Technology needs a New Mindset.",
  organizer: "AOS Private Limited",
  siteUrl: "https://kedem2027.aquaticomega.com",
  website: "https://www.aquaticomega.com",
  websiteLabel: "www.aquaticomega.com",
  email: "info@aquaticomega.com",
  date: "JANUARY 8–9, 2027",
  venue: "VISAKHAPATNAM, ANDHRA PRADESH",
} as const;

/** Configurable social links — replace hrefs when official handles are supplied. */
export const SOCIAL_LINKS: { label: string; href: string | null }[] = [
  { label: "LinkedIn", href: null },
  { label: "X", href: null },
  { label: "Instagram", href: null },
  { label: "YouTube", href: null },
];

export const NAV_GROUPS: {
  label: string;
  links: { label: string; to: string }[];
}[] = [
  {
    label: "Summit",
    links: [
      { label: "The Summit", to: "/summit" },
      { label: "Signature Panels", to: "/panels" },
      { label: "Speakers", to: "/speakers" },
      { label: "Global Connect", to: "/global-connect" },
      { label: "Future Talent", to: "/future-talent" },
    ],
  },
  {
    label: "Pillars",
    links: [
      { label: "Quantum", to: "/quantum" },
      { label: "AI", to: "/ai" },
      { label: "Mindset", to: "/mindset" },
    ],
  },
  {
    label: "Experience",
    links: [
      { label: "KEDEM Expo & Innovation", to: "/expo" },
      { label: "Project Expo", to: "/project-expo" },
      { label: "Startup Expo", to: "/startup-expo" },
      { label: "AOS Future Tech 20", to: "/future-tech-20" },
      { label: "AOS Global Awards", to: "/awards" },
    ],
  },
  {
    label: "Engage",
    links: [
      { label: "Partners", to: "/partners" },
      { label: "Participate", to: "/contact" },
      { label: "Connect with AOS", to: "/connect" },
    ],
  },
];

export const PILLARS = [
  {
    id: "quantum",
    name: "QUANTUM",
    title: "EXPLORE WHAT'S POSSIBLE",
    to: "/quantum",
    description:
      "Quantum computing is redefining the limits of computation, security and discovery. KEDEM opens that frontier to India's innovators.",
    topics: [
      "Quantum Computing",
      "Quantum AI",
      "Quantum Cybersecurity",
      "Quantum Communication",
      "Industry Applications",
      "India's Quantum Ecosystem",
    ],
  },
  {
    id: "ai",
    name: "AI",
    title: "BUILD WHAT'S NEXT",
    to: "/ai",
    description:
      "Artificial intelligence is redefining what can be built, by whom, and how fast. KEDEM turns that capability into applied advantage.",
    topics: [
      "Generative AI",
      "Agentic AI",
      "AI for Business",
      "AI & Cybersecurity",
      "AI & Healthcare",
      "AI & Education",
      "Future of Work",
    ],
  },
  {
    id: "mindset",
    name: "MINDSET",
    title: "THINK BEYOND BOUNDARIES",
    to: "/mindset",
    description:
      "Technology alone does not define the future. The mindset behind it does — curious, entrepreneurial, global and deeply human.",
    topics: [
      "Innovation Mindset",
      "Entrepreneurial Mindset",
      "Leadership",
      "Creativity",
      "Global Thinking",
      "Future Skills",
      "Building Technology Companies",
    ],
  },
] as const;

export type JourneyStage = { no: string; title: string; note?: string };

export const JOURNEY: JourneyStage[] = [
  { no: "01", title: "Registration" },
  { no: "02", title: "Inauguration" },
  { no: "03", title: "AOS Vision", note: "“From Vizag to the World”" },
  { no: "04", title: "Global Keynote" },
  { no: "05", title: "Quantum Session" },
  { no: "06", title: "AI Session" },
  { no: "07", title: "Panel 1", note: "Quantum + AI" },
  { no: "08", title: "Networking Lunch" },
  { no: "09", title: "Future Tech Showcase" },
  {
    no: "10",
    title: "Panel 2",
    note: "From Vizag to the World: Building Global Technology Companies",
  },
  {
    no: "11",
    title: "Panel 3",
    note: "The Future of Talent: AI, Jobs & Global Careers",
  },
  { no: "12", title: "Mindset Keynote" },
  { no: "13", title: "AOS Global Awards" },
  { no: "14", title: "Global Networking Dinner" },
];

export const PANELS = [
  {
    id: "panel-1",
    label: "PANEL 1",
    title: "Quantum + AI: The Next Technology Revolution",
    signature: false,
    focusLabel: "Focus",
    points: ["Quantum", "AI", "DeepTech", "Research"],
    description:
      "Where quantum capability meets artificial intelligence — and what that convergence means for research, industry and national capability.",
  },
  {
    id: "panel-2",
    label: "PANEL 2",
    title: "From Vizag to the World: Building Global Technology Companies",
    signature: true,
    focusLabel: "Discussion areas",
    points: [
      "Global markets",
      "International partnerships",
      "Startup ecosystem",
      "Product innovation",
      "Investment",
      "Global talent",
      "Can global technology companies emerge from Vizag?",
    ],
    description:
      "The signature conversation of KEDEM: what it takes to build a company in Visakhapatnam that competes on a world stage.",
  },
  {
    id: "panel-3",
    label: "PANEL 3",
    title: "The Future of Talent: AI, Jobs & Global Careers",
    signature: false,
    focusLabel: "Potential ecosystem",
    points: [
      "Global HR/Talent Leaders",
      "CEOs",
      "Universities",
      "Technology Leaders",
    ],
    description:
      "AI is rewriting the map of work. This panel examines skills, employability and global careers for the next decade.",
  },
] as const;

export const EXPO_EXPERIENCES = [
  {
    id: "project-expo",
    title: "PROJECT EXPO",
    tagline: "BUILD. DEMONSTRATE. COMPETE. WIN.",
    to: "/project-expo",
    who: "Students, project teams, young innovators, developers and emerging creators",
    distinction:
      "A competitive exhibition of working projects — built, demonstrated and judged on stage.",
  },
  {
    id: "startup-expo",
    title: "STARTUP EXPO",
    tagline: "EXHIBIT. CONNECT. SCALE.",
    to: "/startup-expo",
    who: "Startups, founders, technology companies and university spin-offs",
    distinction:
      "A commercial exhibition floor for ventures seeking visibility, industry connections and growth.",
  },
  {
    id: "future-tech-20",
    title: "AOS FUTURE TECH 20",
    tagline: "20 INNOVATIONS. ONE FUTURE.",
    to: "/future-tech-20",
    who: "Approximately 20 selected innovations, startups and projects",
    distinction:
      "A curated showcase — selection only. The twenty innovations KEDEM chooses to put in front of the world.",
  },
] as const;

export const PROJECT_CATEGORIES = [
  "AI",
  "Quantum",
  "Robotics",
  "IoT",
  "Cybersecurity",
  "Healthcare Technology",
  "Sustainability",
  "DeepTech",
  "Smart Solutions",
  "Student Innovation",
] as const;

export const PROJECT_PROCESS = [
  "Registration",
  "Submission",
  "Screening",
  "Shortlisting",
  "Exhibition",
  "Evaluation",
  "Winners",
] as const;

export const STARTUP_CATEGORIES = [
  "DeepTech Ventures",
  "AI Startups",
  "Quantum Startups",
  "IoT Startups",
  "Healthcare Startups",
  "Sustainability Startups",
  "University Spin-offs",
  "Technology Companies",
] as const;

export const FUTURE_TECH_CATEGORIES = [
  "AI",
  "Quantum",
  "Cybersecurity",
  "Robotics",
  "IoT",
  "Water/Ocean Technology",
  "Sustainability",
  "DeepTech",
  "Healthcare Technology",
  "Student Innovation",
] as const;

export type FutureTechProject = {
  id: string;
  name: string;
  category: (typeof FUTURE_TECH_CATEGORIES)[number];
  organization: string;
  description: string;
  image: string | null;
  link: string | null;
};

/** Placeholder slots — replaced as selected innovations are confirmed. */
export const FUTURE_TECH_PROJECTS: FutureTechProject[] =
  FUTURE_TECH_CATEGORIES.flatMap((category, i) =>
    [0, 1].map((j) => ({
      id: `ft-${i}-${j}`,
      name: `Selection ${String(i * 2 + j + 1).padStart(2, "0")}`,
      category,
      organization: "To Be Announced",
      description:
        "This showcase slot is reserved for a selected Future Tech 20 innovation. Details are published once the selection is confirmed.",
      image: null,
      link: null,
    })),
  );

export const SPEAKER_TRACKS = [
  "ALL",
  "QUANTUM",
  "AI",
  "MINDSET",
  "GLOBAL",
  "INDUSTRY",
  "ACADEMIA",
] as const;

export type Speaker = {
  id: string;
  name: string;
  designation: string;
  organization: string;
  track: Exclude<(typeof SPEAKER_TRACKS)[number], "ALL">;
  topic: string;
  photo: string | null;
  bio: string | null;
};

/** Intentionally empty: no speaker is listed until officially verified. */
export const SPEAKERS: Speaker[] = [];

export const AWARD_CATEGORIES = [
  "Global Technology Leader Award",
  "AI Excellence Award",
  "Quantum Technology Excellence Award",
  "Emerging Technology Innovator Award",
  "Technology Entrepreneur Award",
  "Global Talent Leadership Award",
  "Young Technology Leader Award",
  "Women in Technology Award",
  "Startup Innovation Award",
  "Research & Innovation Award",
  "Industry–Academia Excellence Award",
  "Technology for Social Impact Award",
  "Global Innovation Award",
  "Future Technology Visionary Award",
  "AOS Global Impact Honour",
] as const;

export const PARTNER_CATEGORIES = [
  { name: "TITLE PARTNER", slots: 1 },
  { name: "GOLD PARTNER", slots: 3 },
  { name: "SILVER PARTNER", slots: 4 },
  { name: "ASSOCIATE PARTNER", slots: 4 },
  { name: "INDUSTRY PARTNER", slots: 4 },
  { name: "EXHIBITION PARTNER", slots: 4 },
  { name: "KNOWLEDGE PARTNER", slots: 4 },
  { name: "MEDIA PARTNER", slots: 4 },
] as const;

export const GLOBAL_DIMENSIONS = [
  "International Keynote",
  "International Panelist",
  "Global University",
  "International Startup",
  "Global Industry Leader",
  "International Awardee",
] as const;

export const PARTICIPATION_PATHWAYS = [
  {
    id: "attend",
    title: "ATTEND THE SUMMIT",
    description: "Register your interest to attend KEDEM 2027 in Visakhapatnam.",
  },
  {
    id: "project-expo",
    title: "PROJECT EXPO",
    description: "Submit a student or team project for screening and exhibition.",
  },
  {
    id: "startup-expo",
    title: "STARTUP EXPO",
    description: "Apply to exhibit your startup on the KEDEM exhibition floor.",
  },
  {
    id: "future-tech-20",
    title: "FUTURE TECH 20",
    description: "Nominate an innovation for the curated Future Tech 20 showcase.",
  },
  {
    id: "partner",
    title: "PARTNER WITH US",
    description: "Explore sponsorship and partnership opportunities at KEDEM.",
  },
  {
    id: "speaker",
    title: "SPEAKER / EXPERT ENQUIRY",
    description: "Propose a speaker, expert or panellist for the summit programme.",
  },
] as const;
