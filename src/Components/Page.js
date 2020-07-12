import React, { Component } from 'react';
import Axios from 'axios';
import Home from "./HomeComponent/Home";
import Profile from "./ProfileComponent/Profile";
import Search from "./SearchComponents/Search";
import Login from './LoginComponent/Login';
import Register from './RegistrationComponent/Register';

class Pages extends Component {
    state = {
        users: []
    };

    componentDidMount() {
        Axios.get('https://backendngodonor.herokuapp.com/users')
        .then((res) => {
            this.setState({ users: res.data.users });
            console.log("Requests Successful")
        })
        .catch((err) => {
            console.log(err);
        });
    }

    render() { 
        if(this.props.flag === 0) {
            return(<Home/>)
        } else if(this.props.flag === 1) {
            return(<Profile/>)
        } else if(this.props.flag === 2) {
            return(<Search users={this.state.users}/>)
        } else if( this.props.flag === 3) {
            return (<Login />)
        } else if( this.props.flag === 4) {
            return (<Register />)
        }
    }
}
 
export default Pages;
