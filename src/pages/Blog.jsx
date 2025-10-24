import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, BookOpen } from 'lucide-react'

const Blog = () => {
  const { posts, loading } = useBlogPosts()

  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-16 border-4 border-[var(--text-color)] bg-[var(--surface-color)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map((i) => (
                <div key={i} className="h-96 border-4 border-[var(--text-color)] bg-[var(--surface-color)]"></div>
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
          <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-[var(--text-color)]" />
              <div>
                <h1 className="text-xl md:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
                  ▸ Quest Journal
                </h1>
                <p className="text-xs font-mono text-[var(--text-secondary)] mt-0.5">
                  Winter Arc chronicles and dev logs
                </p>
              </div>
            </div>
          </div>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="border-4 border-[var(--border-color)] overflow-hidden bg-[var(--surface-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
            >
              {/* Gaming Header */}
              <div className="bg-[var(--surface-color)] border-b-4 border-[var(--border-color)] px-3 py-2 flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-[var(--text-color)]">
                  LOG #{String(index + 1).padStart(3, '0')}
                </span>
                <Calendar className="w-4 h-4 text-[var(--text-secondary)]" />
              </div>

              {/* Image */}
              <div className="relative h-40 overflow-hidden border-b-4 border-[var(--border-color)] bg-[var(--bg-color)]">
                <img 
                  src={post.coverImage} 
                  alt={post.title}
                  className="w-full h-full object-cover opacity-70"
                />
              </div>
              
              {/* Content */}
              <div className="p-4 space-y-3">
                <h2 className="text-base font-bold font-mono uppercase text-[var(--text-color)] leading-tight">
                  {post.title}
                </h2>

                <p className="text-xs leading-relaxed font-mono text-[var(--text-secondary)] line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex gap-2 flex-wrap">
                  {post.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-0.5 border-2 border-[var(--border-color)] text-xs font-mono bg-[var(--bg-color)] text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-2 border-t-2 border-dashed border-[var(--border-color)]">
                  <span className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric', 
                      year: 'numeric' 
                    })}
                  </span>
                  
                  <span className="text-xs font-mono text-[var(--text-color)]">
                    READ →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Blog
