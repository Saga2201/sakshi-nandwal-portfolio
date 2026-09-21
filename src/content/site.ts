/**
 * Sakshi Nandwal — Portfolio content
 * Edit this file to update the site. Keep facts accurate; do not invent employers, dates, metrics, or contact details.
 */

export const site = {
  name: "Sakshi Nandwal",
  location: "Indore, Madhya Pradesh, India",
  tagline: "Recruitment & HR professional",
  headline:
    "People excellence meets structured hiring — from Big 4 technical recruiting to aviation training and institutional outreach.",
  positioning:
    "Former Cabin Crew with the mindset of a Technical Recruiter. Aviation & Grooming Trainer. Former Institutional Outreach Manager at mhitr. Actively pursuing opportunities in recruitment and HR.",

  /** Add your email when ready — leave empty to hide the mailto button */
  email: "" as string,

  links: {
    linkedin: "https://www.linkedin.com/in/sakshi-nandwal-006389216/",
    youtube: "https://www.youtube.com/results?search_query=Sakshi+Nandwal",
    youtubeLabel: "Sakshi Nandwal",
    instagram: "https://www.instagram.com/sakshi174k/",
    instagramLabel: "@sakshi174k",
  },

  about: {
    paragraphs: [
      "Sakshi combines people excellence with structured hiring. She began as a Technical Recruiter at Sumeru Inc., supporting hiring for Big 4 clients, then built frontline communication and composure as Cabin Crew at IndiGo.",
      "As an Aviation & Grooming Trainer at Dfly International, she coached aspirants on interviews, SOPs, safety, security, first aid, and professional grooming. She most recently served as Institutional Outreach Manager at mhitr (Jul 2025 – Sep 2026).",
      "She is seeking recruitment and HR roles where candidate experience, stakeholder trust, and disciplined talent acquisition matter.",
    ],
  },

  expertise: [
    {
      title: "Technical Recruitment & Talent Acquisition",
      description:
        "Hands-on hiring experience for Big 4 clients — sourcing, screening, and delivering talent with pipeline discipline.",
      highlight: true,
    },
    {
      title: "Candidate Interview Coaching & Assessment",
      description:
        "Coached aviation aspirants on interview readiness, confidence, and professional presentation.",
    },
    {
      title: "Stakeholder & Client Coordination",
      description:
        "Partnered with hiring managers and enterprise accounts; experience driving institutional and partnership outreach.",
    },
    {
      title: "People Development & Professional Grooming",
      description:
        "Trained cohorts on soft skills, grooming standards, and workplace-ready presence.",
    },
    {
      title: "Institutional & Partnership Outreach",
      description:
        "Built relationships with external stakeholders and institutions as Outreach Manager at mhitr.",
    },
    {
      title: "Communication, Empathy & Service Excellence",
      description:
        "Aviation frontline experience: calm communication, conflict handling, and a customer-centric mindset.",
    },
    {
      title: "HR Process Mindset",
      description:
        "Screening hygiene, coordination, and structured talent acquisition habits that transfer to people teams.",
    },
  ],

  experience: [
    {
      role: "Institutional Outreach Manager",
      company: "mhitr",
      period: "Jul 2025 – Sep 2026",
      location: "India",
      bullets: [
        "Institutional outreach and partnership engagement",
        "Relationship management with external stakeholders",
      ],
    },
    {
      role: "Aviation & Grooming Trainer",
      company: "Dfly International",
      period: "Jul 2024 – Jul 2025",
      location: "Indore, Madhya Pradesh, India",
      bullets: [
        "Trained aviation aspirants for interview preparation and professional readiness",
        "Taught Aviation SOP, Safety, Security, First Aid, and grooming standards",
        "Delivered coaching, feedback, and high professional standards for trainees",
      ],
    },
    {
      role: "Cabin Crew",
      company: "IndiGo (InterGlobe Aviation Ltd)",
      period: "Jul 2022 – Jun 2024",
      location: "India",
      bullets: [
        "Delivered passenger service, safety awareness, and brand representation",
        "Strengthened teamwork under pressure and calm, clear communication",
        "Built transferable strengths in conflict handling and a customer-centric mindset",
      ],
    },
    {
      role: "Technical Recruiter",
      company: "Sumeru Inc.",
      period: "Oct 2021 – May 2022",
      location: "India · Human Resources",
      bullets: [
        "Recruited talent for Big 4 clients across technical and enterprise hiring needs",
        "Owned sourcing, screening, hiring-manager coordination, and delivery for enterprise accounts",
      ],
    },
  ],

  strengths: [
    {
      title: "Recruiting instinct, people-first delivery",
      body: "Technical recruiting for Big 4 clients gave Sakshi pipeline discipline and stakeholder fluency — the foundation of strong talent acquisition.",
    },
    {
      title: "Training that elevates candidates",
      body: "As an Aviation & Grooming Trainer, she turned interview coaching, SOPs, and soft-skills training into clearer candidate readiness — a direct asset for HR and TA teams.",
    },
    {
      title: "Aviation composure under pressure",
      body: "Cabin Crew experience at IndiGo built empathy, conflict handling, and service excellence — qualities that improve candidate experience and internal stakeholder trust.",
    },
    {
      title: "Outreach that builds partnerships",
      body: "Institutional outreach at mhitr sharpened relationship management and external engagement — transferable to campus, vendor, and hiring-partner work.",
    },
  ],

  contact: {
    heading: "Let’s connect",
    body: "Open to recruitment, talent acquisition, and HR / people-facing roles. Reach out on LinkedIn, or follow along on YouTube and Instagram.",
    /** Editor note only — not rendered on the site. Set `email` above to show mailto. */
    ctaNote:
      "Prefer email? Add your address in the email field above to enable a mailto button.",
  },
} as const;

export type SiteContent = typeof site;
