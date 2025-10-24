import React, { useState } from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import FeaturedThreads from '../components/FeaturedThreads'
import GitHubActivity from '../components/GitHubActivity'
import ContactModal from '../components/ContactModal'
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowRight, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { posts, loading } = useBlogPosts()
  const latestPosts = posts.slice(0, 1)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('items')

  const techStack = [
    { name: 'Typescript', icon: 'TS', bgColor: '#3178c6' },
    { name: 'React', icon: '⚛️', bgColor: '#61dafb', textColor: '#000' },
    { name: 'Next.js', icon: 'N', bgColor: '#000000' },
    { name: 'Bun', icon: '🥟', bgColor: '#fbf0df', textColor: '#000' },
    { name: 'PostgreSQL', icon: '🐘', bgColor: '#336791' },
    { name: 'Three.js', icon: '', bgColor: '#000000' }
  ]

  return (
    <main className="min-h-screen pt-24 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* RETRO PROFILE SECTION */}
        <div className="relative mb-16">
          {/* Retro Border Frame */}
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-1.5 shadow-[8px_8px_0px_0px_rgba(96,165,250,0.3)]">
            <div className="border-2 border-[var(--border-color)] p-8 sm:p-10">
              
              {/* Player Card Header */}
              <div className="flex items-center gap-6 mb-8 pb-6 border-b-4 border-dashed border-[var(--border-color)]">
                <div className="relative flex-shrink-0">
                  {/* Circular glowing border effect */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent-color)] to-purple-500 rounded-full animate-pulse"></div>
                  <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[var(--text-color)] bg-[var(--bg-color)] overflow-hidden">
                    <ProfilePicture />
                  </div>
                  {/* Level Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[var(--accent-color)] border-4 border-[var(--text-color)] px-3 py-1.5 text-sm font-bold text-black rounded">
                    LVL 21
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="bg-[var(--bg-color)] border-2 border-[var(--border-color)] px-3 py-2 mb-2">
                    <p className="text-xs font-mono text-[var(--text-secondary)] opacity-80 mb-1">▸ PLAYER.NAME</p>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono uppercase tracking-wider text-[var(--text-color)]">
                      KAVI
                    </h1>
                  </div>
                  <div className="bg-[var(--bg-color)] border-2 border-[var(--border-color)] px-3 py-1.5">
                    <p className="text-xs font-mono text-[var(--text-secondary)]">
                      CLASS: <span className="text-[var(--text-color)] font-bold">FULL STACK DEVELOPER</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Bio/Description Box */}
              <div className="bg-[var(--bg-color)] border-4 border-[var(--border-color)] p-4 mb-6">
                <div className="flex items-center gap-2 mb-3 pb-2 border-b-2 border-dashed border-[var(--border-color)]">
                  <span className="text-[var(--text-secondary)] text-sm">▶</span>
                  <p className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">Quest Log</p>
                </div>
                <div className="space-y-2 font-mono text-xs text-[var(--text-secondary)] leading-relaxed">
                  <p>
                    <span className="text-[var(--text-secondary)]">➤</span> 3rd year CSE student
                  </p>
                  <p>
                    <span className="text-[var(--text-secondary)]">➤</span> Building interactive web applications
                  </p>
                  <p>
                    <span className="text-[var(--text-secondary)]">➤</span> Currently exploring scalable architectures
                  </p>
                  <p>
                    <span className="text-[var(--text-secondary)]">➤</span> Level up daily with new technologies
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mb-6">
                <button
                  onClick={() => setIsContactModalOpen(true)}
                  className="relative flex items-center gap-2 px-4 py-2 bg-[var(--accent-color)] text-black font-bold font-mono text-sm uppercase border-4 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FaPaperPlane className="w-3 h-3" /> 
                  START QUEST
                </button>
                <Link 
                  to="/resume"
                  className="relative flex items-center gap-2 px-4 py-2 bg-[var(--text-color)] text-[var(--bg-color)] font-bold font-mono text-sm uppercase border-4 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <FileText className="w-3 h-3" /> 
                  VIEW STATS
                </Link>
              </div>

              {/* Social Links - Retro Style */}
              <div className="flex gap-2 border-t-4 border-dashed border-[var(--border-color)] pt-4">
                <a 
                  href="https://twitter.com/coderkavyag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-2 text-center hover:bg-[var(--accent-color)] hover:text-black transition-colors"
                >
                  <FaXTwitter className="w-5 h-5 mx-auto" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/coderkavyag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-2 text-center hover:bg-[var(--accent-color)] hover:text-black transition-colors"
                >
                  <FaLinkedin className="w-5 h-5 mx-auto" />
                </a>
                <a 
                  href="https://github.com/coderkavyag" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-2 text-center hover:bg-[var(--accent-color)] hover:text-black transition-colors"
                >
                  <FaGithub className="w-5 h-5 mx-auto" />
                </a>
                <a 
                  href="mailto:codecraftkavya@gmail.com"
                  className="flex-1 bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-2 text-center hover:bg-[var(--accent-color)] hover:text-black transition-colors"
                >
                  <FaEnvelope className="w-5 h-5 mx-auto" />
                </a>
              </div>

              {/* Stats Widgets */}
              <div className="mt-6 pt-6 border-t-4 border-dashed border-[var(--border-color)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <CodingStats />
                  <SpotifyWidget />
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* END RETRO PROFILE SECTION */}

        {/* RETRO PROJECTS SECTION */}
        <div className="mt-16">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
              ▸ Featured Quests
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Portfolio Project */}
            <a
              href="https://github.com/CoderKavyaG/kavi"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--surface-color)] border-4 border-[var(--text-color)] overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-48 overflow-hidden bg-[var(--bg-color)] border-b-4 border-[var(--text-color)]">
                <img 
                  src="https://i.ibb.co/VcxJwz7R/image.png"
                  alt="Portfolio"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-3 bg-[var(--surface-color)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-mono uppercase text-[var(--text-color)]">
                    Portfolio
                  </h3>
                  <div className="flex gap-2 items-center bg-green-500 px-2 py-1 border-2 border-[var(--text-color)]">
                    <div className="w-2 h-2 bg-white"></div>
                    <span className="text-xs font-mono font-bold text-white">
                      ACTIVE
                    </span>
                  </div>
                </div>
                <p className="text-sm font-mono text-[var(--text-secondary)]">
                  My personal portfolio website built with React, featuring blog system, projects showcase, and real-time coding stats.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    REACT
                  </span>
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    VITE
                  </span>
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    TAILWIND
                  </span>
                </div>
              </div>
            </a>

            {/* Brainly Project */}
            <a
              href="https://github.com/CoderKavyaG/brainly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[var(--surface-color)] border-4 border-[var(--text-color)] overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
            >
              <div className="relative h-48 overflow-hidden bg-white border-b-4 border-[var(--text-color)]">
                <img 
                  src="https://i.ibb.co/6Jt6gStD/image.png"
                  alt="Brainly"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5 space-y-3 bg-[var(--surface-color)]">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold font-mono uppercase text-[var(--text-color)]">
                    Brainly
                  </h3>
                  <div className="flex gap-2 items-center bg-yellow-400 px-2 py-1 border-2 border-[var(--text-color)]">
                    <div className="w-2 h-2 bg-black"></div>
                    <span className="text-xs font-mono font-bold text-black">
                      IN PROGRESS
                    </span>
                  </div>
                </div>
                <p className="text-sm font-mono text-[var(--text-secondary)]">
                  A personal knowledge management system built to organize notes, documents, tweets, and links with tagging and search.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    REACT
                  </span>
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    TYPESCRIPT
                  </span>
                  <span className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]">
                    TAILWIND
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* RETRO GAME MENU - ABOUT ME */}
        <div className="mt-16">
          {/* Game Menu Header */}
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">Game Menu</h2>
          </div>

          {/* Tab Navigation */}
          <div className="bg-[var(--surface-color)] border-2 border-[var(--border-color)] rounded-lg p-2 flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('items')}
              className={`flex-1 px-4 py-2 font-mono text-sm uppercase border-2 transition-colors rounded ${
                activeTab === 'items'
                  ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                  : 'bg-[var(--bg-color)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-color)]'
              }`}
            >
              Items
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 px-4 py-2 font-mono text-sm uppercase border-2 transition-colors rounded ${
                activeTab === 'skills'
                  ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                  : 'bg-[var(--bg-color)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-color)]'
              }`}
            >
              Skills
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex-1 px-4 py-2 font-mono text-sm uppercase border-2 transition-colors rounded ${
                activeTab === 'stats'
                  ? 'bg-[var(--accent-color)] text-black border-[var(--accent-color)]'
                  : 'bg-[var(--bg-color)] text-[var(--text-secondary)] border-[var(--border-color)] hover:border-[var(--text-color)]'
              }`}
            >
              Stats
            </button>
          </div>

          {/* Content Area */}
          <div>
              {/* Items Tab */}
              {activeTab === 'items' && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-6 items-start">
                    <div className="w-full sm:w-48 h-48 flex-shrink-0 border-4 border-[var(--text-color)] overflow-hidden mx-auto sm:mx-0">
                      <img 
                        src="https://i.ibb.co/LXGvTyqm/image.png"
                        alt="Kavi" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4 mb-4">
                        <h3 className="text-lg font-bold font-mono mb-2 text-[var(--text-color)]">▸ PLAYER INFO</h3>
                        <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
                          I am a college student at a tier-3 college and realised late that I love doing web development, so I'm currently learning and building projects in web development.
                        </p>
                      </div>
                      <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4">
                        <h3 className="text-sm font-bold font-mono mb-2 text-[var(--accent-color)]">▸ CURRENT QUEST</h3>
                        <p className="text-xs font-mono text-[var(--text-secondary)]">Building modern web applications with React & TypeScript</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <div className="space-y-4">
                  {/* Frontend Skills */}
                  <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4">
                    <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ FRONTEND ABILITIES</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#61dafb] hover:text-black transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">⚛️ REACT</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#3178c6] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">TS TYPESCRIPT</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#f0db4f] hover:text-black transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">JS JAVASCRIPT</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">N NEXT.JS</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#06b6d4] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🎨 TAILWIND</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#e34c26] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">HTML/CSS</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Backend Skills */}
                  <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4">
                    <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ BACKEND ABILITIES</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#3b82f6] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">⬢ NODE.JS</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#47A248] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🍃 MONGODB</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#336791] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🐘 POSTGRESQL</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#10b981] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">⚡ EXPRESS</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#ff4154] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🔥 PRISMA</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#ca2c31] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🗄️ REDIS</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Stats Tab - Now Tools */}
              {activeTab === 'stats' && (
                <div className="space-y-4">
                  <div className="bg-[var(--surface-color)] border-2 border-[var(--text-color)] p-4">
                    <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ DEVELOPMENT TOOLS</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#007acc] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">💻 VS CODE</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#f34f29] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🔧 GIT</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#181717] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🐙 GITHUB</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#ff6c37] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">📮 POSTMAN</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#00D9FF] hover:text-black transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">⚡ VERCEL</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#f06529] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">📦 NPM</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#F7DF1E] hover:text-black transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">⚙️ FIGMA</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#5865F2] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">💬 DISCORD</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                        </div>
                      </div>
                      <div className="bg-[var(--bg-color)] border-2 border-[var(--text-color)] p-3 hover:bg-[#FF6B6B] hover:text-white transition-colors cursor-default">
                        <p className="text-xs font-mono font-bold mb-1">🧠 CURSOR</p>
                        <div className="flex gap-0.5">
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-current"></div>
                          <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
          </div>
        </div>

        {/* RETRO TWEET THREADS SECTION */}
        <div className="mt-16">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
              ▸ Battle Logs
            </h2>
            <p className="text-xs font-mono text-[var(--text-secondary)] mt-1">Latest tweets and threads</p>
          </div>
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <FeaturedThreads />
          </div>
        </div>

        {/* RETRO BLOGS SECTION */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
                ▸ Quest Journal
              </h2>
              <p className="text-xs font-mono text-[var(--text-secondary)] mt-1">My latest writings</p>
            </div>
            <Link
              to="/blog"
              className="px-4 py-2 bg-[var(--accent-color)] text-black font-mono text-xs uppercase border-2 border-[var(--text-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              VIEW ALL →
            </Link>
          </div>
          
            {loading ? (
            <div className="grid grid-cols-1 gap-6">
              <div className="h-80 border-4 border-[var(--text-color)] animate-pulse bg-[var(--surface-color)]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group border-4 border-[var(--text-color)] overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
                >
                  {/* Horizontal Layout */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-auto sm:w-72 overflow-hidden flex-shrink-0 border-b-4 sm:border-b-0 sm:border-r-4 border-[var(--text-color)]">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                      {/* Top Content */}
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)] leading-tight">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base leading-relaxed line-clamp-2 font-mono text-[var(--text-secondary)]">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer */}
                      <div className="flex items-center justify-between pt-4 mt-4 border-t-2 border-dashed border-[var(--border-color)]">
                        <div className="flex items-center gap-2 text-sm font-mono text-[var(--text-secondary)]">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>

                        <div className="px-3 py-1 bg-[var(--accent-color)] text-black font-mono text-xs font-bold border-2 border-[var(--text-color)]">
                          READ →
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* RETRO GITHUB ACTIVITY */}
        <div className="mt-12 mb-8">
          <div className="mb-6">
            <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
              ▸ Code Missions
            </h2>
            <p className="text-xs font-mono text-[var(--text-secondary)] mt-1">GitHub contribution tracker</p>
          </div>
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <GitHubActivity />
          </div>
        </div>

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      </div>
    </main>
  )
}

export default Home
