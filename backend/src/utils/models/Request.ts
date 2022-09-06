import { sql } from '../database.utils'

export interface Request {
  requestProfileId: string
  requestSquadId: string
  requestStatus: string|null

}

/**
 * Helper function that interacts with postgres to insert a profile object in the database
 * @param request Request object that will be inserted into the database
 * @return success message if the sql statement was executed with no errors
 **/
export async function insertRequest (request: Request): Promise<string> {
  const { requestProfileId, requestSquadId } = request
  await sql`
  INSERT INTO request("requestProfileId", "requestSquadId", "requestStatus")
  VALUES(${requestProfileId}, ${requestSquadId}, null )`
  return 'Request successfully sent'
}
export async function deleteRequest (request: Request): Promise<string> {
  const result = await sql`DELETE FROM request WHERE "requestProfileId" = ${request.requestProfileId} AND  "requestStatusSquadId" = ${request.requestSquadId}`
  if (result.count < 0) {
    return 'request does not exist'
  }
  return 'request deleted successfully'
}
export async function selectRequestsByProfileId (profileId: string): Promise<Request []> {
  return await sql<Request[]>`SELECT "requestProfileId", "requestSquadId", "requestStatus"
FROM request WHERE "requestProfileId"=${profileId}`
}
export async function selectRequestsBySquadId (squadId: string): Promise<Request []> {
  return await sql<Request[]>`SELECT "requestProfileId", "requestSquadId", "requestStatus"
FROM request WHERE "requestSquadId"=${squadId}`
}

export async function selectRequestByProfileIdAndSquadId (profileId: string, squadId: string):
  Promise<Request | null> {
  const result = await sql<Request[]>`SELECT "requestProfileId", "requestSquadId", "requestStatus"
                                      FROM request WHERE "requestProfileId" = ${profileId} AND "requestSquadId" = ${squadId}`
  return result?.length === 1 ? result[0] : null
}
// Id = Composite Id of both profileId and squadId.
export async function selectRequestByIdAndSquadProfileId (request: Request, squadProfileId: string):
  Promise<Request | null> {
  const {requestProfileId, requestSquadId}= request
  const result = await sql<Request[]>`SELECT "requestProfileId", "requestSquadId", "requestStatus"
 FROM request JOIN squad ON squad."squadId" =  request."requestSquadId" WHERE "requestProfileId" = ${requestProfileId} AND "requestSquadId" = ${requestSquadId} AND squad."squadProfileId" = ${squadProfileId}`
  return result?.length === 1 ? result[0] : null
}
export async function updateRequest (request: Request): Promise<string> {
  const { requestProfileId, requestSquadId, requestStatus } = request

  await sql` UPDATE request SET "requestProfileId" = ${requestProfileId}, "requestSquadId" = ${requestSquadId}, "requestStatus"= ${requestStatus} WHERE "requestProfileId" = ${requestProfileId} AND "requestSquadId" = ${requestSquadId}`
  return 'request updated successfully'
}
