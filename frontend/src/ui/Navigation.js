import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export function Navigation() {
  return (
    <Container fluid>
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/sign-up">Sign Up</Nav.Link>
          <Nav.Link href="/squads">Squads</Nav.Link>
          <Nav.Link href="/aboutus">About Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  )
}