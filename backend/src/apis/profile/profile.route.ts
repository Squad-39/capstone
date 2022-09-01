import { getProfileByProfileIdController, putProfileController } from './profile.controller'
import { Router } from 'express'
import { check, checkSchema } from 'express-validator'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import {isLoggedInController} from '../../utils/controllers/is-logged-in.controller'
import { profileValidator } from './profile.validator'

export const profileRoute: Router = Router()
profileRoute.route('/')
  .post(putProfileController)

profileRoute.route('/:profileId')
  .get(
    asyncValidatorController([
      check('profileId', 'please provide a valid profileId').isUUID()
    ])
    , getProfileByProfileIdController
  )
profileRoute.route('/:profileId')
  .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)







