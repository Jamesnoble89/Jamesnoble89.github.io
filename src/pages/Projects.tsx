import { projects } from '../data/cv'

export function Projects() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h2 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Projects
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.name}
            className="rounded-lg border border-neutral-200 p-5 dark:border-neutral-800"
          >
            <h3 className="font-medium text-neutral-900 dark:text-neutral-100">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
              {project.description}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full bg-neutral-100 px-2 py-0.5 text-xs text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex gap-4 text-sm">
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline dark:text-neutral-100"
                >
                  Live
                </a>
              )}
              {project.repo && (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-900 underline dark:text-neutral-100"
                >
                  Source
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
