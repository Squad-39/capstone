import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import { check, checkSchema } from 'express-validator'
import { putSquadController, getSquadBySquadId, postSquadController} from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
//Route for making a Squad.
squadRouter.route('/')
  .post(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController)

//Router for getting Squad by SquadId.
squadRouter.route('/:squadId')
  .get(asyncValidatorController([check('squadId', 'please provide a valid squadId').isUUID()]), getSquadBySquadId)


  .put(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), putSquadController)