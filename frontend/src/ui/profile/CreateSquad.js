import * as Yup from 'yup'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { FormDebugger } from '../shared/components/FormDebugger'

export function CreateSquadForm() {
  const squads = {
    squadAchievements: '',
    squadName: '',
    squadMaxSize: '',
    gameName: []
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
    httpConfig.post('/apis/squad/', values)
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
      {SquadsCard}
    </Formik>
  )
}

const SquadsCard = (props) => {
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
    <Form className="p-5" onSubmit={handleSubmit}>
      <h2 className="text">Create Your Squad</h2>
      <Form.Group className='mb-3 text' controlId='squadName'>
        <Form.Label>Squad Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          name='squadName'
          value={values.squadName}
          type='text'
          placeholder='Enter Your Squad Name' />
      </Form.Group>
      <h2 className="text">List Achievements Name</h2>
      <Form.Group className='mb-3 text' controlId='squadAchievements'>
        <Form.Label>Achievement Name</Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          name='squadAchievements'
          value={values.squadAchievements}
          type='text'
          placeholder='List Achievements Name' />
      </Form.Group>
      <h2 className="text">Squad's Max Size</h2>
      <Form.Group className='mb-3 text' controlId='squadMaxSize'>
        <Form.Label>Squad's Max Size</Form.Label>
        <Form.Control
          onChange={handleChange}
          onBlur={handleBlur}
          name='squadMaxSize'
          value={values.squadMaxSize}
          type='integer'
          placeholder='Type in a number' />
      </Form.Group>
    <h2 className="text">Choose Your Platform(s)</h2>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='League of Legends' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Leagure of Legends'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Rocket League' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Rocket League'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Counter-Strike: Global Offensive' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Counter-Strike: Global Offensive'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Dota 2' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Dota 2'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Tekken 7' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Tekken 7'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label='Overwatch' name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value='Overwatch'/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Tom Clancy's Rainbow Six Siege" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Tom Clancy's Rainbow Six Siege"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Hearthstone" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Hearthstone"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Apex Legends" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Apex Legends"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Starcraft 2" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Starcraft 2"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Super Smash Brothers" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Super Smash Brothers"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Valorant" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Valorant"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="FIFA" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="FIFA"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Call of Duty Warzone" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Call of Duty Warzone"/>
    </Form.Group>
    <Form.Group className='mb-3 text' controlId='formBasicCheckbox'>
      <Form.Check type='checkbox' label="Madden" name='gameName'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value="Madden"/>
    </Form.Group>

    <Button variant='dark' className="button" type='submit'>
      Submit
    </Button>

    </Form>
  {status && (<div className={status.type}>{status.message}</div>)}
  <FormDebugger {...props} />
    </>
  )
}