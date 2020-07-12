import React, { Component } from 'react';
import './App.css';
import NavigationBar from './Components/NavigationComponent/NavigationBar';
import Pages from './Components/Page'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      flag: 0
    }
  }

  handleChangeToHome = () => {
    this.setState({
      flag: 0
    })
  }


  handleChangeToProfile = () => {
    this.setState({
      flag: 1
    })
  }

  handleChangeToSearch = () => {
    this.setState({
      flag: 2
    })
  }
  
  handleChangeToLogin = () => {
    this.setState({
      flag: 3
    })
  }
  
  handleChangeToRegister = () => {
    this.setState({
      flag: 4
    })
  }


  render() {
    return (
      <div className="App">
        <NavigationBar 
          flag={this.state.flag}
          handleChangeToHome = {this.handleChangeToHome}
          handleChangeToProfile = {this.handleChangeToProfile}
          handleChangeToSearch = {this.handleChangeToSearch}
          handleChangeToLogin = {this.handleChangeToLogin}
          handleChangeToRegister = {this.handleChangeToRegister}
        />
        <Pages flag={this.state.flag} />
      </div>
    );
  }
}

export default App;
