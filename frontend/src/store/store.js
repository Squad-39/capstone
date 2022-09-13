import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
import games from "./games";
import profile from "./profile"
import squaddetails from './squaddetails'
const reducer = combineReducers({auth, squads, squaddetails, games, profile})
export default configureStore({reducer});