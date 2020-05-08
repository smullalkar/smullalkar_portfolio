import React from 'react';
import './App.css';
import Home from './Components/Home'
import Profciencies from './Components/Profciencies';
import Projects from './Components/Projects';

function App() {
  return (
    <div className="App">
      <Home/>
      <Profciencies/>
      <Projects />
    </div>
  );
}

export default App;
