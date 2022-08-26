import {sql} from '../database.utils'

export interface Request {
  requestProfileId: string | null,
  requestSquadId: string | null,
  requestStatus: string,

}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param request Request object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertRequest (request: Request): Promise<string> {
  const {requestProfileId, requestSquadId, requestStatus} = request
  await sql`
  INSERT INTO request("requestProfileId", "requestSquadId", "requestStatus")
  VALUES(${requestProfileId}, ${requestSquadId}, ${requestStatus} )`
  return 'Request successfully sent'
}
/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param request Request object that will be updated into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function updateRequest (request: Request): Promise<string> {
  const {"requestProfileId", "requestSquadId", "requestStatus"} = request
  await sql`
UPDATE "request" 
SET "requestProfileId" = ${requestProfileId},  "requestSquadId" = ${requestSquadId}, "requestStatus" = ${requestStatus}
  return 'Request successfully sent'
}
/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
/*
export async function selectPartialProfileByProfileId (profileId: string): Promise<PartialProfile|null> {
  const result = await sql<Profile[]>`SELECT "requestProfileId", "requestSquadId", "", "profileName" from profile WHERE "profileId" = ${profileId}`
  return result?.length === 1 ? result[0] : null} */



/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileEmail a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null> {
  const result = await sql <Profile[]>`SELECT "profileId", "profileEmail", "profileHash", "profileName" from profile WHERE "profileEmail" = ${profileEmail}`
  return result?.length === 1 ? result[0] : null
}