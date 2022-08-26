import {sql} from '../database.utils'

export interface gameSquad {
  gameSquadGameId: string | null,
  gameSquadSquadId: string | null,
}

export async function selectProfileByProfileActivationToken(profileActivationToken: string): Promise<gameSquad|null> {
  const result = await sql <gameSquad[]>
    `SELECT "gameSquadGameId", "gameSquadSquadId" from gameSquad
    WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param gameSquad GameSquad object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertGameSquad (gameSquad: gameSquad): Promise<string> {
  const { gameSquadGameId, gameSquadSquadId} = gameSquad
  await sql`
  INSERT INTO gameSquad ("gameSquadGameId", "gameSquadSquadId")
  VALUES(gen_random_uuid(), gen_random_uuid())`
  return 'Game successfully created'
}
// /**
//  * Helper function that interacts with postgres to update a profile object in the database
//  * @param game Game object that will be updated into the database
//  * @return success Message.ts if the sql statement was executed with no errors
//  **/
// export async function updateGame (game: Game): Promise<string> {
//   const {gameId, gameGenre, gameImageUrl, gameName} = game
//   await sql`
// UPDATE "game"
// SET "game" = ${profileActivationToken},  "profileEmail" = ${profileEmail}, "profileGamertag" = ${profileGamertag}, "profileImage" = ${profileImage}, "profileName" = ${profileName}, "profilePlatform" = ${profilePlatform}
// WHERE "profileId" = ${profileId}`
//   return 'Profile updated successfully'
//   }