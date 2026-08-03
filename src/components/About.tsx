import { profile, skills } from '../data/cv'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100">
        {profile.name}
      </h1>
      <p className="mt-1 text-lg text-neutral-600 dark:text-neutral-400">
        {profile.title} &middot; {profile.location}
      </p>
      <p className="mt-6 max-w-2xl text-neutral-700 dark:text-neutral-300">
        {profile.summary}
      </p>
      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-neutral-200 px-3 py-1 text-sm text-neutral-700 dark:border-neutral-800 dark:text-neutral-300"
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  )
}
