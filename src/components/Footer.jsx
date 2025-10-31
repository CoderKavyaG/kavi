import React from 'react'
import { Github, Linkedin, Instagram } from 'lucide-react'

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
    },
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/coderkavyag',
      icon: Linkedin
    },

    {
      name: 'Instagram',
      href: 'https://instagram.com/coderkavyag',
      icon: Instagram
    },
  ]

  return (
    <footer className="border-t py-8 bg-[var(--surface-color)] border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm text-[var(--text-secondary)]">
            Built by <span className="font-medium text-[var(--text-color)]">@coderkavyag</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transform hover:-translate-y-1 transition-all duration-200 text-[var(--text-secondary)]"
                aria-label={name}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
