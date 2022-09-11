import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { SignUp } from './sign-up/Sign-Up'
import { Profile } from './profile/Profile'
import { Squads } from './squads/Squads'
import { SquadLead } from './SquadLead'
import { Navigation } from './Navigation'
import { SignIn } from './sign-in/Sign-In'
import { Provider } from 'react-redux'
import './styles/style.css'

export const App = ({store}) => (
  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />
      <section className="background">
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='*' element={<FourOhFour />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/squads' element={<Squads />} />
        <Route path='/squadlead' element={<SquadLead />} />

      </Routes>
      </section>
    </BrowserRouter>
    </Provider>
  </>
)
