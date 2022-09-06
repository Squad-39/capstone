
import {NextFunction, Request, Response} from "express";
import {Status} from '../../utils/interfaces/Status';
import {
  Profile,
 selectProfileByProfileActivationToken,
  insertProfile} from '../../utils/models/Profile'


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


async function activationSucceeded (profile: Profile, response: Response):Promise<Response>  {
  const Profile = {...profile, profileActivationToken: null}
  console.log(Profile)
  await insertProfile(Profile)
  return response.json({
    status: 200,
    data: null,
    message: 'Account activation was successful'
  })
}
