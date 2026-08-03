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

export interface Project {
  name: string
  description: string
  tech: string[]
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

export const projects: Project[] = [
  {
    name: 'Project Name',
    description: 'Short description of the project and the problem it solves.',
    tech: ['TypeScript', 'React'],
    repo: 'https://github.com/Jamesnoble89',
  },
]
