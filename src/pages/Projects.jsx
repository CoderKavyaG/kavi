import React from 'react'
import { ExternalLink, Github, Globe, Gamepad2, Calendar, Trophy } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Album Vault",
      description: "Flex your playlist using album arts. A visual music showcase built with Spotify Developer API to display your favorite albums in style.",
      image: "https://i.ibb.co/fdX3B8H6/image.png",
      tags: ["React", "TypeScript", "Spotify API", "Tailwind CSS"],
      github: "https://github.com/CoderKavyaG/album-vault",
      live: "https://album-party-blond.vercel.app",
      date: "October 2024",
      status: "ACTIVE"
    },
    {
      id: 2,
      title: "Sum-0",
      description: "Get the gist, skip the scroll. Put your links and summarize those LinkedIn posts.",
      image: "https://i.ibb.co/7tFXWHLv/Screenshot-2025-12-31-221643.png",
      tags: ["React", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/CoderKavyaG/sum0",
      live: "https://sum-0.vercel.app/",
      date: "December 2025",
      status: "ACTIVE"
    },
    {
      id: 3,
      title: "Finta-Clone",
      description: "A beautifully designed landing page with smooth animations and modern UI.",
      image: "https://pbs.twimg.com/media/G9PQOjpbgAIIaGN?format=jpg&name=small",
      tags: ["React", "JavaScript", "CSS"],
      live: "https://assignments-six-sooty.vercel.app/",
      date: "November 2025",
      status: "ACTIVE"
    },
    {
      id: 4,
      title: "CAC-URL",
      description: "URL shortener with advanced analytics. Track your links with detailed insights and statistics.",
      image: "https://pbs.twimg.com/media/G5im2GxaUAAuhTq?format=jpg&name=large",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      github: "https://github.com/CoderKavyaG/cac-url",
      live: "https://cac-url.vercel.app/",
      date: "September 2025",
      status: "ACTIVE"
    }
  ]

  return (
  <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Gaming Header */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-mono uppercase text-[var(--text-color)] flex items-center gap-3">
            <Gamepad2 className="w-8 h-8" />
            ▸ Projects
          </h1>
        </header>

        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="rounded-2xl border-2 border-[var(--border-color)] overflow-hidden bg-[var(--surface-color)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all group"
              >
                {/* Image Section */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-pink-600 to-purple-700">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className={`px-3 py-1 rounded-full border border-white font-mono text-xs font-bold ${
                      project.status === 'ACTIVE' ? 'bg-green-500/80 text-white' : 'bg-yellow-500/80 text-white'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="absolute bottom-3 right-3 flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/90 hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-black" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/90 hover:bg-white transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4 text-black" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold font-mono uppercase mb-1 text-[var(--text-color)] group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs flex items-center gap-1 font-mono text-[var(--text-secondary)]">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </p>
                  </div>
                  
                  <p className="text-xs leading-relaxed line-clamp-2 font-mono text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-1 text-xs font-mono rounded border border-[var(--border-color)] bg-[var(--accent-color)]/20 text-[var(--text-color)] font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex gap-3 pt-2 border-t-2 border-dashed border-[var(--border-color)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono hover:translate-x-0.5 transition-transform text-[var(--text-color)]"
                      >
                        <Github className="w-3 h-3" />
                        CODE →
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-mono hover:translate-x-0.5 transition-transform text-[var(--text-color)]"
                      >
                        <ExternalLink className="w-3 h-3" />
                        LIVE →
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

      </div>
    </main>
  )
}

export default Projects
