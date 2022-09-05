import { Router } from 'express'
import { getAllGamesController, getGameByGameId, postGameController } from './game.controller'
import { isLoggedIn } from '../../utils/controllers/isLoggedIn.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { gameValidator } from './game.validator'

export const gameRoute = Router()

gameRoute.route('/:gameId')
  .get(asyncValidatorController([check("gameId", "please provide a valid gameId").isUUID()]),getGameByGameId)

gameRoute.route('/')
  .get(getAllGamesController)

.post(isLoggedIn, asyncValidatorController(checkSchema(gameValidator)),postGameController)













