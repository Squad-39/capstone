import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { insertGameSquad, GameSquad, selectGameSquadsByGameSquadSquadId, selectGameSquadById, selectGameSquadsByGameSquadGameId
} from "../../utils/models/GameSquad";

export async function getGameSquadsByGameSquadGameId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { gameSquadGameId } = request.body
    const data = await selectGameSquadsByGameSquadGameId(gameSquadGameId)
    // return the response
    const status: Status = { status: 200, message: "GOT EM", data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'here',
      data: []
    })
  }
}
export async function getGameSquadsByGameSquadSquadId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { gameSquadSquadId } = request.body
    const data = await selectGameSquadsByGameSquadSquadId(gameSquadSquadId)
    // return the response
    const status: Status = { status: 200, message: "got IT", data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'or here?',
      data: []
    })
  }
}
  export async function postGameSquad (request: Request, response: Response): Promise<Response<Status>> {
    try {
      const {gameSquadSquadId, gameSquadGameId } = request.body

      // Grab the gameSquadId from the session
      const profile = request.session.profile as Profile
      const squadProfileId = profile.profileId as string

      const gameSquad: GameSquad = { gameSquadGameId, gameSquadSquadId}
      const result = await insertGameSquad(gameSquad)
      const status: Status = {
        status: 200,
        message: result,
        data: null
      }
      return response.json(status)
    } catch (error) {
      return response.json({
        status: 500,
        message: 'Error getting gameSquadId try again later.',
        data: null
      })
    }
  }