import React from 'react';
import './App.css';
import Home from './Components/Home'
import Profciencies from './Components/Profciencies';
import Projects from './Components/Projects';
import Work from './Components/Work';

function App() {
  return (
    <div className="App" style={{border: '2px #707070 solid'}}>
      <Home/>
      <Profciencies/>
      <Projects />
      <Work/>
    </div>
  );
}

export default App;
