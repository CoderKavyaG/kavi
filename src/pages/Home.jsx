import React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import { useTypingAnimation } from '../hooks/useTypingAnimation'

const Home = () => {
  const { displayedText, isComplete } = useTypingAnimation('hey 👋', 100)

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-5">
            <h1 className="text-3xl font-bold" style={{ color: 'var(--text-color)' }}>
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </h1>
            
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              i'm <span className="font-medium" style={{ color: 'var(--text-color)' }}>kavi</span>, a self-taught dev and caffine filled learner who's always exploring something new ⚡
            </p>
            
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              for the past 1.5+ years, i've been shipping web & onchain apps, advocating for devs and building sustainable developer communities 🌎
            </p>
            
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              to share what i've learned, we're building <a href="https://devlearnevent.vercel.app" target="_blank" rel="noopener noreferrer" className="font-semibold italic underline hover:text-blue-400 transition-colors duration-200" style={{ color: 'var(--text-color)' }}>Devlearn</a> - an india wide independent community that helps you become a self-taught web3 developer - where we learn, build, and collaborate 💻
            </p>
            
            <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              i love creating tech content, hacking at hackathons, connecting with folks in the community, and travelling solo 🚀
            </p>
            
            <div className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
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

export default Home
