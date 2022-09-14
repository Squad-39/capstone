import { getProfileByProfileIdController, putProfileController, getProfilesBySquadIdController } from './profile.controller'
import { Router } from 'express'
import { check, checkSchema } from 'express-validator'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {isLoggedInController} from '../../utils/controllers/is-logged-in.controller'
import { profileValidator } from './profile.validator'

export const profileRoute: Router = Router()
profileRoute.route('/')
  .post(putProfileController)

profileRoute.route('/squad/:squadId')
  .get(
    asyncValidatorController([
      check('squadId', 'please provide a valid squadId').isUUID()
    ])
     , getProfilesBySquadIdController
  )
profileRoute.route('/:profileId') .get(asyncValidatorController([
  check('profileId', 'please provide a valid profileId').isUUID()
]),getProfileByProfileIdController)

  .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)








