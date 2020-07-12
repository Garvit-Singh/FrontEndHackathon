import React from 'react'
import Form from 'react-bootstrap/Form'

function Login() {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row no-gutters d-flex justify-content-center mt-5">
          <div class="card text-center mt-5">
            <div class="card-header">
              Member Login
            </div>
            <div class="card-body"><Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <a href="#" class="btn btn-primary">Login</a>
            </Form>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Login
