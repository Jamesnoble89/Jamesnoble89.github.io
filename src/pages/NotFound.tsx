import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16 text-center">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
        Page not found
      </h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">
        The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="mt-6 inline-block underline text-neutral-900 dark:text-neutral-100">
        Back home
      </Link>
    </section>
  )
}
