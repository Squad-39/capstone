import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
import games from "./games";
import squaddetails from './squaddetails'
const reducer = combineReducers({auth, squads, squaddetails, games})
export default configureStore({reducer});
