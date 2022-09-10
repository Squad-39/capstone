import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

import './styles/style.css'
export function Navigation () {
  return (
    <>

      <Navbar className='background' variant='dark'>
        <Navbar.Brand href='/' className="text">Squad</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/sign-in' className="text">Sign In</Nav.Link>
          <Nav.Link href='/sign-up' className="text">Sign Up</Nav.Link>
          <Nav.Link href='/squads' className="text">Squads</Nav.Link>
          <Nav.Link href='/profile' className="text">Profile</Nav.Link>
          <Nav.Link href='#aboutus' className="text">About Us</Nav.Link>
          <Nav.Link href='#contactus' className="text">Contact Us</Nav.Link>
          <Navbar bg='dark' variant='dark'></Navbar>
        </Nav>
      </Navbar>
    </>
    )
    }

