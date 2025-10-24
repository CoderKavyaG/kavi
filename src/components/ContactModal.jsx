import React from 'react'
import { X, Send, Mail, Linkedin, ExternalLink } from 'lucide-react'

const ContactModal = ({ isOpen, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    
    const mailtoLink = `mailto:codecraftkavya@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`
    window.location.href = mailtoLink
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg border-4 border-[var(--text-color)] shadow-[8px_8px_0px_0px_rgba(96,165,250,0.5)] overflow-hidden bg-[var(--surface-color)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Retro Header */}
        <div className="bg-[var(--bg-color)] border-b-4 border-[var(--text-color)] p-4 sm:p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[var(--accent-color)] border-2 border-[var(--text-color)] flex items-center justify-center">
                <Mail className="w-5 h-5 text-black" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold font-mono uppercase tracking-wider text-[var(--text-color)]">
                  ✉ Get In Touch
                </h2>
                <p className="text-xs font-mono text-[var(--accent-color)]">INITIATE CONTACT</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="w-8 h-8 bg-red-500 border-2 border-[var(--text-color)] hover:bg-red-600 transition-colors flex items-center justify-center"
            >
              <X className="w-4 h-4 text-white font-bold" />
            </button>
          </div>
        </div>

        <div className="p-4 sm:p-6 bg-[var(--surface-color)]">
          {/* Quest Description */}
          <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-4 mb-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[var(--accent-color)] font-bold">▶</span>
              <p className="font-mono text-xs text-[var(--accent-color)] uppercase">Quest Objective</p>
            </div>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
              Interested in working together? Have a project idea? Or just want to say hi? Fill out the form to start a new quest!
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-bold mb-2 text-[var(--accent-color)] uppercase tracking-wider">
                ▸ Player Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border-2 border-[var(--text-color)] text-sm font-mono focus:outline-none focus:border-[var(--accent-color)] transition-colors bg-[var(--bg-color)] text-[var(--text-color)]"
                placeholder="Rajesh Kumar"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-bold mb-2 text-[var(--accent-color)] uppercase tracking-wider">
                ▸ Contact ID
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 border-2 border-[var(--text-color)] text-sm font-mono focus:outline-none focus:border-[var(--accent-color)] transition-colors bg-[var(--bg-color)] text-[var(--text-color)]"
                placeholder="rajesh@example.com"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-xs font-mono font-bold mb-2 text-[var(--accent-color)] uppercase tracking-wider">
                ▸ Quest Details
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-3 border-2 border-[var(--text-color)] text-sm font-mono focus:outline-none focus:border-[var(--accent-color)] transition-colors resize-none bg-[var(--bg-color)] text-[var(--text-color)]"
                placeholder="Tell me about your project or just say hi..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent-color)] text-black font-bold font-mono text-sm uppercase border-4 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            >
              <Send className="w-4 h-4" />
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
