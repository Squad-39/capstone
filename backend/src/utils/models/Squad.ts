import {sql} from '../database.utils'

export interface Squad {
  squadId: string | null
  squadProfileId: string | null,
  squadAchievements: string,
  squadEmblem: string | null,
  squadMaxSize: string,
  squadName: string | null

}

export interface PartialSquad {
  squadId: string | null,
  squadProfileId: string | null,
  squadAchievements: string | null,
  squadEmblem: string | null,
  squadMaxSize: string,
  squadName: string | null
}
export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<Squad|null> {
  const result = await sql <Squad[]>
    `SELECT "squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName" from Squad 
    WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param squad Squad object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertSquad (squad: Squad): Promise<string> {
  const {squadId, squadProfileId, squadAchievements, squadEmblem, squadMaxSize, squadName  } = squad
  await sql`
  INSERT INTO profile("squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName")
  VALUES(gen_random_uuid(), (gen_randum_uuid(), ${squadAchievements}, ${squadEmblem}, ${squadMaxSize}, ${squadName})`
  return 'Squad successfully created'
}
// /**
//  * Helper function that interacts with postgres to update a profile object in the database
//  * @param squad Squad object that will be updated into the database
//  * @return success Message.ts if the sql statement was executed with no errors
//  **/
// export async function updateSquad (squad: Squad): Promise<string> {
//   const {squadId, squadProfileId, squadAchievements, squadEmblem, squadMaxSize, squadName } = squad
//   await sql`
// UPDATE "squad"
// SET "squadId" = ${squadId}, "squadProfileId" = ${squadProfileId}, "squadAchievements" = ${squadAchievements}, "squadEmblem" = ${squadEmblem}, "squadMaxSize" = ${squadMaxSize}, "squadName" = ${squadName}
// WHERE "squadId" = ${squadId}`
//   return 'Squad updated successfully'
// }
// /**
//  * Helper function that interacts with postgres to select a profile object by its primary key.
//  * @param squadId a string containing the primary key for the target object.
//  * @return A promise containing a status object with the primary key provided or null if no id was found
//  **/
/*
export async function selectPartialProfileByProfileId (profileId: string): Promise<PartialProfile|null> {
  const result = await sql<Profile[]>`SELECT "profileId", "profileAboutMe", "profileEmail", "profileName" from profile WHERE "profileId" = ${profileId}`
  return result?.length === 1 ? result[0] : null}
*/


// /**
//  * Helper function that interacts with postgres to select a profile object by its primary key.
//  * @param profileEmail a string containing the primary key for the target object.
//  * @return A promise containing a status object with the primary key provided or null if no id was found
//  **/
//  export async function selectProfileByProfileEmail (Email: string): Promise<Profile|null> {
//   const result = await sql <Profile[]>`SELECT "profileId", "profileEmail", "profileHash", "profileName" from profile WHERE "profileEmail" = ${profileEmail}`
//   return result?.length === 1 ? result[0] : null
// }