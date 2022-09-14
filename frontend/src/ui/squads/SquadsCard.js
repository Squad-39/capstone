import React from 'react'
import Card from 'react-bootstrap/Card'
import Controller from '../images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { SquadDetailModal } from '../squadDetail/SquadDetailModal'
import { Link } from 'react-router-dom'

export function SquadsCard(props) {
  const {squad} = props
  return ( <Card style={{ width: '18rem' }}>
    <Card.Img variant='top' src={Controller} className='bg-black' alt='controller' />
    <Card.Body>
      <ListGroup className='text-center'>
        <ListGroup.Item>{squad.squadName}</ListGroup.Item>
        <ListGroup.Item>Genre</ListGroup.Item>
      </ListGroup>
      <Button><Link to = {
        `/squad-details/${squad.squadId}`
      }>
        view squad
      </Link></Button>
    </Card.Body>
  </Card>)
}