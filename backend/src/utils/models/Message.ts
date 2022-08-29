import {sql} from '../database.utils'

export interface Message {
  messageId: string | null,
  messageRecipientId: string | null,
  messageSenderId: string,
  messageContent: string | null,
  messageDateTime: string,
  messageSentBy: string | null,
}

export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Message|null> {
  const result = await sql <Message[]>
    `SELECT "messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy", from message 
    WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param message Message object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertProfile (message: Message): Promise<string> {
  const { messageId, messageRecipientId, messageSenderId, messageContent, messageDateTime, messageSentBy} = message
  await sql`
  INSERT INTO message("messageId", "messageRecipientId", "messageSenderId", "messageContent", "messageDateTime", "messageSentBy")
  VALUES(gen_random_uuid(), gen_random_uuid(),gen_random_uuid(),${messageContent}, ${messageDateTime}, ${messageSentBy})`
  return 'Message successfully created'
}
/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param message Message object that will be updated into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
// export async function updateProfile (profile: Profile): Promise<string> {
//   const { profileActivationToken, profileEmail, profileGamertag, profileImage, profileName, profilePlatform, profileId } = profile
//   await sql`
// UPDATE "profile"
// SET "profileActivationToken" = ${profileActivationToken},  "profileEmail" = ${profileEmail}, "profileGamertag" = ${profileGamertag}, "profileImage" = ${profileImage}, "profileName" = ${profileName}, "profilePlatform" = ${profilePlatform}
// WHERE "profileId" = ${profileId}`
//   return 'Profile updated successfully'
// }
/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param message a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
/*
export async function selectPartialProfileByProfileId (profileId: string): Promise<PartialProfile|null> {
  const result = await sql<Profile[]>`SELECT "profileId", "profileAboutMe", "profileEmail", "profileName" from profile WHERE "profileId" = ${profileId}`
  return result?.length === 1 ? result[0] : null}
*/


/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param message a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null> {
//   const result = await sql <Profile[]>`SELECT "profileId", "profileEmail", "profileHash", "profileName" from profile WHERE "profileEmail" = ${profileEmail}`
//   return result?.length === 1 ? result[0] : null
// }







