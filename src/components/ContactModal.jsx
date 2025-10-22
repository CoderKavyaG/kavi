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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
      onClick={onClose}
    >
      <div 
        className="w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden"
        style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
          <h2 className="text-2xl font-bold flex items-center gap-2" style={{ color: 'var(--text-color)' }}>
            <Mail className="w-6 h-6" style={{ color: 'var(--accent-color)' }} />
            Get In Touch
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:opacity-70 transition-opacity"
            style={{ backgroundColor: 'var(--accent-bg)' }}
          >
            <X className="w-5 h-5" style={{ color: 'var(--text-color)' }} />
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
            Interested in working together? Have a project idea? Or just want to say hi? Feel free to reach out!
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ 
                  backgroundColor: 'var(--bg-color)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-color)'
                }}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200"
                style={{ 
                  backgroundColor: 'var(--bg-color)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-color)'
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                className="w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                style={{ 
                  backgroundColor: 'var(--bg-color)', 
                  borderColor: 'var(--border-color)',
                  color: 'var(--text-color)'
                }}
                placeholder="Tell me about your project or just say hi..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
              style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>

          <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--border-color)' }}>
            <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Or reach me directly:</p>
            <div className="flex justify-center gap-4">
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent-color)' }}
              >
                <Mail className="w-4 h-4" />
                Email
              </a>
              <a 
                href="https://twitter.com/coderkavyag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent-color)' }}
              >
                <ExternalLink className="w-4 h-4" />
                Twitter
              </a>
              <a 
                href="https://www.linkedin.com/in/coderkavyag/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                style={{ color: 'var(--accent-color)' }}
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactModal
