import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
import {fetchAuth} from './auth'
import { setAllSquads } from './squads'

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    setProfilesBySquadId: (profile, action) => action.payload,
    setIndividualProfile: (profile, action) => [action.payload]
  }
})

export const {setProfilesBySquadId, setIndividualProfile} = profileSlice.actions


export default profileSlice.reducer

export function fetchProfilesBySquadId(id) {
  return async function (dispatch){
    const {data} = await httpConfig(`/apis/profile/squad/${id}`)
    dispatch(setProfilesBySquadId(data))
  }
}


export const fetchProfile = () => async(dispatch, getState) => {
    await dispatch(fetchAuth())

    const {auth} = getState()
    if (auth !== null) {


    const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
    dispatch(setIndividualProfile(data))
    }
  }