import {sql} from '../database.utils'

export interface Game {
  gameId: string | null,
  gameGenre: string | null,
  gameImageUrl: string | null
  gameName: string
}

export async function selectGameByGameId(gameId: string): Promise<Game | null> {
  const result = await sql <Game[]>
    `SELECT "gameId", "gameGenre", "gameImageUrl", "gameName" FROM game 
    WHERE "gameId" = ${gameId}`
  return result?.length === 1 ? result[0] : null
}

//todo: write a selectAllGames function
/**
 * Helper function that interacts with postgres to select all game objects in the database
 * @return {Promise<Game[]>} A promise containing an of all status objects in the database
 **/

export async function selectAllGames (): Promise<Game[]> {
  return sql<Game[]>`SELECT "gameId", "gameGenre", "gameImageUrl", "gameName" from "game"`
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







//todo: write a getGamebyGameId function



/*
export async function updateGame (game: Game): Promise<string> {
  const {gameId, gameGenre, gameImageUrl, gameName} = game
  await sql`
UPDATE "game" 
SET "gameId" = ${gameId},  "gameGenre" = ${gameGenre}, "gameImageUrl" = ${gameImageUrl}, "gameName" = ${gameName}
WHERE "gameId" = ${gameId}`
  return 'Profile updated successfully'
}*/
