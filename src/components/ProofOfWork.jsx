import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'

const ProofOfWork = () => {
  const projects = [
    {
      title: 'Brainly',
      description: 'A personal knowledge management system built to organize notes, documents, tweets, and links with tagging and search.',
      image: 'https://i.ibb.co/6Jt6gStD/image.png',
      link: 'https://github.com/CoderKavyaG/brainly.com',
      tags: ['REACT', 'TYPESCRIPT', 'TAILWIND'],
      status: 'IN PROGRESS',
      statusColor: 'yellow'
    },
    {
      title: 'Album Vault',
      description: 'Flex your playlist using album arts. A visual music showcase built with Spotify Developer API to display your favorite albums in style.',
      image: 'https://i.ibb.co/fdX3B8H6/image.png',
      link: 'https://album-party-blond.vercel.app',
      tags: ['REACT', 'TYPESCRIPT', 'SPOTIFY API'],
      status: 'ACTIVE',
      statusColor: 'green'
    }
  ]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-mono uppercase text-[var(--text-color)] mb-2">
          Proof of Work
        </h2>
        <p className="text-sm font-mono text-[var(--text-secondary)]">
          From Simple Scripts to Enterprise Solutions
        </p>
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
            className="group border-4 border-[var(--text-color)] bg-[var(--surface-color)] overflow-hidden hover:translate-x-1 hover:translate-y-1 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)]"
          >
            <div className="relative h-48 overflow-hidden border-b-4 border-[var(--text-color)]">
              <img
                src={project.image}
                alt={project.title}
                className={`w-full h-full ${project.title === 'Album Vault' ? 'object-cover object-bottom' : 'object-cover'}`}
              />
            </div>
            <div className="p-5 space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold font-mono uppercase text-[var(--text-color)]">
                  {project.title}
                </h3>
                <div className={`flex gap-2 items-center ${project.statusColor === 'green' ? 'bg-green-500' : 'bg-yellow-400'} px-2 py-1 border-2 border-[var(--text-color)]`}>
                  <div className={`w-2 h-2 ${project.statusColor === 'green' ? 'bg-white' : 'bg-black'}`}></div>
                  <span className={`text-xs font-mono font-bold ${project.statusColor === 'green' ? 'text-white' : 'text-black'}`}>
                    {project.status}
                  </span>
                </div>
              </div>
              <p className="text-sm font-mono text-[var(--text-secondary)]">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="px-2 py-1 border-2 border-[var(--text-color)] text-xs font-mono font-bold bg-[var(--bg-color)] text-[var(--text-color)]"
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
