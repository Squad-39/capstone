import {Router} from 'express'
import {signInValidator} from './sign-in.validator'
import {signInController} from './sign-in.controller'
import {checkSchema} from 'express-validator'
import {asyncValidatorController} from '../../utils/controllers/async-validator.controller'

export const signInRoute: Router = Router()
signInRoute.route('/').post(asyncValidatorController(checkSchema(signInValidator)), signInController)












