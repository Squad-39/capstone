import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
const reducer = combineReducers({auth, squads})
export default configureStore({reducer});