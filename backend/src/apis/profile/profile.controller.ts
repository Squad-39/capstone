import { Request, Response } from 'express'
import {
  Profile,
  selectPartialProfileByProfileId,
  updateProfile, selectPartialProfilesBySquadId
} from '../../utils/models/Profile'
import { Status } from '../../utils/interfaces/Status'
export async function putProfileController (request: Request, response: Response): Promise<Response>  {
  try {
    const { profileId } = request.params
    console.log("profileId from url", profileId)
    const profile = request.session.profile as Profile
    const profileIdFromSession = profile.profileId as string

    if (profileId !== profileIdFromSession) {
      return response.json({status: 400, data: null, message: 'You are not allowed to preform this task'})
    }
    const {profileEmail, profileGamertag, profileName, profilePlatform} = request.body
    const updatedValues = {profileEmail, profileGamertag, profileName, profilePlatform}
    const previousProfile: Profile = await selectPartialProfileByProfileId(profileId) as Profile

    const newProfile: Profile = { ...previousProfile, ...updatedValues }
    await updateProfile(newProfile)
    return response.json({ status: 200, data: null, message: 'Profile successfully updated' })
  } catch (error: any) {
    return response.json({ status: 400, data: null, message: error.message })
  }
}
    export async function getProfileByProfileIdController (request: Request, response: Response): Promise<Response> {
      try {
        const {profileId} = request.params;
        const mySqlResult = await selectPartialProfileByProfileId(profileId);
        const data = mySqlResult ?? null
        const status: Status = {status: 200, data, message: null}
        return response.json(status)
      } catch (error: any) {
        return (response.json({status: 400, data: null, message: error.Message.ts}))
      }
    }
export async function getPartialProfilesBySquadIdController (request: Request, response: Response): Promise<Response> {
  try {
    const {squadId} = request.params;
    const mySqlResult = await selectPartialProfilesBySquadId(squadId);
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null}
    return response.json(status)
  } catch (error: any) {
    return (response.json({status: 400, data: null, message: error.Message.ts}))
  }
}