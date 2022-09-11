import React from 'react'
import './styles/style.css'

export const AboutUs = () => {
  return (
    <>
      <section className="background">
      <container classname={"auBox"}>
        <h1 className="text p-5">Our Team</h1>
        <h4>We are a group of students learning frontend and backend web development as apart of Deep Dive Coding's Fullstack Web Development bootcamp, based out of Albuquerque, New Mexico. We worked from across New Mexico and Texas to plan, design, code, and implement Squad Finder for our Capstone project. Squad Finder was created with the intention to connect players within the gaming community for team/squad formations. Take a look around and GLHF! </h4>
        <br/>
        <br/>
        <div className="row">
          <div className="col-xs-12 col-md-3">Clyde McNeil</div>
          <div className="col-xs-12 col-md-3">Jacob Anderson</div>
          <div className="col-xs-12 col-md-3">Jonathan Large</div>
          <div className="col-xs-12 col-md-3">Tasha Deschenie</div>
        </div>

      </container>
      </section>

    </>
  )
}