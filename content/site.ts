export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: string[];
  focus: string[];
}

export interface PracticePrinciple {
  number: string;
  title: string;
  description: string;
}

export const site = {
  profile: {
    name: "Jingting Su",
    credential: "RN",
    role: "Community & Primary Care Nurse",
    location: "GTA, Ontario",
    headline:
      "Coordinated, compassionate care for complex needs at home and in the community.",
    availability: "Open to community and primary care opportunities",
  },
  contact: {
    email: "jingting.su123@gmail.com",
  },
  resume: {
    label: "View resume",
    fileName: "Jingting-Su-Resume.pdf",
  },
  about: [
    "I’m a Registered Nurse with more than three years of Ontario community nursing experience supporting medically complex, chronic disease, post-acute, oncology, infusion, palliative, and older adult populations.",
    "My practice combines comprehensive assessment with practical coordination. I work with clients, caregivers, physicians, Ontario Health atHome Care Coordinators, and interdisciplinary teams to build care plans, identify changing needs, and connect people with the right services.",
    "I bring calm clinical judgment, clear health teaching, and culturally responsive communication to every interaction. I provide care in English and Mandarin.",
  ],
  metrics: [
    { value: "3+", label: "years in Ontario community nursing" },
    { value: "30–40", label: "active clients managed across the community" },
    { value: "2", label: "languages: English and Mandarin" },
  ],
  experience: [
    {
      period: "Apr 2023 — Present",
      role: "Community Registered Nurse",
      organization: "CarePartners",
      location: "Ontario",
      summary:
        "Independently managing a diverse community caseload while coordinating care across home, primary care, specialist, and community settings.",
      highlights: [
        "Conduct comprehensive nursing assessments and manage approximately 30–40 active clients with acute, chronic, post-acute, infusion, oncology, and palliative care needs.",
        "Develop and evaluate individualized care plans with clients, caregivers, physicians, Ontario Health atHome Care Coordinators, and interdisciplinary professionals.",
        "Provide oncology nursing support including implanted port access and de-access procedures and assessment of treatment-related symptoms.",
        "Facilitate referrals to physiotherapy, occupational therapy, respiratory therapy, hospice programs, and community support services.",
        "Precept and mentor newly hired nurses while maintaining accurate electronic documentation and continuity across providers.",
      ],
      focus: [
        "Complex assessment",
        "Care coordination",
        "Oncology & infusion",
        "Palliative care",
        "Health teaching",
      ],
    },
    {
      period: "May 2024 — Feb 2025",
      role: "Registered Practical Nurse",
      organization: "Yee Hong Centre for Geriatric Care",
      location: "Mississauga, Ontario",
      summary:
        "Supported older adults and families through complex chronic, geriatric, behavioural, and palliative care needs in long-term care.",
      highlights: [
        "Conducted focused assessments, monitored acute status changes, and communicated findings with physicians and interdisciplinary team members.",
        "Supported health promotion, chronic disease management, individualized care planning, and family communication.",
        "Delivered culturally responsive care to a predominantly Chinese-speaking resident population.",
      ],
      focus: [
        "Geriatric care",
        "Clinical monitoring",
        "Family support",
        "Culturally responsive care",
      ],
    },
  ] satisfies Experience[],
  capabilities: [
    "Comprehensive health assessment",
    "Chronic disease management",
    "Individualized care planning",
    "Care navigation and referrals",
    "Oncology and infusion support",
    "Palliative and geriatric care",
    "Patient and caregiver education",
    "Hospital-to-home transitions",
    "Interdisciplinary collaboration",
    "Electronic clinical documentation",
  ],
  practice: [
    {
      number: "01",
      title: "Assess the whole picture",
      description:
        "Look beyond the immediate clinical concern to functional needs, caregiver capacity, safety, and barriers to care.",
    },
    {
      number: "02",
      title: "Coordinate across settings",
      description:
        "Create continuity between clients, families, primary care, specialists, hospitals, and community services.",
    },
    {
      number: "03",
      title: "Teach for independence",
      description:
        "Turn treatment plans into clear, practical guidance that clients and caregivers can act on with confidence.",
    },
    {
      number: "04",
      title: "Respond to change early",
      description:
        "Recognize evolving needs, prioritize interventions, and communicate quickly to support timely follow-up.",
    },
  ] satisfies PracticePrinciple[],
  credentials: {
    registration: [
      "Registered Nurse, College of Nurses of Ontario",
      "Active registration in good standing",
      "Current CPR/BLS certification",
    ],
    education: [
      "Bachelor of Nursing — Shanghai University of Traditional Chinese Medicine",
      "Registered Practical Nursing Diploma — Fanshawe College",
    ],
    additional: [
      "English and Mandarin",
      "Valid Ontario G driver’s licence",
      "Reliable vehicle for community practice",
    ],
  },
};
