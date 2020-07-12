import React from 'react'
import './register.css'
import Form from 'react-bootstrap/Form'

function Register() {
  return (
    <React.Fragment>
    <div className="container">
      <div className="row no-gutters d-flex justify-content-center mt-5">
        <div class="card text-center mt-5" style={{width: '25rem'}}>
          <div class="card-header">
            Member Register
          </div>
          <div class="card-body"><Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>NGO NAME</Form.Label>
              <Form.Control type="ngoName" placeholder="Enter Name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email Adress</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            
            <Form.Group controlId="formBasicAim">
              <Form.Label>Aim</Form.Label>
              <Form.Control type="ngoAim" placeholder="Enter Aim" />
            </Form.Group>
            
            <Form.Group controlId="formBasicCategory">
              <Form.Label>Category</Form.Label>
              <Form.Control type="ngoCategory" placeholder="Enter Category" />
            </Form.Group>
            
            <Form.Group controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control type="ngoDescription" placeholder="Enter Description" />
            </Form.Group>
            
            <Form.Group controlId="formBasicContactInfo">
              <Form.Label>Contact Information</Form.Label>
              <Form.Control type="ngoContactInfo" placeholder="Enter ContactInfo" />
            </Form.Group>
            
            <Form.Group controlId="formBasicAuthorizationId">
              <Form.Label>Authorization Id</Form.Label>
              <Form.Control type="ngoAuthorizationId" placeholder="Enter AuthorizationId" />
            </Form.Group>

            <a href="#" class="btn btn-primary">Register</a>
          </Form>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  )
}

export default Register
