import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, ArrowRight, Clock } from 'lucide-react'

const getReadingTime = (post) => {
  if (post.readTime && typeof post.readTime === 'string' && /\D/.test(post.readTime)) {
    return post.readTime
  }
  const text = (post.content || '')
    .replace(/[#*_`>\-]/g, ' ')
    .replace(/\n+/g, ' ')
  const words = text.trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 220))
  return `${minutes} min read`
}

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
        <header className="mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-[var(--accent-bg)] text-[var(--text-secondary)] mb-3">
            <span>Writing</span>
            <span className="opacity-60">•</span>
            <span>Design • Code • Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-3 text-[var(--text-color)]">Blogs</h1>
          <p className="text-[var(--text-secondary)] max-w-2xl">Stories and notes from building products, learning in public, and the Winter Arc journey.</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group relative rounded-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[var(--accent-color)]/40 via-transparent to-transparent opacity-60 group-hover:opacity-100 blur-[1px]" aria-hidden="true"></div>

              <div className="relative rounded-2xl overflow-hidden border bg-[var(--surface-color)] border-[var(--border-color)]">
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={post.coverImage} 
                    alt={post.title}
                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/60"></div>
                  <h2 className="absolute bottom-3 left-4 right-4 text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {post.title}
                  </h2>
                </div>

                <div className="p-6 space-y-4">
                  {post.excerpt && post.excerpt.trim().length > 0 && (
                    <p className="text-base leading-relaxed text-[var(--text-secondary)] line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

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
                    <span className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
                      <Clock className="w-4 h-4" />
                      {getReadingTime(post)}
                    </span>
                  </div>

                  <div className="flex items-center justify-end">
                    <span 
                      className="inline-flex items-center gap-1 text-sm font-semibold group-hover:gap-2 transition-all duration-200 text-[var(--accent-color)]"
                    >
                      Read <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
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
