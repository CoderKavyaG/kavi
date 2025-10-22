import React from 'react'
import { Download, Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Calendar, Award, Code2, BookOpen, Briefcase, Monitor, Keyboard, Coffee, Headphones, Send } from 'lucide-react'

const Resume = () => {
  const handleDownload = () => {
    window.print()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const name = form.name.value
    const email = form.email.value
    const message = form.message.value
    
    const mailtoLink = `mailto:codecraftkavya@gmail.com?subject=Contact from ${name}&body=${encodeURIComponent(message)}%0D%0A%0D%0AFrom: ${email}`
    window.location.href = mailtoLink
  }

  return (
    <main className="pt-20 min-h-screen print:pt-0" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-4xl mx-auto px-6 py-8 print:py-4">
        <div className="mb-8 flex justify-between items-center print:hidden">
          <div>
            <h1 className="text-4xl font-bold mb-2" style={{ color: 'var(--text-color)' }}>Resume</h1>
            <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Full Stack Web Developer · CSE Student</p>
          </div>
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 hover:shadow-lg hover:scale-105 print:hidden"
            style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
          >
            <Download className="w-4 h-4" />
            Download PDF
          </button>
        </div>

        <div className="rounded-3xl border p-10 print:border-0 print:p-0 print:rounded-none shadow-lg print:shadow-none" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
          <header className="mb-10 text-center pb-8 border-b print:pb-6" style={{ borderColor: 'var(--border-color)' }}>
            <div className="w-28 h-28 mx-auto mb-5 rounded-full overflow-hidden bg-yellow-400 ring-4 ring-offset-4 print:w-24 print:h-24 print:ring-2 print:ring-offset-2" style={{ ringColor: 'var(--accent-color)', ringOffsetColor: 'var(--bg-color)' }}>
              <img 
                src="https://i.ibb.co/LXGvTyqm/image.png"
                alt="Kavi" 
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl font-bold mb-3 print:text-4xl" style={{ color: 'var(--text-color)' }}>Kavi</h1>
            <p className="text-2xl mb-6 print:text-xl print:mb-4" style={{ color: 'var(--accent-color)' }}>Full Stack Web Developer</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm print:gap-4 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
              <a href="mailto:codecraftkavya@gmail.com" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Mail className="w-5 h-5 print:w-4 print:h-4" />
                codecraftkavya@gmail.com
              </a>
              <a href="https://github.com/coderkavyag" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Github className="w-5 h-5 print:w-4 print:h-4" />
                coderkavyag
              </a>
              <a href="https://www.linkedin.com/in/coderkavyag/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:opacity-70 transition-opacity">
                <Linkedin className="w-5 h-5 print:w-4 print:h-4" />
                coderkavyag
              </a>
            </div>
          </header>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <BookOpen className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Summary
            </h2>
            <p className="text-base leading-relaxed pl-13 print:text-sm print:pl-11" style={{ color: 'var(--text-secondary)' }}>
              Passionate 3rd year Computer Science Engineering student and Full Stack Web Developer specializing in building 
              interactive web applications. Currently completing the Web Development Cohort by @kirat_tw and actively documenting 
              my 90-day Winter Arc Journey. I build products to solve real-world problems and specialize in creating MVPs. 
              Active open source contributor committed to learning in public and sharing knowledge through technical blogging.
            </p>
          </section>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <Code2 className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Technical Skills
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript (ES6+)', 'TypeScript', 'Python', 'HTML5', 'CSS3', 'SQL'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-full text-sm print:text-xs print:px-2 print:py-1" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Frontend Development</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'React Router', 'Three.js', 'Responsive Design', 'API Integration'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-full text-sm print:text-xs print:px-2 print:py-1" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Backend & Database</h3>
                <div className="flex flex-wrap gap-2">
                  {['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'Prisma ORM', 'REST APIs', 'Serverless Functions', 'Database Design'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-full text-sm print:text-xs print:px-2 print:py-1" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Tools & Deployment</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git & GitHub', 'VS Code', 'Vercel', 'npm/yarn', 'Postman', 'Chrome DevTools', 'Figma'].map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-full text-sm print:text-xs print:px-2 print:py-1" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <Briefcase className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Projects
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-2 pl-4 print:border-l" style={{ borderColor: 'var(--accent-color)' }}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold print:text-base" style={{ color: 'var(--text-color)' }}>Portfolio Website</h3>
                    <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>Personal Portfolio, Blog & Project Showcase</p>
                  </div>
                  <span className="text-xs flex items-center gap-1 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-3 h-3" />
                    Oct 2024 - Present
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm print:text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <li>Built fully responsive portfolio from scratch using React 18, Vite 5.0, and Tailwind CSS 3.3</li>
                  <li>Integrated real-time Spotify API to display currently playing music with custom widget design</li>
                  <li>Implemented WakaTime API integration for live coding statistics and activity tracking</li>
                  <li>Created dynamic blog system with React Router for URL-based navigation and slug handling</li>
                  <li>Developed Winter Arc Journey blog documenting 90-day focused learning with daily updates</li>
                  <li>Deployed on Vercel with serverless functions for API routes and optimized build configuration</li>
                  <li>Implemented dark/light theme system using CSS variables and React Context API</li>
                  <li>Achieved 100% responsive design supporting mobile, tablet, and desktop viewports</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['React', 'Vite', 'Tailwind CSS', 'React Router', 'Spotify API', 'WakaTime API', 'Vercel'].map(tech => (
                    <span key={tech} className="px-2 py-1 rounded text-xs print:text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 print:hidden">
                  <a href="https://github.com/CoderKavyaG/kavi" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 hover:opacity-70" style={{ color: 'var(--accent-color)' }}>
                    <Github className="w-3 h-3" /> View Code
                  </a>
                  <a href="https://coderkavyag.github.io" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 hover:opacity-70" style={{ color: 'var(--accent-color)' }}>
                    <ExternalLink className="w-3 h-3" /> Live Demo
                  </a>
                </div>
              </div>

              <div className="border-l-2 pl-4 print:border-l" style={{ borderColor: 'var(--accent-color)' }}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold print:text-base" style={{ color: 'var(--text-color)' }}>Brainly - Second Brain App</h3>
                    <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>Personal Knowledge Management System</p>
                  </div>
                  <span className="text-xs flex items-center gap-1 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-3 h-3" />
                    Oct 2024
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm print:text-xs mb-3" style={{ color: 'var(--text-secondary)' }}>
                  <li>Developed a comprehensive second brain application for organizing notes, documents, tweets, and links</li>
                  <li>Built with TypeScript for enhanced type safety, better developer experience, and reduced runtime errors</li>
                  <li>Implemented advanced tagging system enabling multi-tag filtering and categorization</li>
                  <li>Created powerful search functionality with real-time filtering across all content types</li>
                  <li>Designed responsive UI with Tailwind CSS featuring card-based layouts and smooth animations</li>
                  <li>Architected component structure for scalability and easy maintenance</li>
                </ul>
                <div className="flex flex-wrap gap-2">
                  {['React', 'TypeScript', 'Tailwind CSS', 'Local Storage', 'Search Algorithm'].map(tech => (
                    <span key={tech} className="px-2 py-1 rounded text-xs print:text-xs" style={{ backgroundColor: 'var(--accent-bg)', color: 'var(--text-secondary)' }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-2 print:hidden">
                  <a href="https://github.com/CoderKavyaG/brainly.com" target="_blank" rel="noopener noreferrer" className="text-xs flex items-center gap-1 hover:opacity-70" style={{ color: 'var(--accent-color)' }}>
                    <Github className="w-3 h-3" /> View Code
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <Award className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Education
            </h2>
            
            <div className="border-l-2 pl-4 print:border-l" style={{ borderColor: 'var(--accent-color)' }}>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-lg font-bold print:text-base" style={{ color: 'var(--text-color)' }}>Bachelor of Technology - Computer Science Engineering</h3>
                  <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>Currently in 3rd Year</p>
                </div>
                <span className="text-xs flex items-center gap-1 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <Calendar className="w-3 h-3" />
                  2023 - 2027
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                <li>Focused on Web Development and Full Stack Technologies</li>
                <li>Active participant in coding communities and hackathons</li>
                <li>Currently learning Data Structures & Algorithms, DevOps</li>
              </ul>
            </div>
          </section>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <Award className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Hackathons & Competitions
            </h2>
            
            <div className="space-y-4">
              <div className="border-l-2 pl-4 print:border-l" style={{ borderColor: 'var(--accent-color)' }}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold print:text-base" style={{ color: 'var(--text-color)' }}>Hackathon Winner</h3>
                    <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>College Technical Fest</p>
                  </div>
                  <span className="text-xs flex items-center gap-1 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-3 h-3" />
                    2024
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <li>Built a full-stack web application within 24 hours</li>
                  <li>Led a team of 3 developers to deliver a working MVP</li>
                  <li>Presented solution to judges and won first place</li>
                </ul>
              </div>

              <div className="border-l-2 pl-4 print:border-l" style={{ borderColor: 'var(--accent-color)' }}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="text-lg font-bold print:text-base" style={{ color: 'var(--text-color)' }}>Web Development Competition</h3>
                    <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>Inter-College Event</p>
                  </div>
                  <span className="text-xs flex items-center gap-1 print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                    <Calendar className="w-3 h-3" />
                    2024
                  </span>
                </div>
                <ul className="list-disc list-inside space-y-1 text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  <li>Competed against 50+ teams from different colleges</li>
                  <li>Developed responsive web app with React and Tailwind CSS</li>
                  <li>Secured top position for best UI/UX design</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-10 print:mb-6">
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <Award className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Activities & Involvement
            </h2>
            
            <ul className="list-disc list-inside space-y-2 text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
              <li>Active Open Source Contributor on GitHub with multiple public repositories</li>
              <li>Currently completing Full Stack Web Development Cohort by Harkirat Singh (@kirat_tw)</li>
              <li>Documenting 90-day Winter Arc Journey - sharing daily progress on web development and system design</li>
              <li>Technical blogger writing about React, Next.js, API integration, and building real projects</li>
              <li>Building and shipping MVPs to solve real-world problems</li>
              <li>Learning in public through Twitter (@coderkavyag) and LinkedIn (coderkavyag)</li>
              <li>Tracking 6+ hours of daily focused coding sessions using WakaTime</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-5 flex items-center gap-3 print:text-xl print:mb-4" style={{ color: 'var(--text-color)' }}>
              <div className="w-10 h-10 rounded-xl flex items-center justify-center print:w-8 print:h-8" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <BookOpen className="w-5 h-5 print:w-4 print:h-4" style={{ color: 'var(--accent-color)' }} />
              </div>
              Currently Learning
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:grid-cols-2">
              <div className="p-4 rounded-lg print:p-2" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Advanced Web Development</h3>
                <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Next.js 15, Server-Side Rendering (SSR), Client-Side Rendering (CSR), API Routes, Layouts, Serverless Functions
                </p>
              </div>
              <div className="p-4 rounded-lg print:p-2" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>Backend Development</h3>
                <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Node.js, Express.js, Database Integration, Authentication, RESTful API Design
                </p>
              </div>
              <div className="p-4 rounded-lg print:p-2" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>UI/UX & Design</h3>
                <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  Responsive Design, Tailwind CSS, Component Libraries, Animations, User Experience
                </p>
              </div>
              <div className="p-4 rounded-lg print:p-2" style={{ backgroundColor: 'var(--accent-bg)' }}>
                <h3 className="font-semibold mb-2 print:text-sm" style={{ color: 'var(--text-color)' }}>System Design Fundamentals</h3>
                <p className="text-sm print:text-xs" style={{ color: 'var(--text-secondary)' }}>
                  CAP Theorem, ACID vs BASE, Latency vs Throughput, Scaling Patterns, Database Design
                </p>
              </div>
            </div>
          </section>

          <section className="mb-8 print:hidden">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2" style={{ color: 'var(--text-color)' }}>
              <Mail className="w-6 h-6" style={{ color: 'var(--accent-color)' }} />
              Get In Touch
            </h2>
            
            <div className="rounded-xl border p-6" style={{ backgroundColor: 'var(--surface-color)', borderColor: 'var(--border-color)' }}>
              <p className="text-sm mb-6" style={{ color: 'var(--text-secondary)' }}>
                Interested in working together? Have a project idea? Or just want to say hi? Feel free to reach out!
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      backgroundColor: 'var(--bg-color)', 
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-color)'
                    }}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200"
                    style={{ 
                      backgroundColor: 'var(--bg-color)', 
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-color)'
                    }}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text-color)' }}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="5"
                    className="w-full px-4 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 transition-all duration-200 resize-none"
                    style={{ 
                      backgroundColor: 'var(--bg-color)', 
                      borderColor: 'var(--border-color)',
                      color: 'var(--text-color)'
                    }}
                    placeholder="Tell me about your project or just say hi..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 hover:opacity-90"
                  style={{ backgroundColor: 'var(--accent-color)', color: 'white' }}
                >
                  <Send className="w-4 h-4" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 pt-6 border-t text-center" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-sm mb-3" style={{ color: 'var(--text-secondary)' }}>Or reach me directly:</p>
                <div className="flex justify-center gap-4">
                  <a 
                    href="mailto:codecraftkavya@gmail.com"
                    className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    <Mail className="w-4 h-4" />
                    Email
                  </a>
                  <a 
                    href="https://twitter.com/coderkavyag"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    <ExternalLink className="w-4 h-4" />
                    Twitter
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/coderkavyag/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--accent-color)' }}
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="mt-8 pt-6 border-t text-center text-sm print:text-xs print:mt-6 print:pt-4" style={{ borderColor: 'var(--border-color)', color: 'var(--text-secondary)' }}>
            <p>For more information, visit <a href="https://coderkavyag.github.io" className="hover:opacity-70" style={{ color: 'var(--accent-color)' }}>coderkavyag.github.io</a></p>
          </footer>
        </div>
      </div>
    </main>
  )
}

export default Resume
