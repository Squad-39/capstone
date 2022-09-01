import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedInController} from "../../utils/controllers/is-logged-in.controller";
import {checkSchema} from 'express-validator';
import { postSquadController, getSquadBySquadId } from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
squadRouter.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(squadValidator)), postSquadController)
  .get(isLoggedInController, asyncValidatorController(checkSchema(squadValidator)), getSquadBySquadId);