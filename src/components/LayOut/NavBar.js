import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SignUp from './SignUp';
const NavBar = () => {
  return (
    <div>
    
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">EXPANSE TRACKER</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#products">PRODUCTS</Nav.Link>
            <Nav.Link href="#about">ABOUT</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <SignUp/>
     
    </div>
  )
}

export default NavBar