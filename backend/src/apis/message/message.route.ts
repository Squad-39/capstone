import { Router } from 'express'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { getMessageByMessageRecipientId, getMessageByMessageSenderId } from './message.controller'
import { messageValidator } from './message.validator'

export const messageRoute = Router()

messageRoute.route('/')
  .post(isLoggedInController, asyncValidatorController(checkSchema(messageValidator)), )

messageRoute.route('/:messageId')
  .get(asyncValidatorController([check('messageId', 'please provide a valid messageId').isUUID()]), getMessageByMessageRecipientId)
  .put(isLoggedInController, asyncValidatorController(checkSchema(messageValidator)), getMessageByMessageRecipientId)

messageRoute.route('/messageId/:messageId').get(asyncValidatorController([check('messageId', 'please provide a valid gamertagId').isUUID()]), getMessageByMessageSenderId)
