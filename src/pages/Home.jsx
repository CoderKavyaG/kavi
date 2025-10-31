import React, { useState } from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import GitHubActivity from '../components/GitHubActivity'
import ProofOfWork from '../components/ProofOfWork'
import GetInTouch from '../components/GetInTouch'
import ContactModal from '../components/ContactModal'
import { Link } from 'react-router-dom'

const Home = () => {
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
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* OUTER DOTTED BOX - CONTAINS EVERYTHING */}
        <div className="border-2 border-dashed border-[var(--border-color)] p-6 sm:p-8 relative">
          {/* Padding Label */}
          <span className="absolute top-1 left-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">padding: 32px</span>
          
          {/* PROFILE SECTION */}
          <div className="mb-8 pb-8 border-b-2 border-dotted border-[var(--border-color)] relative">
            <span className="absolute top-1 right-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">margin-bottom: 32px</span>
            <div className="flex items-center gap-6">
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-to-br from-[var(--accent-color)] to-purple-500 rounded-full animate-pulse"></div>
                <div className="relative w-32 h-32 sm:w-36 sm:h-36 rounded-full border-4 border-[var(--text-color)] bg-[var(--bg-color)] overflow-hidden">
                  <ProfilePicture />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-[var(--accent-color)] border-4 border-[var(--text-color)] px-3 py-1.5 text-sm font-bold text-black rounded">
                  LVL 21
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-[var(--bg-color)] border-2 border-[var(--border-color)] px-3 py-2 mb-2 relative">
                  <span className="absolute -top-3 right-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-50">font-size: 24px</span>
                  <p className="text-xs font-mono text-[var(--text-secondary)] mb-1 relative">
                    <span className="absolute -left-16 text-[9px] opacity-50">12px</span>
                    ▸ PLAYER.NAME
                  </p>
                  <h1 className="text-lg sm:text-xl md:text-2xl font-bold font-mono uppercase tracking-wider text-[var(--text-color)]">
                    KAVI
                  </h1>
                </div>
                <div className="bg-[var(--bg-color)] border-2 border-[var(--border-color)] px-3 py-1.5 relative">
                  <span className="absolute -top-3 right-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-50">font-size: 12px</span>
                  <p className="text-xs font-mono text-[var(--text-secondary)]">
                    CLASS: <span className="text-[var(--text-color)] font-bold">FULL STACK DEVELOPER</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

              {/* Tab Navigation */}
              <div className="flex gap-2 mb-6 relative">
                <span className="absolute -top-4 left-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-60">font-size: 14px</span>
                <button
                  onClick={() => setActiveTab('items')}
                  className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
                    activeTab === 'items'
                      ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
                      : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
                  }`}
                >
                  ITEMS
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
                    activeTab === 'skills'
                      ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
                      : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
                  }`}
                >
                  SKILLS
                </button>
                <button
                  onClick={() => setActiveTab('stats')}
                  className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
                    activeTab === 'stats'
                      ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
                      : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
                  }`}
                >
                  STATS
                </button>
              </div>

              {/* Tab Content */}
              <div className="border-2 border-dashed border-[var(--border-color)] bg-[var(--surface-color)] p-6 relative">
                <span className="absolute top-1 left-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">padding: 24px</span>
                {/* Items Tab */}
                {activeTab === 'items' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-bold font-mono mb-3 text-[var(--text-color)] flex items-center gap-2 relative">
                        <span className="absolute -top-4 left-0 text-[9px] text-[var(--text-secondary)] opacity-50">font-size: 16px</span>
                        <span>▸</span> PLAYER INFO
                      </h3>
                      <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)] relative">
                        <span className="absolute -left-12 top-0 text-[9px] text-[var(--text-secondary)] opacity-50">14px</span>
                        I am a college student at a tier-3 college and realised late that I love doing web development, so I'm currently learning and building projects in web development.
                      </p>
                    </div>
                    <div className="pt-4 border-t-2 border-[var(--border-color)]">
                      <h3 className="text-sm font-bold font-mono mb-2 text-[var(--accent-color)] flex items-center gap-2 relative">
                        <span className="absolute -top-4 left-0 text-[9px] text-[var(--text-secondary)] opacity-50">font-size: 14px</span>
                        <span>▸</span> CURRENT QUEST
                      </h3>
                      <p className="text-xs font-mono text-[var(--text-secondary)]">
                        Building modern web applications with React & TypeScript
                      </p>
                    </div>
                  </div>
                )}

                {/* Skills Tab */}
                {activeTab === 'skills' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)] relative">
                        <span className="absolute -top-4 left-0 text-[9px] text-[var(--text-secondary)] opacity-50">font-size: 16px</span>
                        ▸ FRONTEND ABILITIES
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
                        <span className="absolute -top-5 right-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-50">font-size: 12px</span>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#61dafb] hover:text-black transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⚛️ REACT</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#3178c6] hover:text-white transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">TS TYPESCRIPT</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#06b6d4] hover:text-white transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🎨 TAILWIND</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)] relative">
                        <span className="absolute -top-4 left-0 text-[9px] text-[var(--text-secondary)] opacity-50">font-size: 16px</span>
                        ▸ BACKEND ABILITIES
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 relative">
                        <span className="absolute -top-5 right-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-50">font-size: 12px</span>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#3b82f6] hover:text-white transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⬢ NODE.JS</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#47A248] hover:text-white transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🍃 MONGODB</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                        <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#336791] hover:text-white transition-colors">
                          <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🐘 POSTGRESQL</p>
                          <div className="flex gap-0.5">
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-current"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                            <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Stats Tab */}
                {activeTab === 'stats' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <CodingStats />
                    <SpotifyWidget />
                  </div>
                )}
              </div>

            </div>

          {/* PROOF OF WORK SECTION */}
          <div className="mt-8 pt-8 border-t-2 border-dotted border-[var(--border-color)] relative">
            <span className="absolute top-1 right-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">margin-top: 32px</span>
            <ProofOfWork />
          </div>

          {/* GITHUB ACTIVITY */}
          <div className="mt-8 pt-8 border-t-2 border-dotted border-[var(--border-color)] relative">
            <span className="absolute top-1 right-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">margin-top: 32px</span>
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-bold font-mono uppercase text-[var(--text-color)] relative">
                <span className="absolute -top-5 left-0 text-[9px] font-mono text-[var(--text-secondary)] opacity-50">font-size: 24px</span>
                ▸ Code Missions
              </h2>
              <p className="text-xs font-mono text-[var(--text-secondary)] mt-1">GitHub contribution tracker</p>
            </div>
            <GitHubActivity />
          </div>

          {/* GET IN TOUCH SECTION */}
          <div className="mt-8 pt-8 border-t-2 border-dotted border-[var(--border-color)] relative">
            <span className="absolute top-1 right-1 text-[10px] font-mono text-[var(--text-secondary)] opacity-60">margin-top: 32px</span>
            <GetInTouch />
          </div>
          
        </div>
        {/* END OUTER DOTTED BOX */}

        <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  )
}

export default Home
