import { Router } from 'express'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import {
  getGameSquadsByGameSquadSquadId,  postGameSquad, getGameSquadsByGameSquadGameId
} from './gameSquad.controller'
import { gameSquadValidator } from './gameSquad.validator'


export const gameSquadRoute = Router()


gameSquadRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(gameSquadValidator)),postGameSquad )

gameSquadRoute.route('gameSquadGameId/:gameSquadGameId')
  .get(
    asyncValidatorController(checkSchema(gameSquadValidator)), getGameSquadsByGameSquadGameId)

gameSquadRoute.route('gameSquadSquadId/:gameSquadSquadId')
  .get(isLoggedInController, asyncValidatorController([check('gameSquadSquadId', 'Please provide a valid squadGameId').isUUID()]), getGameSquadsByGameSquadSquadId)


