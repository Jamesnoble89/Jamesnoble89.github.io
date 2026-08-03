import { caseStudies } from '../data/cv'

export function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-neutral-600 dark:text-neutral-400">
        Case studies from professional work where the code isn't publicly shareable, plus
        open-source contributions where it is.
      </p>
      <div className="mt-8 flex flex-col gap-8">
        {caseStudies.map((study) => (
          <div
            key={study.name}
            className="rounded-lg border border-neutral-200 p-6 dark:border-neutral-800"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4">
              <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
                {study.name}
              </h3>
              <span className="text-sm text-neutral-500 dark:text-neutral-500">
                {study.context}
              </span>
            </div>

            <dl className="mt-4 flex flex-col gap-3 text-sm text-neutral-700 dark:text-neutral-300">
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">Problem</dt>
                <dd className="mt-1">{study.problem}</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">Approach</dt>
                <dd className="mt-1">{study.approach}</dd>
              </div>
              <div>
                <dt className="font-medium text-neutral-900 dark:text-neutral-100">Outcome</dt>
                <dd className="mt-1">{study.outcome}</dd>
              </div>
            </dl>

            <ul className="mt-4 flex flex-wrap gap-2">
              {study.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-4 text-sm">
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline dark:text-neutral-100"
                >
                  Live
                </a>
              )}
              {study.repo && (
                <a
                  href={study.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline dark:text-neutral-100"
                >
                  Source
                </a>
              )}
              {!study.url && !study.repo && (
                <span className="text-neutral-500 dark:text-neutral-500">
                  Code not public
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
