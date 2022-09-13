import React from 'react'
import './styles/style.css'
import Gitlogo from './images/ghwhitelogo.png'

export const AboutUs = () => {
  return (
    <>
      <section className="background">
      <container classname={"auBox"}>
        <h1 className="text p-5">About the Project</h1>
        <h4>We are a group of students learning frontend and backend web development as apart of <b>Deep Dive Coding's Fullstack Web Development</b> bootcamp. Deep Dive Coding is a program of <b>CNM Ingenuity</b> on the behalf of <b>Central New Mexico Community College (CNM)</b> in Albuquerque, New Mexico.</h4>
        <h4>Our team worked virtually from across New Mexico and Texas to plan, design, code, and implement Squad Finder for our Capstone project. Our App was created with the intention to connect players within the e-sports gaming community for team/squad formations.</h4>
        <container className={""}>
          <img src={Gitlogo} className={"gitImage"} alt='gitLogo' />
        </container>
        <h1 className="text p-5">Our Squad</h1>
        <div className="row">
          <div className="col-xs-12 col-md-3"><h3>Clyde McNeil</h3><p>LinkedIn</p></div>
          <div className="col-xs-12 col-md-3"><h3>Jacob Anderson</h3><p>LinkedIn</p></div>
          <div className="col-xs-12 col-md-3"><h3>Jonathan Large</h3><p>LinkedIn</p></div>
          <div className="col-xs-12 col-md-3"><h3>Tasha Deschenie</h3><p>LinkedIn</p></div>
        </div>
        <br/>
      </container>
      </section>

    </>
  )
}