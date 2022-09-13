import React from "react"
import  Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import SquadLogo from './images/blackSquad.jpg';
export const SquadProfile = () => {
  return (
    <>

      <div className={"container text-center"}>
        <div className={"row"}>
          <div className={"col"} >
            <img src={SquadLogo} alt="black-squad" />
          </div>
        </div>
      </div>

    <div className={"container"}>
      <ListGroup>
      <ListGroup.Item>Squad Name</ListGroup.Item>
      <ListGroup.Item>Emblem</ListGroup.Item>
      <ListGroup.Item>Achievements</ListGroup.Item>
      <ListGroup.Item>Squad Size</ListGroup.Item>
      </ListGroup>
      <Button variant="dark w-100 text-center">Join Squad</Button>
    </div>





    </>
  )
}
