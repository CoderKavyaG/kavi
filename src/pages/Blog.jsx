import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, ArrowRight } from 'lucide-react'

const Blog = () => {
  const { posts, loading } = useBlogPosts()

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 rounded w-1/3 bg-[var(--surface-color)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="h-80 rounded-lg bg-[var(--surface-color)]"></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12">
          <p className="text-sm mb-2 text-[var(--text-secondary)]">Featured</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--text-color)]">
            Blogs
          </h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border transition-all duration-300 hover:-translate-y-2 bg-[var(--surface-color)] border-[var(--border-color)]"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(7,10,13,0.25)] to-[rgba(7,10,13,0.6)] transition-colors duration-300"></div>
                <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white text-center px-6 tracking-wide">
                  {post.title.toUpperCase()}
                </h2>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-base leading-relaxed text-[var(--text-secondary)]">
                  {post.excerpt}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--accent-bg)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2">
                  <span className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  
                  <span 
                    className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-200 text-[var(--accent-color)]"
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <button 
            className="px-6 py-3 rounded-lg border font-medium transition-all duration-200 hover:shadow-lg bg-[var(--surface-color)] border-[var(--border-color)] text-[var(--text-color)]"
          >
            Show all blogs
          </button>
        </div>
      </div>
    </main>
  )
}

export default Blog
