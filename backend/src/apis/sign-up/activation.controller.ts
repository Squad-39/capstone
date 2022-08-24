import {NextFunction, Request, Response} from "express";
import {Profile} from "../../utils/models/Profile";
import {Status} from '../../utils/interfaces/Status';


export async function activationController(request: Request, response: Response, nextFunction: NextFunction): Promise<Response<Status>> {
  try {
    const activationFailed = () : Response => response.json({
      status: 400,
      data: null,
      message: "Account activation has failed. Have you already activated this account"
    });

    const activationSucceeded = async (profile: Profile):Promise<Response> => {
      const updatedProfile = {...profile, profileActivationToken: null}
      console.log(updatedProfile)
      await updateProfile(updatedProfile)
      return response.json({
        status: 200,
        data: null,
        message: "Account activation was successful"
      });
    }

    return profile ? await activationSucceeded(profile) : activationFailed()

  } catch (error: any) {
    return response.json({status: 500, data: null, message: error.message})
  }
}