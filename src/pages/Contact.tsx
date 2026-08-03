import { profile } from '../data/cv'

export function Contact() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Contact
      </h2>
      <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-neutral-700 dark:text-neutral-300">
        <a href={`mailto:${profile.email}`} className="underline">
          {profile.email}
        </a>
        <a href={profile.github} target="_blank" rel="noreferrer" className="underline">
          GitHub
        </a>
        {profile.linkedin && (
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="underline">
            LinkedIn
          </a>
        )}
      </div>
    </section>
  )
}
