import React, { Component } from 'react'
import './profile.css'
import ProfileHeader from './ProfileHeader'
import ProfileActivity from './ProfileActivity'
import Axios from 'axios'

class Profile extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    Axios.get(`https://backendngodonor.herokuapp.com/users/ngo/${this.props.userId}`)
    .then((res) => {
      this.setState({
        user: res.data.user
      });
    })
    .catch((err) => {
      console.log(err);
    });
  }

  render() {
    return (
      <React.Fragment>
        <ProfileHeader ngoName={this.state.user.ngoName}
        ngoAim={this.state.user.ngoAim}
        ngoDesc={this.state.user.ngoDescription}
        ngoCat={this.state.user.ngoCategory}
        contact={this.state.user.contact_Info}/>
        <ProfileActivity ngo_Recent_Activities={this.state.user.ngo_Recent_Activities}/>
      </React.Fragment>
    )
  }
}

export default Profile
