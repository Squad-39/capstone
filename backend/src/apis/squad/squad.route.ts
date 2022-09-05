import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedInController} from "../../utils/controllers/is-logged-in.controller";
import { check, checkSchema } from 'express-validator'
import { putSquadController, getSquadBySquadId, postSquadController} from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
//Route for making a Squad.
squadRouter.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(squadValidator)), postSquadController)

//Route for getting Squad by SquadId.
squadRouter.route('/:squadId')
  .get(asyncValidatorController([check('squadId', 'please provide a valid squadId').isUUID()]), getSquadBySquadId)

//Route for updating Squad.
squadRouter.route('/:squadId')
  .put(isLoggedInController, asyncValidatorController(checkSchema(squadValidator)), putSquadController)