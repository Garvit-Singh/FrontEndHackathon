import React, { Component } from 'react'

class ProfileHeader extends Component {
  render() {
    console.log(this.props,'from profile header');
    return (
      <React.Fragment>
        <div className="text-left profile-header" id="ngo-id">
          <h3 className="heading-details ngo-name">
            {this.props.ngoName}
          </h3>
          <p className="para-details ngo-aim">
            {this.props.ngoAim}
          </p>
          <p className="para-details ngo-description">
            {this.props.ngoDesc}
          </p>
          <p className="para-details ngo-catergory">
            {this.props.ngoCat}
          </p>
          <p className="para-details ngo-contact_Info">
            Contact Info: {
              this.props.contact===undefined ? '' : this.props.contact.Address
            }
          </p>
          <p className="para-details ngo-contact_Info">
            {this.props.ngoName}@gmail.com
          </p>
          <p className="para-details ngo-contact_Info">
            9238792398
          </p>
        </div>
      </React.Fragment>
    )
  }
}

export default ProfileHeader
