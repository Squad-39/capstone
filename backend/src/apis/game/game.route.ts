import { Router } from 'express'
import { getAllGamesController, getGameByGameId, postGameController } from './game.controller'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { gameValidator } from './game.validator'

export const gameRoute = Router()

gameRoute.route('/:gameId')
  .get(asyncValidatorController([check("gameId", "please provide a valid gameId").isUUID()]),getGameByGameId)

gameRoute.route('/')
  .get(getAllGamesController)

.post(isLoggedInController, asyncValidatorController(checkSchema(gameValidator)),postGameController)













