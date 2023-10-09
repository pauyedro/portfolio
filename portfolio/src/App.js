import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavBar';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Contact from './Components/Contact';
import KnowMore from './Components/KnowMore';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <NavBar />
        <Routes>
          <Route exact path='/' component={LandingPage} />
          <Route path='/about' component={About} />
          <Route path='/knowmore' component={KnowMore} />
          <Route path='/projects' component={Projects} />
          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
