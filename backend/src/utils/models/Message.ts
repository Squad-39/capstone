import {sql} from '../database.utils'

export interface Message {
  messageId: string | null,
  messageRecipientId: string | null,
  messageSenderId: string,
  messageContent: string | null,
  messageDateTime: string,
  messageSentBy: string | null,
}

export async function insertMessage (message: Message): Promise<string> {
  const {messageId, messageRecipientId, messageSenderId, messageContent, messageDateTime, messageSentBy} = message

  await sql`INSERT INTO message ( "messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy") 
  VALUES(gen_random_uuid(), ${messageId} ${messageRecipientId}, ${messageSenderId}, ${messageContent}, ${messageDateTime}, ${messageSentBy})`
  return 'Message created successfully'
}
/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param message Message object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
