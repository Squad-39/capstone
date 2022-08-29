import { insertGame, selectGameByGameId, Game } from '../../utils/models/Game'
import {Request, Response} from "express";
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'


export async function postGameController(request: Request, response: Response) : Promise<Response<Status>> {
  try {

    const {gameName, gameAchievements, gameMaxSize} = request.body;
    const profile : Profile = request.session.profile as Profile
    const gameProfileId : string = <string>profile.profileId

    const game: Game 
      = {
      gameId: null,
      gameProfileId,
      gameAchievements,
      gameEmblem: null,
      gameMaxSize,
      gameName,

    }
    const result = await insertGame(game)
    const status: Status = {
      status: 200,
      message: result,
      data: null
    };
    return response.json(status);

  } catch(error) {
    return  response.json({
      status: 500,
      message: "Error Creating game try again later.",
      data: null
    });
  }
}

export async function getGameByGameId(request: Request, response: Response): Promise<Response> {
  try {
    const {gameId} = request.params;
    const mySqlResult = await selectGameByGameId(gameId);
    const data = mySqlResult ?? null
    const status: Status = {status: 200, data, message: null}
    return response.json(status)
  } catch (error: any) {
    return (response.json({status: 400, data: null, message: error.message}))
  }
}

