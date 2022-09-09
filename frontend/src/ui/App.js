import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Login} from "./Login";
import {SquadProfile} from "./SquadProfile";
import { SignUp } from './Sign-Up'
import { Profile } from './profile/Profile'
import { Squads } from './squads/Squads'
import { SquadLead } from './SquadLead'
import { Navigation } from './Navigation'
import { SignIn } from './Sign-In'
import { Provider } from 'react-redux'

<<<<<<< HEAD

export const App = () => (
=======
export const App = ({store}) => (
>>>>>>> 5831dd3d358771b3f20751ebcaa5e45c517dc07b
  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>

<<<<<<< HEAD
        <Route path='/login' element={<Login />} />
        <Route path='/squadProfile' element={<SquadProfile />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/squads" element={< Squads />} />
        <Route path="/squadlead" element={< SquadLead />} />
=======
        <Route path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/squads' element={<Squads />} />
        <Route path='/squadlead' element={<SquadLead />} />

>>>>>>> 5831dd3d358771b3f20751ebcaa5e45c517dc07b
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
)
