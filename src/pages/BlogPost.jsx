import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { Calendar, Clock, ArrowLeft, Tag, Target, Heart, Brain, Dumbbell, BookOpen, Code } from 'lucide-react'

const BlogPost = () => {
  const { slug } = useParams()
  const { posts, loading } = useBlogPosts()
  
  if (loading) {
    return (
      <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="animate-pulse space-y-6">
            <div className="h-16 border-4 border-[var(--text-color)] bg-[var(--surface-color)]"></div>
            <div className="h-64 border-4 border-[var(--text-color)] bg-[var(--surface-color)]"></div>
            <div className="space-y-3">
              <div className="h-4 border-2 border-[var(--text-color)] w-full bg-[var(--surface-color)]"></div>
              <div className="h-4 border-2 border-[var(--text-color)] w-5/6 bg-[var(--surface-color)]"></div>
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
          className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-3 py-1.5 border-2 border-[var(--border-color)] font-mono text-xs font-bold hover:translate-x-0.5 transition-transform bg-[var(--surface-color)] text-[var(--text-secondary)]"
        >
          <ArrowLeft className="w-3 h-3" />
          BACK
        </Link>

        <div className="border-4 border-[var(--border-color)] overflow-hidden mb-6 sm:mb-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
          <div className="bg-[var(--surface-color)] border-b-4 border-[var(--border-color)] px-3 py-2">
            <span className="font-mono font-bold text-xs text-[var(--text-color)]">QUEST LOG</span>
          </div>
          <div className="relative h-48 sm:h-64 md:h-72 overflow-hidden bg-[var(--bg-color)]">
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="p-4 sm:p-5 md:p-6 bg-[var(--surface-color)]">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 font-mono uppercase text-[var(--text-color)] leading-tight">
              {post.title} {isWinterArc && '❄️'}
            </h1>
            <p className="text-xs sm:text-sm font-mono text-[var(--text-secondary)] leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-4 sm:gap-6 pb-4 mb-6 border-b-2 border-dashed border-[var(--border-color)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
            <Calendar className="w-3 h-3" />
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString('en-US', { 
                month: 'short', 
                day: 'numeric', 
                year: 'numeric' 
              })}
            </time>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
            <Clock className="w-3 h-3" />
            <span>{post.readTime}</span>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            {post.tags.map((tag) => (
              <span 
                key={tag}
                className="px-2 py-0.5 border-2 border-[var(--border-color)] text-xs font-mono bg-[var(--bg-color)] text-[var(--text-secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content - Special rendering for Winter Arc */}
        {isWinterArc ? (
          <article className="space-y-12">
            {/* Goals Section */}
            <section className="space-y-8">
              <div className="border-4 border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                <h2 className="text-xl font-bold font-mono uppercase mb-2 text-[var(--text-color)]">
                  ▸ Mission Objectives
                </h2>
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  Next 90 Days Quest Line
                </p>
              </div>

              {/* Goal Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Skills Goal */}
                <div className="border-4 border-[var(--border-color)] bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  <div className="bg-[var(--surface-color)] border-b-4 border-[var(--border-color)] px-3 py-2 flex items-center gap-2">
                    <Target className="w-4 h-4 text-[var(--text-color)]" />
                    <span className="font-mono font-bold text-xs text-[var(--text-color)]">SKILLS</span>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1.5 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Finish @kirat_tw web-dev cohort</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Start with DevOps</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Consistent DSA practice</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Master core CS subjects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Track & improve coding time</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Physical Health Goal */}
                <div className="border-4 border-[var(--border-color)] bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  <div className="bg-[var(--surface-color)] border-b-4 border-[var(--border-color)] px-3 py-2 flex items-center gap-2">
                    <Dumbbell className="w-4 h-4 text-[var(--text-color)]" />
                    <span className="font-mono font-bold text-xs text-[var(--text-color)]">FITNESS</span>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1.5 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Build muscle mass</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Fix sleep schedule</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Clean balanced diet</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Daily exercise routine</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Mental Health Goal */}
                <div className="border-4 border-[var(--border-color)] bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
                  <div className="bg-[var(--surface-color)] border-b-4 border-[var(--border-color)] px-3 py-2 flex items-center gap-2">
                    <Brain className="w-4 h-4 text-[var(--text-color)]" />
                    <span className="font-mono font-bold text-xs text-[var(--text-color)]">MINDSET</span>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-1.5 text-xs font-mono text-[var(--text-secondary)] leading-relaxed">
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Kill doomscrolling habit</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Read books daily</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[var(--text-color)]">▸</span>
                        <span>Level up communication</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="border-2 border-dashed border-[var(--border-color)] p-4 bg-[var(--surface-color)]">
                <p className="text-xs font-mono text-center text-[var(--text-secondary)]">
                  💡 Next 90 days = Final boss of 2025. Let's max out these stats!
                </p>
              </div>
            </section>

            {/* Daily Progress */}
            <section className="space-y-6">
              <h2 className="text-3xl font-bold mb-8 text-[var(--text-color)]">
                Daily Progress
              </h2>

              {/* Day 3 */}
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

              {/* Day 2 */}
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

              {/* Day 1 */}
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

            {/* Footer */}
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
          /* Regular blog content */
          <article 
            className="prose prose-lg max-w-none text-[var(--text-secondary)]"
          >
            <div className="whitespace-pre-wrap leading-relaxed text-base">
              {post.content}
            </div>
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
