import React from 'react'

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "Blockchain Too Good Journey",
      date: "Dec 20, 2024",
      url: "https://medium.com/@CoderKavyaG/blockchain-too-good-journey-8a07c61ccbbd"
    },
    {
      title: "Guide to 80% User-Centric Interface",
      date: "Dec 18, 2024",
      url: "https://medium.com/@CoderKavyaG/guide-to-80-user-centric-interface-3d38d76e2fac"
    }
  ]

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-color)' }}>
          Tech Guides, Articles and Blogs
        </h1>
        
        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b last:border-b-0" style={{ borderColor: 'var(--border-color)' }}>
              <a 
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--text-secondary)' }}
              >
                {post.title}
              </a>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                {post.date}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Blog
