import React, { useState, useEffect } from 'react'

const Loader = ({ onLoadComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isExiting, setIsExiting] = useState(false)

  const names = [
    { text: 'Kavi', language: 'English' },
    { text: 'कवि', language: 'Hindi' },
    { text: 'ਕਵੀ', language: 'Punjabi' },
    { text: 'கவி', language: 'Tamil' },
    { text: 'کاوی', language: 'Urdu' }
  ]

  useEffect(() => {
    if (currentIndex < names.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(prev => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    } else {
      const exitTimer = setTimeout(() => {
        setIsExiting(true)
        setTimeout(() => {
          onLoadComplete()
        }, 1000)
      }, 200)
      return () => clearTimeout(exitTimer)
    }
  }, [currentIndex, names.length, onLoadComplete])

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative">
        <div className="absolute inset-0 blur-3xl opacity-30">
          <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 rounded-full animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <div className="h-20 md:h-28 flex items-center justify-center">
            {names.map((name, index) => (
              <div
                key={index}
                className={`absolute transition-all duration-700 ease-out ${
                  index === currentIndex - 1
                    ? 'opacity-100 scale-100 translate-y-0 blur-0'
                    : index < currentIndex - 1
                    ? 'opacity-0 scale-90 -translate-y-12 blur-sm'
                    : 'opacity-0 scale-110 translate-y-12 blur-sm'
                }`}
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-blue-300 to-blue-500 bg-clip-text text-transparent tracking-wide drop-shadow-2xl">
                  {name.text}
                </h1>
              </div>
            ))}
          </div>

          <div className="flex gap-1.5 md:gap-2 justify-center mt-10 md:mt-14">
            {names.map((_, index) => (
              <div
                key={index}
                className={`h-1 md:h-1.5 rounded-full transition-all duration-500 ease-in-out ${
                  index < currentIndex ? 'w-6 md:w-8 bg-blue-400 shadow-lg shadow-blue-400/50' : 'w-1 md:w-1.5 bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2">
        <div className="flex gap-1 md:gap-1.5">
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-400 animate-bounce shadow-lg shadow-blue-400/50" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Loader
