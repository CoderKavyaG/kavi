import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const ProofOfWork = () => {
  const projects = [
    {
      title: 'Album Vault',
      description: 'Flex your playlist using album arts. A visual music showcase built with Spotify Developer API to display your favorite albums in style.',
      image: 'https://i.ibb.co/fdX3B8H6/image.png',
      link: 'https://album-party-blond.vercel.app',
      tags: ['REACT', 'TYPESCRIPT', 'SPOTIFY API'],
      status: 'ACTIVE',
      statusColor: 'green'
    },
    {
      title: 'sum-0',
      description: 'Get the gist, skip the scroll. Put your links and summarize those LinkedIn posts instantly.',
      image: 'https://i.ibb.co/7tFXWHLv/Screenshot-2025-12-31-221643.png',
      link: 'https://sum-0.vercel.app/',
      github: 'https://github.com/CoderKavyaG/sum0',
      tags: ['REACT', 'TYPESCRIPT', 'TAILWIND CSS'],
      status: 'ACTIVE',
      statusColor: 'green'
    },
    {
      title: 'finta-clone',
      description: 'A beautifully designed landing page inspired by modern design principles.',
      image: 'https://pbs.twimg.com/media/G9PQOjpbgAIIaGN?format=jpg&name=small',
      link: 'https://assignments-six-sooty.vercel.app/',
      tags: ['REACT', 'JAVASCRIPT', 'CSS'],
      status: 'ACTIVE',
      statusColor: 'green'
    },
    {
      title: 'cac-url',
      description: 'URL shortener with analytics. Shorten links and track their performance in real-time.',
      image: 'https://pbs.twimg.com/media/G5im2GxaUAAuhTq?format=jpg&name=large',
      link: 'https://cac-url.vercel.app/',
      github: 'https://github.com/CoderKavyaG/cac-url',
      tags: ['REACT', 'TAILWIND CSS', 'TYPESCRIPT'],
      status: 'ACTIVE',
      statusColor: 'green'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2 mb-6">
        <p className="text-xs font-mono text-[var(--text-secondary)] uppercase">Featured</p>
        <h2 className="text-2xl sm:text-3xl font-bold font-mono uppercase text-[var(--text-color)]">
          Projects
        </h2>
      </div>

      {/* Projects Grid - No Container Box */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const isInternal = project.link.startsWith('/')
          const Component = isInternal ? Link : 'a'
          const linkProps = isInternal 
            ? { to: project.link }
            : { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
          
          return (
          <Component
            key={index}
            {...linkProps}
            className="group rounded-2xl border-2 border-[var(--border-color)] overflow-hidden hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-all bg-[var(--surface-color)]"
          >
            <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900 rounded-t-xl">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${project.title === 'Album Vault' ? 'object-cover object-bottom' : 'object-cover'} group-hover:scale-110 transition-transform duration-300 opacity-80`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold font-mono uppercase text-[var(--text-color)]">
                  {project.title}
                </h3>
                <div className={`flex gap-2 items-center ${project.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-400'} px-2 py-1 rounded border border-[var(--border-color)]`}>
                  <div className={`w-2 h-2 ${project.statusColor === 'green' ? 'bg-white' : 'bg-black'}`}></div>
                  <span className={`text-xs font-mono font-bold ${project.statusColor === 'green' ? 'text-white' : 'text-black'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <p className="text-xs font-mono text-[var(--text-secondary)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 text-xs font-mono font-bold bg-[var(--accent-color)] text-black rounded border border-[var(--border-color)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Component>
          )
        })}
      </div>
    </div>
  )
}

export default ProofOfWork
