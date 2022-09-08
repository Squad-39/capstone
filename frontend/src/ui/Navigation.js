import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export function Navigation () {
  return (
    <>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='/'>Squad</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/sign-in'>Sign In</Nav.Link>
          <Nav.Link href='/sign-up'>Sign Up</Nav.Link>
          <Nav.Link href='/squads'>Squads</Nav.Link>
          <Nav.Link href='/profile'>Profile</Nav.Link>
          <Nav.Link href='#aboutus'>About Us</Nav.Link>
          <Nav.Link href='#contactus'>Contact Us</Nav.Link>
        </Nav>
      </Navbar>
      <br />
    </>
  )
}
