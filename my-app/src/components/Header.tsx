import { Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

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
      <nav className={`site-nav ${isOpen ? 'is-open' : ''}`} aria-label="Primary navigation">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)}>{link}</a>)}
      </nav>
      <div className="header-actions">
        <button className="icon-button" type="button" onClick={onThemeToggle} aria-label={isLight ? 'Use dark theme' : 'Use light theme'}>
          {isLight ? <Moon size={18} /> : <Sun size={18} />}
        </button>
        <button className="icon-button menu-toggle" type="button" onClick={() => setIsOpen((value) => !value)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen}>
          {isOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  )
}
