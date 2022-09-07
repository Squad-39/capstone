import React from "react"
import Form from 'react-bootstrap/Form';

export const Squads = () => {
  return (
    <>
      <h1>Squads</h1>

      <Form.Label htmlFor="inputGameName">Name</Form.Label>
      <Form.Control
        type="gameName"
        id="inputGameName"
      />
      <Form.Label htmlFor="inputGameGenre">Genre</Form.Label>
      <Form.Control
        type="gameGenre"
        id="inputGameGenre"
      />

    </>
  )
}