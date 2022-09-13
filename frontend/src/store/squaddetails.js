import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const squadsSlice = createSlice({
  name: "squadDetails",
  initialState: [],
  reducers: {
    setAllSquads: (squads, action) => action.payload
  }
})

export const {setAllSquads} = squadsSlice.actions

export default squadsSlice.reducer

export function fetchAllSquads() {
  return async function (dispatch){
    const {data} = await httpConfig('/apis/squaddetails')
    dispatch(setAllSquads(data))
  }
}