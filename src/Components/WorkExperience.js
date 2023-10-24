import React from 'react';
import '../CSS/WorkExperience.css';

const WorkExperience = () => {
  return (
    <div>
      <div class="block1">
        <div class="content1">
          <div className='fromTo1'>
            <span>09/2018 - 02/2021</span>
          </div>
          <div>
            <b className='companyName'>Software Engineer - Apex Technologies</b>
            <ul>
              <li>
                Collaborated closely with Technology Directors, Project Managers, Creative Leads, and
                Account leads to plan, create, and execute digital marketing projects on various digital platforms.
              </li>
              <li>
                Designed technical solution blueprints for development and provided estimates for project execution.
              </li>
              <li>
                Spearheaded the development of an advanced Point of Sale (POS) system to meet the needs of our valued customers.
              </li>
              <li>
                Took charge of designing and crafting the frontend web application for optimal user experience.
              </li>
              <li>
                Successfully delivered a high-quality product while maintaining flexibility within the agile software development framework.
              </li>
              <li>
                Collaborated closely with the product management team to transform their vision and concepts into tangible solutions.
              </li>
            </ul>
            <div>
              <ul className='skillsList'>
                <li className='skills'>ReactJS</li>
                <li className='skills'>NodeJS</li>
                <li className='skills'>MongoDB</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="overlay1">
        </div>
      </div>
    </div>
  )
}

export default WorkExperience;