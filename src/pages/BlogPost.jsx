import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowLeft, Tag, Target, Heart, Brain, Dumbbell, BookOpen, Code } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

const BlogPost = () => {
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

  const isWinterArc = post.slug === 'winter-arc-journey'

  return (
    <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
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
              {post.title} {isWinterArc && '❄️'}
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
        </div>

        
        {isWinterArc ? (
          <article className="space-y-12">
            
            <section className="space-y-8">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4 text-[var(--text-color)]">
                  Winter Arc Goals
                </h2>
                <p className="text-lg text-[var(--text-secondary)]">
                  Next 90 Days
                </p>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-bg)]">
                    <Target className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-color)]">
                    Acquire Skills
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Finish @kirat_tw web-dev cohort and build good projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Start with DevOps after web dev</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Start with DSA in consistent manner</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Get good grasp of core CS subjects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Track coding periods and improve them</span>
                    </li>
                  </ul>
                </div>

                
                <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-bg)]">
                    <Dumbbell className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-color)]">
                    Body Shape
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Muscle building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Improve my sleep cycle</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Get into a clean balanced diet</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Start exercising and lose weight</span>
                    </li>
                  </ul>
                </div>

                
                <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4 bg-[var(--accent-bg)]">
                    <Brain className="w-6 h-6 text-[var(--accent-color)]" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-[var(--text-color)]">
                    Mental Well-being
                  </h3>
                  <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>End my doomscrolling addiction</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Start reading books</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1">•</span>
                      <span>Improve vocabulary, vocal command and communication</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="text-center py-6 px-8 rounded-xl border-2 border-[var(--accent-color)] bg-[var(--accent-bg)]">
                <p className="text-lg font-semibold text-[var(--text-color)]">
                  Next 90 days are kind of unfinished tour of 2025, let's get max out of them!
                </p>
              </div>
            </section>

            
            <section className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-[var(--text-color)]">
                Daily Progress
              </h2>

              
              <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[var(--text-color)]">Day 3</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    October 3, 2025
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <span className="text-xs">😴</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-[var(--text-color)]">Sleep</p>
                      <p className="text-sm text-[var(--text-secondary)]">Bit sick, slept in fragments</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <Code className="w-3 h-3 text-[var(--accent-color)]" />
                    </div>
                      <div>
                        <p className="font-medium mb-2 text-[var(--text-color)]">What I Learned</p>
                        <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                        <li>• API routes in Next.js</li>
                        <li>• Fixed bugs in Spotify component (copyright issues prevented song playback)</li>
                        <li>• Worked on blog component for portfolio</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-color)]">
                    <p className="text-sm italic text-[var(--text-secondary)]">
                      Sick day, will try to keep momentum up! 💪
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[var(--text-color)]">Day 2</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--text-secondary)]">
                    October 2, 2025
                  </span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <span className="text-xs">😴</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-[var(--text-color)]">Sleep</p>
                      <p className="text-sm text-[var(--text-secondary)]">6hrs of good sleep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <span className="text-xs">🎉</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-[var(--text-color)]">Highlights</p>
                      <p className="text-sm text-[var(--text-secondary)]">Set up my new monitor • Celebrated Dussehra</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <Code className="w-3 h-3 text-[var(--accent-color)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-2 text-[var(--text-color)]">What I Learned</p>
                      <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                        <li>• Started with Next.js, why it was built</li>
                        <li>• SSR vs CSR, layouts</li>
                        <li>• Read Spotify developer docs</li>
                        <li>• Developed real-time music showing component</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-color)]">
                    <p className="text-sm italic text-[var(--text-secondary)]">
                      Low progress still managed 6 hrs of grind! 🔥
                    </p>
                  </div>
                </div>
              </div>

              
              <div className="p-6 rounded-xl border bg-[var(--surface-color)] border-[var(--border-color)]">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-[var(--text-color)]">Day 1</h3>
                  <span className="text-sm px-3 py-1 rounded-full bg-[var(--accent-bg)] text-[var(--text-secondary)]">October 1, 2025</span>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <span className="text-xs">😴</span>
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-[var(--text-color)]">Sleep</p>
                      <p className="text-sm text-[var(--text-secondary)]">8+ hrs of good sleep</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <BookOpen className="w-3 h-3 text-[var(--accent-color)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-1 text-[var(--text-color)]">Reading</p>
                      <p className="text-sm text-[var(--text-secondary)]">Got a book to start reading</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-[var(--accent-bg)]">
                      <Code className="w-3 h-3 text-[var(--accent-color)]" />
                    </div>
                    <div>
                      <p className="font-medium mb-2 text-[var(--text-color)]">What I Learned</p>
                      <ul className="space-y-1 text-sm text-[var(--text-secondary)]">
                        <li>• Latency vs Throughput</li>
                        <li>• CAP theorem</li>
                        <li>• ACID vs BASE</li>
                        <li>• Vertical and Horizontal Scaling</li>
                        <li>• Prisma + PostgreSQL via docs</li>
                      </ul>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-[var(--border-color)]">
                    <p className="text-sm italic text-[var(--text-secondary)]">Not perfect, but arc has started! 🚀</p>
                  </div>
                </div>
              </div>
            </section>

            
            <div className="text-center py-8 px-6 rounded-xl bg-[var(--accent-bg)]">
              <p className="text-lg font-medium mb-2 text-[var(--text-color)]">
                The Journey Continues...
              </p>
              <p className="text-sm text-[var(--text-secondary)]">
                Follow along as I document every single day of this 90-day transformation. No excuses, just progress.
              </p>
              <p className="text-xs mt-4 text-[var(--text-secondary)]">
                Last Updated: Day 3
              </p>
            </div>
          </article>
        ) : (
          
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
        )}

        <div className="mt-12 pt-8 border-t border-[var(--border-color)]">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-70 transition-opacity duration-200 text-[var(--accent-color)]"
          >
            <ArrowLeft className="w-4 h-4" />
            View all blogs
          </Link>
        </div>
      </div>
    </main>
  )
}

export default BlogPost
