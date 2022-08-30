import { Router } from 'express';
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller';
<<<<<<< HEAD
import {isLoggedIn} from "../../utils/controllers/isLoggedIn.controller";
import { check, checkSchema } from 'express-validator'
import { putSquadController, getSquadBySquadId, postSquadController} from './squad.controller'
=======
import {isLoggedIn} from "../../utils/controllers/is-logged-in.controller";
import {checkSchema} from 'express-validator';
import { postSquadController, getSquadBySquadId } from './squad.controller'
>>>>>>> 717c3b81b4d41599de3e0ae0d25ba30d5302f456
import { squadValidator } from './squad.validator'

export const squadRouter = Router();
//Route for making a Squad.
squadRouter.route('/')
  .post(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), postSquadController)

//Router for getting Squad by SquadId.
squadRouter.route('/:squadId')
  .get(asyncValidatorController([check('squadId', 'please provide a valid squadId').isUUID()]), getSquadBySquadId)


  .put(isLoggedIn, asyncValidatorController(checkSchema(squadValidator)), putSquadController)