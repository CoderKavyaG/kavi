import React from 'react'
import { ExternalLink, Github, Globe, Code2, Calendar } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Second Brain",
      description: "A personal knowledge management system built to organize notes, documents, tweets, and links. Features include tagging, search, and categorization for building a digital second brain.",
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&auto=format&fit=crop",
      tags: ["React", "TypeScript", "Tailwind CSS", "Knowledge Management"],
      github: "https://github.com/coderkavyag",
      live: null,
      date: "October 2024"
    }
  ]

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-12 text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <Code2 className="w-6 h-6" style={{ color: 'var(--accent-color)' }} />
            <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--text-color)' }}>
              Projects
            </h1>
          </div>
          <p className="text-base max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Building cool stuff and learning in public
          </p>
        </header>

        {/* Projects Grid */}
        <section className="max-w-3xl mx-auto">
          <div className="space-y-6">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="group rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl"
                style={{ 
                  backgroundColor: 'var(--surface-color)', 
                  borderColor: 'var(--border-color)'
                }}
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      >
                        <Github className="w-4 h-4 text-white" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg backdrop-blur-sm hover:scale-110 transition-transform duration-200"
                        style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                      >
                        <Globe className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-color)' }}>
                        {project.title}
                      </h3>
                      <p className="text-xs flex items-center gap-1" style={{ color: 'var(--text-secondary)' }}>
                        <Calendar className="w-3 h-3" />
                        {project.date}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: 'var(--accent-bg)', 
                          color: 'var(--text-secondary)' 
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity duration-200"
                        style={{ color: 'var(--text-color)' }}
                      >
                        <Github className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium hover:opacity-70 transition-opacity duration-200"
                        style={{ color: 'var(--accent-color)' }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="mt-12 text-center py-8 px-6 rounded-xl border max-w-2xl mx-auto" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
          <h2 className="text-xl font-bold mb-2" style={{ color: 'var(--text-color)' }}>
            More projects coming soon
          </h2>
          <p className="text-sm mb-4" style={{ color: 'var(--text-secondary)' }}>
            Currently building and learning. Check back later for more projects!
          </p>
          <div className="flex gap-3 justify-center">
            <a 
              href="https://github.com/coderkavyag"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-color)' }}
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a 
              href="mailto:codecraftkavya@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-80"
              style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
            >
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects
