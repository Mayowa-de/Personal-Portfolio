import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type HeaderProps = {
  isLight: boolean
  onThemeToggle: () => void
}

export default function Header({ isLight, onThemeToggle }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const links = ['About', 'Work', 'Process', 'Contact']

  return (
    <header className="site-header">
      <a href="#top" className="brand" aria-label="MayorTech home">Mayor<span>Tech</span></a>
      <nav className="site-nav hidden md:flex" aria-label="Primary navigation">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>{link}</a>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onThemeToggle} aria-label={isLight ? 'Use dark theme' : 'Use light theme'}>
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="icon-button menu-toggle flex md:hidden" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      <AnimatePresence>
        {isOpen && <motion.nav className="absolute left-5 right-5 top-[78px] z-20 grid gap-5 border border-[var(--line)] bg-[var(--surface-raised)] p-5 md:hidden" aria-label="Mobile navigation" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }}>
          {links.map((link) => <a className="text-xs uppercase tracking-[.1em] text-[var(--muted)]" key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>{link}</a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  )
}
