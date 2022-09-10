import React from 'react'
import Logo from '../ui/images/squadfinderlogo.png'
import './styles/style.css'
import Controller from './images/controllericon.png'

export const Home = () => {
  return (
    <>
      <section className="background">

      <container>

      <h1 className="text p-5">Welcome to Squad Finder</h1>

      <img src={Logo} className='homeImage w-50' alt='squadLogo' />

      </container>


      </section>

    </>
  )
}