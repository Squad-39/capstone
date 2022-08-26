import {sql} from '../database.utils'

export interface Request {
  requestProfileId: string | null,
  requestSquadId: string | null,
  requestStatus: string,

}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param req Request object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertRequest (req: Request): Promise<string> {
  const {requestProfileId, requestSquadId, requestStatus} = req
  await sql`
  INSERT INTO request("requestProfileId", "requestSquadId", "requestStatus")
  VALUES(${requestProfileId}, ${requestSquadId}, ${requestStatus} )`
  return 'Request successfully sent'
}
export async function deleteRequest (req: Request): Promise<string> {
  const result = await sql`DELETE FROM requestStatus WHERE requestProfileId = ${req.requestProfileId} AND  requestStatusSquadId = ${req.requestSquadId}`
  if (result.count < 0) {
    return 'request ticket status does not exist'
  }
  return 'request status deleted successfully'
}
export async function selectRequestByProfileId (profileId: string): Promise<Request []> {
  return await sql<Request[]> `SELECT "requestProfileId", "requestSquadId", "requestStatus"
FROM request WHERE requestProfileId=${profileId}`
}
export async function selectRequestBySquadId (squadId: string): Promise<Request []> {
  return await sql<Request[]> `SELECT "requestProfileId", "requestSquadId", "requestStatus"
FROM request WHERE requestSquadId=${squadId}`
}

export async function selectRequestByProfileIdAndStatusId (req: Request):
Promise<Request | null> {
  const result= await sql<Request[]>`SELECT "requestProfileId", "requestSquadId", "requestStatus"
 FROM request WHERE requestProfileId = ${req.requestProfileId} AND requestSquadId = ${req.requestSquadId}`
  return result?.length === 1 ? result [0] : null
}





