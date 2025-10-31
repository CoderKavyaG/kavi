import React, { useState } from 'react'

const GameMenuNew = () => {
  const [activeTab, setActiveTab] = useState('items')

  return (
    <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,0.5)]">
      {/* Header */}
      <h2 className="text-xl font-bold font-mono uppercase text-[var(--text-color)] mb-6">GAME MENU</h2>
      
      {/* Tab Navigation */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('items')}
          className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
            activeTab === 'items'
              ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
              : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
          }`}
        >
          ITEMS
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
            activeTab === 'skills'
              ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
              : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
          }`}
        >
          SKILLS
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`flex-1 px-6 py-3 font-mono text-sm uppercase transition-colors ${
            activeTab === 'stats'
              ? 'bg-[var(--accent-color)] text-black border-2 border-[var(--accent-color)]'
              : 'bg-transparent text-[var(--text-secondary)] border-2 border-[var(--border-color)] hover:border-[var(--text-color)]'
          }`}
        >
          STATS
        </button>
      </div>

      {/* Content Area */}
      <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-6">
        {/* Items Tab */}
        {activeTab === 'items' && (
          <div className="flex flex-col sm:flex-row gap-6">
            {/* Image */}
            <div className="w-full sm:w-64 h-64 flex-shrink-0 border-4 border-[var(--text-color)] overflow-hidden">
              <img 
                src="https://i.ibb.co/LXGvTyqm/image.png"
                alt="Kavi" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Info Boxes */}
            <div className="flex-1 space-y-4">
              {/* Player Info */}
              <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4">
                <h3 className="text-base font-bold font-mono mb-3 text-[var(--text-color)] flex items-center gap-2">
                  <span>▸</span> PLAYER INFO
                </h3>
                <p className="text-sm font-mono leading-relaxed text-[var(--text-secondary)]">
                  I am a college student at a tier-3 college and realised late that I love doing web development, so I'm currently learning and building projects in web development.
                </p>
              </div>
              
              {/* Current Quest */}
              <div className="border-4 border-[var(--text-color)] bg-[var(--surface-color)] p-4">
                <h3 className="text-sm font-bold font-mono mb-2 text-[var(--accent-color)] flex items-center gap-2">
                  <span>▸</span> CURRENT QUEST
                </h3>
                <p className="text-xs font-mono text-[var(--text-secondary)]">
                  Building modern web applications with React & TypeScript
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Skills Tab */}
        {activeTab === 'skills' && (
          <div className="space-y-6">
            {/* Frontend Skills */}
            <div>
              <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ FRONTEND ABILITIES</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#61dafb] hover:text-black transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⚛️ REACT</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#3178c6] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">TS TYPESCRIPT</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#f0db4f] hover:text-black transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">JS JAVASCRIPT</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-black hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">N NEXT.JS</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#06b6d4] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🎨 TAILWIND</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#e34c26] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">HTML/CSS</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Backend Skills */}
            <div>
              <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ BACKEND ABILITIES</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#3b82f6] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⬢ NODE.JS</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#47A248] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🍃 MONGODB</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#336791] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🐘 POSTGRESQL</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#10b981] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⚡ EXPRESS</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#ff4154] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🔥 PRISMA</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
                <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#ca2c31] hover:text-white transition-colors cursor-default">
                  <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🗄️ REDIS</p>
                  <div className="flex gap-0.5">
                    <div className="w-2 h-2 bg-current"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                    <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Tab */}
        {activeTab === 'stats' && (
          <div>
            <h3 className="text-base font-bold font-mono mb-4 text-[var(--text-color)]">▸ DEVELOPMENT TOOLS</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#007acc] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">💻 VS CODE</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#f34f29] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🔧 GIT</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#181717] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🐙 GITHUB</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#ff6c37] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">📮 POSTMAN</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#00D9FF] hover:text-black transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⚡ VERCEL</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#f06529] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">📦 NPM</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#F7DF1E] hover:text-black transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">⚙️ FIGMA</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#5865F2] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">💬 DISCORD</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                </div>
              </div>
              <div className="bg-transparent border-2 border-[var(--text-color)] p-3 hover:bg-[#FF6B6B] hover:text-white transition-colors cursor-default">
                <p className="text-xs font-mono font-bold mb-1 text-[var(--text-color)]">🧠 CURSOR</p>
                <div className="flex gap-0.5">
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-current"></div>
                  <div className="w-2 h-2 bg-[var(--border-color)]"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default GameMenuNew
