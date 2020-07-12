import React from 'react'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileActivity from './ProfileActivity'

function Profile() {
  return (
    <React.Fragment>
      Profile Page
      <ProfileHeader />
      <ProfileActivity />
    </React.Fragment>
  )
}

export default Profile
