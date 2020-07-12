import React, { Component } from 'react';
import Home from "./HomeComponent/Home";
import Profile from "./ProfileComponent/Profile";
import Search from "./SearchComponents/Search";
import Login from './LoginComponent/Login';
import Register from './RegistrationComponent/Register';

class Pages extends Component {
    render() { 
        if(this.props.flag === 0) {
            return(<Home/>)
        } else if(this.props.flag === 1) {
            return(<Profile/>)
        } else if(this.props.flag === 2) {
            return(<Search/>)
        } else if( this.props.flag === 3) {
            return (<Login />)
        } else if( this.props.flag === 4) {
            return (<Register />)
        }
    }
}
 
export default Pages;