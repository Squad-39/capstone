import { sql } from '../database.utils'

// Export interface for creating Squad
export interface Squad {
  squadId: string | null
  squadProfileId: string | null,
  squadAchievements: string,
  squadEmblem: string | null,
  squadMaxSize: string,
  squadName: string | null

}

// Export interface for updating Squad
export interface PartialSquad {
  squadId: string | null
  squadProfileId: string | null
  squadAchievements: string | null
  squadEmblem: string | null
  squadMaxSize: string
  squadName: string | null
}
/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param squad Squad object that will be inserted into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
// Export async function for creating a Squad.
export async function insertSquad (squad: Squad): Promise<string> {
  const { squadId, squadProfileId, squadAchievements, squadEmblem, squadMaxSize, squadName } = squad
  await sql`
  INSERT INTO squad("squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName")
  VALUES(gen_random_uuid(), ${squadProfileId}, ${squadAchievements}, ${squadEmblem}, ${squadMaxSize}, ${squadName})`
  return 'Squad successfully created'
}
/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param squadId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// Export async function for selecting Squad by SquadId.
export async function selectSquadBySquadId (squadId: string): Promise<Squad|null> {
  const result = await sql <Squad[]>
    `SELECT "squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName" from squad 
    WHERE "squadId" = ${squadId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to update a profile object in the database
 * @param squad Squad object that will be updated into the database
 * @return success Message.ts if the sql statement was executed with no errors
 **/
// Export async function for updating a Squad.
export async function updateSquad (squad: PartialSquad): Promise<string> {
  const {squadId, squadProfileId, squadAchievements, squadEmblem, squadMaxSize, squadName } = squad
  await sql
    `UPDATE "squad"
SET "squadId" = ${squadId}, "squadProfileId" = ${squadProfileId}, "squadAchievements" = ${squadAchievements}, "squadEmblem" = ${squadEmblem}, "squadMaxSize" = ${squadMaxSize}, "squadName" = ${squadName}
  WHERE "squadId" = ${squadId}`
  return 'Squad updated successfully'
}

/**
 * Helper function that interacts with postgres to select a profile object by its primary key.
 * @param squadId a string containing the primary key for the target object.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// Export async function for selecting the partial squad to get ready to update.
export async function selectPartialSquadBySquadId (squadId: string): Promise<PartialSquad|null> {
  const result = await sql<Squad[]>
    `SELECT "squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName" from squad 
    WHERE "squadId" = ${squadId}`
  return result?.length === 1 ? result[0] : null
}

/**
 * Helper function that interacts with postgres to select all squad objects.
 * @return A promise containing a status object with the primary key provided or null if no id was found
 **/
// Export async function for selecting Squad by SquadId.
export async function selectAllSquads (): Promise<Squad[]> {
   return sql <Squad[]>
    `SELECT "squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName" from squad`
}

/**
 * Helper function that interacts with postgres to select a squad  object by squad profile Id.
 * @param squadProfileId a string containing the foreign key for the target object.
 * @return A promise that will provide an array of squads
 **/
// Export async function for selecting Squad by SquadProfileId.
export async function selectSquadBySquadProfileId (squadProfileId: string): Promise<Squad []|null> {
  const result = await sql <Squad[]>
    `SELECT "squadId", "squadProfileId", "squadAchievements", "squadEmblem", "squadMaxSize", "squadName" from squad 
    WHERE "squadProfileId" = ${squadProfileId}`
  return result?.length >= 1 ? result  : null
}
