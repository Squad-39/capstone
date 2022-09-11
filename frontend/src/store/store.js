import { configureStore,combineReducers} from '@reduxjs/toolkit'
import auth from './auth'
import squads from './squads.js'
<<<<<<< HEAD
const reducer = combineReducers({auth, squads})
=======
import games from "./games";
const reducer = combineReducers({auth, squads, games})
>>>>>>> style-squad
export default configureStore({reducer});