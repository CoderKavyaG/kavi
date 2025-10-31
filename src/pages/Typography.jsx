import React from 'react';

const Typography = () => {
  const textStyles = [
    { name: 'Heading 1', className: 'text-4xl font-bold font-mono uppercase', example: '▸ PLAYER.NAME' },
    { name: 'Heading 2', className: 'text-2xl font-bold font-mono uppercase', example: '▸ PROOF OF WORK' },
    { name: 'Heading 3', className: 'text-xl font-bold font-mono', example: 'Player Info' },
    { name: 'Body Text', className: 'text-base font-mono', example: 'I am a college student at a tier-3 college...' },
    { name: 'Small Text', className: 'text-sm font-mono', example: 'GitHub contribution tracker' },
    { name: 'XSmall Text', className: 'text-xs font-mono', example: 'padding: 16px' },
  ];

  const spacingScale = [
    { name: 'xs', size: '4px', className: 'w-1 h-1 bg-[var(--accent-color)]' },
    { name: 'sm', size: '8px', className: 'w-2 h-2 bg-[var(--accent-color)]' },
    { name: 'base', size: '16px', className: 'w-4 h-4 bg-[var(--accent-color)]' },
    { name: 'md', size: '24px', className: 'w-6 h-6 bg-[var(--accent-color)]' },
    { name: 'lg', size: '32px', className: 'w-8 h-8 bg-[var(--accent-color)]' },
    { name: 'xl', size: '48px', className: 'w-12 h-12 bg-[var(--accent-color)]' },
  ];

  return (
    <div className="min-h-screen pt-24 bg-[var(--bg-color)] text-[var(--text-color)] p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold font-mono uppercase mb-12">▸ TYPOGRAPHY</h1>
        
        {/* Font Sizes and Styles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono uppercase mb-6 border-b-2 border-dashed border-[var(--border-color)] pb-2">
            Text Styles
          </h2>
          <div className="space-y-8">
            {textStyles.map((style, index) => (
              <div key={index} className="border-2 border-dashed border-[var(--border-color)] p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-mono text-[var(--text-secondary)]">{style.name}</span>
                  <span className="text-xs font-mono bg-[var(--surface-color)] px-2 py-1 rounded">
                    {style.className}
                  </span>
                </div>
                <div className={style.className}>
                  {style.example}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spacing Scale */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold font-mono uppercase mb-6 border-b-2 border-dashed border-[var(--border-color)] pb-2">
            Spacing Scale (p/m-{`{size}`})
          </h2>
          <div className="space-y-4">
            {spacingScale.map((item) => (
              <div key={item.name} className="flex items-center gap-4">
                <div className="w-20">
                  <span className="font-mono text-sm">{item.name}</span>
                </div>
                <div className="flex-1 flex items-center gap-2">
                  <div className={item.className}></div>
                  <span className="text-xs font-mono text-[var(--text-secondary)]">{item.size}</span>
                </div>
                <div className="w-32 text-right">
                  <span className="font-mono text-xs bg-[var(--surface-color)] px-2 py-1 rounded">
                    p-{item.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Padding/Margin Classes */}
        <section>
          <h2 className="text-2xl font-bold font-mono uppercase mb-6 border-b-2 border-dashed border-[var(--border-color)] pb-2">
            Common Classes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border-2 border-dashed border-[var(--border-color)] p-4">
              <h3 className="font-mono font-bold mb-3">Container</h3>
              <pre className="text-xs bg-[var(--surface-color)] p-3 rounded overflow-x-auto">
{`.container {
  max-width: 72rem; /* 1152px */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem; /* 24px */
  padding-right: 1.5rem; /* 24px */
}`}
              </pre>
            </div>
            
            <div className="border-2 border-dashed border-[var(--border-color)] p-4">
              <h3 className="font-mono font-bold mb-3">Section</h3>
              <pre className="text-xs bg-[var(--surface-color)] p-3 rounded overflow-x-auto">
{`.section {
  margin-top: 2rem; /* 32px */
  padding-top: 2rem; /* 32px */
  border-top: 2px dashed var(--border-color);
}`}
              </pre>
            </div>
            
            <div className="border-2 border-dashed border-[var(--border-color)] p-4">
              <h3 className="font-mono font-bold mb-3">Card</h3>
              <pre className="text-xs bg-[var(--surface-color)] p-3 rounded overflow-x-auto">
{`.card {
  border: 4px solid var(--text-color);
  background-color: var(--surface-color);
  transition: transform 0.2s;
  box-shadow: 4px 4px 0px 0px rgba(0,0,0,0.5);
}

.card:hover {
  transform: translate(4px, 4px);
  box-shadow: none;
}`}
              </pre>
            </div>
            
            <div className="border-2 border-dashed border-[var(--border-color)] p-4">
              <h3 className="font-mono font-bold mb-3">Button</h3>
              <pre className="text-xs bg-[var(--surface-color)] p-3 rounded overflow-x-auto">
{`.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem; /* 8px 16px */
  border: 2px solid var(--border-color);
  font-family: monospace;
  font-size: 0.875rem; /* 14px */
  transition: all 0.2s;
}

.btn:hover {
  border-color: var(--text-color);
  background-color: var(--surface-color);
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Typography;
