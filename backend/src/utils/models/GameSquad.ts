import { sql } from '../database.utils'

export interface GameSquad {
  gameSquadGameId: string | null,
  gameSquadSquadId: string | null,
}


export async function selectGameSquadsByGameSquadGameId (gameSquad: GameSquad): Promise<string> {
  const {gameSquadGameId, gameSquadSquadId} = gameSquad

  await sql`<SELECT gameSquad( "gameSquadGameId", "gameSquadSquadId") 
   VALUES(${gameSquadGameId}, ${gameSquadSquadId})`
  return 'Squad game selected successfully'
}
export async function selectGameSquadsByGameSquadSquadId (gameSquad: GameSquad): Promise<string> {
  const {gameSquadGameId, gameSquadSquadId} = gameSquad

  await sql`<SELECT gameSquad( "gameSquadGameId", "gameSquadSquadId") 
  VALUES( ${gameSquadGameId}, ${gameSquadSquadId})`
  return 'Squad game selected successfully'
}

export async function selectGameSquadById (gameSquad: GameSquad):
Promise<GameSquad | null> {
  const {gameSquadGameId, gameSquadSquadId}= gameSquad
  const result = await sql<GameSquad[]>`SELECT "gameSquadGameId", "gameSquadSquadId" FROM gameSquad WHERE "gameSquadGameId" = ${gameSquadGameId} AND "gameSquadSquadId" = ${gameSquadSquadId}`
  return result?.length === 1 ? result[0] : null
}

export async function insertGameSquad (gameSquad: GameSquad): Promise<string> {
  const { gameSquadGameId, gameSquadSquadId} = gameSquad

  await sql`INSERT INTO gameSquad( "gameSquadGameId", "gameSquadSquadId") VALUES(gen_random_uuid(), ${gameSquadSquadId})`
  return 'gameSquad created successfully'
}
