import {sql} from '../database.utils'

export interface Game {
  gameId: string | null,
  gameGenre: string | null,
  gameImageUrl: string,
  gameName: string | null,
}

export async function selectGameByGameId(profileActivationToken: string): Promise<Game|null> {
  const result = await sql <Game[]>
    `SELECT "gameId", "gameGenre", "gameImageUrl", "gameName" from profile 
    WHERE "profileActivationToken" = ${profileActivationToken}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param game Game object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function insertGame (game: Game): Promise<string> {
  const { gameId, gameGenre, gameImageUrl, gameName} = game
  await sql`
  INSERT INTO game ("gameId", "gameGenre", "gameImageUrl", "gameName")
  VALUES(gen_random_uuid(), ${gameGenre}, ${gameImageUrl}, ${gameName})`
  return 'Game successfully created'
}
/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param game Game object that will be updated into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
export async function updateGame (game: Game): Promise<string> {
  const {gameId, gameGenre, gameImageUrl, gameName} = game
  await sql`
UPDATE "game" 
SET "gameId" = ${gameId},  "gameGenre" = ${gameGenre}, "gameImageUrl" = ${gameImageUrl}, "gameName" = ${gameName}
WHERE "gameId" = ${gameId}`
  return 'Profile updated successfully'
}