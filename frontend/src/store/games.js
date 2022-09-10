import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'

const gamesSlice = createSlice({
  name: "games",
  initialState: [],
  reducers: {
    setAllGames: (squads, action) => action.payload
  }
})

export const {setAllGames} = gamesSlice.actions

export default gamesSlice.reducer

export function fetchAllGames() {
  return async function (dispatch){
    const {data} = await httpConfig('/apis/game')
    dispatch(setAllGames(data))
  }
}