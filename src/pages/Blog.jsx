import React from 'react'
import { Link } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, BookOpen, Twitter } from 'lucide-react'

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
          <h1 className="text-3xl md:text-4xl font-bold font-mono uppercase text-[var(--text-color)] flex items-center gap-3">
            <BookOpen className="w-8 h-8" />
            ▸ Blogs
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="rounded-2xl border-2 border-[var(--border-color)] overflow-hidden bg-[var(--surface-color)] hover:shadow-lg transition-all group"
            >
              {/* Gaming Header */}
              <div className="bg-[var(--surface-color)] border-b-2 border-[var(--border-color)] px-3 py-2 flex items-center justify-between">
                <span className="font-mono font-bold text-xs text-[var(--text-color)]">
                  LOG #{String(index + 1).padStart(3, '0')}
                </span>
                <Calendar className="w-4 h-4 text-[var(--text-secondary)]" />
              </div>

              {/* Image */}
              <div className="relative h-40 overflow-hidden border-b-2 border-[var(--border-color)] bg-[var(--surface-color)]">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-85"
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
                      className="px-2 py-0.5 border-2 border-[var(--border-color)] text-xs font-mono bg-[var(--surface-color)] text-[var(--text-color)]"
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
        {/* Journey Message */}
        <div className="mt-12 pt-8 border-t-2 border-dashed border-[var(--border-color)]">
          <p className="flex items-center justify-center gap-2 font-mono text-sm text-[var(--text-secondary)]">
            <a
              href="https://x.com/coderkavyag"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--text-color)] transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            Check X (Twitter) for the journey • New blogs will come too
          </p>
        </div>      </div>
    </main>
  )
}

export default Blog
