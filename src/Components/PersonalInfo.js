import React from "react";
import '../CSS/PersonalInfo.css'

const PersonalInfo = () => {
  return (
    <header>
      <div className="CandidateName">Priyanka Bhosle</div>
      <h5 className="Occupation">Earned a Web Development degree from Conestoga College 
      and possess 3 years of hands-on industry experience. </h5>
      <span className="FuturePlans">Eager to Learn and Create Innovative Solutions</span>
      <nav className="navbar">
        <ul>
          <li className="navbar-content">
            <a href="#AboutMe">ABOUT</a>
          </li>
          <li className="navbar-content">
            <a href="#WorkExperience">EXPERIENCE</a>
          </li>
          <li className="navbar-content">
            <a href="#Projects">PROJECTS</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default PersonalInfo;