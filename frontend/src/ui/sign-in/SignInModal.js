import React, { useState } from 'react'
import {Button} from "react-bootstrap";
import {Modal} from "react-bootstrap";
import {SignIn} from "./Sign-In";


export const SignInModal = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" className="button ms-2" onClick={handleShow}>
        Sign In
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className="background border border-0" closeButton>
          <Modal.Title className="text">Sign In</Modal.Title>
        </Modal.Header>
        <Modal.Body className="background">
          <SignIn/>
        </Modal.Body>
      </Modal>
    </>
  );
}