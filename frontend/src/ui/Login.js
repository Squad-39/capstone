import React from "react"
import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';
import Controller from '../ui/images/controllericon.png';
export const Login = () => {
  return (
    <>

      <div className={"container"}>
        <div className={"row"}>
          <div className={"col"} >
            <img src={Controller} alt="Icon" />
          </div>
        </div>
      </div>





      <Form>
        <h1>Login</h1>
      <Form.Group className="mb-3" controlId="formGroupEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email w-75" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password w-75" placeholder="Password" />
      </Form.Group>
      </Form>
      <Button variant="dark w-75">LOGIN</Button>
    </>
  )
}
