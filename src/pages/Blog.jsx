import React from 'react'

const Blog = () => {
  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
            Blog
          </h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            Thoughts on development, technology, and building things
          </p>
        </header>
        
        <div className="text-center py-20">
          <div className="max-w-md mx-auto">
            <h2 className="text-3xl font-bold mb-4" style={{ color: 'var(--text-color)' }}>
              Blogs Coming Soon
            </h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
              I'm working on some interesting content. Check back later!
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Blog
