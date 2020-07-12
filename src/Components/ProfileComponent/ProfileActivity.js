import React from 'react'
import './profile.css'
import ProfileSideTransactionPanel from './ProfileSideTransactionPanel'
import ProfileReviews from './ProfileReviews'
import ProfileReviewSideBar from './ProfileReviewSideBar'

function ProfileActivity() {
  return (
    <React.Fragment>
      <div className='row no-gutters profile-activity'>
        <div className='col-md-8'>
          <div>ProfileActivity</div>
          <ProfileReviews />
        </div>
        <div className='col-md-4'>
          <ProfileSideTransactionPanel />
          <ProfileReviewSideBar />
        </div>
      </div>
    </React.Fragment>
  )
}

export default ProfileActivity
