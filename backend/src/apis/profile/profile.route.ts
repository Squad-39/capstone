import { Router } from 'express'
import { asyncValidatorController } from '../../utils/controllers/async-Validator.controller'
import { check, checkSchema } from 'express-validator'
import { isLoggedInController } from '../../utils/controllers/isLoggedIn.controller'
import { profileValidator } from './profile.validator'
import { getProfileByProfileId, putProfileController } from './profile.controller'

export const ProfileRoute: Router = Router()
ProfileRoute.route('/').post(putProfileController)
ProfileRoute.route('/:profileId').get(asyncValidatorController([check('profileId', 'please provide a valid profileId').isUUID()]), getProfileByProfileId).put(isLoggedInController, asyncValidatorController(checkSchema(profileValidator)), putProfileController)
