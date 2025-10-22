import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, ArrowRight } from 'lucide-react'

const Blog = () => {
  const { posts, loading } = useBlogPosts()

  if (loading) {
    return (
      <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-8 rounded w-1/3" style={{ backgroundColor: 'var(--surface-color)' }}></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="h-80 rounded-lg" style={{ backgroundColor: 'var(--surface-color)' }}></div>
              ))}
            </div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <header className="mb-12">
          <p className="text-sm mb-2" style={{ color: 'var(--text-secondary)' }}>Featured</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
            Blogs
          </h1>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.map((post) => (
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
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                <h2 className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white text-center px-6 tracking-wide">
                  {post.title.toUpperCase()}
                </h2>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-4">
                <p className="text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {post.excerpt}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium"
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
                  <span className="flex items-center gap-2 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-4 h-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'long', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  
                  <span 
                    className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-200"
                    style={{ color: 'var(--accent-color)' }}
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
            className="px-6 py-3 rounded-lg border font-medium transition-all duration-200 hover:shadow-lg"
            style={{ 
              backgroundColor: 'var(--surface-color)', 
              borderColor: 'var(--border-color)',
              color: 'var(--text-color)'
            }}
          >
            Show all blogs
          </button>
        </div>
      </div>
    </main>
  )
}

export default Blog
