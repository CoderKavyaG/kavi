import React, { useEffect, useRef, useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowLeft, Tag, Heart, BookOpen, Code } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'
import LikeButton from '../components/LikeButton'
import CommentsSection from '../components/CommentsSection'

const BlogPost = () => {
  // Progress bar state
  const [progress, setProgress] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = contentRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalHeight = el.scrollHeight - windowHeight;
      const scrollTop = window.scrollY - el.offsetTop;
      let percent = 0;
      if (totalHeight > 0) {
        percent = Math.min(100, Math.max(0, (scrollTop / totalHeight) * 100));
      }
      setProgress(percent);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const { slug } = useParams()
  const { posts, loading } = useBlogPosts()
  
  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-6">
            <div className="h-8 rounded w-1/3 bg-[var(--surface-color)]"></div>
            <div className="h-64 rounded-lg bg-[var(--surface-color)]"></div>
            <div className="space-y-3">
              <div className="h-4 rounded w-full bg-[var(--surface-color)]"></div>
              <div className="h-4 rounded w-5/6 bg-[var(--surface-color)]"></div>
            </div>
          </div>
        </div>
      </main>
    )
  }

  const post = posts.find(p => p.slug === slug)

  if (!post) {
    return <Navigate to="/blog" replace />
  }

  return (
    <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full z-50 h-1 bg-transparent">
        <div
          className="h-full bg-[var(--accent-color)] transition-all duration-200"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div ref={contentRef} className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 text-xs sm:text-sm hover:opacity-70 transition-opacity duration-200 text-[var(--text-secondary)]"
        >
          <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4" />
          Back to all blogs
        </Link>

        <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-6 sm:mb-8">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-2 sm:mb-4 text-white tracking-tight">
              {post.title}
            </h1>
            {post.excerpt && post.excerpt.trim().length > 0 && (
              <p className="text-sm sm:text-base md:text-xl text-gray-200 leading-relaxed max-w-2xl">
                {post.excerpt}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-[var(--border-color)]">
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Calendar className="w-4 h-4" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric'
              })}
            </time>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Clock className="w-4 h-4" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <Tag className="w-4 h-4 text-[var(--text-secondary)]" />
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
          </div>
          <div className="ml-auto">
            <LikeButton slug={post.slug} />
          </div>
        </div>

        <article className="max-w-none text-[var(--text-secondary)]">
            <ReactMarkdown rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({node, ...props}) => <h1 className="text-3xl sm:text-4xl font-bold text-[var(--text-color)] mb-4" {...props} />,
                h2: ({node, ...props}) => <h2 className="text-2xl sm:text-3xl font-bold text-[var(--text-color)] mt-8 mb-3" {...props} />,
                h3: ({node, ...props}) => <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-color)] mt-6 mb-2" {...props} />,
                p: ({node, ...props}) => <p className="leading-relaxed mb-4" {...props} />,
                ul: ({node, ...props}) => <ul className="list-disc pl-6 space-y-1 mb-4" {...props} />,
                ol: ({node, ...props}) => <ol className="list-decimal pl-6 space-y-1 mb-4" {...props} />,
                li: ({node, ...props}) => <li className="leading-relaxed" {...props} />,
                code: ({node, inline, className, children, ...props}) => (
                  <code className={`rounded bg-[var(--surface-color)] px-1.5 py-0.5 ${className || ''}`} {...props}>{children}</code>
                ),
                pre: ({node, ...props}) => (
                  <pre className="rounded-lg bg-[var(--surface-color)] border border-[var(--border-color)] p-4 overflow-x-auto mb-4" {...props} />
                ),
                img: ({node, ...props}) => (
                  (() => {
                    const src = props.src || ''
                    const alt = (props.alt || '').toString().toLowerCase()
                    const isProcessingDiagram = alt.includes('processing') || src.includes('Rk4Xw2NL')
                    const isPikachu = alt.includes('pikachu') || src.includes('GQwqDqb4')
                    if (isProcessingDiagram) {
                      return (
                        <div className="w-full overflow-hidden rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] my-4">
                          <img
                            loading="lazy"
                            src={src}
                            alt={props.alt}
                            className="w-full h-72 sm:h-80 md:h-96 object-cover object-bottom"
                          />
                        </div>
                      )
                    }
                    if (isPikachu) {
                      return (
                        <img
                          loading="lazy"
                          src={src}
                          alt={props.alt}
                          className="w-full h-auto rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] my-4 object-contain"
                        />
                      )
                    }
                    return (
                      <img
                        loading="lazy"
                        className="w-full rounded-xl border border-[var(--border-color)] bg-[var(--surface-color)] my-4"
                        {...props}
                      />
                    )
                  })()
                ),
                blockquote: ({node, ...props}) => (
                  <blockquote className="border-l-4 border-[var(--accent-color)]/60 pl-4 italic mb-4" {...props} />
                )
              }}
            >
              {post.content}
            </ReactMarkdown>
          </article>

        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity duration-200 text-[var(--accent-color)]"
          >
            <ArrowLeft className="w-4 h-4" />
            View all blogs
          </Link>
        </div>
        {/* Comments Section */}
        <div className="max-w-4xl mx-auto px-4 pb-12">
          <CommentsSection postId={post.slug} />
        </div>
      </div>
    </main>
  )
}

export default BlogPost
