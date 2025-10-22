import React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import FeaturedThreads from '../components/FeaturedThreads'
import GitHubActivity from '../components/GitHubActivity'
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const Home = () => {
  const techStack = [
    { name: 'Typescript', icon: 'TS', bgColor: '#3178c6' },
    { name: 'React', icon: '⚛️', bgColor: '#61dafb', textColor: '#000' },
    { name: 'Next.js', icon: 'N', bgColor: '#000000' },
    { name: 'Bun', icon: '🥟', bgColor: '#fbf0df', textColor: '#000' },
    { name: 'PostgreSQL', icon: '🐘', bgColor: '#336791' },
    { name: 'Three.js', icon: '', bgColor: '#000000' }
  ]

  return (
    <main className="min-h-screen pt-24" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col items-start space-y-6">
          {/* Profile Picture */}
          <div className="w-28 h-28">
            <ProfilePicture />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight" style={{ color: 'var(--text-color)' }}>
              Hi, I'm Kavi — <span style={{ color: '#9ca3af' }}>A Full Stack web developer.</span>
            </h1>
            
            {/* Description */}
            <div className="space-y-3 text-base" style={{ color: '#9ca3af' }}>
              <p>
                I build interactive web apps using{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium mx-1" style={{ backgroundColor: '#61dafb', color: '#000' }}>
                  ⚛️ React
                </span>{' '}
                ,{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1" style={{ backgroundColor: '#3178c6' }}>
                  TS TypeScript
                </span>{' '}
                , and{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1" style={{ backgroundColor: '#47A248' }}>
                  🍃 MongoDB
                </span>
                .
              </p>
              
              <p>
                I have worked with{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1" style={{ backgroundColor: '#000000' }}>
                  N Next.js
                </span>{' '}
                and{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1" style={{ backgroundColor: '#336791' }}>
                  🐘 PostgreSQL
                </span>
                , and I'm currently learning and exploring them deeper to build more scalable applications.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-color)' }}
              >
                <FaPaperPlane /> Get in touch
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-1">
              <a 
                href="https://twitter.com/coderkavyag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-color)' }}
              >
                <FaXTwitter />
              </a>
              <a 
                href="https://www.linkedin.com/in/coderkavyag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-color)' }}
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/coderkavyag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-color)' }}
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="text-xl hover:opacity-70 transition-opacity duration-200"
                style={{ color: 'var(--text-color)' }}
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Coding Stats & Spotify Widget */}
            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodingStats />
              <SpotifyWidget />
            </div>
          </div>
        </div>

        {/* Featured Threads Section */}
        <div className="mt-16">
          <FeaturedThreads />
        </div>

        {/* GitHub Activity Section */}
        <div className="mt-12 mb-8">
          <GitHubActivity />
        </div>
      </div>
    </main>
  )
}

export default Home
