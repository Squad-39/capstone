import {Router} from 'express'
import {asyncValidatorController} from "../../utils/controllers/async-validator.controller";
import {signUpController} from "./sign-up.controller";
import {signUpValidator} from "./sign-up.validator";
import {checkSchema, param} from "express-validator";
import {activationController} from "./activation.controller";


export const signUpRoute: Router = Router()

signUpRoute.route('/activation/:activation')
  .get(
    asyncValidatorController([param("activation", "invalid activation link").isHexadecimal().notEmpty()]),
    activationController
  )
  signUpRoute.route('/')
.post(
  asyncValidatorController(checkSchema(signUpValidator)),
  signUpController
)



