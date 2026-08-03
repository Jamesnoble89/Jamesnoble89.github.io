import { credentials, experience } from '../data/cv'

export function Experience() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Experience
      </h2>
      <div className="mt-8 flex flex-col gap-8">
        {experience.map((entry) => (
          <div key={`${entry.company}-${entry.role}`}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {entry.role} &middot; {entry.company}
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-500">
                {entry.start} &ndash; {entry.end}
              </span>
            </div>
            <ul className="mt-2 list-disc pl-5 text-neutral-700 dark:text-neutral-300">
              {entry.highlights.map((highlight) => (
                <li key={highlight}>{highlight}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2 className="mt-16 text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Education &amp; Certifications
      </h2>
      <ul className="mt-6 flex flex-col gap-2">
        {credentials.map((credential) => (
          <li
            key={credential.name}
            className="flex flex-wrap items-baseline justify-between gap-x-4 text-neutral-700 dark:text-neutral-300"
          >
            <span>
              {credential.name}
              {credential.org && <> &middot; {credential.org}</>}
            </span>
            <span className="text-sm text-neutral-500 dark:text-neutral-500">
              {credential.year}
            </span>
          </li>
        ))}
      </ul>
    </section>
  )
}
