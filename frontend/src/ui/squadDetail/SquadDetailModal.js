import React, { useState } from 'react'
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SquadDetailPage} from "./SquadDetailPage";


export const SquadDetailModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="button ms-2" onClick={handleShow}>
        Squad Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="background border border-0" closeButton>
          <Modal.Title className="text">Squad Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="background">
          <SquadDetailPage/>
        </Modal.Body>
      </Modal>
    </>
  );
}