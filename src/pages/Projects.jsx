import React from 'react'
import { ExternalLink, Github, Globe, Gamepad2, Calendar, Trophy } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio",
      description: "My personal portfolio website built with React, featuring blog system, projects showcase, real-time coding stats, and Spotify integration.",
      image: "https://i.ibb.co/VcxJwz7R/image.png",
      tags: ["React", "Vite", "Tailwind CSS", "Router"],
      github: "https://github.com/CoderKavyaG/kavi",
      live: "https://coderkavyag.github.io",
      date: "October 2024",
      status: "ACTIVE"
    },
    {
      id: 2,
      title: "Album Vault",
      description: "Flex your playlist using album arts. A visual music showcase built with Spotify Developer API to display your favorite albums in style.",
      image: "https://i.ibb.co/fdX3B8H6/image.png",
      tags: ["React", "TypeScript", "Spotify API", "Tailwind CSS"],
      github: "https://github.com/CoderKavyaG/album-vault",
      live: "https://album-party-blond.vercel.app",
      date: "October 2024",
      status: "ACTIVE"
    }
  ]

  return (
  <main className="pt-20 min-h-screen bg-[var(--bg-color)] text-[var(--text-color)]">
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Gaming Header */}
        <header className="mb-12">
          <div className="border-4 border-[var(--border-color)] bg-[var(--surface-color)] p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-3 mb-1">
              <Gamepad2 className="w-6 h-6 text-[var(--text-color)]" />
              <h1 className="text-xl md:text-2xl font-bold font-mono uppercase text-[var(--text-color)]">
                ▸ Quest Archive
              </h1>
            </div>
            <p className="text-xs font-mono text-[var(--text-secondary)] ml-9">
              Completed and ongoing missions • Building in public
            </p>
          </div>
        </header>

        <section className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <article 
                key={project.id}
                className="border-4 border-[var(--border-color)] overflow-hidden bg-[var(--surface-color)] hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
              >
                {/* Image Section with Gaming Header */}
                <div className="relative h-48 overflow-hidden bg-[var(--bg-color)] border-b-4 border-[var(--border-color)]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover opacity-90 rounded-xl border-4 border-[var(--accent-color)] shadow-lg transition-transform duration-300 hover:scale-105"
                  />
                  {/* Gaming Overlay Header */}
                  <div className="absolute top-0 left-0 right-0 bg-[var(--surface-color)] border-b-2 border-[var(--border-color)] px-3 py-1 flex items-center justify-between">
                    <span className="font-mono font-bold text-xs text-[var(--text-color)]">QUEST #{project.id}</span>
                    <span className={`px-2 py-0.5 border-2 border-[var(--border-color)] font-mono text-xs font-bold ${
                      project.status === 'ACTIVE' ? 'bg-green-900/60 text-green-300' : 'bg-yellow-900/60 text-yellow-300'
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
                        className="p-1.5 border-2 border-[var(--border-color)] bg-[var(--surface-color)] hover:bg-[var(--bg-color)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-4 h-4 text-[var(--text-secondary)]" />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 border-2 border-[var(--border-color)] bg-[var(--surface-color)] hover:bg-[var(--bg-color)] transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Globe className="w-4 h-4 text-[var(--text-secondary)]" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-4 space-y-3">
                  <div>
                    <h3 className="text-base font-bold font-mono uppercase mb-1 text-[var(--text-color)]">
                      {project.title}
                    </h3>
                    <p className="text-xs flex items-center gap-1 font-mono text-[var(--text-secondary)]">
                      <Calendar className="w-3 h-3" />
                      {project.date}
                    </p>
                  </div>
                  
                  <p className="text-xs leading-relaxed line-clamp-3 font-mono text-[var(--text-secondary)]">
                    {project.description}
                  </p>

                  {/* Tags with Gaming Style */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-2 py-0.5 border-2 border-[var(--border-color)] text-xs font-mono bg-[var(--bg-color)] text-[var(--text-secondary)]"
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

        {/* Coming Soon Section - Gaming Style */}
        <section className="mt-12 max-w-2xl mx-auto border-4 border-[var(--text-color)] bg-[var(--surface-color)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]">
          <div className="bg-[var(--accent-color)] text-black px-4 py-2 border-b-4 border-[var(--text-color)] flex items-center gap-2">
            <Trophy className="w-5 h-5" />
            <span className="font-mono font-bold text-sm">UPCOMING QUESTS</span>
          </div>
          <div className="p-8 text-center">
            <h2 className="text-xl font-bold font-mono uppercase mb-2 text-[var(--text-color)]">
              More Missions Loading...
            </h2>
            <p className="text-sm font-mono mb-6 text-[var(--text-secondary)]">
              Currently grinding and leveling up. Check back for new quests!
            </p>
            <div className="flex gap-3 justify-center">
              <a 
                href="https://github.com/coderkavyag"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[var(--text-color)] text-sm font-mono font-bold hover:translate-x-0.5 hover:translate-y-0.5 transition-transform bg-[var(--bg-color)] text-[var(--text-color)]"
              >
                <Github className="w-4 h-4" />
                GITHUB →
              </a>
              <a
                href="mailto:codecraftkavya@gmail.com"
                className="flex items-center gap-2 px-4 py-2 border-2 border-[var(--text-color)] text-sm font-mono font-bold hover:translate-x-0.5 hover:translate-y-0.5 transition-transform bg-[var(--accent-color)] text-black"
              >
                CONTACT →
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Projects
