import React, { useState,useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(false);

useEffect(() => {
  document.body.className = darkMode ? 'dark' : '';
},[darkMode])

  return (
    <div className="app">
      <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode}/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;