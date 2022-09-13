import React from 'react'
import './styles/style.css'
import Gitlogo from './images/ghwhitelogo.png'

export const AboutUs = () => {
  return (
    <>
      <section className="background">
      <container classname={"auBox"}>
        <h1 className="text p-5">About the Project</h1>
        <h4>We are a group of students learning frontend and backend web development as apart of Deep Dive Coding's Fullstack Web Development bootcamp, based out of Albuquerque, New Mexico. We worked from across New Mexico and Texas to plan, design, code, and implement Squad Finder for our Capstone project. </h4>
        <h4>Squad Finder was created with the intention to connect players within the e-sports gaming community for team/squad formations.</h4>
        <container className={""}>
          <img src={Gitlogo} className={"gitImage"} alt='gitLogo' />
        </container>
        <h1 className="text p-5">Our Team</h1>
        <div className="row">
          <div className="col-xs-12 col-md-3">Clyde McNeil</div>
          <div className="col-xs-12 col-md-3">Jacob Anderson</div>
          <div className="col-xs-12 col-md-3">Jonathan Large</div>
          <div className="col-xs-12 col-md-3">Tasha Deschenie</div>
        </div>
        <br/>
      </container>
      </section>

    </>
  )
}