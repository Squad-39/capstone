import React from "react"
import AddProfile from '../ui/images/addprofile.jpeg'
import Button from 'react-bootstrap/Button';

export const Profile = () => {
  return (
    <>
      <h1>Profile</h1>
      <img src={AddProfile} width="100" alt="Icon" />
      <h3>FirstName LastName</h3>
      <p>Lorem ipsum dolor sit amet. consectetur adipisicing elit.</p>

      <Button variant="dark">Emblem</Button>
      <Button variant="dark">Achievements</Button>
      <Button variant="dark">Message</Button>
      <Button variant="dark">Join Squad</Button>

    </>
  )
}
