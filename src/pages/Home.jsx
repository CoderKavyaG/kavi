import React, { useState, useEffect } from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import GitHubActivity from '../components/GitHubActivity'
import ProofOfWork from '../components/ProofOfWork'

import ContactModal from '../components/ContactModal'
import { Link } from 'react-router-dom'
import { GitBranch, BookOpen, Github } from 'lucide-react'
import { blogPosts } from '../data/blogPosts'

const Home = () => {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)
  const [activeTab, setActiveTab] = useState('items')

  useEffect(() => {
    const tabInterval = setInterval(() => {
      setActiveTab(prev => {
        if (prev === 'items') return 'skills'
        if (prev === 'skills') return 'stats'
        return 'items'
      })
    }, 7000)

    return () => clearInterval(tabInterval)
  }, [])

  const techStack = [
    { name: 'Typescript', icon: 'TS', bgColor: '#3178c6' },
    { name: 'React', icon: '⚛️', bgColor: '#61dafb', textColor: '#000' },
    { name: 'Next.js', icon: 'N', bgColor: '#000000' },
    { name: 'Bun', icon: '🥟', bgColor: '#fbf0df', textColor: '#000' },
    { name: 'PostgreSQL', icon: '🐘', bgColor: '#336791' },
    { name: 'Three.js', icon: '', bgColor: '#000000' }
  ]

  return (
    <main className="min-h-screen pt-24 pb-16 bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* MAIN CONTENT */}

        {/* PROFILE SECTION */}
        <div className="mb-12">
          <div className="flex items-center gap-8">
            <div className="relative flex-shrink-0">
              <div className="absolute -inset-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-white bg-[var(--bg-color)] overflow-hidden shadow-lg">
                <ProfilePicture />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-[var(--accent-color)] border-4 border-white px-3 py-1.5 text-sm font-bold text-black rounded-full shadow-md">
                LVL 21
              </div>
            </div>

            <div className="flex-1">
              <p className="text-xs font-mono text-[var(--text-secondary)] mb-2">▸ PLAYER.NAME</p>
              <h1 className="text-3xl sm:text-4xl font-bold font-mono uppercase tracking-wider text-[var(--text-color)] mb-2">
                KAVI
              </h1>
              <p className="text-sm font-mono text-[var(--text-secondary)]">
                CLASS: <span className="text-[var(--text-color)] font-bold">FULL STACK DEVELOPER</span>
              </p>
            </div>
          </div>
        </div>

        {/* SKILLS & STATS SECTION */}
        <div className="mb-12">
          {/* Tab Navigation */}
          <div className="flex gap-2 mb-6">
            <button
              onClick={() => setActiveTab('items')}
              className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors rounded-lg ${activeTab === 'items'
                  ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)] font-bold'
                  : 'bg-slate-800 text-slate-300 border-2 border-slate-700 hover:border-slate-500'
                }`}
            >
              ITEMS
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors rounded-lg ${activeTab === 'skills'
                  ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)] font-bold'
                  : 'bg-slate-800 text-slate-300 border-2 border-slate-700 hover:border-slate-500'
                }`}
            >
              SKILLS
            </button>
            <button
              onClick={() => setActiveTab('stats')}
              className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors rounded-lg ${activeTab === 'stats'
                  ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)] font-bold'
                  : 'bg-slate-800 text-slate-300 border-2 border-slate-700 hover:border-slate-500'
                }`}
            >
              STATS
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-[var(--surface-color)]/50 rounded-2xl p-6 border border-[var(--border-color)]">
            {/* Items Tab */}
            {activeTab === 'items' && (
              <div className="space-y-6">
                <div>
                  <h3 className="text-base font-bold font-mono mb-3 text-[var(--text-color)]">
                    ▸ PLAYER INFO
                  </h3>
                  <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
                    I am a college student at a tier-3 college and realised late that I love doing web development, so I'm currently learning and building projects in web development.
                  </p>
                </div>
                <div className="pt-4 border-t border-[var(--border-color)]">
                  <h3 className="text-sm font-bold font-mono mb-2 text-[var(--accent-color)]">
                    ▸ CURRENT QUEST
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
                  <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">
                    ▸ FRONTEND ABILITIES
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-transparent border-2 border-[var(--border-color)] rounded-lg p-3 hover:bg-cyan-500/20 hover:border-cyan-500 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-[var(--text-color)]">⚛️ REACT</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-cyan-500"></div>
                        <div className="w-2 h-2 bg-cyan-500"></div>
                        <div className="w-2 h-2 bg-cyan-500"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                      </div>
                    </div>
                    <div className="bg-transparent border-2 border-[var(--border-color)] rounded-lg p-3 hover:bg-blue-500/20 hover:border-blue-500 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-[var(--text-color)]">TS TYPESCRIPT</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-blue-500"></div>
                        <div className="w-2 h-2 bg-blue-500"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                      </div>
                    </div>
                    <div className="bg-transparent border-2 border-slate-600 rounded-lg p-3 hover:bg-cyan-600/20 hover:border-cyan-600 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-white">🎨 TAILWIND</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-cyan-600"></div>
                        <div className="w-2 h-2 bg-cyan-600"></div>
                        <div className="w-2 h-2 bg-cyan-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">
                    ▸ BACKEND ABILITIES
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    <div className="bg-transparent border-2 border-slate-600 rounded-lg p-3 hover:bg-green-500/20 hover:border-green-500 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-[var(--text-color)]">⬢ NODE.JS</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <div className="w-2 h-2 bg-green-500"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                      </div>
                    </div>
                    <div className="bg-transparent border-2 border-slate-600 rounded-lg p-3 hover:bg-emerald-500/20 hover:border-emerald-500 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-[var(--text-color)]">🍃 MONGODB</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-green-500"></div>
                        <div className="w-2 h-2 bg-green-500"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                      </div>
                    </div>
                    <div className="bg-transparent border-2 border-slate-600 rounded-lg p-3 hover:bg-blue-500/20 hover:border-blue-500 transition-colors">
                      <p className="text-xs font-mono font-bold mb-2 text-[var(--text-color)]">🐘 POSTGRESQL</p>
                      <div className="flex gap-0.5">
                        <div className="w-2 h-2 bg-blue-600"></div>
                        <div className="w-2 h-2 bg-blue-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
                        <div className="w-2 h-2 bg-slate-600"></div>
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
        <div className="mb-12">
          <ProofOfWork />
        </div>

        {/* GITHUB ACTIVITY */}
        <div className="mb-12">
          <div className="rounded-2xl p-6 border border-[var(--border-color)] bg-[var(--surface-color)]/30">
            <GitHubActivity />
          </div>
        </div>

        {/* FEATURED BLOGS SECTION */}
        <div className="mb-12">
          <p className="text-xs font-mono text-[var(--text-secondary)] mb-3">Featured</p>
          <h2 className="text-2xl sm:text-3xl font-bold font-mono uppercase text-[var(--text-color)] mb-8">Blogs</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="rounded-2xl border-2 border-[var(--border-color)] overflow-hidden hover:shadow-lg transition-all group bg-[var(--surface-color)]"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[var(--border-color)] to-[var(--surface-color)] rounded-t-2xl">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-white text-black px-2.5 py-1 rounded-md font-semibold border border-white">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-base font-bold font-mono text-[var(--text-color)] line-clamp-2 group-hover:text-[var(--accent-color)] transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-xs font-mono text-slate-400 flex items-center gap-2">
                    <span>{blog.date}</span>
                    <span>•</span>
                    <span>{blog.readTime}</span>
                  </p>
                  <p className="text-xs font-mono text-slate-400 line-clamp-2">
                    {blog.excerpt || 'Explore this insightful post...'}
                  </p>
                  <button className="w-full border-2 border-white bg-white text-black px-3 py-2 rounded-lg font-mono text-xs font-bold uppercase hover:bg-slate-100 transition-colors">
                    READ MORE
                  </button>
                </div>
              </Link>
            ))}
          </div>

          {blogPosts.length > 2 && (
            <div className="flex justify-center pt-8">
              <Link
                to="/blog"
                className="border-2 border-white bg-white text-black px-8 py-3 rounded-lg hover:bg-slate-100 transition-all font-mono text-sm font-bold uppercase"
              >
                SHOW ALL BLOGS
              </Link>
            </div>
          )}
        </div>

        {/* Quote Section Above Footer */}
        <div className="mt-16 py-12 border-t border-[var(--border-color)]">
          <div className="text-center rounded-2xl border-2 border-[var(--border-color)] bg-[var(--surface-color)] p-8">
            <p className="font-mono text-lg sm:text-xl italic text-[var(--text-color)] mb-3">
              "Nothing sits heavy as the crown on the king"
            </p>
            <p className="font-mono text-sm text-[var(--text-secondary)]">— KING</p>
          </div>
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  )
}

export default Home
