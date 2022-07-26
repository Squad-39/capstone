import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'



const squadsSlice = createSlice({
  name: "requestDetails",
  initialState: [],
  reducers: {
    setAllRequests: (requests, action) => action.payload,

  }
})

export const {setAllRequests} = squadsSlice.actions

export default squadsSlice.reducer

export function fetchRequestsByRequestSquadId(squadId){
  return async function(dispatch){
    const {data} = await httpConfig(`/apis/request/requestSquadId/${squadId}`)
    dispatch(setAllRequests(data))
  }
}
export function fetchAllRequests() {
  return async function (dispatch){
    const {data} = await httpConfig(`/apis/requests/`)
    dispatch(setAllRequests(data))
  }
}