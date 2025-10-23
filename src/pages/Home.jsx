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
                <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium text-white mx-1 bg-[#47A248]">
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
                <FaXTwitter />
              </a>
              <a 
                href="https://www.linkedin.com/in/coderkavyag/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <FaLinkedin />
              </a>
              <a 
                href="https://github.com/coderkavyag" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <FaGithub />
              </a>
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="text-xl hover:opacity-70 transition-opacity duration-200 text-[var(--text-color)]"
              >
                <FaEnvelope />
              </a>
            </div>

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodingStats />
              <SpotifyWidget />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-4">
            <h2 className="text-xl font-bold flex items-center gap-2 text-[var(--text-color)]">
              <FaXTwitter className="text-lg" />
              Featured Threads
            </h2>
          </div>
          <FeaturedThreads />
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
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-xs sm:text-sm mb-1 text-[var(--text-secondary)]">Featured</p>
              <h2 className="text-xl sm:text-2xl font-bold text-[var(--text-color)]">Blogs</h2>
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
              <div className="h-96 rounded-2xl animate-pulse bg-[var(--surface-color)]" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border transition-transform duration-250 hover:-translate-y-1.5 hover:scale-[1.01] bg-[var(--surface-color)] border-[var(--border-color)]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center px-6 bg-gradient-to-b from-[rgba(7,10,13,0.25)] to-[rgba(7,10,13,0.6)]">
                      <h3 className="text-2xl font-bold text-white text-center tracking-wider">
                        {post.title.toUpperCase()}
                      </h3>
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <p className="text-sm line-clamp-2 text-[var(--text-secondary)]">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-full text-xs bg-[var(--accent-bg)] text-[var(--text-secondary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1 text-xs text-[var(--text-secondary)]">
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </span>

                      <span
                        className="flex items-center gap-2 text-sm font-medium transition-opacity duration-200 text-[var(--accent-color)]"
                      >
                        Read More <ArrowRight className="w-4 h-4" />
                      </span>
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
