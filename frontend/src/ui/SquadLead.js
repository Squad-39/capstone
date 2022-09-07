import React from "react"
import Controller from '../ui/images/controllericon.png'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

export const SquadLead = () => {
  return (
    <>
      <img src={Controller}className="bg-black" alt="squadAvatar"></img>
      <Form.Label htmlFor="inputSquadName">Name</Form.Label>
        <Form.Control
          type="squadName"
          id="inputSquadName"
        />
      <img src={Controller}className="bg-black" alt="squadAvatar"/>
      <Button variant="primary">Requests</Button>
    </>
  )
}