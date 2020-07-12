import React from 'react'

function ProfileHeader() {
  return (
    <React.Fragment>
      <div className="text-left profile-header" id="ngo-id">
        <h3 className="heading-details ngo-name">
          ngo-name
        </h3>
        <p className="para-details ngo-aim">
          ngo-aim
        </p>
        <p className="para-details ngo-description">
          ngo-description
        </p>
        <p className="para-details ngo-catergory">
          ngo-category
        </p>
        <p className="para-details ngo-contact_Info">
          ngo-contact_Info
        </p>
      </div>
    </React.Fragment>
  )
}

export default ProfileHeader
