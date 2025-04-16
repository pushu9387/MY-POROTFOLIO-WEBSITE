import React from 'react';

function Navbar({toggleDarkMode,darkMode}) {
  return (
    <nav style={{ display: 'flex', alignItems: 'center' }}>
      <h2>My Portfolio</h2>
      <button className="toggle-btn" onClick={toggleDarkMode}>
       {darkMode ? 'Light Mode':'Dark Mode'}
      </button>
    </nav>
  );
}
<li><a href="/resume/index.html" target="_blank" rel="noopener noreferrer">Resume(HTML)</a></li>
export default Navbar;