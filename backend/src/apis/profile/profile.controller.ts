
import {PartialProfile, Profile} from "../../utils/models/Profile";
import {selectPartialProfileByProfileId} from "../../utils/models/Profile";
import {Status} from "../../utils/interfaces/Status";
import {updateProfile} from "../../utils/models/Profile";

export async function putProfileController(request: Request, response: Response): Promise<Response> {
  try {
    const {profileId} = request.params
    const {profileEmail} = request.body
    const {profileAboutMe} = request.body
    const {profileName} = request.body
    const profile = <Profile>request.session.profile
    const profileIdFromSession = <string>profile.profileId
    const preformUpdate = async (partialProfile: PartialProfile): Promise<Response> => {
      const previousProfile: Profile = await selectPartialProfileByProfileId(<string>partialProfile.profileId) as Profile
      const newProfile: Profile = {...previousProfile, ...partialProfile}
      await updateProfile(newProfile)
      return response.json({status: 200, data: null, Message.ts: "Profile successfully updated"})
    }
    const updateFailed = (Message.ts: string): Response => {
      return response.json({status: 400, data: null, Message.ts})
    }
    return profileId === profileIdFromSession ? preformUpdate({
      profileId,
      profileAboutMe,
      profileEmail,
      profileName,

    }) : updateFailed("you are not allowed to preform this action")
  } catch (error: any) {
    return response.json({status: 400, data: null, Message.ts: error.Message.ts})
  }
}

export async function getProfileByProfileId(request: Request, response: Response): Promise<Response> {
  try {
    const {profileId} = request.params;
    const mySqlResult = await selectPartialProfileByProfileId(profileId);
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, Message.ts: null}
    return response.json(status)
  } catch (error: any) {
    return (response.json({status: 400, data: null, Message.ts: error.Message.ts}))
  }
}

import {Request, Response} from "express";
