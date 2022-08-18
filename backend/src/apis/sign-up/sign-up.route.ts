import {Router} from 'express'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";


export const signUpRoute: Router = Router()

  signUpRoute.route('/')
.post(
  asyncValidatorController(signupValidator)),
  signUpController
)



