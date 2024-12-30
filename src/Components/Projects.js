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
            <b className='clientName'> <h5>Driver’s License Application — React.js, Node.js, MongoDB</h5> </b>
            
            <div className="projectDescription">
              <ul>
             <li>Developed a scalable web application that digitized the driver's license application process, improving accessibility and reducing processing time.</li>
             <li>Used React.js to build dynamic, reusable UI components, ensuring a seamless and user-friendly experience across devices.</li>
             <li>Implemented secure backend functionality with Node.js and MongoDB, following best practices for data management and storage.</li>
             <li>Integrated JWT-based authentication to safeguard sensitive user data and maintain robust security.</li>
             <li>Collaborated with team members in an Agile environment to ensure the timely delivery of key features.</li>
             </ul></div>
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
            <b className='clientName'> <h5>Ride Share App — React.js, Django, PostgreSQL</h5></b>
            <div className="projectDescription">
              <ul>
                <li>Built a feature-rich rideshare platform with React.js for an intuitive and visually appealing user interface.</li>
                 <li>Leveraged Django to create a robust backend, handling real-time user interactions and data management efficiently.</li> 
                  <li>Designed and integrated real-time tracking features, allowing users to monitor ride progress and driver locations seamlessly.</li>
                  <li>Developed a secure identity verification system to enhance trust and safety among users.</li>
                   <li>Used PostgreSQL for structured and reliable data storage, optimizing database queries for performance.</li>
                     <li>Worked closely with stakeholders to gather feedback and refine the application based on user needs.</li>
              </ul>
              </div>
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