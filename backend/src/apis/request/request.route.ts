import { Router } from 'express'
import {
  getRequestByRequestProfileIdAndRequestSquadId,
  getRequestsByRequestProfileId,
  postRequestController, putRequestController
} from './request.controller'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { requestValidator } from './request.validator'

export const requestRoute = Router()

requestRoute.route('/')
  .get()
  .post(isLoggedInController, asyncValidatorController([
    check('requestSquadId', 'Please provide a valid UUID').isUUID()]), postRequestController)

// todo

requestRoute.route('/requestProfileId/:requestProfileId/requestSquadId/:requestSquadId/')
  .get(
    isLoggedInController,
    asyncValidatorController([check('requestProfileId', 'Please provide a valid UUID').isUUID(),
      check('requestSquadId', 'Please provide a valid UUID').isUUID()]),
    getRequestByRequestProfileIdAndRequestSquadId)
// todo routeUpdate requestHere

requestRoute.route('/:profileId')
  .get(
    asyncValidatorController(
      [check('profileId', 'Please provide a valid uuid').isUUID()]
    ), getRequestsByRequestProfileId
  )
