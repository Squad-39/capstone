import { Router } from 'express'
import { isLoggedInController } from '../../utils/controllers/is-logged-in.controller'
import { asyncValidatorController } from '../../utils/controllers/async-validator.controller'
import { check, checkSchema } from 'express-validator'
import { getMessageByMessageRecipientId, getMessageByMessageSenderId, postMessage } from './message.controller'
import { messageValidator } from './message.validator'

export const messageRoute = Router()
// Route for posting messages.
messageRoute.route('/')
  .post(isLoggedInController, asyncValidatorController([check('messageId', 'Please provide a valid MessageId').isUUID()]), postMessage)

// Route for getting messages from Recipient.
messageRoute.route('/:messageId')
  .get(isLoggedInController,([check('messageId', 'Please provide a valid messageRecipientId').isUUID()]), getMessageByMessageRecipientId)

// Route for getting Messages from Sender
messageRoute.route('/messageId/:messageId')
  .get(isLoggedInController,([check('messageId', 'Please provide a valid messageSenderId').isUUID()]), getMessageByMessageSenderId)