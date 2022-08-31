<<<<<<< HEAD
import { NextFunction, Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { updateProfile, Profile, selectProfileByProfileActivationToken } from '../../utils/models/Profile'
=======
import {NextFunction, Request, Response} from "express";
import {Status} from '../../utils/interfaces/Status';
import {
  Profile,
  selectProfileByProfileActivationToken,
  insertProfile
} from '../../utils/models/Profile'
>>>>>>> 97d622f1a5d03ed7bd2b9b337f4fe091ba3810ed

export async function activationController (request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
  try {
    const { activation } = request.params
    const profile = await selectProfileByProfileActivationToken(activation)
    console.log(profile)
    return (profile != null) ? await activationSucceeded(profile, response) : activationFailed(response)
  } catch (error: any) {
    return response.json({ status: 500, data: null, message: error.message })
  }
}

function activationFailed (response: Response): Response {
  return response.json({
    status: 400,
    data: null,
    message: 'Account activation has failed. Have you already activated this account'
  })
}

<<<<<<< HEAD
async function activationSucceeded (profile: Profile, response: Response): Promise<Response> {
  const updatedProfile = { ...profile, profileActivationToken: null }
  console.log(updatedProfile)
  await updateProfile(updatedProfile)
=======
async function activationSucceeded (profile: Profile, response: Response):Promise<Response>  {
  const Profile = {...profile, profileActivationToken: null}
  console.log(Profile)
  await insertProfile(Profile)
>>>>>>> 97d622f1a5d03ed7bd2b9b337f4fe091ba3810ed
  return response.json({
    status: 200,
    data: null,
    message: 'Account activation was successful'
  })
}
