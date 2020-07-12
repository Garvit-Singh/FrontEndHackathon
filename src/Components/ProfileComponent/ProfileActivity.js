import React from 'react'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel'

function ProfileActivity() {
  return (
    <React.Fragment>
      <div className='row no-gutters profile-activity'>
        <div className='col-md-8'>
          ProfileActivity
        </div>
        <ProfileSideTransactionPanel />
      </div>
    </React.Fragment>
  )
}

export default ProfileActivity
