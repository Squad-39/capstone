import React from 'react'
import Card from 'react-bootstrap/Card'
import Controller from '../images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { SquadDetailModal } from '../squadDetail/SquadDetailModal'
import { Link } from 'react-router-dom'

export function SquadsCard(props) {
  const {squad} = props
  return (
    <Card className="text-center cardWidth m-4">
    <Card.Img variant='top' src={Controller} className='bg-black' alt='controller' />
    <Card.Body>
      <ListGroup className='text-center'>
        <ListGroup.Item className="mb-3">{squad.squadName}</ListGroup.Item>
      </ListGroup>
      <Link to = {`/squad-details/${squad.squadId}`}>View Squad</Link>
    </Card.Body>
  </Card>
  )
}