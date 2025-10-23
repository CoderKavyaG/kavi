import React from 'react'

const ProfilePicture = () => {
  const profileImage = 'https://i.ibb.co/LXGvTyqm/image.png'

  return (
    <div className="relative w-full h-full rounded-full overflow-hidden bg-yellow-400">
      <img 
        src={profileImage}
        alt="kavi" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default ProfilePicture
