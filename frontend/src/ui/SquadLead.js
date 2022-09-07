import React from 'react'
import Controller from '../ui/images/controllericon.png'
import Button from 'react-bootstrap/Button'

export const SquadLead = () => {
  return (
    <>
      {/* This is the Squad Leads view of members that have requested to join the squad. */}
      <div>
        <img src={Controller} className='bg-black rounded rounded-circle' width='100px' alt='squadAvatar' />
        <h2>Squad Name</h2>
        <h3>Games, Genre(s)</h3>
        <h4>Squad Size</h4>
      </div>
      {/* Displays the members that have requested to join the squad */}
      <div className='mt-5'>
        <h5>Profile Name</h5>
        <img src={Controller} className='bg-black rounded rounded-circle' width='50px' alt='squadAvatar' />
        <Button variant='primary ms-3'>Request/Accepted</Button>
      </div>
    </>
  )
}
