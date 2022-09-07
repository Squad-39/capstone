import React from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup'
import { Formik } from 'formik'
import { DisplayError } from './shared/components/display-error/DisplayError'
import { httpConfig } from '../utils/http-config'

export function SignUp () {
  const signUp = {
    profileImage: '',
    profileName: '',
    profileEmail: '',
    profilePassword: '',
    profilePasswordConfirm: '',
    profileGamertag: '',
    profilePlatform: ''
  }

  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email('email must be valid email')
      .required('email is required'),
    profileName: Yup.string()
      .required('profile name is required'),
    profileGamertag: Yup.string()
      .required('profile gamer tag is required'),
    profilePlatform: Yup.string()
      .required('profile platform is needed'),
    profilePassword: Yup.string()
      .required('Password Confirm is required')
      .min(8, 'Password must be at least 8 characters long'),
    profilePasswordConfirm: Yup.string()
      .required('Password confirm is required')
      .min(8, 'Password must be at least 8 characters long')
  })

  const submitSignUp = (values, { resetForm, setStatus }) => {
    httpConfig.post('/apis/sign-up/', values)
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
      initialValues={signUp} onSubmit={submitSignUp}
      validationSchema={validator}

    >
      {SignUpFormContent}
    </Formik>
  )
}

export const SignUpFormContent = (props) => {
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
      <h1>Create Your Account</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className='mb-3' controlId='profileName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profileName'
            value={values.profileName}
            type='text'
            placeholder='Enter name' />
        </Form.Group>
        <DisplayError field='profileName' values={values} touched={touched} />
        <Form.Group className='mb-3' controlId='profileEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profileEmail'
            value={values.profileEmail}
            type='email'
            placeholder='Enter email' />
          <Form.Text className='text-muted'>
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <DisplayError field='profileEmail' values={values} touched={touched} />
        <Form.Group className='mb-3' controlId='profileGamertag'>
          <Form.Label>Gamertag</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profileGamertag'
            value={values.profileGamertag}
            type='GamerTag'
            placeholder='Enter gamertag' />
          <Form.Text className='text-muted'>
            share at your own risk
          </Form.Text>
        </Form.Group>
        <DisplayError field='profileGamertag' values={values} touched={touched} />
        <Form.Group className='mb-3' controlId='profilePassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profilePassword'
            value={values.profilePassword}
            type='password'
            placeholder='Password' />
        </Form.Group>
        <DisplayError field='profilePassword' values={values} touched={touched} />
        <h1>Choose your Poison</h1>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Epic' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Steam' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Xbox' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Playstation' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formBasicCheckbox'>
          <Form.Check type='checkbox' label='Atari' />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </>
  )
}
