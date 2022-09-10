import React from 'react'
import Logo from '../ui/images/squadfinderlogo.png'
import './styles/style.css'

export const Home = () => {
  return (
    <>
      <container className={""}>
              <h1 className={"text text-center"}>Welcome to Squad Finder</h1>
              <img src={Logo} className={"homeImage"} alt='squadLogo' />
        </container>
    </>
  )
}