import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'
import { selectGameSquadsByGameSquadGameId, selectGameSquadsByGameSquadSquadId, insertGameSquad, selectGameSquadById, GameSquad
} from "../../utils/models/GameSquad";

export async function getGameSquadsByGameSquadGameId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { gameSquadGameId } = request.params
    const data = await (gameSquadGameId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}
export async function getGameSquadsByGameSquadSquadId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { gameSquadSquadId } = request.params
    const data = await  (gameSquadSquadId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}
  export async function postGameSquadsByGameSquadSquadId (request: Request, response: Response): Promise<Response<Status>> {
    try {
      const {gameSquadSquadId } = request.body

      // Grab the gameSquadId from the session
      const profile = request.session.profile as Profile
      const gameSquadGameId = profile.profileId as string

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
        message: 'Error creating ticket try again later.',
        data: null
      })
    }
  }