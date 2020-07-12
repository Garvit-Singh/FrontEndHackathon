import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Profile from '../ProfileComponent/Profile'
import Axios from 'axios'

class Login extends Component {
  constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			token: '',
      flag: false,
      id: ''
		};
  }
  
  handleSubmit = (event) => {
		event.preventDefault();
		const data = this.state;
		Axios.post('https://backendngodonor.herokuapp.com/ngo_/login', { email: data.email, password: data.password })
			.then((res) => {
        console.log(res.data,'from login response')
				alert(res.data.message);
				this.setState({
          token: res.data.token,
          id: res.data.user._id,
          flag: true
				});
				console.log(this.state);
			})
			.catch((res, err) => {
				console.log(err);
				alert(res.message);
			});
	};


  handleInputChange = (event) => {
		event.preventDefault();
		this.setState({
			[event.target.name]: event.target.value
		});
	};

  render() {
    if(!this.state.flag) {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row no-gutters d-flex justify-content-center mt-5">
            <div className="card text-center mt-5">
              <div className="card-header">
                Member Login
              </div>
              <div className="card-body"><Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"
                  name="email" onChange={this.handleInputChange} />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" onChange={this.handleInputChange} />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <a href="#" className="btn btn-primary" onClick={this.handleSubmit}>Login</a>
              </Form>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
    } else {
      return <Profile token={this.state.token}
      userId={this.state.id}/>;
    }
  }
}

export default Login
