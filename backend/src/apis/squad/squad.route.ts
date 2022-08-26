import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import {checkSchema} from 'express-validator';
import { postSquadController } from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
squadRouter.route('/')
  .post(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController);