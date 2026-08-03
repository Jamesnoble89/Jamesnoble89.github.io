import { profile } from '../data/cv'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-200 bg-white/80 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/80">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold text-neutral-900 dark:text-neutral-100">
          {profile.name}
        </a>
        <nav className="flex gap-5 text-sm text-neutral-600 dark:text-neutral-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
