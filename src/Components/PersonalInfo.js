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
      <p style={{fontSize:"20px"}}> Contact Me: </p>
      <a href="https://www.linkedin.com/in/priyanka-bhosle-761941b9/"> <img src="https://img.icons8.com/fluency/48/linkedin.png" alt="LinkedIn Profile"/> </a>
      <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=priyankabhosle1994@gmail.com"><img src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new"></img></a>
    </header>
  )
}

export default PersonalInfo;