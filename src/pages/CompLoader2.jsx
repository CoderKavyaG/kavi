import React, { useMemo, useState } from 'react'
import CompDemoLoader from '../components/CompDemoLoader'
import { Clipboard } from 'lucide-react'

function CodeCard({ code, lang = 'JS', onCopy, variant = 'emerald', title = 'Code' }) {
  const [copied, setCopied] = useState(false)
  const themes = {
    emerald: {
      headerBadge: 'bg-emerald-500/15 text-emerald-300',
      headerAccent: 'bg-emerald-500/15',
      codeBg: 'bg-[#07150f]',
      codeText: 'text-emerald-300',
      copyBtn: 'bg-emerald-500/15 hover:bg-emerald-500/25',
    },
    violet: {
      headerBadge: 'bg-violet-500/15 text-violet-300',
      headerAccent: 'bg-violet-500/15',
      codeBg: 'bg-[#0e0a18]',
      codeText: 'text-violet-300',
      copyBtn: 'bg-violet-500/15 hover:bg-violet-500/25',
    },
    pink: {
      headerBadge: 'bg-pink-500/15 text-pink-300',
      headerAccent: 'bg-pink-500/15',
      codeBg: 'bg-[#170910]',
      codeText: 'text-pink-300',
      copyBtn: 'bg-pink-500/15 hover:bg-pink-500/25',
    },
    cyan: {
      headerBadge: 'bg-cyan-500/15 text-cyan-300',
      headerAccent: 'bg-cyan-500/15',
      codeBg: 'bg-[#061418]',
      codeText: 'text-cyan-300',
      copyBtn: 'bg-cyan-500/15 hover:bg-cyan-500/25',
    },
  }
  const t = themes[variant] || themes.emerald

  const handleCopy = async () => {
    try { await onCopy?.(); setCopied(true); setTimeout(() => setCopied(false), 1200) } catch {}
  }

  return (
    <div className="rounded-xl overflow-hidden border border-[var(--border-color)] bg-[var(--surface-color)]">
      <div className="flex items-center justify-between px-3 sm:px-4 py-2 border-b border-[var(--border-color)]">
        <div className="flex items-center gap-1.5 text-[10px] sm:text-xs">
          <span className={`px-2 py-1 rounded-md ${t.headerAccent} text-[var(--text-secondary)]`}>Preview</span>
          <span className={`px-2 py-1 rounded-md ${t.headerBadge} font-medium`}>{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] sm:text-xs px-1.5 py-0.5 rounded-md bg-black/10 dark:bg-white/10 text-[var(--text-secondary)]">{lang}</span>
          <button onClick={handleCopy} title={copied? 'Copied' : 'Copy'} aria-label="Copy to clipboard" className={`text-[10px] sm:text-xs px-2 py-1 rounded-md flex items-center gap-1 ${t.copyBtn}`}>
            <Clipboard className="w-3.5 h-3.5" /> {copied ? 'Copied' : 'Copy'}
          </button>
        </div>
      </div>
      <pre className={`p-4 sm:p-5 overflow-auto text-[12px] sm:text-[13px] leading-relaxed ${t.codeBg} ${t.codeText}`}><code>{code}</code></pre>
    </div>
  )
}

const usageSnippet = `// 1) Copy Loader.jsx into your project (from this page)
// 2) Use it anywhere:
import Loader from './components/Loader'

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      {show && <Loader onLoadComplete={() => setShow(false)} />}
      {/* Your app content */}
    </div>
  )
}`

const customizeSnippet = `<Loader
  // Colors
  bgClass="bg-neutral-950"
  textGradient={{ from: 'from-violet-400', via: 'via-fuchsia-300', to: 'to-pink-500' }}
  glowGradient={{ from: 'from-fuchsia-400', via: 'via-pink-500', to: 'to-rose-500' }}
  accentClass="bg-pink-400"
  // Timing
  stepDelayMs={450}
  postDelayMs={300}
  exitFadeMs={900}
/>`

const componentSnippet = `// src/components/Loader.jsx
import React, { useState, useEffect } from 'react'

export default function Loader({ onLoadComplete = () => {} }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const names = [ { text: 'Kavi' }, { text: 'कवि' }, { text: 'ਕਵੀ' }, { text: 'கவி' }, { text: 'کاوی' } ]

  useEffect(() => {
    if (currentIndex < names.length) {
      const t = setTimeout(() => setCurrentIndex(i => i + 1), 300)
      return () => clearTimeout(t)
    }
    const to = setTimeout(() => { setIsExiting(true); setTimeout(onLoadComplete, 1000) }, 200)
    return () => clearTimeout(to)
  }, [currentIndex, names.length, onLoadComplete])

  return (
    <div className={'fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ' + (isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100')}>
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse"/>
        </div>
        <div className="relative z-10 text-center px-4">
          <div className="h-20 md:h-28 flex items-center justify-center">
            {names.map((n, i) => (
              <div key={i} className={'absolute transition-all duration-700 ' + (i === currentIndex - 1 ? 'opacity-100 scale-100' : i < currentIndex - 1 ? 'opacity-0 scale-90 -translate-y-12 blur-sm' : 'opacity-0 scale-110 translate-y-12 blur-sm')}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent tracking-wide">{n.text}</h1>
              </div>
            ))}
          </div>
          <div className="flex gap-1.5 md:gap-2 justify-center mt-10 md:mt-14">
            {names.map((_, i) => (
              <div key={i} className={'h-1 md:h-1.5 rounded-full transition-all ' + (i < currentIndex ? 'w-6 md:w-8 bg-blue-400' : 'w-1 md:w-1.5 bg-gray-700')}/>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-1 md:gap-1.5">
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce" style={{animationDelay:'0ms'}}/>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce" style={{animationDelay:'150ms'}}/>
        <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce" style={{animationDelay:'300ms'}}/>
      </div>
    </div>
  )
}`

export default function CompLoaderPage() {
  const [seed, setSeed] = useState(0)
  const [preset, setPreset] = useState('blue')
  const demoNames = useMemo(() => ([
    { text: 'Loading' }, { text: 'Setting things up' }, { text: 'Almost there' }, { text: 'Ready!' }
  ]), [])

  const copy = async (text) => { try { await navigator.clipboard.writeText(text) } catch {} }

  const presets = {
    blue: {
      label: 'Blue',
      textGradient: { from:'from-blue-400', via:'via-blue-300', to:'to-blue-500' },
      glowGradient: { from:'from-blue-400', via:'via-blue-500', to:'to-blue-600' },
      accentClass: 'bg-blue-400'
    },
    violet: {
      label: 'Violet',
      textGradient: { from:'from-violet-400', via:'via-fuchsia-300', to:'to-pink-500' },
      glowGradient: { from:'from-fuchsia-400', via:'via-pink-500', to:'to-rose-500' },
      accentClass: 'bg-pink-400'
    },
    emerald: {
      label: 'Emerald',
      textGradient: { from:'from-emerald-400', via:'via-teal-300', to:'to-green-500' },
      glowGradient: { from:'from-emerald-400', via:'via-teal-500', to:'to-green-600' },
      accentClass: 'bg-emerald-400'
    },
    cyan: {
      label: 'Cyan',
      textGradient: { from:'from-cyan-400', via:'via-sky-300', to:'to-teal-500' },
      glowGradient: { from:'from-cyan-400', via:'via-sky-500', to:'to-teal-600' },
      accentClass: 'bg-cyan-400'
    }
  }
  const theme = presets[preset]

  return (
    <main className="min-h-screen pt-24 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-10">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-wider text-[var(--text-secondary)]">Components Library</p>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl sm:text-4xl font-bold">Loader</h1>
            <span className="text-[10px] px-2 py-1 rounded-md bg-[var(--accent-bg)] border border-[var(--border-color)] text-[var(--text-secondary)]">React • Tailwind</span>
          </div>
          <p className="text-[var(--text-secondary)]">A premium animated name/word loader. Clean, configurable, and production-ready.</p>
        </div>

        {/* Top landscape preview */}
        <section className="relative rounded-2xl overflow-hidden border bg-black border-[var(--border-color)]">
          <div className="absolute inset-0 opacity-70" style={{backgroundImage:'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',backgroundSize:'12px 12px'}} />
          <div className="relative z-10 p-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-400">Live Preview</span>
              <div className="flex items-center gap-2">
                {Object.entries(presets).map(([key, val]) => (
                  <button key={key} onClick={()=>setPreset(key)} title={val.label} aria-label={`Use ${val.label} preset`} className={`w-5 h-5 rounded-full ring-1 ring-white/20 hover:opacity-90 ${
                    key==='blue'?'bg-blue-500': key==='violet'?'bg-fuchsia-500': key==='emerald'?'bg-emerald-500':'bg-cyan-500'
                  } ${preset===key?'outline outline-2 outline-white/60':''}`}></button>
                ))}
              </div>
            </div>
            <button onClick={()=>setSeed(s=>s+1)} className="text-xs px-2 py-1 rounded-md bg-white/10 text-white hover:bg-white/20 border border-white/10">Replay</button>
          </div>
          <div className="relative z-10 px-6 pb-6">
            <CompDemoLoader
              key={seed}
              fullScreen={false}
              containerClass="h-72 md:h-80"
              onLoadComplete={()=>setSeed(s=>s+1)}
              names={demoNames}
              bgClass="bg-black"
              textGradient={theme.textGradient}
              glowGradient={theme.glowGradient}
              accentClass={theme.accentClass}
              stepDelayMs={400}
              postDelayMs={200}
              exitFadeMs={800}
            />
          </div>
        </section>

        {/* Beginner-friendly steps */}
        <section className="space-y-6">
          <h2 className="text-xl font-semibold">Step-by-step (Beginner friendly)</h2>
          <div className="space-y-8">
            <div className="space-y-3">
              <p className="text-sm font-medium">1) Create the component file</p>
              <p className="text-sm text-[var(--text-secondary)]">Create <code>src/components/Loader.jsx</code> and paste the code below.</p>
              <CodeCard lang="jsx" variant="cyan" title="Component Source" code={componentSnippet} onCopy={()=>copy(componentSnippet)} />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium">2) Use the loader in your App</p>
              <ul className="text-xs text-[var(--text-secondary)] list-disc pl-5 space-y-1">
                <li>Import the component and show it while your app is loading.</li>
                <li>When the sequence completes, it calls <code>onLoadComplete</code> to hide the overlay.</li>
              </ul>
              <CodeCard lang="jsx" variant="violet" title="Usage" code={usageSnippet} onCopy={()=>copy(usageSnippet)} />
            </div>
            <div className="space-y-3">
              <p className="text-sm font-medium">3) Customize colors and timing</p>
              <ul className="text-xs text-[var(--text-secondary)] list-disc pl-5 space-y-1">
                <li>Swap gradients to match your brand.</li>
                <li>Adjust <code>stepDelayMs</code>, <code>postDelayMs</code>, and <code>exitFadeMs</code> for different pacing.</li>
              </ul>
              <CodeCard lang="jsx" variant="pink" title="Customize" code={customizeSnippet} onCopy={()=>copy(customizeSnippet)} />
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Troubleshooting</p>
              <ul className="text-xs text-[var(--text-secondary)] list-disc pl-5 space-y-1">
                <li>If the loader never hides, ensure your state toggles when <code>onLoadComplete</code> fires.</li>
                <li>If text looks blurry, check your Tailwind dark mode and background color contrast.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
