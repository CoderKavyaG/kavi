import React from 'react'
import ProfilePicture from '../components/ProfilePicture'
import SpotifyWidget from '../components/SpotifyWidget'
import CodingStats from '../components/CodingStats'
import FeaturedThreads from '../components/FeaturedThreads'
import GitHubActivity from '../components/GitHubActivity'
import { FaPaperPlane, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
  const { posts, loading } = useBlogPosts()
  const latestPosts = posts.slice(0, 1)

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
          <div className="w-28 h-28">
            <ProfilePicture />
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight" style={{ color: 'var(--text-color)' }}>
              Hi, I'm Kavi — <span style={{ color: '#9ca3af' }}>A Full Stack web developer.</span>
            </h1>
            
            <div className="space-y-3 text-base" style={{ color: '#9ca3af' }}>
              <p>
                I'm a 3rd year CSE student and Full Stack web developer. I build interactive web apps using{' '}
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

            <div className="flex gap-3 pt-2">
              <a 
                href="mailto:codecraftkavya@gmail.com"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                style={{ backgroundColor: 'var(--surface-color)', color: 'var(--text-color)' }}
              >
                <FaPaperPlane /> Get in touch
              </a>
            </div>

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

            <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <CodingStats />
              <SpotifyWidget />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <FeaturedThreads />
        </div>

        <div className="mt-16">
          <div className="mb-3">
            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>About</p>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
              Me
            </h2>
          </div>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-64 h-64 flex-shrink-0 rounded-2xl overflow-hidden bg-yellow-400">
              <img 
                src="https://i.ibb.co/LXGvTyqm/image.png"
                alt="Kavi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="flex-1 space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--text-color)' }}>
                  Kavi
                </h3>
                <p className="text-base leading-relaxed" style={{ color: '#9ca3af' }}>
                  I'm a Full Stack web developer and Open Source Contributor, I love building products to solve real-world problems. I'm specialized in building MVP's.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-3" style={{ color: 'var(--text-color)' }}>Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium" style={{ backgroundColor: '#61dafb', color: '#000' }}>
                    ⚛️
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#f0db4f', color: '#000' }}>
                    JS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#3178c6' }}>
                    TS
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#68a063' }}>
                    🍃
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#47A248' }}>
                    🍃
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#336791' }}>
                    🐘
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#0ea5e9' }}>
                    💎
                  </span>
                  <span className="inline-flex items-center px-3 py-1.5 rounded text-sm font-medium text-white" style={{ backgroundColor: '#000000' }}>
                    ▲
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-6">
            <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Featured</p>
            <h2 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
              Projects
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Portfolio Project */}
            <a
              href="https://github.com/CoderKavyaG/kavi"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--surface-color)', 
                borderColor: 'var(--border-color)'
              }}
            >
              <div className="relative h-48 overflow-hidden bg-gray-50" style={{ backgroundColor: 'var(--bg-color)' }}>
                <img 
                  src="https://i.ibb.co/5h8mbc6B/image.png"
                  alt="Portfolio"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>
                    Portfolio
                  </h3>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      All Systems Operational
                    </span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  My personal portfolio website built with React, featuring blog system, projects showcase, and real-time coding stats.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    React
                  </span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    Vite
                  </span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    Tailwind
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span 
                    className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>

            {/* Brainly Project */}
            <a
              href="https://github.com/CoderKavyaG/brainly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-xl"
              style={{ 
                backgroundColor: 'var(--surface-color)', 
                borderColor: 'var(--border-color)'
              }}
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
                  <h3 className="text-xl font-bold" style={{ color: 'var(--text-color)' }}>
                    Brainly
                  </h3>
                  <div className="flex gap-2 items-center">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                      All Systems Operational
                    </span>
                  </div>
                </div>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  A personal knowledge management system built to organize notes, documents, tweets, and links with tagging and search.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    React
                  </span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    TypeScript
                  </span>
                  <span className="px-2 py-1 rounded text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                    Tailwind CSS
                  </span>
                </div>
                <div className="flex items-center gap-2 pt-2">
                  <span 
                    className="text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all duration-200"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Blog Section */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-sm mb-1" style={{ color: 'var(--text-secondary)' }}>Featured</p>
              <h2 className="text-2xl font-bold" style={{ color: 'var(--text-color)' }}>
                Blogs
              </h2>
            </div>
            <Link 
              to="/blog"
              className="text-sm font-medium flex items-center gap-1 hover:gap-2 transition-all duration-200"
              style={{ color: 'var(--accent-color)' }}
            >
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 gap-6">
              <div 
                className="h-96 rounded-2xl animate-pulse" 
                style={{ backgroundColor: 'var(--surface-color)' }}
              ></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6">
              {latestPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]"
                  style={{ 
                    backgroundColor: 'var(--surface-color)', 
                    borderColor: 'var(--border-color)'
                  }}
                >
                  {/* Cover Image */}
                  <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                    <img 
                      src={post.coverImage} 
                      alt={post.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <h3 className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-white text-center px-6 tracking-wide">
                      {post.title.toUpperCase()}
                    </h3>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5 space-y-3">
                    <p className="text-sm line-clamp-2" style={{ color: 'var(--text-secondary)' }}>
                      {post.excerpt}
                    </p>
                    
                    <div className="flex gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="px-2 py-1 rounded-full text-xs"
                          style={{ 
                            backgroundColor: 'var(--accent-bg)', 
                            color: 'var(--text-secondary)' 
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between pt-2">
                      <span className="flex items-center gap-1 text-xs" style={{ color: 'var(--text-secondary)' }}>
                        <Calendar className="w-3 h-3" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      
                      <span 
                        className="flex items-center gap-1 text-xs font-medium group-hover:gap-2 transition-all duration-200"
                        style={{ color: 'var(--accent-color)' }}
                      >
                        Read More <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
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
