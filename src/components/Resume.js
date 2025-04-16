import React from 'react';

function Resume() {
  return(
    <div className="section">
      <h2>My Resume</h2>
      <p>You can download my resume below.</p>
      <a href="/resume.pdf" download className="resume-button">Download My Resume</a>
    </div>
  );
}

export default Resume;
