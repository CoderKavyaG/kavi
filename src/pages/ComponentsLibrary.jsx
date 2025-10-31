import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Code2, Sparkles } from 'lucide-react'

// Mini Loader Preview Component
const MiniLoaderPreview = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const words = ['Loading', 'Setting up', 'Almost there', 'Ready!']

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % words.length)
    }, 800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
      {/* Glow effect */}
      <div className="absolute inset-0 blur-3xl opacity-20">
        <div className="w-32 h-32 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse mx-auto mt-12"></div>
      </div>
      
      {/* Animated text */}
      <div className="relative z-10 text-center">
        <div className="h-16 flex items-center justify-center">
          {words.map((word, index) => (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                index === currentIndex
                  ? 'opacity-100 scale-100 blur-0'
                  : index < currentIndex
                  ? 'opacity-0 scale-90 -translate-y-8 blur-sm'
                  : 'opacity-0 scale-110 translate-y-8 blur-sm'
              }`}
            >
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent">
                {word}
              </h2>
            </div>
          ))}
        </div>
        
        {/* Progress bars */}
        <div className="flex gap-1 justify-center mt-6">
          {words.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-6 bg-blue-400' : 'w-1 bg-gray-700'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }}></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }}></div>
        <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }}></div>
      </div>
    </div>
  )
}

const ComponentsLibrary = () => {
  const components = [
    {
      id: 1,
      title: 'Loader',
      description: 'A premium animated name/word loader. Clean, configurable, and production-ready with multiple color presets.',
      link: '/comp-loader',
      tags: ['React', 'Tailwind', 'Animation'],
      status: 'ACTIVE',
      hasLivePreview: true
    }
  ]

  return (
    <main className="min-h-screen pt-24 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        {/* Header Section */}
        <div className="mb-12 space-y-4">
          <div className="flex items-center gap-3">
            <Code2 className="w-8 h-8 text-[var(--accent-color)]" />
            <h1 className="text-3xl sm:text-4xl font-bold font-mono uppercase text-[var(--text-color)]">
              Components Library
            </h1>
          </div>
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-[var(--accent-color)] flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-bold font-mono mb-2 text-[var(--text-color)]">Why I Made This</h2>
                <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
                  I created this components library to share reusable UI components with the community. 
                  Each component is beautifully crafted, production-ready, and fully customizable. 
                  My goal is to help developers build better interfaces faster by providing high-quality, 
                  well-documented components that you can use in your projects.
                </p>
              </div>
            </div>
            <div className="pt-4 border-t-2 border-[var(--border-color)]">
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                ▸ All components are built with React & Tailwind CSS • Free to use • Open Source
              </p>
            </div>
          </div>
        </div>

        {/* Components Grid */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold font-mono uppercase text-[var(--text-color)] flex items-center gap-2">
            <span className="text-[var(--accent-color)]">▸</span> Available Components
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {components.map((component) => (
              <Link
                key={component.id}
                to={component.link}
                className="group border-4 border-[var(--text-color)] bg-[var(--surface-color)] overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
              >
                <div className="relative h-48 overflow-hidden border-b-4 border-[var(--text-color)]">
                  {component.hasLivePreview ? (
                    <MiniLoaderPreview />
                  ) : (
                    <img
                      src={component.image}
                      alt={component.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold font-mono uppercase text-[var(--text-color)]">
                      {component.title}
                    </h3>
                    <div className="flex gap-2 items-center bg-green-500 px-2 py-1 border-2 border-[var(--text-color)]">
                      <div className="w-2 h-2 bg-white"></div>
                      <span className="text-xs font-mono font-bold text-white">
                        {component.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm font-mono text-[var(--text-secondary)]">
                    {component.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {component.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Coming Soon Section */}
          <div className="mt-8 border-4 border-[var(--border-color)] bg-[var(--surface-color)] p-6 text-center">
            <p className="text-sm font-mono text-[var(--text-secondary)]">
              More components coming soon... Stay tuned!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default ComponentsLibrary
