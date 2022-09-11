import React, { useState } from 'react'
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignUp} from "./Sign-Up";


export const SignUpModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="button ms-2" onClick={handleShow}>
        Sign Up
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="background border border-0" closeButton>
          <Modal.Title className="text">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body className="background">
          <SignUp/>
        </Modal.Body>
      </Modal>
    </>
  );
}