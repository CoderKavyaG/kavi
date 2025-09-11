import React from 'react'
import ProfilePicture from './ProfilePicture'
import { useTypingAnimation } from '../hooks/useTypingAnimation'

const Main = () => {
  const { displayedText, isComplete } = useTypingAnimation('hey 👋', 100)

  return (
    <main className="pt-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold text-dark-text">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
            
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              i'm <span className="text-dark-text font-medium">kavi</span>, a self-taught dev and caffine filled learner who's always exploring something new ⚡
            </p>
            
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              for the past 1.5+ years, i've been shipping websites, hosting events for clg peers and building own developer communities 🌎
            </p>
            
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              to share what i've learned, we're building <span className="text-dark-text font-semibold">Devlearn</span> - an india wide independent communitythat helps you grow as a person not just in tech side - where we yap, learn and attend events together 💻
            </p>
            
            <p className="text-lg text-dark-text-secondary leading-relaxed">
              i love exploring various tech, attending events, connecting with folks in the community over coffee sips, and travelling along with my friends 🚀
            </p>
            
            <div className="text-lg text-dark-text-secondary leading-relaxed">
              want to connect? 👇 <a href="https://calendly.com/coderkavyag" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">grab a time slot here</a> (or) <a href="mailto:codecraftkavya@gmail.com" className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200">shoot me an email</a>.
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <ProfilePicture />
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main
