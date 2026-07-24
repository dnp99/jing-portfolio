export interface ExperienceHighlight {
  label: string;
  detail: string;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  highlights: ExperienceHighlight[];
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
    heroTitle: "Complex community care, clearly coordinated.",
    availability: "Open to community and primary care opportunities",
    trustSignals: [
      "CNO Registered Nurse",
      "Current CPR / BLS",
      "English + Mandarin",
    ],
    photo: {
      fileName: "Jingting-Su-Portrait.png",
      alt: "Jingting Su wearing navy nursing scrubs",
    },
  },
  contact: {
    email: "jingting.su123@gmail.com",
    linkedin: "https://www.linkedin.com/in/jingting-su-8b0547243/",
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
        {
          label: "Caseload ownership",
          detail:
            "Manage 30–40 active clients across acute, chronic, post-acute, infusion, oncology, and palliative care.",
        },
        {
          label: "Care planning",
          detail:
            "Develop and evaluate individualized plans with clients, caregivers, physicians, Ontario Health atHome, and interdisciplinary teams.",
        },
        {
          label: "Oncology support",
          detail:
            "Perform implanted port access and de-access while assessing treatment-related symptoms.",
        },
        {
          label: "Care navigation",
          detail:
            "Coordinate referrals across rehabilitation, respiratory, hospice, and community support services.",
        },
        {
          label: "Clinical leadership",
          detail:
            "Precept newly hired nurses and maintain accurate electronic documentation across providers.",
        },
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
        {
          label: "Clinical monitoring",
          detail:
            "Completed focused assessments, recognized acute changes, and escalated findings to physicians and the interdisciplinary team.",
        },
        {
          label: "Geriatric care",
          detail:
            "Supported chronic disease management, individualized care planning, health promotion, and family communication.",
        },
        {
          label: "Culturally responsive practice",
          detail:
            "Delivered care to a predominantly Chinese-speaking resident population in English and Mandarin.",
        },
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
