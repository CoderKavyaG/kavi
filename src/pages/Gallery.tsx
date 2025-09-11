import React from 'react'

const Gallery: React.FC = () => {
  const profilePictures = [
    {
      src: "https://i.ibb.co/HLqxXBgd/selfie-photo.jpg",
      alt: "Profile Picture 1"
    },
    {
      src: 'https://i.ibb.co/bj8sPk4R/DSC02119.jpg' ,
      alt: "Profile Picture 2"
    }
  ]

  const workspaceImages = [
    {
      src: "https://pbs.twimg.com/media/Gu_rBtlW4AA2qN0?format=jpg&name=360x360",
      alt: "Workspace 1"
    },
    {
      src: "https://pbs.twimg.com/media/Gz21YWYbAAA1yur?format=jpg&name=small",
      alt: "Workspace 2"
    },
    {
      src: "https://pbs.twimg.com/media/GyttptDWUAAWKBF?format=jpg&name=small",
      alt: "Workspace 3"
    }
  ]

  return (
    <main className="pt-20 min-h-screen" style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}>
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-12" style={{ color: 'var(--text-color)' }}>
          Gallery
        </h1>
        
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8" style={{ color: 'var(--text-color)' }}>
            Profile Pictures
          </h2>
          <div className="flex justify-center gap-8">
            {profilePictures.map((image, index) => (
              <div key={index} className="w-56 h-56 rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-8" style={{ color: 'var(--text-color)' }}>
            My Workspace
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {workspaceImages.map((image, index) => (
              <div key={index} className="aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Gallery
