import { Request, Response } from 'express'
import { insertMessage } from '../../utils/models/Message'
import { Status } from '../../utils/interfaces/Status'
import { Profile } from '../../utils/models/Profile'

export async function getMessageByMessageRecipientId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageRecipientId } = request.params
    const data = await selectMessageByMessageController(messageRecipientId)
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
export async function getMessageByMessageSenderId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageSenderId } = request.params
    const data = await selectMessageByMessageController(messageSenderId)
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