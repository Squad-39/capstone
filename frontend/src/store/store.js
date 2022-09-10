import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
import games from "./games";
const reducer = combineReducers({auth, squads, games})
export default configureStore({reducer});