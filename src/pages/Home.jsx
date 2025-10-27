import React, { useState } from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import FeaturedThreads from '../components/FeaturedThreads'
import GitHubActivity from '../components/GitHubActivity'
import ContactModal from '../components/ContactModal'
import { FaPaperPlane } from 'react-icons/fa'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowRight, FileText, Github, Twitter, Linkedin, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { posts, loading } = useBlogPosts()
  // Always feature the Mandela Effect blog on top
  const mandelaPost = posts.find(p => p.slug === 'ai-mandela-effect-pikachu-tail')
  const latestPosts = mandelaPost ? [mandelaPost] : posts.slice(0, 1)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

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
      <div className="max-w-3xl mx-auto px-6 py-8">
        <div className="flex flex-col items-start space-y-6">
          <div className="w-28 h-28">
            <ProfilePicture />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[var(--text-color)]">
              Hi, I'm Kavi — <span className="text-[var(--text-secondary)]">A Full Stack web developer.</span>
            </h1>
            
            <div className="space-y-3 text-sm sm:text-base text-[var(--text-secondary)]">
              <p>
                I'm a 3rd year CSE student and Full Stack web developer. I build interactive web apps using{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium mx-1 bg-[#61dafb] text-black">
                  ⚛️ React
                </span>{' '}
                ,{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1 bg-[#3178c6]">
                  TS TypeScript
                </span>{' '}
                , and{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1 mt-2 sm:mt-0 bg-[#47A248]">
                  🍃 MongoDB
                </span>
                .
              </p>
              
              <p>
                I have worked with{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1 bg-black">
                  N Next.js
                </span>{' '}
                and{' '}
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1 bg-[#336791]">
                  🐘 PostgreSQL
                </span>
                , and I'm currently learning and exploring them deeper to build more scalable applications.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors duration-200 hover:opacity-80 bg-[var(--accent-bg)] text-[var(--text-color)]"
              >
                <FaPaperPlane className="w-3 h-3 sm:w-4 sm:h-4" /> 
                <span className="hidden sm:inline">Get in touch</span>
                <span className="sm:hidden">Contact</span>
              </button>
                <Link 
                to="/resume"
                className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 hover:opacity-80 bg-[var(--accent-color)] text-white"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4" /> 
                <span className="hidden sm:inline">View Resume</span>
                <span className="sm:hidden">Resume</span>
              </Link>
            </div>

            <div className="flex gap-4 pt-1">
              <a 
                href="https://twitter.com/coderkavyag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/coderkavyag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/coderkavyag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodingStats />
              <SpotifyWidget />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <p className="text-xs sm:text-sm mb-1 text-[var(--text-secondary)]">Featured</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">Projects</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a
              href="https://github.com/CoderKavyaG/kavi"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl bg-[var(--surface-color)] border-[var(--border-color)]"
            >
              <div className="relative h-48 overflow-hidden bg-[var(--bg-color)]">
                <img 
                  src="https://i.ibb.co/5h8mbc6B/image.png"
                  alt="Portfolio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[var(--text-color)]">
                    Portfolio
                  </h3>
                  <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs text-[var(--text-secondary)]">
                        you currently here
                      </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  My personal portfolio website built with React, featuring blog system, projects showcase, and real-time coding stats.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    React
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    Vite
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    Tailwind
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 text-[var(--accent-color)]">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>

            <a
              href="https://github.com/CoderKavyaG/brainly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl bg-[var(--surface-color)] border-[var(--border-color)]"
            >
              <div className="relative h-48 overflow-hidden bg-white">
                <img 
                  src="https://i.ibb.co/6Jt6gStD/image.png"
                  alt="Brainly"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-[var(--text-color)]">
                    Brainly
                  </h3>
                  <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                      <span className="text-xs text-[var(--text-secondary)]">
                        Currently in development
                      </span>
                  </div>
                </div>
                <p className="text-sm text-[var(--text-secondary)]">
                  A personal knowledge management system built to organize notes, documents, tweets, and links with tagging and search.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    React
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    TypeScript
                  </span>
                  <span className="px-2 py-1 rounded text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200 text-[var(--accent-color)]">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-3">
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">About Me</h2>
          </div>
          <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-start">
            <div className="w-full sm:w-56 md:w-64 h-56 sm:h-56 md:h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-yellow-400 mx-auto md:mx-0">
              <img 
                src="https://i.ibb.co/LXGvTyqm/image.png"
                alt="Kavi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--text-color)]">
                  Kavi
                </h3>
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  I am a college student at a tier-3 college and realised late that I love doing web development, so I'm currently learning and building projects in web development.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3 text-[var(--text-color)]">Skills</h4>
                <div className="flex flex-wrap gap-2 items-center">
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium bg-[#61dafb] text-black">
                    ⚛️ React
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white bg-[#3178c6]">
                    TS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white bg-[#47A248]">
                    🐘 MongoDB
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-black bg-[#f0db4f]">
                    JS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white bg-[#3b82f6]">
                    Node.js
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white bg-[#336791]">
                    🐘 PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <p className="text-xs sm:text-sm mb-1 text-[var(--text-secondary)]">Read my</p>
            <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">Tweet Threads</h2>
          </div>
          <FeaturedThreads />
        </div>

        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs sm:text-sm mb-1 text-[var(--text-secondary)]">Checkout</p>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">My Blogs</h2>
            </div>
            <Link
              to="/blog"
              className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200 text-[var(--accent-color)]"
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
            {loading ? (
            <div className="grid grid-cols-1 gap-6">
              <div className="h-80 rounded-2xl animate-pulse bg-[var(--surface-color)]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:border-[var(--accent-color)]/40 bg-[var(--surface-color)] border-[var(--border-color)]"
                >
                  {/* Horizontal Layout */}
                  <div className="flex flex-col sm:flex-row">
                    {/* Image Section */}
                    <div className="relative h-48 sm:h-auto sm:w-72 overflow-hidden flex-shrink-0">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t sm:bg-gradient-to-r from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-between">
                      {/* Top Content */}
                      <div className="space-y-3">
                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-color)] leading-tight group-hover:text-[var(--accent-color)] transition-colors duration-300">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm sm:text-base leading-relaxed line-clamp-2 text-[var(--text-secondary)]">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 pt-2">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-bg)] text-[var(--text-secondary)] border border-[var(--border-color)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Footer */}
                      <div className="flex items-center justify-between pt-4 mt-4 border-t border-[var(--border-color)]">
                        <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(post.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })}
                          </span>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-medium text-[var(--accent-color)] group-hover:gap-3 transition-all duration-300">
                          Read Article
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="mt-12 mb-8">
          <GitHubActivity />
        </div>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </main>
  )
}

export default Home
