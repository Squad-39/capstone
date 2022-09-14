import { sql } from '../database.utils'

export interface Profile {
  profileId: string | null
  profileActivationToken: string | null
  profileEmail: string
  profileGamertag: string | null
  profileHash: string
  profileImage: string | null
  profileName: string
  profilePlatform: string | null
}

export interface PartialProfile {

  profileId: string | null
  profileActivationToken: string | null
  profileEmail: string
  profileGamertag: string | null
  profileImage: string | null
  profileName: string
  profilePlatform: string | null
}
export async function selectProfileByProfileActivationToken (profileActivationToken: string): Promise<Profile|null> {
  const result = await sql <Profile[]>`SELECT "profileId", "profileActivationToken", "profileEmail", "profileGamertag", "profileHash", "profileImage", "profileName", "profilePlatform" from profile
                                       WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param profile Profile object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertProfile (profile: Profile): Promise<string> {
  const { profileId, profileActivationToken, profileEmail, profileGamertag, profileHash, profileImage, profileName, profilePlatform } = profile
  await sql`
  INSERT INTO profile("profileId", "profileActivationToken", "profileEmail", "profileGamertag", "profileHash", "profileImage", "profileName", "profilePlatform")

  VALUES(gen_random_uuid(), ${profileActivationToken}, ${profileEmail}, ${profileGamertag}, ${profileHash}, ${profileImage}, ${profileName}, ${profilePlatform})`

  return 'Profile successfully created'
}
/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param profile Profile object that will be updated into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function updateProfile (profile: PartialProfile): Promise<string> {
  const { profileEmail, profileGamertag, profileName, profilePlatform, profileId } = profile
  console.log(profile)
  await sql`

UPDATE "profile" 
SET  "profileEmail" = ${profileEmail}, "profileGamertag" = ${profileGamertag}, "profileName" = ${profileName}, "profilePlatform" = ${profilePlatform}, "profileId" = ${profileId}
WHERE "profileId" = ${profileId}`
  return 'Profile updated successfully'
}
/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/

export async function selectPartialProfileByProfileId (profileId: string): Promise<PartialProfile|null> {
  const result = await sql<Profile[]>`SELECT "profileId", "profileEmail", "profileGamertag", "profileImage", "profileName", "profilePlatform" from profile WHERE "profileId" = ${profileId}`
  return result?.length === 1 ? result[0] : null}


/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param profileEmail a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
export async function selectProfileByProfileEmail (profileEmail: string): Promise<Profile|null> {
  const result = await sql <Profile[]>`SELECT "profileId", "profileEmail", "profileHash", "profileName" from profile WHERE "profileEmail" = ${profileEmail}`
  return result?.length === 1 ? result[0] : null
}


export async function selectPartialProfilesBySquadId (squadId: string): Promise<PartialProfile[]> {
   return sql <PartialProfile[]>`SELECT "profileId", "profileEmail","profileName" FROM profile INNER JOIN request ON   profile."profileId" = request."requestProfileId"  WHERE request."requestSquadId" = ${squadId} and request."requestStatus" IS TRUE`
}
