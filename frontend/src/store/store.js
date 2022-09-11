import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
import squaddetails from './squaddetails'
const reducer = combineReducers({auth, squads, squaddetails})
export default configureStore({reducer});