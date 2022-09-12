import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'
import { Home } from './Home'
import React from 'react'
import { SignUp } from './Sign-Up'
import { Profile } from './profile/Profile'
import { Squads } from './squads/Squads'
import { SquadLead } from './SquadLead'
import { Navigation } from './Navigation'
import { SignIn } from './sign-in/Sign-In'
import { Provider } from 'react-redux'
import './styles/style.css'
import { SquadDetailPage } from './squadDetail/SquadDetailPage'



export const App = ({store}) => (



  <>
    <Provider store={store}>
    <BrowserRouter>
      <Navigation />

      <section className="background">
      <Routes>

        <Route exact path="/squad-details/:squadId" element={<SquadDetailPage />} squadId=":squadId"/>
        <Route path='/' element={<Home />} />
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
