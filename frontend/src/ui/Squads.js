import React from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Controller from '../ui/images/controllericon.png';

export const Squads = () => {
  return (
    <>
      <Form.Label htmlFor="inputSquadSearch">Search</Form.Label>
      <Form.Control
        type="squadSearch"
        id="inputSquadSearch"
      />
      <Button variant="primary mt-3">Search</Button>
      <h1>Squads</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={ Controller }className="bg-black" alt="controller"/>
        <Card.Body>
      <Form.Label htmlFor="inputGameName">Name</Form.Label>
        <Form.Control
          type="gameName"
          id="inputGameName"
        />
      <Form.Label htmlFor="inputGameGenre">Genre(s)</Form.Label>
        <Form.Control
          type="gameGenre"
          id="inputGameGenre"
        />
        <Button variant="primary mt-3">Squad Up</Button>
        </Card.Body>
      </Card>
    </>
  )
}