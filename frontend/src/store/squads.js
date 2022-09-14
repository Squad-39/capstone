import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
import {fetchRequestsByRequestSquadId} from "./requests";

const squadsSlice = createSlice({
  name: "squads",
  initialState: [],
  reducers: {
    setAllSquads: (squads, action) => action.payload,
    setIndividualSquad: (squads, action) => [action.payload]
  }
})

export const {setAllSquads, setIndividualSquad} = squadsSlice.actions


export default squadsSlice.reducer

export function fetchAllSquads() {
  return async function (dispatch){
    const {data} = await httpConfig('/apis/squad')
    dispatch(setAllSquads(data))
  }
}



export function fetchSquadBySquadId(squadId) {
  return async function (dispatch){
    const {data} = await httpConfig(`/apis/squad/${squadId}`)
    dispatch(setIndividualSquad(data))
  }
}

export function fetchSquadsBySquadProfileId(squadProfileId) {
  return async function (dispatch){
    const {data} = await httpConfig(`/apis/squad/squadProfileId/${squadProfileId}`)
    dispatch(setAllSquads(data))
    console.log(data)
      if(data) {
        for (let squad of data) {
          dispatch(fetchRequestsByRequestSquadId(squad.squadId))
        }
      }
  }
}