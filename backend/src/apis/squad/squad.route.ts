import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedIn} from "../../utils/controllers/is-logged-in.controller";
import {checkSchema} from 'express-validator';
import { postSquadController, getSquadBySquadId } from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
squadRouter.route('/')
  .post(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController)
  .get(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), getSquadBySquadId);