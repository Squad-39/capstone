import {sql} from '../database.utils'

export interface Message {
  messageId: string | null,
  messageRecipientId: string | null,
  messageSenderId: string | null,
  messageContent: string | null,
  messageDateTime: string | null,
  messageSentBy: string | null,
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param message object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertMessage (message: Message): Promise<string|null> {
  const {messageId, messageRecipientId, messageSenderId, messageContent, messageDateTime, messageSentBy} = message
  await sql`
INSERT INTO message ( "messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy")
VALUES(gen_random_uuid(), ${messageRecipientId}, ${messageSenderId}, ${messageContent}, ${messageDateTime}, ${messageSentBy})`
  return 'Message created successfully'
}

/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param messageId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// Export async function for selecting Messages by messageId.
export async function selectMessageByRecipientId (messageId: string): Promise<Message|null> {
  const result = await sql <Message[]>
    `SELECT "messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy" from message 
    WHERE "messageId" = ${messageId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param messageId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// Export async function for selecting Messages by messageId.
export async function selectMessageBySenderId (messageId: string): Promise<Message|null> {
  const result = await sql <Message[]>
    `SELECT "messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy" from message 
    WHERE "messageId" = ${messageId}`
  return result?.length === 1 ? result[0] : null
}