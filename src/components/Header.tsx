import { NavLink } from 'react-router-dom'
import { profile } from '../data/cv'
import { ThemeToggle } from './ThemeToggle'

const navLinks = [
  { to: '/', label: 'About' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-neutral-300 bg-neutral-50/90 backdrop-blur dark:border-neutral-700 dark:bg-neutral-900/90">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-y-2 px-6 py-4">
        <NavLink
          to="/"
          end
          className="font-semibold whitespace-nowrap text-neutral-900 dark:text-neutral-100"
        >
          {profile.name}
        </NavLink>
        <div className="flex flex-wrap items-center gap-5">
          <nav className="flex flex-wrap gap-5 text-sm text-neutral-600 dark:text-neutral-400">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  isActive
                    ? 'text-neutral-900 dark:text-neutral-100'
                    : 'hover:text-neutral-900 dark:hover:text-neutral-100'
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
