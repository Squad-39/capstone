import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Controller from '../ui/images/controllericon.png'
import { ListGroup } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import * as Yup from 'yup'
import { httpConfig } from '../utils/http-config'
import { Formik } from 'formik'
import { FormDebugger } from './shared/components/FormDebugger'

export const Squads = () => {
  const squads = {
    squadAchievements: '',
    squadName: '',
    squadMaxSize: '',
  }
  const validator = Yup.object().shape({
    squadAchievements: Yup.string()
      .min(1,'squad achievement within 1 through 8 characters')
      .max(8, 'squad achievement within 1 through 8 characters')
      .required("This field is required"),
    squadName: Yup.string()
      .min(1, 'Error, name has to be between 1 to 32 characters.' )
      .max(32, 'Error, name has to be between 1 to 32 characters.')
      .required("This field is required"),
    squadMaxSize: Yup.number()
      .positive("Must be more than 0 and not an odd number")
      .integer("Must be more than 0")
      .required("This field is required"),

  })
  const submitSquads = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/squads/', values)
      .then(reply => {
          const { message, type } = reply

          if (reply.status === 200) {
            resetForm()
          }
          setStatus({ message, type })
        }
      )
  }

  return (
    <Formik
      initialValues={squads} onSubmit={submitSquads}
      validationSchema={validator}

    >
      {SquadFormContent}
    </Formik>
  )
}
export const SquadFormContent = (props) => {
  const {
    status,
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props
  return (
    <>
    {/* This is the dropdown for searching for Squads */}
      <Dropdown>
        <Dropdown.Toggle variant='primary mt-3' id='dropdown-basic'>
          Search
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>Adventure</Dropdown.Item>
          <Dropdown.Item href='#/action-2'>FPS</Dropdown.Item>
          <Dropdown.Item href='#/action-3'>Shooters</Dropdown.Item>
          <Dropdown.Item href='#/action-4'>MOBA</Dropdown.Item>
          <Dropdown.Item href='#/action-5'>MMO</Dropdown.Item>
          <Dropdown.Item href='#/action-6'>RPG</Dropdown.Item>
          <Dropdown.Item href='#/action-7'>Sports</Dropdown.Item>
          <Dropdown.Item href='#/action-8'>Simulation</Dropdown.Item>
          <Dropdown.Item href='#/action-9'>Strategy</Dropdown.Item>
          <Dropdown.Item href='#/action-10'>Fighting</Dropdown.Item>
          <Dropdown.Item href='#/action-11'>Platformer</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      {/* This is the formatting for displaying available squads from user search criteria */}
      <h1>Squads</h1>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant='top' src={Controller} className='bg-black' alt='controller' />
        <Card.Body>
          <ListGroup className='text-center'>
            <ListGroup.Item>Squad Name</ListGroup.Item>
            <ListGroup.Item>Genre</ListGroup.Item>
          </ListGroup>
          <Button variant='primary mt-3'>Squad Up</Button>
        </Card.Body>
      </Card>
      {status && (<div className={status.type}>{status.message}</div>)}
      <FormDebugger {...props} />
    </>
  )
}
