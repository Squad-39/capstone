import React, { useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import './styles/style.css'
import { Container } from 'react-bootstrap'
import { SignInModal } from './sign-in/SignInModal'
import { SignUpModal } from './sign-up/SignUpModal'
import SFLogo from './images/sflogo.png'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAuth } from '../store/auth'

export function Navigation () {
  const auth = useSelector(state => state.auth ?? null)
  const dispatch = useDispatch()
  const effects = () => {
    dispatch(fetchAuth())
  }
  useEffect(effects, [dispatch])
  return (
    <>
      <Navbar expand="md">
        <Container className="w-75 p-1">
            <Navbar.Brand href="/">
              <img
                src={SFLogo}
                className="p-0 m-0"
                width="80"
                height="90"
                alt="Squad Finder Logo"
              />
            </Navbar.Brand>
          <Navbar.Toggle className="bg-white" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto fs-4">
              <Nav.Link href="/squads" className="text">Squads</Nav.Link>
              {auth &&
              <Nav.Link href="/profile" className="text">Profile</Nav.Link>
              }
              <Nav.Link href="/aboutus" className="text">About</Nav.Link>
            </Nav>
            <SignInModal/>
            <SignUpModal/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
