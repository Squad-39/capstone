import React from 'react'
import './styles/style.css'
import Gitlogo from './images/ghwhitelogo.png'
import Tasha from './images/tashasquad.png'
import Clyde from './images/clydesquad.png'
export const AboutUs = () => {
  return (
    <>
      <section className="background">
      <container className={"auBox text-white"}>
        <h1 className="text p-5">About the Project</h1>
        <h4>We are a group of students learning frontend and backend web development as apart of <b>Deep Dive Coding's Fullstack Web Development</b> bootcamp. Deep Dive Coding is a program of <b>CNM Ingenuity</b> on the behalf of <b>Central New Mexico Community College (CNM)</b> in Albuquerque, New Mexico.</h4>
        <br/>
        <h4>Our team worked virtually from across New Mexico and Texas to plan, design, code, and implement Squad Finder for our Capstone project. Our App was created with the intention to connect players within the e-sports gaming community for team/squad formations.</h4>
        <container className={""}>
          <a href="https://github.com/Squad-39" target="_blank" rel="noreferrer">
          <img
            src={Gitlogo} className={"gitImage"} alt='gitLogo' />
          </a>
        </container>
        <h1 className="text p-5">Our Squad</h1>
        <div className="row text-white">
          <div className="col-xs-12 col-md-3"><img src={Clyde} className={"aboutIcon"} alt='clyde'/><h3>Clyde McNeil</h3><a href="https://www.linkedin.com/in/clydemcneil/">LinkedIn</a></div>
          <div className="col-xs-12 col-md-3"><img src={Clyde} className={"aboutIcon"} alt='clyde'/><h3>Jacob Anderson</h3><a href="https://www.linkedin.com/in/jacobanderson-abq/">LinkedIn</a></div>
          <div className="col-xs-12 col-md-3"><img src={Clyde} className={"aboutIcon"} alt='clyde'/><h3>Jonathan Large</h3><a href="https://www.linkedin.com/in/jonathan-large-370951164/">LinkedIn</a></div>
          <div className="col-xs-12 col-md-3"> <img src={Tasha} className={"aboutIcon"} alt='tasha'/> <h3>Tasha Deschenie</h3><a href="https://www.linkedin.com/in/deschenie/">LinkedIn</a></div>
        </div>
        <br/>
      </container>
      </section>

    </>
  )
}