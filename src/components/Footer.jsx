import React from 'react'
import { Github } from 'lucide-react'

const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/coderkavyag',
      icon: Github
    },
    {
      name: 'X',
      href: 'https://x.com/coderkavyag',
      icon: XIcon
    }
  ]

  return (
    <footer className="border-t border-dashed py-4 bg-[var(--bg-color)] border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border border-[var(--border-color)] rounded flex items-center justify-center">
              <span className="text-lg">👨‍💻</span>
            </div>
            <div>
              <p className="font-mono text-[var(--text-secondary)]">@CODERKAVYAG</p>
              <p className="font-mono text-[var(--text-secondary)] opacity-60">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="font-mono text-[var(--text-secondary)] hidden sm:block">FOLLOW ME HERE:</span>
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-[var(--border-color)] px-3 py-1.5 hover:border-[var(--text-color)] transition-colors flex items-center gap-2 text-[var(--text-secondary)]"
                aria-label={name}
              >
                <Icon className="w-4 h-4" />
                <span className="font-mono text-xs hidden sm:inline">{name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
