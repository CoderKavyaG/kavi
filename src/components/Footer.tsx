import React from 'react'
import { Github, Twitter, Linkedin, Youtube, Instagram, Rss } from 'lucide-react'

const Footer: React.FC = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/coderkavyag',
      icon: Github
    },
    {
      name: 'Twitter',
      href: 'https://x.com/coderkavyag',
      icon: Twitter
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
    <footer className="border-t py-8" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-sm" style={{ color: 'var(--text-secondary)' }}>
            Built by <span className="font-medium" style={{ color: 'var(--text-color)' }}>@coderkavyag</span>
          </div>
          
          <div className="flex items-center space-x-6">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transform hover:-translate-y-1 transition-all duration-200"
                style={{ color: 'var(--text-secondary)' }}
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
