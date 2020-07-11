import React from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './Navigation.css'

function NavigationBar() {
  return (
    <React.Fragment>
      <Navbar id="nav-bar" bg="dark" variant="dark" expand="lg" fixed="top" className="border-bottom border-success">
        <Navbar.Brand href="#home">ngoDONOR</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#Official Website">Register</Nav.Link>
            <Nav.Link href="#contact">Category</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

export default NavigationBar
