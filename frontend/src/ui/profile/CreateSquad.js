import * as Yup from 'yup'
import { httpConfig } from '../../utils/http-config'
import { Formik } from 'formik'
import React from '@types/react'
import { SquadFormContent } from '../squads/Squads'

export function CreateSquadForm() {
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