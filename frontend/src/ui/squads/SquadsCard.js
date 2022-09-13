import React from 'react'
import Card from 'react-bootstrap/Card'
import Controller from '../images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { SquadDetailModal } from '../squadDetail/SquadDetailModal'

export function SquadsCard(props) {
  const {squad} = props
  return ( <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={Controller} className='bg-black' alt='controller' />
    <Card.Body>
      <ListGroup className='text-center'>
        <ListGroup.Item>{squad.squadName}</ListGroup.Item>
        <ListGroup.Item>Genre</ListGroup.Item>
      </ListGroup>
      <SquadDetailModal/>
    </Card.Body>
  </Card>)
}