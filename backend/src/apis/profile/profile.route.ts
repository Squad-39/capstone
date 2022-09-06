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
<<<<<<< HEAD
  .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
=======
profileRoute.route('/:profileId')
  .put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)







>>>>>>> 81d5eb6eee73b01e1a6d0167c17a3c651e3b7175
