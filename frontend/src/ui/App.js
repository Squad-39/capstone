import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { SignUp } from './Sign-Up'

import { Profile } from './Profile'
import { Squads } from './Squads'
import { SquadLead } from './SquadLead'
import { Navigation } from './Navigation'

export const App = () => (
  <>
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path="*" element={<FourOhFour />} />

        <Route path="/sign-up" element={<SignUp />} />

        <Route path="/profile" element={<Profile />} />
        <Route path="/squads" element={< Squads />} />
        <Route path="/squadlead" element={< SquadLead />} />

      </Routes>
    </BrowserRouter>
  </>
)