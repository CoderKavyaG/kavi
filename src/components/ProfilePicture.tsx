import React, { useState, useEffect } from 'react'

const ProfilePicture: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const images = [
    'https://i.ibb.co/HLqxXBgd/selfie-photo.jpg',
    'https://i.ibb.co/bj8sPk4R/DSC02119.jpg'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        setIsTransitioning(false)
      }, 250)
    }, 5000)

    return () => clearInterval(interval)
  }, [images.length])

  return (
    <div className="relative w-80 h-80 rounded-2xl overflow-hidden shadow-2xl">
      <img 
        src={images[currentIndex]} 
        alt="kavi" 
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          isTransitioning ? 'opacity-0' : 'opacity-100'
        }`}
      />
    </div>
  )
}

export default ProfilePicture
