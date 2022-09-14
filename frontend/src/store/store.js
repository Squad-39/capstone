import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
import games from "./games";
import profile from "./profile"
import squaddetails from './squaddetails'
import requests from './requests'
const reducer = combineReducers({auth, squads, squaddetails, games, profile, requests})

export default configureStore({reducer});

