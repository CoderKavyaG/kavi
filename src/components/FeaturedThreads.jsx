import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from '../contexts/ThemeContext'
import { Info, Map } from 'lucide-react'

const FeaturedThreads = () => {
  const { theme } = useTheme()
  const containerRefs = useRef({})
  const [activeTab, setActiveTab] = useState('informative')
  const [isScriptLoaded, setIsScriptLoaded] = useState(false)

  const tweetCategories = {
    informative: [
      '1981248113953165466',
      '1980521602149138895'
    ],
    journey: [
      '1981591268477333811',
      '1981389409099682278'
    ]
  }

  // Load Twitter script once
  useEffect(() => {
    if (window.twttr?.widgets) {
      setIsScriptLoaded(true)
      return
    }

    const script = document.createElement('script')
    script.src = 'https://platform.twitter.com/widgets.js'
    script.async = true
    script.charset = 'utf-8'
    script.onload = () => {
      setIsScriptLoaded(true)
    }
    document.head.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script)
      }
    }
  }, [])

  // Load tweets when script is ready or tab/theme changes
  useEffect(() => {
    if (!isScriptLoaded || !window.twttr?.widgets) return

    const currentTweetIds = tweetCategories[activeTab]
    
    // Small delay to ensure DOM is ready
    const timeoutId = setTimeout(() => {
      currentTweetIds.forEach((tweetId, index) => {
        const containerKey = `${activeTab}-${index}`
        const container = containerRefs.current[containerKey]
        
        if (container) {
          // Clear existing content
          while (container.firstChild) {
            container.removeChild(container.firstChild)
          }
          
          // Create new tweet
          window.twttr.widgets.createTweet(
            tweetId,
            container,
            {
              theme: theme === 'dark' ? 'dark' : 'light',
              conversation: 'none',
              align: 'center'
            }
          )
        }
      })
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [isScriptLoaded, activeTab, theme])

  const currentTweetIds = tweetCategories[activeTab]

  return (
    <div className="space-y-6">
      {/* Gaming-Style Slider Navigation */}
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setActiveTab('informative')}
          className={`flex items-center gap-2 px-6 py-3 font-mono font-bold text-sm border-2 border-[var(--text-color)] transition-all ${
            activeTab === 'informative'
              ? 'bg-[var(--accent-color)] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-105'
              : 'bg-[var(--surface-color)] text-[var(--text-color)] hover:translate-x-0.5 hover:translate-y-0.5'
          }`}
        >
          <Info className="w-4 h-4" />
          <span>INFORMATIVE</span>
        </button>
        
        <div className="flex-1 h-0.5 bg-[var(--border-color)] relative overflow-hidden">
          <div 
            className="absolute h-full bg-[var(--accent-color)] transition-all duration-500 ease-in-out"
            style={{ 
              width: '50%',
              left: activeTab === 'informative' ? '0%' : '50%'
            }}
          />
        </div>
        
        <button
          onClick={() => setActiveTab('journey')}
          className={`flex items-center gap-2 px-6 py-3 font-mono font-bold text-sm border-2 border-[var(--text-color)] transition-all ${
            activeTab === 'journey'
              ? 'bg-[var(--accent-color)] text-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] scale-105'
              : 'bg-[var(--surface-color)] text-[var(--text-color)] hover:translate-x-0.5 hover:translate-y-0.5'
          }`}
        >
          <Map className="w-4 h-4" />
          <span>JOURNEY THREADS</span>
        </button>
      </div>

      {/* Tweet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {currentTweetIds.map((tweetId, index) => (
          <div
            key={`${activeTab}-${tweetId}-${index}`}
            className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] overflow-hidden"
          >
            {/* Gaming Header */}
            <div className="bg-[var(--accent-color)] text-black px-4 py-2 border-b-4 border-[var(--text-color)] flex items-center justify-between">
              <span className="font-mono font-bold text-xs">
                {activeTab === 'informative' ? '📊 INFO LOG' : '🗺️ JOURNEY LOG'} #{index + 1}
              </span>
              <span className="font-mono text-xs">◼◼◼</span>
            </div>
            
            {/* Tweet Content - Fixed Height */}
            <div
              ref={(el) => {
                if (el) containerRefs.current[`${activeTab}-${index}`] = el
              }}
              className="flex items-start justify-center p-4 h-[520px] overflow-y-auto"
              style={{
                scrollbarWidth: 'thin',
                scrollbarColor: 'var(--accent-color) var(--surface-color)'
              }}
            />
          </div>
        ))}
      </div>

      {/* Gaming Footer with Instructions */}
      <div className="border-2 border-dashed border-[var(--border-color)] p-4 bg-[var(--surface-color)]">
        <p className="text-xs font-mono text-[var(--text-secondary)] text-center">
          💡 TIP: Slide between tabs to explore different battle logs! {activeTab === 'informative' ? '📊 Learning mode active' : '🗺️ Journey mode active'}
        </p>
      </div>
    </div>
  )
}

export default FeaturedThreads

