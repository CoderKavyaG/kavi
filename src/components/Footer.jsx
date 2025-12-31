import React from 'react'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { theme } = useTheme()
  
  return (
    <footer className={`py-8 border-t ${theme === 'dark' ? 'bg-black text-white border-slate-800' : 'bg-white text-black border-slate-200'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Left - Branding */}
          <div>
            <p className={`font-mono text-sm font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>goelsahhab</p>
            <p className={`font-mono text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'}`}>
              Full Stack Developer & Creative Technologist
            </p>
          </div>

          {/* Center - Empty */}
          <div></div>

          {/* Right - Connect */}
          <div className="text-right">
            <p className={`font-mono text-xs ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mb-3`}>Let's Connect</p>
            <button
              onClick={() => window.open('https://x.com/messages/compose?recipient_id=1645235623227691008', '_blank')}
              className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors font-semibold text-lg ${theme === 'dark' ? 'bg-white text-black hover:bg-slate-100' : 'bg-black text-white hover:bg-slate-900'}`}
              title="Send me a DM on X"
            >
              💬
            </button>
          </div>
        </div>

        {/* Bottom - Copyright */}
        <div className={`border-t pt-6 text-center ${theme === 'dark' ? 'border-slate-800' : 'border-slate-200'}`}>
          <p className={`font-mono text-xs ${theme === 'dark' ? 'text-slate-500' : 'text-slate-600'}`}>
            © 2025. All rights reserved. Design & Developed by <span className={theme === 'dark' ? 'text-white' : 'text-black'}>goelsahhab</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
