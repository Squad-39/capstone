import React from 'react'
import Logo from '../ui/Images/squadfinderlogo.png'
import './styles/style.css'

export const Home = () => {
  return (
    <>
      <container className={""}>
              <img src={Logo} className={"homeImage"} alt='squadLogo' />
        </container>
    </>
  )
}