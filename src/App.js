import PersonalInfo from './Components/PersonalInfo';
import AboutMe from './Components/AboutMe';
import WorkExperience from './Components/WorkExperience';
import Projects from './Components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
      <PersonalInfo />
      <main className='mainContent'>
        <section id='AboutMe'>
          <AboutMe />
        </section>
        <section id='WorkExperience'>
          <WorkExperience />
        </section>
        <section id='Projects'>
          <Projects />
        </section>
      </main>
    </div>
  );
}

export default App;
