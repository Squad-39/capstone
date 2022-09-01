import { Router } from 'express'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import {
  getGameSquadsByGameSquadSquadId, getGameSquadsByGameSquadGameId, postGameSquadsByGameSquadSquadId,
} from './gameSquad.controller'
import { gameSquadValidator } from './gameSquad.validator'


export const gameSquadRoute = Router()


gameSquadRoute.route('/')
  .get(getGameSquadsByGameSquadGameId)
  .post(isLoggedInController, asyncValidatorController(checkSchema(gameSquadValidator)),postGameSquadsByGameSquadSquadId )
gameSquadRoute.route('/:statusId')
  .get(
    asyncValidatorController(
      [check('statusId', 'Please provide a valid uuid').isUUID()]
    ), getGameSquadsByGameSquadGameId
  )
gameSquadRoute.route('/:statusId')
  .get(
    asyncValidatorController(
      [check('statusId', 'Please provide a valid uuid').isUUID()]
    ), getGameSquadsByGameSquadSquadId
  )

