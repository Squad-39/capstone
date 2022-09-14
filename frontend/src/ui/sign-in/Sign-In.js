import React from 'react'
import * as Yup from 'yup'
import { Formik } from 'formik'
import Form from 'react-bootstrap/Form'
import { DisplayError } from '../shared/components/display-error/DisplayError'
import Button from 'react-bootstrap/Button'
import { FormDebugger } from '../shared/components/FormDebugger'
import { httpConfig } from '../../utils/http-config'
import { setAuth } from '../../store/auth'
import jwtDecode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import '../styles/style.css'

export const SignIn = () => {
    const signIn = {
      profileEmail: '',
      profilePassword: '',
    }
const dispatch = useDispatch()

    const validator = Yup.object().shape({
      profileEmail: Yup.string()
        .email('email must be a valid email')
        .required('email is required'),
      profilePassword: Yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least eight characters')
    })

    const submitSignIn = (values, { resetForm, setStatus }) => {
      httpConfig.post('/apis/sign-in/', values)
        .then(reply => {
          const { message, type } = reply
          setStatus({ message, type })
          if (reply.status === 200 && reply.headers.authorization) {
            window.localStorage.removeItem('authorization')
            window.localStorage.setItem('authorization', reply.headers.authorization)
            resetForm()
            const jwtToken = jwtDecode(reply.headers.authorization)
            dispatch(setAuth(jwtToken))
          }
          setStatus({ message, type })
        })
    }

    return (
      <>
        <Formik
          initialValues={signIn}
          onSubmit={submitSignIn}
          validationSchema={validator}
        >
          {SignInFormContent}
        </Formik>


      </>

    )
  }

const SignInFormContent = (props) => {
  const {
    status,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props
  return (
    <>
      <Form className="p-5" onSubmit={handleSubmit}>
        <h2 className="text">Please Sign In</h2>
        <Form.Group className='mb-3 text' controlId='profileEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profileEmail'
            value={values.profileEmail}
            type='email'
            placeholder='Enter email' />
        </Form.Group>
        <DisplayError field='profileEmail' errors={errors} touched={touched} />

        <Form.Group className='mb-3 text' controlId='profilePassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            name='profilePassword'
            value={values.profilePassword}
            type='password'
            placeholder='Password' />
        </Form.Group>
        <DisplayError field='profilePassword' errors={errors} touched={touched} />

        <Button variant='dark' className="button" type='submit'>
          Submit
        </Button>

      </Form>
      {status && (<div className={status.type}>{status.message}</div>)}
      <FormDebugger {...props} />
    </>
  )
}
