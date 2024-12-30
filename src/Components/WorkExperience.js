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
            <b className='companyName'> Software Engineer - Apex Technologies</b>
            <ul>
              <li>
              3+ years of solid expertise developing JavaScript, MERN Stack applications with Redux, Flux, Common.JS, Babel+ES6, EXT JS, and Web-Pack for Single Page Application development, as well as e-commerce applications.
              </li>
              <li>
              Delivered responsive, cross-browser compatible web applications using HTML5, CSS3, and modern JavaScript frameworks, ensuring seamless user experience across devices.
              </li>
              <li>
              Implemented caching solutions (server-side and client-side) and utilized WP Rocket and W3 Total Cache to improve page load speed and performance.              </li>
              <li>
              Extensively developed applications in Win Forms, Web Forms, MVC, MVVM and Single Page application Architectural patterns.
              </li>
              <li>
              Implemented GraphQL APIs, designing schemas, resolvers, and making API calls, significantly improving data-fetching efficiency and reducing client-side load times.
              </li>
              <li>
              Deployed cloud-native solutions on AWS, utilizing Lambda for serverless functions, S3 for scalable storage, and CloudWatch for real-time monitoring and logging.
              </li>
              <li>
              Followed agile practices, using Jira for project management, and contributed to CI/CD pipelines to support continuous and smooth deployment.              </li>
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