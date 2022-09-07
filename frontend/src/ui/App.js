import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { Squads } from './Squads'
import { SquadLead } from './SquadLead'

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path="*" element={<FourOhFour />} />
        <Route path="/squads" element={< Squads />} />
        <Route path="/squadlead" element={< SquadLead />} />
      </Routes>
    </BrowserRouter>

  </>
)