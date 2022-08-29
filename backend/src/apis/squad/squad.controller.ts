import {
  insertSquad,
  selectPartialSquadBySquadId,
  selectSquadBySquadId,
  Squad,
  updateSquad
} from '../../utils/models/Squad'
import {Request, Response} from "express";
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'


/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
// Export async function for creating a Squad.
// export async function postSquadController(request: Request, response: Response) : Promise<Response<Status>> {
//   try {
//     const {squadName, squadAchievements, squadMaxSize} = request.body;
//     const profile : Profile = request.session.profile as Profile
//     const squadProfileId : string = <string>profile.profileId
//     const squad: Squad = {
//       squadId: null,
//       squadProfileId,
//       squadAchievements,
//       squadEmblem: null,
//       squadMaxSize,
//       squadName,
//     }
//     const result = await insertSquad(squad)
//     const status: Status = {
//       status: 200,
//       message: result,
//       data: null
//     };
//     return response.json(status);
//   } catch(error) {
//     return  response.json({
//       status: 500,
//       message: "Error Creating squad try again later.",
//       data: null
//     })

    export async function putSquadController (request: Request, response: Response): Promise<Response> {
      try {
        const { profileId } = request.params
        console.log("squadId from url", profileId)
        const profile = request.session.profile as Profile
        const profileIdFromSession = profile.profileId as string

        if (profileId !== profileIdFromSession) {
          return response.json({ status: 400, data: null, message: 'You are not allowed to preform this task' })
        }
    // Export async function for updating a Squad
        const {squadAchievements, squadEmblem, squadMaxSize, squadName} = request.body
        const updatedValues = {squadAchievements, squadEmblem, squadMaxSize, squadName}
        const previousSquad: Squad = await selectPartialSquadBySquadId(profileId) as Squad

        const newSquad: Squad = {...previousSquad, ...updatedValues }
        await updateSquad(newSquad)
        return response.json({ status: 200, data: null, message: 'Squad successfully updated' })
      } catch (error: any) {
        return response.json({ status: 400, data: null, message: error.message })
      }
}

// Export async function for getting a Squad by SquadId
export async function getSquadBySquadId(request: Request, response: Response): Promise<Response> {
  try {
    const {squadId} = request.params;
    const mySqlResult = await selectSquadBySquadId(squadId);
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null}
    return response.json(status)
  } catch (error: any) {
    return (response.json({status: 400, data: null, message: error.message}))
  }
}