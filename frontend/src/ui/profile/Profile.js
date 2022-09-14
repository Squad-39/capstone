import React from 'react'
import AddProfile from '../images/addprofile.jpeg'
import Button from 'react-bootstrap/Button'
// import { CreateSquadForm } from './CreateSquad'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProfile } from '../../store/profile'
import {useEffect} from 'react'
import { CreateSquadModal } from './CreateSquadModal'
import { Link } from 'react-router-dom'

export const Profile = () => {
  const auth = useSelector(state => state.auth ?? null)
  const dispatch = useDispatch()
  const profile = useSelector(state => state.profile ? state.profile[0] : null)
  const effects = () => {
    dispatch(fetchProfile())
  }
  useEffect(effects, [dispatch])
  console.log(auth)
  console.log(profile)
  return (
    <>
      {profile &&
        (
          <>
            <img src={AddProfile} width='100' alt='Icon' />
            <h3 className='text'>{profile.profileName}</h3>
            <h4 className='text'>{profile.profileGamertag}</h4>
            <h5 className='text'>{profile.profilePlatform}</h5>
          </>
        )}
      <CreateSquadModal/>
      <Link to={'/squadLead'}>
        <Button variant="dark">Dark</Button>
      </Link>

    </>
  )
}
