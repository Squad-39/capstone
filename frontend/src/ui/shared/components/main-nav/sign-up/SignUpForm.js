import React from 'react';
import {httpConfig} from "../../../utils/http-config";
import * as Yup from "yup";
import {Formik} from "formik";

import {SignUpFormContent} from "./SignUpFormContent";

export const SignUpForm = () => {
  const signUp = {
    profileImage: "",
    profileName: "",
    profileEmail: "",
    profilePassword: "",
    profilePasswordConfirm: "",
    profileGamertag: "",
    profilePlatform: "",
  };

  const validator = Yup.object().shape({
    profileEmail: Yup.string()
      .email("email must be valid email")
      .required('email is required'),
    profileName: Yup.string()
      .required("profile name is required"),
    profileGamertag: Yup.string()
      .required("profile gamer tag is required"),
    profilePlatform: Yup.string()
      .required("profile platform is needed"),
    profilePassword: Yup.string()
      .required("Password Confirm is required")
      .min(8, "Password must be at least 8 characters long"),
    profilePasswordConfirm: Yup.string()
      .required("Password confirm is required")
      .min(8, "Password must be at least 8 characters long")
  });

  const submitSignUp = (values, {resetForm, setStatus}) => {
    httpConfig.post("/apis/sign-up/", values)
      .then(reply => {
                      let {message, type} = reply;

                      if(reply.status === 200) {
                        resetForm();
                      }
                      setStatus({message, type});
      }
      );
  };

  return (
    <Formik initialValues={signUp} onSubmit={submitSignUp}
            validationSchema={validator}

            >
      {SignUpFormContent}
    </Formik>
  )
};