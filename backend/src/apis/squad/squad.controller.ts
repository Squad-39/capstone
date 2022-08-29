import { insertSquad, selectSquadBySquadId, Squad } from '../../utils/models/Squad'
import {Request, Response} from "express";
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'

export async function postSquadController(request: Request, response: Response) : Promise<Response<Status>> {
  try {

    const {squadName, squadAchievements, squadMaxSize} = request.body;
    const profile : Profile = request.session.profile as Profile
    const squadProfileId : string = <string>profile.profileId

    const squad: Squad = {
      squadId: null,
      squadProfileId,
      squadAchievements,
      squadEmblem: null,
      squadMaxSize,
      squadName,

    }
    const result = await insertSquad(squad)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    };
    return response.json(status);

  } catch(error) {
    return  response.json({
      status: 500,
      message: "Error Creating squad try again later.",
      data: null
    });
  }
}

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


// export async function deleteSquad(request: Request, response: Response) {
//   try {
//     const {squadId} = request.body;
//     const result = await deleteSquad(squadId)
//     const status: Status = {status: 200, data, message: null}
//     return response.json(status)
//   } catch (error) {
//     console.log(error)
//   }
// }