import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {Login} from "./Login";
import {SquadProfile} from "./SquadProfile";

export const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Home />} />
        <Route path="*" element={<FourOhFour />} />
        <Route path='/login' element={<Login />} />
        <Route path='/squadProfile' element={<SquadProfile />} />
      </Routes>
    </BrowserRouter>

  </>
)