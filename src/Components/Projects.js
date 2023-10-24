import React from "react";
import '../CSS/Projects.css';

const Projects = () => {
  return (
    <div>
      <div class="project1">
        <div class="projectcontent1">
          <div className='logo1'>
            <span>09/2018 - 12/2019</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>Internal Project</b>
            <div className="projectDescription">
              I developed a Driver's License Application using React, Node.js, and MongoDB, which effectively streamlined the online application and management process. This innovative solution significantly improved accessibility and convenience for users by eliminating the need for in-person visits and paperwork, while also ensuring a secure and efficient license management system for authorities.</div>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>NodeJS</li>
                <li className='skills'>ExpressJS</li>
                <li className='skills'>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay1">
        </div>
      </div>
      <div class="project2">
        <div class="projectcontent2">
          <div className='logo2'>
            <span>01/2020 - 02/2021</span>
          </div>
          <div className="aboutProject">
            <b className='clientName'>Internal Project</b>
            <div className="projectDescription">
              I created an integrated Ride Share application by leveraging React, Django, Flutter, PostgreSQL, and a Rest API. This comprehensive ridesharing platform prioritizes user safety through the implementation of robust identity verification and real-time tracking features. The application is designed for optimal efficiency and offers a seamless experience for users, making a valuable contribution to the ridesharing industry.</div>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>Django</li>
                <li className='skills'>Flutter</li>
                <li className='skills'>PostgreSQL</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay2">
        </div>
      </div>
    </div>
  )
}

export default Projects;