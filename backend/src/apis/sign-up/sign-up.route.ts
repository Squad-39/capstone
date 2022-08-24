import {Router} from 'express'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signUpController} from "./sign-up.controller";
import {signUpValidator} from "./sign-up.validator";
import {checkSchema} from "express-validator";


export const signUpRoute: Router = Router()

  signUpRoute.route('/')
.post(
  asyncValidatorController(checkSchema(signUpValidator)),
  signUpController
)



