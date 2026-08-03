export interface Profile {
  name: string
  title: string
  summary: string
  location: string
  email: string
  github: string
  linkedin?: string
}

export interface ExperienceEntry {
  company: string
  role: string
  start: string
  end: string
  highlights: string[]
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
  title: 'Senior Software Developer',
  summary:
    'Senior software developer with experience building reliable, well-tested systems. Replace this with a couple of sentences about your background and what you focus on.',
  location: 'United Kingdom',
  email: 'you@example.com',
  github: 'https://github.com/Jamesnoble89',
  linkedin: undefined,
}

export const skills: string[] = [
  'TypeScript',
  'React',
  'Node.js',
  'Python',
  'AWS',
  'SQL',
]

export const experience: ExperienceEntry[] = [
  {
    company: 'Company Name',
    role: 'Senior Software Developer',
    start: '2022',
    end: 'Present',
    highlights: [
      'Replace with a concrete achievement, ideally with a metric.',
      'Add another bullet describing scope or impact.',
    ],
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
