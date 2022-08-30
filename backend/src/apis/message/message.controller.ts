import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { insertMessage, selectMessageByRecipientId, selectMessageBySenderId } from '../../utils/models/Message'


// Export async function for selecting Messages for who the user sent Messages to.
export async function postMessage (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messaget } = request.params
    const data = await insertMessage(message)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}

// Export async function for selecting Messages for who the user sent Messages to.
export async function getMessageByMessageRecipientId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageRecipientId } = request.params
    const data = await selectMessageByRecipientId(messageRecipientId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}

// Export async function for selecting Messages from Sender.
export async function getMessageByMessageSenderId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageSenderId } = request.params
    const data = await selectMessageBySenderId(messageSenderId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: '',
      data: []
    })
  }
}