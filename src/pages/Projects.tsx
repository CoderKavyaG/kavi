import React from 'react'

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Devlearn Community",
      description: "India-wide independent developer community"
    },
    {
      title: "College Event Platform",
      description: "Platform for organizing tech events"
    },
    {
      title: "Personal Portfolio",
      description: "Modern React TypeScript portfolio"
    },
    {
      title: "Web Development Tutorials",
      description: "Free coding resources for beginners"
    }
  ]

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-color)' }}>
          Projects
        </h1>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b last:border-b-0" style={{ borderColor: 'var(--border-color)' }}>
              <a 
                href={`https://github.com/coderkavyag/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--text-secondary)' }}
              >
                {project.title}
              </a>
              <span className="text-lg" style={{ color: 'var(--text-secondary)' }}>
                {project.description}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default Projects
