export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  email: string
  github: string
  linkedin?: string
  cvUrl: string
  focusAreas: string[]
}

export interface ExperienceEntry {
  company: string
  role: string
  start: string
  end: string
  highlights: string[]
}

export interface Credential {
  name: string
  org: string
  year: string
}

export interface CaseStudy {
  name: string
  /** Short framing line, e.g. "Professional project, 2023" or "Open-source contribution" */
  context: string
  problem: string
  approach: string
  outcome: string
  tech: string[]
  /** Omit both if the code isn't publicly shareable — the page will note that instead. */
  url?: string
  repo?: string
}

export const profile: Profile = {
  name: 'James Noble',
  title: 'Senior Software Engineer',
  summary:
    "Senior Software Engineer and Technical Lead with 6+ years in the UK energy sector, currently leading engineering delivery on complex, regulation-driven projects at Kaluza. Represents engineering on the leadership group for Kaluza's largest client, driving cross-team planning, platform health reviews, and risk management, while running technical interviews and leading discovery for regulatory and change requests.",
  location: 'Edinburgh, United Kingdom',
  email: 'james@noblesoftware.co.uk',
  github: 'https://github.com/Jamesnoble89',
  linkedin: 'https://www.linkedin.com/in/james-noble-scotland',
  cvUrl: '/James-Noble-CV.pdf',
  focusAreas: ['Platform engineering', 'Regulated systems', 'Technical leadership'],
}

export const skills: string[] = [
  'Scala',
  'Cats Effect',
  'Kotlin',
  'TypeScript',
  'AWS',
  'Kubernetes',
  'Kafka',
  'Terraform',
  'Docker',
  'SQL',
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Kaluza',
    role: 'Senior Software Engineer',
    start: 'Mar 2025',
    end: 'Present',
    highlights: [
      'Acting technical lead for a team of 5 engineers responsible for UK industry integrations spanning traditional and smart metering.',
      "Represent engineering within the leadership group for OVO, Kaluza's largest client, covering cross-team planning, platform health reviews, and risk management.",
      'Led the migration of 24 services from a self-hosted Kubernetes cluster onto a managed infrastructure platform, cutting maintenance overhead and strengthening security through centralised secrets and shared monitoring.',
      "Delivered an API enabling Kaluza's largest client to bring smart pay-as-you-go top-up functionality directly into their own app, replacing a costly third-party integration.",
      "Delivered client readiness for Market-wide Half-Hourly Settlement (MHHS), ensuring compliance two months ahead of the industry's revised go-live date.",
      'Presented the smart top-up API to company leadership and senior client stakeholders, and gave internal talks on the GitHub Actions migration and MHHS delivery.',
    ],
  },
  {
    company: 'Kaluza',
    role: 'Software Engineer II',
    start: 'Jan 2023',
    end: 'Mar 2025',
    highlights: [
      'Acted as technical lead for a 6-engineer UK smart metering and industry team from August 2024, mentoring junior engineers and new starts.',
      'Designed technical solutions to replace legacy meters in 200,000+ customer homes ahead of regulatory deadlines.',
      'Built core platform services to configure, control, and fetch data from smart meters, including CI/CD pipelines and testing with QA teams and physical meters.',
      'Migrated 50+ CI/CD pipelines from CircleCI to GitHub Actions.',
      "Designed and led a real-time migration of smart meters from a major client's legacy CRM to the Kaluza platform with no disruption to customers.",
      'Implemented serverless cloud infrastructure enabling communication with the wider UK energy industry.',
    ],
  },
  {
    company: 'Kaluza',
    role: 'Software Engineer',
    start: 'Feb 2020',
    end: 'Jan 2023',
    highlights: [
      'Built user journeys using Kotlin and Kafka Streams to support smart meter operations.',
      'Built the front-end tooling used by call centre and back-office agents to control smart meters.',
    ],
  },
  {
    company: 'Spark Energy',
    role: 'QA Engineer',
    start: 'May 2019',
    end: 'Feb 2020',
    highlights: [
      'Designed and implemented automated testing, and supported the move from an on-prem monolith to cloud-based microservices.',
    ],
  },
  {
    company: 'Spark Energy',
    role: 'MI Analyst and Resource Planner',
    start: 'Jan 2018',
    end: 'May 2019',
    highlights: [
      "Overhauled customer service MI reporting, cutting it from 6 person-hours to 30 minutes, and led resource planning for 200+ agents through the company's acquisition by OVO.",
    ],
  },
]

export const credentials: Credential[] = [
  {
    name: 'B.Sc (Hons), Computer Games Technology (2:1)',
    org: 'Abertay University, Dundee',
    year: '2014–2017',
  },
  {
    name: 'ISTQB Certified Tester Foundation Level (CTFL)',
    org: '',
    year: '2018',
  },
]

export const caseStudies: CaseStudy[] = [
  {
    name: 'Case Study Title',
    context: 'Professional project, 2024',
    problem:
      'What was broken, slow, or missing, and why it mattered. Include scale or constraints if relevant (traffic, team size, deadline).',
    approach:
      'What you actually did and the key decision or trade-off you made. This is the part that shows judgment, not just effort.',
    outcome:
      'The result, ideally with a number: latency, cost, incidents, adoption, time saved.',
    tech: ['TypeScript', 'React'],
    // No url/repo — code is proprietary, so the page shows a note instead of a link.
  },
  {
    name: 'Open-Source Contribution',
    context: 'Open-source contribution',
    problem: 'Replace once you have a merged PR: what issue or gap you addressed.',
    approach: 'What the change involved and any constraints from working in someone else\'s codebase.',
    outcome: 'Merged/shipped result, plus a link to the PR.',
    tech: ['TypeScript'],
    repo: 'https://github.com/Jamesnoble89',
  },
]
