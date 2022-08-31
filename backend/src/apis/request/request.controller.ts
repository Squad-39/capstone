import { Request as Req, Response as Res } from 'express'
import {
  insertRequest,
  selectRequestsByProfileId, selectRequestsBySquadId,

  selectRequestByIdAndSquadProfileId, updateRequest,
 Request } from '../../utils/models/Request'

import { Status } from '../../utils/interfaces/Status'

import { Profile } from '../../utils/models/Profile'

/**
 * Express controller that returns all request objects in the database that matches the requestProfileId or an empty array if an error occurred, when the endpoint GET apis/request/requestProfileId/:value is called
 * @param req  An object modeling the current request provided by Express.
 * @param res an object modeling the response that will be sent to the server.
 * @return A promise containing a status object with the requested information set to the data field
 **/
export async function getRequestsByRequestProfileId (req: Req, res: Res): Promise<Res<Status>> {
  try {
    const { requestProfileId } = req.params
    const data = await selectRequestsByProfileId(requestProfileId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return res.json(status)
  } catch (error) {
    return res.json({
      status: 500,
      message: '',
      data: []
    })
  }
}

/**
 * Express controller that returns all ticket objects in the database that matches the requestSquadId provided or an empty array if an error occurred, when the endpoint GET apis/request/requestSquadId/:value is called
 * @param req  An object modeling the current request provided by Express.
 * @param res an object modeling the response that will be sent to the server.
 * @return A promise containing a status object with the requested information set to the data field
 **/
export async function getRequestsByRequestSquadId (req: Req, res: Res): Promise<Res<Status>> {
  try {
    const { requestSquadId } = req.params
    const data = await selectRequestsBySquadId(requestSquadId)
    const status: Status = { status: 200, message: null, data }
    return res.json(status)
  } catch (error) {
    console.error(error)
    return res.json({
      status: 500,
      message: '',
      data: []
    })
  }
}
/**
 * Express controller that returns a ticket object in the database with the provided primary key or null if no object was found when the endpoint GET apis/ticket/:value is called.
 * @param req  An object modeling the current request provided by Express.
 * @param res an object modeling the response will be sent to the server
 * @return A promise containing a status object with the requested information set to the data field
 **/
export async function getRequestByRequestProfileIdAndRequestSquadId (req: Req, res: Res): Promise<Res<Status>> {
  try {
    const { profileId } = req.params
    const data = await selectRequestsByProfileId(profileId)
    // return the response
    const status: Status = { status: 200, message: null, data }
    return res.json(status)
  } catch (error) {
    return res.json({
      status: 500,
      message: '',
      data: []
    })
  }
}
/**
 * Express controller that creates a ticket object and inserts it into the database when the endpoint POST apis/ticket/ is called
 * @param req  An object modeling the current request provided by Express.
 * @param res an object modeling the response that will be sent to the client.
 * @return A promise containing a status object with either a success or failure message set to the message field
 */export async function postRequestController (req: Req, res: Res): Promise<Res<Status>> {
  try {
    const { requestSquadId } = req.body
    const profile: Profile = req.session.profile as Profile
    const requestProfileId: string = <string>profile.profileId
    const request: Request = { requestProfileId, requestSquadId, requestStatus: null }
    const result = await insertRequest(request)
    const Status: Status = {
      status: 200,
      message: result,
      data: null
    }
    return res.json(Status)
  } catch (error) {
    console.error(error)
    return res.json({
      status: 500,
      message: 'Error creating request try again later.',
      data: null
    })
  }
}
export async function putRequestController (req: Req, res: Res): Promise<Res> {
  try {
    const { profileId } = req.params
    const { requestProfileId, requestSquadId, requestStatus } = req.body
    const profile = req.session.profile as Profile
    const profileIdFromSession = profile.profileId as string

    const preformUpdate = async (request: Request, squadProfileId: string): Promise<Res> => {
      const previousRequest: Request | null = await selectRequestByIdAndSquadProfileId(request, squadProfileId)
      if (previousRequest) {
      const newRequest: Request = { ...previousRequest, ...request }
      await updateRequest(newRequest)
      return res.json({ status: 200, data: null, message: 'Request successfully updated' })
    }else{
        return res.json({ status: 200, data: null, message: 'Request not found' })
      }
    }

    const updateFailed = (message: string): Res => {
      return res.json({ status: 400, data: null, message })
    }

    return profileId === profileIdFromSession
      ? await preformUpdate({ requestProfileId, requestSquadId, requestStatus }, profileIdFromSession)
      : updateFailed('you are not allowed to preform this action')
  } catch (error: any) {
    return res.json({ status: 400, data: null, message: error.message })
  }
}