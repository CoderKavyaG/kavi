import React from 'react'
import { Mail } from 'lucide-react'

const GetInTouch = () => {
  return (
    <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-8 sm:p-12 text-center shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
      <h2 className="text-3xl sm:text-4xl font-bold font-mono uppercase text-[var(--text-color)] mb-6">
        Get in Touch
      </h2>
      
      <p className="text-base sm:text-lg font-mono text-[var(--text-secondary)] mb-8">
        Want to chat? Just shoot me a dm via
      </p>
      
      <div className="flex flex-wrap gap-4 justify-center mb-8">
        <a
          href="mailto:codecraftkavya@gmail.com"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent-color)] text-black font-bold border-2 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <Mail className="w-4 h-4" />
          Gmail
        </a>
        <a
          href="https://twitter.com/coderkavyag"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--text-color)] text-[var(--bg-color)] font-bold border-2 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          Twitter
        </a>
      </div>

      <div className="border-t-4 border-dashed border-[var(--border-color)] pt-8 mt-8">
        <p className="text-sm font-mono text-[var(--text-secondary)] italic">
          Stay hungry, stay foolish
        </p>
      </div>
    </div>
  )
}

export default GetInTouch
