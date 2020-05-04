import React from 'react';
import './App.css';
import Home from './components/Home/home.components.jsx';
import SideBar from './components/sidebar/sidebar.components';
import About from './components/about/about.components';
import Education from './components/education/education.components';
import Experience from './components/experience/experience.components';
import Projects from './components/projects/projects.components';

function App() {
  return (
    <div id="colorlib-page">
      <div id='container-wrap'>
       <SideBar />
       <div id="colorlib-main">
          <Home />
          <About />
          <Education />
          <Experience />
          <Projects />
       </div>
      </div>
    </div>
  );
}

export default App;
