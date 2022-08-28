import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import { check, checkSchema } from 'express-validator'
import { postSquadController, getSquadBySquadId } from './squad.controller'
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
squadRouter.route('/')
  .post(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController)

squadRouter.route('/:squadId')
  .get(asyncValidatorController([check('squadId', 'please provide a valid squadId').isUUID()]), getSquadBySquadId
  )
  .put(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController)