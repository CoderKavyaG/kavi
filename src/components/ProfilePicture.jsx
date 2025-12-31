import React from 'react'

const ProfilePicture = () => {
  const profileImage = 'https://i.ibb.co/bMBz13cK/v-VXZna3h-400x400.jpg'

  return (
    <div className="w-full h-full rounded-full overflow-hidden bg-yellow-400">
      <img 
        src={profileImage}
        alt="kavi" 
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default ProfilePicture
