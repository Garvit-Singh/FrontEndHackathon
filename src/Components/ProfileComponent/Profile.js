import React from 'react'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileActivity from './ProfileActivity'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel';

function Profile() {
  return (
    <React.Fragment>
      Profile
      <ProfileHeader />
      <div className="row no-gutters d-flex justify-content-between">
				<ProfileActivity />
				<ProfileSideTransactionPanel />
			</div>
    </React.Fragment>
  )
}

export default Profile
