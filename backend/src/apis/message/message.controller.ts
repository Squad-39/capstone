import { Request, Response } from 'express'
import { Status } from '../../utils/interfaces/Status'
import { insertMessage, Message, selectMessageByRecipientId, selectMessageBySenderId } from '../../utils/models/Message'
import { Profile } from '../../utils/models/Profile'

/**
 * Express controller that handles editing a logged-in users profile information when the endpoint POST apis/profile/ is called
 * @param request  An object modeling the current request provided by Express.
 * @param response an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */
// Export async function for posting Messages.
export async function postMessage (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageContent, messageDateTime, messageSenderId, messageRecipientId, messageSentBy } = request.body
    // console.log("This is the message I see", messageContent)
    // console.log("This is the DateTime I see", messageDateTime)
    const profile: Profile = request.session.profile as Profile
    const messageId: string = <string>profile.profileId
    // console.log("This is the messageId I'm seeing", messageId)
    const message: Message = {
      messageId,
      messageRecipientId,
      messageSenderId,
      messageContent,
      messageDateTime,
      messageSentBy
    }
    // console.log("This is the RecipientId I see.", messageRecipientId)
    // console.log("This is the SenderId I see.", messageSenderId)
    // console.log("This is who the message is SentBy", messageSentBy)
    const result = await insertMessage(message)
    // return the response
    const status: Status = {
      status: 200,
      message: result,
      data: null
    };
    return response.json(status);
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Error sending message.',
      data: null
    })
  }
}

// Export async function for selecting Messages for who the user sent Messages to.
export async function getMessageByMessageRecipientId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageRecipientId } = request.params
    console.log("Well well well", messageRecipientId)
    const data = await selectMessageByRecipientId(messageRecipientId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Its me all along',
      data: []
    })
  }
}

// Export async function for selecting Messages from Sender.
export async function getMessageByMessageSenderId (request: Request, response: Response): Promise<Response<Status>> {
  try {
    const { messageSenderId } = request.params
    console.log("Yep that would be me", messageSenderId)
    const data = await selectMessageBySenderId(messageSenderId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return response.json(status)
  } catch (error) {
    return response.json({
      status: 500,
      message: 'Nope air ball',
      data: []
    })
  }
}