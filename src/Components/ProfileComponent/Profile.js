import React from 'react'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileActivity from './ProfileActivity'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel'

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
