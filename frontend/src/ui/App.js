import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { SignUp } from './Sign-Up'
import { Profile } from './profile/Profile'
import { Squads } from './squads/Squads'
import { SquadLead } from './SquadLead'
import { Navigation } from './Navigation'
import { SignIn } from './Sign-In'
import { Provider } from 'react-redux'

export const App = ({store}) => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />

        <Route path='/profile' element={<Profile />} />
        <Route path='/squads' element={<Squads />} />
        <Route path='/squadlead' element={<SquadLead />} />

      </Routes>
    </BrowserRouter>
    </Provider>
  </>
)
