import React from 'react'
import Card from 'react-bootstrap/Card'
import Controller from '../images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

export function GamesCard(props) {
  const {game} = props
  return ( <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={Controller} className='bg-black' alt='controller' />
    <Card.Body>
      <ListGroup className='text-center'>
        <ListGroup.Item>{game.gameName}</ListGroup.Item>
        <ListGroup.Item>Genre</ListGroup.Item>
      </ListGroup>
      <Button variant='primary mt-3'>Select Game</Button>
    </Card.Body>
  </Card>)
}