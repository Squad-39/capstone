import {createSlice} from '@reduxjs/toolkit'
import { httpConfig } from '../utils/http-config'
import {fetchAuth} from './auth'

const profileSlice = createSlice({
  name: "profile",
  initialState: [],
  reducers: {
    setIndividualProfile: (profile, action) => [action.payload]
  }
})

export const {setIndividualProfile} = profileSlice.actions


export default profileSlice.reducer

export const fetchProfile = () => async(dispatch, getState) => {
    await dispatch(fetchAuth())

    const {auth} = getState()
    if (auth !== null) {


    const {data} = await httpConfig.get(`/apis/profile/${auth.profileId}`)
    dispatch(setIndividualProfile(data))
    }
  }